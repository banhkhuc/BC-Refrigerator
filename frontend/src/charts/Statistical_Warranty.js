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
import { getWarrantyData } from 'apis/statisticApi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function ChartTemplate() {

  const [warrantyData, setWarrantyData] = useState();
  useEffect(() => {
    getWarrantyData(setWarrantyData);

  }, []);
  if(!warrantyData) return;

  const option_month = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê sản phẩm trên các trung tâm bảo hành toàn quốc năm 2022',
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
  
  
  const data_month = {
    labels:warrantyData.time,
    datasets: [
      {
        label: 'Sản phẩm đang bảo hành',
        data: warrantyData.warehouse,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Sản phẩm đã bảo hành',
        data: warrantyData.work,
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
