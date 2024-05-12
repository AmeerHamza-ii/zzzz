import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const chartSetting = {
  width: 450,
  height: 350,
};
const dataset = [
    { month: 'Jan', revenue1: 59, revenue2: 40 },
    { month: 'Feb', revenue1: 50, revenue2: 45 },
    { month: 'Mar', revenue1: 47, revenue2: 55 },
    { month: 'Apr', revenue1: 54, revenue2: 60 },
    { month: 'May', revenue1: 57, revenue2: 50 },
    { month: 'Jun', revenue1: 60, revenue2: 65 },
    { month: 'Jul', revenue1: 59, revenue2: 70 },
    { month: 'Aug', revenue1: 65, revenue2: 75 },
    { month: 'Sep', revenue1: 51, revenue2: 55 },
    { month: 'Oct', revenue1: 60, revenue2: 65 },
    { month: 'Nov', revenue1: 67, revenue2: 70 },
    { month: 'Dec', revenue1: 61, revenue2: 80 },
  ];
  

const valueFormatter = (value) => `$${value}`;

export default function RevenueLineGraph() {
  return (
    <LineChart
      dataset={dataset}
      yAxis={[{ scaleType: 'linear', dataKey: 'revenue', label: '...' }]}
      xAxis={[
        { scaleType: 'band', dataKey: 'month', label: '..' },
      ]}
      series={[
        { dataKey: 'revenue1',  valueFormatter, color: 'rgba(75,192,192,1)' },
        { dataKey: 'revenue2',  valueFormatter, color: 'rgba(192,75,75,1)' },
      ]}
      layout="circular"
      {...chartSetting}
    />
  );
}
