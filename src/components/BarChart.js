import {useEffect, useState} from 'react';
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
const options={
  indexAxis:'x',
  Element:{
    bar:{
      borderWidth: 2,
    },
  },
responsive:true,
plugins: {
  legend:{
    position:'right'
  },
  title:{
    display:true,
    text:'marks obtained'
  },
},
}
const Analytics = () => {
  const [data, setData] = useState({
    labels:['Week-1','Week-2', 'Week-3', 'Week-4', 'Week-5'],
    datasets: [
      {
        label: 'Marks obtained',
        data:[],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
      
    ],
  });
useEffect(()=> {
   const fetchData= async()=> {
       const url = ''
       const dataSet1 = [];
     await fetch(url).then((data)=> {
         console.log("Api data", data)
         const res = data.json();
         return res
     }).then((res) => {
         console.log("ressss", res)
        for (const val of res) {
            dataSet1.push(val.id);
            
          
        }
        setData({
            labels:['Week-1','Week-2', 'Week-3', 'Week-4', 'Week-5'],
            datasets: [
              {
                label: 'marks obtained',
                data:dataSet1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(99, 132, 0.5)',
              }
            ],
          })
        console.log("arrData", dataSet1)
     }).catch(e => {
            console.log("error", e)
        })
    }
    
    fetchData();
},[])

return(
    <div style={{width:'80%', height:'50%'}}>
        {
            console.log("dataaaaaaaa", data)
        }
        <Bar data={data} options={options}/>
     </div>)
}

export default Analytics 