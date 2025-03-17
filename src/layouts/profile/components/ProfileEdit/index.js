import React, { useState } from "react";
import { TextField, Button, Grid, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function ProfileEdit() {
  console.log("ProfileEdit is rendered");
  // 상태 관리 (사용자가 수정하는 데이터)
  const [formData, setFormData] = useState({
    fullName: "Alec M. Thompson",
    mobile: "(44) 123 1234 123",
    email: "alecthompson@mail.com",
    location: "USA",
    id: "Richard Davis",
    password: "******",
    businessInfo: "미국에서 양봉 사업 중",
  });

  // 수정된 데이터를 처리할 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 변경사항 저장 함수
  const handleSaveChanges = () => {
    console.log("Updated Data:", formData);
    // 서버나 DB에 데이터를 업데이트하는 로직을 추가할 수 있습니다.
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
          fullWidth
          label="Business Info"
          name="businessInfo"
          value={formData.businessInfo}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
        />
      </div>

      {/* 다른 프로필 정보 수정 */}
      <TextField
        fullWidth
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="ID"
        name="id"
        value={formData.id}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        variant="outlined"
        margin="normal"
      />

      {/* 저장 버튼 */}
      <Button variant="contained" color="primary" onClick={handleSaveChanges} sx={{ marginTop: 2 }}>
        Save Changes
      </Button>
    </div>
  );
}

export default ProfileEdit;
