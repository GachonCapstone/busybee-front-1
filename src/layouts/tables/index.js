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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

// 백앤드드
import { useEffect, useState } from "react";

function Tables() {
  // 상태(state) 선언
  const [tableData, setTableData] = useState(null);

  // API 요청 함수
  // 현재는 user 테이블의 id를 임의로 1로 지정한 상태
  // user id가 1인 벌통의 정보 불러옴
  const fetchData = () => {
    fetch("http://localhost:8080/users/1/tables")
      .then((response) => response.json())
      .then((data) => {
        console.log("API에서 받은 데이터:", data);
        setTableData(data); // 받은 데이터를 상태에 저장
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData(); // 초기 데이터 로딩
  }, []);

  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
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
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
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
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      {/* 받은 데이터를 화면에 출력하는 부분 
      백엔드에 로컬 db 연결 후 관련 데이터 추가하고 실행하면 정상적으로 잘 뜸 */}
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
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
                  받은 데이터
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/* API 데이터가 있을 때만 출력 */}
                {tableData ? (
                  <DataTable
                    table={{
                      columns: [
                        {
                          Header: "벌통이름",
                          accessor: "hive_name",
                          align: "left",
                          Cell: ({ value }) => `${value} `, // 온도 뒤에 "도" 추가
                        },
                        {
                          Header: "온도",
                          accessor: "recent_temperature",
                          align: "center",
                          Cell: ({ value }) => `${value}도`, // 온도 뒤에 "도" 추가
                        },
                        {
                          Header: "무게",
                          accessor: "recent_weight",
                          align: "center",
                          Cell: ({ value }) => `${value}kg`, // 무게 뒤에 "kg" 추가
                        },
                        {
                          Header: "습도",
                          accessor: "recent_humidity",
                          align: "center",
                          Cell: ({ value }) => `${value}%`, // 습도 뒤에 "%" 추가
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
                      ],
                      rows: tableData, // API에서 받은 데이터를 rows로 사용
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

      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
