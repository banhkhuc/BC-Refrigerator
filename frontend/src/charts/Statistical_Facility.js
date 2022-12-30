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
import { Container} from '@chakra-ui/react';
import { useState , useEffect} from 'react';
import { getFacilityData } from 'apis/statisticApi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export default function ChartTemplate() {

  const option_month = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê sản phẩm trên các cơ sở sản xuất toàn quốc năm 2022',
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

  const [facilitiyData, setFacilityData] = useState();

  useEffect(() => {
    getFacilityData(setFacilityData);
  }, []);
  if (!facilitiyData) return;

  
  const data_month = {
    labels: facilitiyData.time,
    datasets: [
      {
        label: 'Sản phẩm mới sản xuất',
        data: facilitiyData.work,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Sản phẩm trong kho',
        data: facilitiyData.warehouse,
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      },
      
    ],
  };

  return (
    <Container maxW='container.lg'>
      <Bar id='chart-bar' options={option_month} data={data_month}/>,
    </Container>
  );
}
