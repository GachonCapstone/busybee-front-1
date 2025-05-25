// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import ProfileEdit from "./components/ProfileEdit";
import axios from "axios";

function Overview() {
  const loginId = localStorage.getItem("loginId");   // userId로 사용
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!loginId) return;
    axios
      .get(`/api/v1/users/${loginId}`)
      .then((res) => setProfile(res.data))
      .catch(console.error);
  }, [loginId]);

  if (!profile) return null; // 로딩 처리

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={6}>
              <PlatformSettings />
            </Grid>

            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <ProfileInfoCard
                title="profile information"
                description="경기도 양평에서 양봉 사업 중"
                userId={loginId}
                info={{
                  nickname: profile.nickname,
                  email: profile.email,
                  location: profile.location,
                }}
                social={[
                  { link: "https://www.facebook.com/CreativeTim/", icon: <FacebookIcon />, color: "facebook" },
                  { link: "https://twitter.com/creativetim", icon: <TwitterIcon />, color: "twitter" },
                  { link: "https://www.instagram.com/creativetimofficial/", icon: <InstagramIcon />, color: "instagram" },
                ]}
                onSaved={setProfile}    // 자식 → 부모 상태 반영
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;