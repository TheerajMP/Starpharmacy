import { Card, Space, Statistic, Table, Typography } from "antd";
import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import getOrders, { getRevenue } from '../API/index'
import '../cssFiles/dashboardchart.css'
import { BASE_URL } from './helper';

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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Dashboard() {
  return (
    <div className="chart" >
      <Space size={20} direction="horizontal">
        <Typography.Title level={4}></Typography.Title>
        <Space className="" style={{ width: '100vh', height: '80vh' }}>
          <DashBoardChart />
        </Space>
      </Space>
    </div>
  );
}
function DashBoardChart() {
  const [med, setMed] = useState([])
  useEffect(() => {
    getRevenue().then(res => {
      console.log(res)
      setMed(res)
    })
  }, [])
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Order drugs',
        color: '',
        FontFace: '15px',
      },
    }, color: 'black',
  };
  const labels = ['quantity'];
  const dataset = []
  med.map((item) => {
    dataset.push({
      label: item.medicine_name,
      data: [item.quantity],
      backgroundColor: '#486452',
      width: '100%',
      height: '100%'
    })
  })
  const data = {
    labels,
    datasets: dataset
  };
  return <Bar options={options} data={data} />;
}
export default Dashboard