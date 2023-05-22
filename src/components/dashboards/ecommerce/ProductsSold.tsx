import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import {  Typography } from '@mui/material';
import { Props } from 'react-apexcharts';

import DashboardCard from '../../shared/DashboardCard';

const ProductsSold = () => {
  // chart color
  const theme = useTheme();
  const success = theme.palette.success.main;
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: Props = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 85,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [successlight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      color: success,
      data: [30, 25, 35, 20, 30, 40],
    },
  ];

  return (
    <DashboardCard
      footer={
        <>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="area"
            height="85px"
          />
        </>
      }
    >
      <>
        <Typography variant="subtitle2" color="textSecondary">
          Products
        </Typography>
        <Typography variant="h4">78,298</Typography>
        
      </>
    </DashboardCard>
  );
};

export default ProductsSold;
