'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement,Tooltip,Legend)

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data ={
        datasets:[
            {
                label: 'Bank',
                data:[1250,2400,5450],
                backgroundColor: ['#6b7173','#2a4858','#582e2a']
            }
        ],
        labels:['Bank1','Bank2','Bank3']
    }
  return <Doughnut 
            data={data} 
            options={{
                cutout:'60%',
                plugins:{
                    legend:{
                        display:false
                    }
                }
            }}
        />
}

export default DoughnutChart