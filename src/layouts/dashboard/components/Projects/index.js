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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Images
import beehive from "assets/images/logos/beehive.png";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

// 위험도 색상 박스
import MDBadge from "components/MDBadge";

function Projects() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          벌통 관리
        </MDTypography>
        <MDButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new hive
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDBox
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox display="flex" alignItems="center">
                <MDBox component="img" src={beehive} alt="master card" width="10%" mr={2} />
                <MDTypography variant="h6" fontWeight="medium">
                  벌통 1
                </MDTypography>
                <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                  <Tooltip title="Edit Card" placement="top">
                    <Icon sx={{ cursor: "pointer" }} fontSize="small">
                      edit
                    </Icon>
                  </Tooltip>
                </MDBox>
              </MDBox>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                mt={2} // 위쪽 여백 추가 (1 = 4px 기준, 2 = 8px)
              >
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    말벌
                  </MDTypography>
                  <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    응애
                  </MDTypography>
                  <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    종합 상태
                  </MDTypography>
                  <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox display="flex" alignItems="center">
                <MDBox component="img" src={beehive} alt="master card" width="10%" mr={2} />
                <MDTypography variant="h6" fontWeight="medium">
                  벌통 2
                </MDTypography>
                <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                  <Tooltip title="Edit Card" placement="top">
                    <Icon sx={{ cursor: "pointer" }} fontSize="small">
                      edit
                    </Icon>
                  </Tooltip>
                </MDBox>
              </MDBox>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                mt={2} // 위쪽 여백 추가 (1 = 4px 기준, 2 = 8px)
              >
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    말벌
                  </MDTypography>
                  <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    응애
                  </MDTypography>
                  <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    종합 상태
                  </MDTypography>
                  <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox display="flex" alignItems="center">
                <MDBox component="img" src={beehive} alt="master card" width="10%" mr={2} />
                <MDTypography variant="h6" fontWeight="medium">
                  벌통 3
                </MDTypography>
                <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                  <Tooltip title="Edit Card" placement="top">
                    <Icon sx={{ cursor: "pointer" }} fontSize="small">
                      edit
                    </Icon>
                  </Tooltip>
                </MDBox>
              </MDBox>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                mt={2} // 위쪽 여백 추가 (1 = 4px 기준, 2 = 8px)
              >
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    말벌
                  </MDTypography>
                  <MDBadge badgeContent="안전" color="success" variant="gradient" size="sm" />
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    응애
                  </MDTypography>
                  <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />
                </MDBox>
                <MDBox display="flex" alignItems="center">
                  <MDTypography variant="h6" fontWeight="medium">
                    종합 상태
                  </MDTypography>
                  <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />
                </MDBox>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Projects;
