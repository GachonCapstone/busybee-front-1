import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

function ProfileEdit({ userId, initialData, onSaved, onClose }) {

  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    location: "",
    id: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nickname:     initialData.nickname    || "",
        email:        initialData.email       || "",
        location:     initialData.location    || "",
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const { nickname, email, location} = formData; // PATCH 대상
      const res = await axios.patch(`/api/v1/users/${userId}`, {
        nickname,
        email,
        location,
      });
      onSaved?.(res.data);
      onClose();
    } catch (err) {
      console.error("save error:", err);
      alert("프로필 수정에 실패했습니다.");
    }
  };


  return (
    <div>
      <h3>Profile Edit</h3>

      {/* 사업 정보 수정 */}
      <div>
        <Tooltip title="Edit Business Info" placement="top">
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <TextField
          label="Business Info"
          name="businessInfo"
          value={formData.businessInfo}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          fullWidth
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleSaveChanges} sx={{ marginTop: 2 }}>
        Save Changes
      </Button>
    </div>
  );
}

export default ProfileEdit;
