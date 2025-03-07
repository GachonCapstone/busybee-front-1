/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const HiveName = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "벌통이름", accessor: "hive_name", width: "20%", align: "left" },
      { Header: "온도", accessor: "temperature", align: "center" },
      { Header: "무게", accessor: "weight", align: "center" },
      { Header: "습도", accessor: "humidity", align: "center" },
      { Header: "말벌감지횟수", accessor: "hornet_count", align: "center" },
      { Header: "응애감지횟수", accessor: "mite_count", align: "center" },
      { Header: "종합 상태", accessor: "status", align: "center" },
    ],

    rows: [
      {
        hive_name: <HiveName name="벌통1" />,
        temperature: "10도",
        weight: "5kg",
        humidity: "12%",
        hornet_count: "5",
        mite_count: "0",
        status: <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통2" />,
        temperature: "12도",
        weight: "4.8kg",
        humidity: "15%",
        hornet_count: "2",
        mite_count: "1",
        status: <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통3" />,
        temperature: "9도",
        weight: "5.2kg",
        humidity: "10%",
        hornet_count: "8",
        mite_count: "2",
        status: <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통4" />,
        temperature: "14도",
        weight: "5kg",
        humidity: "18%",
        hornet_count: "1",
        mite_count: "0",
        status: <MDBadge badgeContent="안전" color="success" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통5" />,
        temperature: "11도",
        weight: "4.9kg",
        humidity: "13%",
        hornet_count: "3",
        mite_count: "1",
        status: <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통6" />,
        temperature: "8도",
        weight: "5.1kg",
        humidity: "9%",
        hornet_count: "6",
        mite_count: "2",
        status: <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통7" />,
        temperature: "13도",
        weight: "4.7kg",
        humidity: "16%",
        hornet_count: "2",
        mite_count: "0",
        status: <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통8" />,
        temperature: "15도",
        weight: "5.3kg",
        humidity: "19%",
        hornet_count: "0",
        mite_count: "0",
        status: <MDBadge badgeContent="안전" color="success" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통9" />,
        temperature: "10도",
        weight: "5kg",
        humidity: "12%",
        hornet_count: "4",
        mite_count: "1",
        status: <MDBadge badgeContent="보통" color="warning" variant="gradient" size="sm" />,
      },
      {
        hive_name: <HiveName name="벌통10" />,
        temperature: "9도",
        weight: "4.8kg",
        humidity: "11%",
        hornet_count: "7",
        mite_count: "3",
        status: <MDBadge badgeContent="위험" color="error" variant="gradient" size="sm" />,
      },
    ],
  };
}
