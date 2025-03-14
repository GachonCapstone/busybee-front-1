/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsBarChartData from "layouts/hive/data/reportsBarChartData";
import reportsLineChartData from "layouts/hive/data/reportsLineChartData";

// Billing page components
import HornetVideo from "layouts/hive/components/hornet_video";
import BugVideo from "layouts/hive/components/bug_video";

function hive() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  const { sales, tasks } = reportsLineChartData;
  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsBarChart
                color="info"
                title="꿀벌 활동성 수치"
                description="Last Campaign Performance"
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="warning"
                title="응애 감지 현황"
                description={
                  <>
                    (<strong>+15%</strong>) 전일 대비 증가.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="dark"
                title="말벌 감지 현황"
                description="전일 대비 2% 감소"
                date="just updated"
                chart={tasks}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsBarChart
                color="info"
                title="주간 내부 습도"
                description="Last Campaign Performance"
                date="campaign sent 2 days ago"
                chart={reportsBarChartData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="warning"
                title="주간 내부 온도"
                description={
                  <>
                    (<strong>+15%</strong>) 전일 대비 증가.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="dark"
                title="주간 외부 온도"
                description="전일 대비 2% 감소"
                date="just updated"
                chart={tasks}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Grid item xs={12}>
        <HornetVideo />
      </Grid>
      <Grid item xs={12}>
        <BugVideo />
      </Grid>
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={2} lineHeight={0}>
                <MDTypography variant="h5">날씨 정보</MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  현재 지역의 실시간 날씨 정보입니다.
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MDTypography variant="h6">☀ 맑음</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MDTypography variant="h6">🌡 5°C</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MDTypography variant="h6">🌧 강수확률: 0%</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MDTypography variant="h6">💧 습도: 65%</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MDTypography variant="h6">🔥 최고기온: 3°C</MDTypography>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <MDTypography variant="h6">❄ 최저기온: -3°C</MDTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <MDTypography variant="h6">📍 거주지역: 성남</MDTypography>
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default hive;
