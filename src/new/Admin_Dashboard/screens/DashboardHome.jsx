import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import styled from "@emotion/styled";

const DashboardContainer = styled(Box)`
  background-color: rgb(255, 246, 179);
  min-height: 100vh;
  padding: 20px;
  font-family: "DM Serif Text", sans-serif;
  height: 1000px;
`;

const ServiceCard = styled(Card)`
  text-align: center;
  padding: 0px;
  background-color: rgb(219, 214, 211);
  border: 2px solid green; /* Green border */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1 1 30%; /* Ensures the cards take up equal space */
  min-width: 250px; /* Prevents the cards from being too narrow */
  padding-top: 0px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.8);
  }
`;

const TitleTypography = styled(Typography)`
  font-family: "DM Serif Text", serif;
  color: black;
  font-weight: 600;
`;

const SubtitleTypography = styled(Typography)`
  font-family: "DM Serif Text", sans-serif;
  margin-bottom: 20px;
  font-size: 1.4rem;
  text-decoration: underline;
`;

const CardTitleTypography = styled(Typography)`
  font-family: "DM Serif Text", serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: green;
`;

const CardBodyTypography = styled(Typography)`
  font-family: "DM Serif Text", sans-serif;
  font-size: 1.2rem;
  text-decoration: underline;
`;

const StyledButton = styled(Button)`
  font-family: "DM Serif Text", sans-serif;
  font-size: 0.9rem;
  text-decoration: underline;
`;

export default function DashboardHome() {
  return (
    <DashboardContainer>
      <TitleTypography variant="h4" gutterBottom>
        Dashboard
      </TitleTypography>

      <SubtitleTypography variant="subtitle1" gutterBottom>
        Explore the range of services we offer to streamline your trucking and
        dispatch operations.
      </SubtitleTypography>

      <Grid
        container
        spacing={4}
        marginTop={3}
        justifyContent="space-between"
        alignItems="stretch"
      >
        {/* Service 1: Freight Management */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <LocalShippingIcon color="primary" style={{ fontSize: 60 }} />
              <CardTitleTypography variant="h6" gutterBottom>
                Freight Management
              </CardTitleTypography>
              <CardBodyTypography variant="body2">
                Efficiently manage your freight operations with our
                state-of-the-art solutions.
              </CardBodyTypography>
            </CardContent>
            <CardActions>
              <StyledButton size="small" color="primary">
                Learn More
              </StyledButton>
            </CardActions>
          </ServiceCard>
        </Grid>

        {/* Service 2: Fleet Tracking */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <LocationOnIcon color="secondary" style={{ fontSize: 60 }} />
              <CardTitleTypography variant="h6" gutterBottom>
                Fleet Tracking
              </CardTitleTypography>
              <CardBodyTypography variant="body2">
                Real-time tracking of your fleet to ensure timely deliveries and
                safety.
              </CardBodyTypography>
            </CardContent>
            <CardActions>
              <StyledButton size="small" color="primary">
                Learn More
              </StyledButton>
            </CardActions>
          </ServiceCard>
        </Grid>

        {/* Service 3: Dispatch Management */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <AssignmentIcon color="success" style={{ fontSize: 60 }} />
              <CardTitleTypography variant="h6" gutterBottom>
                Dispatch Management
              </CardTitleTypography>
              <CardBodyTypography variant="body2">
                Seamless dispatch operations to optimize logistics and reduce
                downtime.
              </CardBodyTypography>
            </CardContent>
            <CardActions>
              <StyledButton size="small" color="primary">
                Learn More
              </StyledButton>
            </CardActions>
          </ServiceCard>
        </Grid>

        {/* Service 4: Driver Management */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <PersonIcon color="error" style={{ fontSize: 60 }} />
              <CardTitleTypography variant="h6" gutterBottom>
                Driver Management
              </CardTitleTypography>
              <CardBodyTypography variant="body2">
                Comprehensive tools to manage driver assignments, schedules, and
                performance.
              </CardBodyTypography>
            </CardContent>
            <CardActions>
              <StyledButton size="small" color="primary">
                Learn More
              </StyledButton>
            </CardActions>
          </ServiceCard>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}
