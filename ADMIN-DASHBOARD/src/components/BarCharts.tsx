
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
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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

export function BarCharts(
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

interface DoughnutChartProps{
    labels: string[];
    data: number[];
    backgroundColor: string[];
    cutout?: number | string;
    legends?: boolean;
    offset?: number[];
}

export const DoughnutChart=({
    labels, data, backgroundColor, cutout, legends=true, offset
}: DoughnutChartProps)=>{
    const doughnutData: ChartData<"doughnut", number[], string> = {
        labels,
        datasets:[{
            data, 
            backgroundColor, 
            borderWidth: 0,
            offset,

        }]
    };
    const doughnutOptions: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend:{
                display: legends,
                position: "bottom",
                labels:{
                    padding: 40,
                },
            },
        },
        cutout,
    };

    
    return <Doughnut data={doughnutData} options={doughnutOptions}/>;
}

// export default BarCharts