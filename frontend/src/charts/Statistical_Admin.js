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
import { getProduceData, getDistributeData, getWarrantyData } from 'apis/statisticApi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartAdmin() {
  const [optionValue, setOptionValue]= useState('option1');
  const [produceData, setProduceData] = useState();
  const [distributeData, setDistributeData] = useState();
  const [warrantyData, setWarrantyData] = useState();


  useEffect(() => {
    getProduceData(setProduceData); 
    getWarrantyData(setWarrantyData);
    getDistributeData(setDistributeData);

  }, []);
  
  // useEffect(() => {
  // }, []);
  
  // useEffect(() => {
  // }, []);
  if (!distributeData ) {return};
  if (!produceData) {return};
  if (!warrantyData ) {return};


  const option_facility = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê sản phẩm trên các cơ sở sản xuất toàn quốc',
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
  
  const option_agent = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê sản phẩm trên các đại lý phân phối toàn quốc',
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
  
  const option_warranty = {
    plugins: {
      title: {
        display: true,
        text: 'Biểu đồ thống kê sản phẩm trên các trung tâm bảo hành toàn quốc',
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
  
  const data_facility = {
    labels: produceData.time,
    datasets: [
      {
        label: 'Sản phẩm mới sản xuất',
        data: produceData.work,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Sản phẩm trong kho',
        data: produceData.warehouse,
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      }
    ],
  };
  
  const data_agent = {
    labels: distributeData.time,
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
  
  const data_warranty = {
    labels: warrantyData.time,
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
      }
    ],
  };


  function changeChart(event) {

    setOptionValue(event.target.value)
    // console.log(value);
    // console.log(event);
  };
  console.log(warrantyData);

  return (
    <Container maxW='container.lg'>
      <Bar 
        id='chart-bar'
        options={optionValue==='option1'?option_facility:optionValue==='option2'?option_agent:option_warranty} 
        data={optionValue==='option1'?data_facility:optionValue==='option2'?data_agent:data_warranty} 
      />,

      <Select value={optionValue} id='select-chart' mt='56px' size='lg' width='fit-content' onChange={(event) => changeChart(event)}>
        <option value='option1' selected>Theo cơ sở sản xuất</option>
        <option value='option2'>Theo đại lý phân phối</option>
        <option value='option3'>Theo trung tâm bảo hành</option>
      </Select>
    </Container>
  );
}

export default ChartAdmin;
