import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import styled from '@emotion/styled';

const DashboardContainer = styled(Box)`
  background-color: #f4f6f8;
  min-height: 100vh;
  padding: 20px;
`;

const ServiceCard = styled(Card)`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function DashboardHome() {
  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Explore the range of services we offer to streamline your trucking and dispatch operations.
      </Typography>

      <Grid container spacing={4} marginTop={3}>
        {/* Service 1: Freight Management */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <LocalShippingIcon color="primary" style={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Freight Management
              </Typography>
              <Typography variant="body2">
                Efficiently manage your freight operations with our state-of-the-art solutions.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </ServiceCard>
        </Grid>

        {/* Service 2: Fleet Tracking */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <LocationOnIcon color="secondary" style={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Fleet Tracking
              </Typography>
              <Typography variant="body2">
                Real-time tracking of your fleet to ensure timely deliveries and safety.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </ServiceCard>
        </Grid>

        {/* Service 3: Dispatch Management */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <AssignmentIcon color="success" style={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Dispatch Management
              </Typography>
              <Typography variant="body2">
                Seamless dispatch operations to optimize logistics and reduce downtime.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </ServiceCard>
        </Grid>

        {/* Service 4: Driver Management */}
        <Grid item xs={12} md={6} lg={4}>
          <ServiceCard>
            <CardContent>
              <PersonIcon color="error" style={{ fontSize: 60 }} />
              <Typography variant="h6" gutterBottom>
                Driver Management
              </Typography>
              <Typography variant="body2">
                Comprehensive tools to manage driver assignments, schedules, and performance.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </ServiceCard>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}
