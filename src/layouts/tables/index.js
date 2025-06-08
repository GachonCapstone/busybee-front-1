// Tables.jsx
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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import MDBadge from "components/MDBadge";

// React hooks
import { useEffect, useState } from "react";

export default function Tables() {
  // 테이블 데이터 상태
  const [tableData, setTableData] = useState(null);
  const loginId = localStorage.getItem("loginId");

  // 모달 상태
  const [openModal, setOpenModal] = useState(false);
  const [streamUrl, setStreamUrl] = useState("");

  // 데이터 불러오기
  const fetchData = () => {
    fetch(`http://localhost:8080/users/${loginId}/tables`)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        console.log("tableData: " + data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchData();
  }, [loginId]);

  // 모달 열기
  const handleOpenModal = (url) => {
    setStreamUrl(url);
    setOpenModal(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setOpenModal(false);
    setStreamUrl("");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              {/* 헤더 */}
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  벌통 현황
                </MDTypography>
              </MDBox>

              {/* 테이블 */}
              <MDBox pt={3}>
                {tableData ? (
                  <DataTable
                    table={{
                      columns: [
                        {
                          Header: "벌통이름",
                          accessor: "hive_name",
                          align: "left",
                          Cell: ({ value }) => `${value}`,
                        },
                        {
                          Header: "온도",
                          accessor: "recent_temperature",
                          align: "center",
                          Cell: ({ value }) => `${value}도`,
                        },
                        {
                          Header: "무게",
                          accessor: "recent_weight",
                          align: "center",
                          Cell: ({ value }) => `${value}kg`,
                        },
                        {
                          Header: "습도",
                          accessor: "recent_humidity",
                          align: "center",
                          Cell: ({ value }) => `${value}%`,
                        },
                        {
                          Header: "말벌감지횟수",
                          accessor: "today_hornet_count",
                          align: "center",
                        },
                        {
                          Header: "응애감지횟수",
                          accessor: "today_parasite_count",
                          align: "center",
                        },
                        {
                          Header: "활동량",
                          accessor: "recent_activity_level",
                          align: "center",
                        },
                        {
                          Header: "상태",
                          accessor: "recent_status",
                          align: "center",
                          Cell: ({ value }) => {
                            let badgeProps = {
                              badgeContent: "",
                              color: "info",
                              variant: "gradient",
                              size: "sm",
                            };
                            switch (value) {
                              case "GOOD":
                                badgeProps.badgeContent = "좋음";
                                badgeProps.color = "success";
                                break;
                              case "NORMAL":
                                badgeProps.badgeContent = "보통";
                                badgeProps.color = "warning";
                                break;
                              case "BAD":
                                badgeProps.badgeContent = "위험";
                                badgeProps.color = "error";
                                break;
                              default:
                                badgeProps.badgeContent = value;
                                badgeProps.color = "dark";
                            }
                            return <MDBadge {...badgeProps} />;
                          },
                        },
                        {
                          Header: "열기",
                          accessor: "streaming_url",
                          align: "center",
                          Cell: ({ value }) => (
                            <Button
                              variant="contained"
                              size="small"
                              onClick={() => {
                                console.log("button value:", `${value}`);
                                handleOpenModal(`${value}`);
                              }}
                            >
                              열기
                            </Button>
                          ),
                        }
                      ],
                      rows: tableData,
                    }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                ) : (
                  <MDTypography variant="body2" color="textSecondary">
                    데이터를 불러오는 중입니다...
                  </MDTypography>
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      {/* 스트리밍 모달 */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Live Stream
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{ p: 0, height: "0", paddingTop: "56.25%", position: "relative" }}
        >
          {/* 16:9 비율로 iframe 혹은 img 태그 삽입 */}
          <img
            src={streamUrl}
            alt="Live stream"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </DashboardLayout>
  );
}