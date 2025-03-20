import { useState } from "react";
import { TextField, Button } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

import PropTypes from "prop-types";
function ProfileInfoCard({ title, description, info, social, action, shadow }) {
  const [editableInfo, setEditableInfo] = useState(info);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableInfo({
      ...editableInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    // 여기에서 수정된 정보를 저장하는 로직을 구현
    console.log("Saved Info:", editableInfo);
  };

  const renderItems = Object.keys(editableInfo).map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </MDTypography>
      <TextField
        variant="outlined"
        fullWidth
        value={editableInfo[label]}
        name={label}
        onChange={handleInputChange}
        sx={{
          mt: -0.5,
          height: "30px", // 세로 크기 조정
          "& .MuiInputBase-root": {
            height: "30px", // 내부의 입력 영역의 높이 조정
          },
        }}
      />
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
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
        <MDTypography component="a" href={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox mb={2} lineHeight={1}>
          <MDTypography variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox opacity={0.3}>
          <Divider />
        </MDBox>
        <MDBox>
          {renderItems}
          <MDBox display="flex" py={1} pr={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </MDTypography>
            {renderSocial}
          </MDBox>
          <Button variant="contained" color="white" onClick={handleSave} sx={{ mt: 2 }}>
            Save
          </Button>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// PropTypes 설정
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

// defaultProps 설정
ProfileInfoCard.defaultProps = {
  shadow: true,
};

export default ProfileInfoCard;
