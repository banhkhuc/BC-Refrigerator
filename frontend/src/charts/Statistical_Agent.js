import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'Faker';
import { Container, Select } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getDistributeData } from 'apis/statisticApi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export default function ChartTemplate() {
  const [distributeData, setDistributeData] = useState();

  useEffect(() => {
    getDistributeData(setDistributeData);
  }, []);
  if(!distributeData) return;

  // console.log(distributeData);

  const option_month = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê sản phẩm trên các đại lý phân phối toàn quốc năm 2022',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
  
  const labels_m = distributeData.time;

  const data_month = {
    labels:labels_m,
    datasets: [
      {
        label: 'Sản phẩm trong kho',
        data: distributeData.warehouse,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Sản phẩm đã bán',
        data: distributeData.work,
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      },
    ],
  };


  return (
    <Container maxW='container.lg'>
      <Bar id='chart-bar' options={option_month} data={data_month} />,
    </Container>
  );
}
