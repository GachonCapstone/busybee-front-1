import { useState } from "react";
import { TextField, Button, Tooltip, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import axios from "axios";

function ProfileInfoCard({ title, description, userId, info, social, onSaved, shadow }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(info);

  // 보기 ↔ 편집 토글
  const toggleEdit = () => setEditing((v) => !v);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.patch(`/api/v1/users/${userId}`, form);
      onSaved(res.data);         // 부모(Overview)의 profile 갱신
      setEditing(false);         // 보기 모드로 전환
    } catch (err) {
      console.error(err);
      alert("프로필 저장 실패");
    }
  };

  // key-value 렌더
  const renderItems = Object.keys(form).map((label) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </MDTypography>

      {editing ? (
        <TextField
          variant="outlined"
          size="small"
          value={form[label]}
          name={label}
          onChange={handleChange}
          sx={{ mt: -0.5 }}
        />
      ) : (
        <MDTypography variant="button" fontWeight="regular">
          {form[label]}
        </MDTypography>
      )}
    </MDBox>
  ));

  const renderSocial = social.map(({ link, icon, color }) => (
    <MDBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize="large"
      color={color}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          {title}
        </MDTypography>

        <Tooltip title={editing ? "Cancel" : "Edit"} placement="top">
          <Icon sx={{ cursor: "pointer" }} onClick={toggleEdit}>
            {editing ? "close" : "edit"}
          </Icon>
        </Tooltip>
      </MDBox>

      <MDBox p={2}>
        <MDTypography variant="button" color="text" fontWeight="light" mb={2}>
          {description}
        </MDTypography>

        {renderItems}

        <MDBox display="flex" py={1} pr={2}>
          <MDTypography variant="button" fontWeight="bold">
            social:&nbsp;
          </MDTypography>
          {renderSocial}
        </MDBox>

        {editing && (
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
            Save
          </Button>
        )}
      </MDBox>
    </Card>
  );
}

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,          // loginId 그대로 전달
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSaved: PropTypes.func.isRequired,           // 저장 후 부모 상태 갱신용
  shadow: PropTypes.bool,
};

ProfileInfoCard.defaultProps = { shadow: true };

export default ProfileInfoCard;
