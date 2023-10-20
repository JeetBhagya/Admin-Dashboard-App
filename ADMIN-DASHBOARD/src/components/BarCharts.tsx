
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface barChartprops{
    horizontel?: boolean;
    data1: number[];
    data2: number[];
    tittle1: string;
    tittle2: string;
    bgColor1: string;
    bgColor2: string;
    labels?: string[];
}

function BarCharts(
    {
        horizontel=false,
        data1=[],
        data2=[],
        tittle1,
        tittle2,
        bgColor1,
        bgColor2,
        labels=months
    }: barChartprops) 
{
    const options: ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontel? "y": "x",
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          },
        },
        scales:{
            y: {
                grid:{
                    display: false
                }
            },
            x: {
                beginAtZero: true,
                grid:{
                    display: false
                }
            }
        }
    };
      
    const data: ChartData<"bar", number[], string> = {
        labels,
        datasets: [
        {
            label: tittle1,
            data: data1,
            backgroundColor: bgColor1,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4
        },
        {
            label: tittle2,
            data: data2,
            backgroundColor: bgColor2,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4
        },
        ],
    };
    return <Bar options={options} data={data} />;
}

export default BarCharts