import { useState } from "react";
import { Card, Grid } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function BugVideoCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <MDBox mt={6} mb={3}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={12}>
          <Card>
            <MDBox p={2} display="flex" justifyContent="space-between" alignItems="center">
              <MDTypography variant="h5">응애 감지 현황</MDTypography>
              <MDButton variant="contained" color="info" onClick={toggleCard}>
                {isExpanded ? "접기" : "보기"}
              </MDButton>
            </MDBox>

            {/* 카드가 확장되었을 때만 영상 표시 */}
            {isExpanded && (
              <MDBox p={2}>
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="응애 감지 현황"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </MDBox>
            )}
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default BugVideoCard;
