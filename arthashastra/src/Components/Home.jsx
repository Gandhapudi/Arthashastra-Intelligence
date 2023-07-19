import React, { useRef, useState } from 'react'
import {data} from "../dummyData"
import "../Styles/Home.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
const Home = () => {
    const [Xlabel,setXlabel]=useState([2004,2008,2012,2016,2020]);
    const [Ylabel,setYlabel]=useState([1,3,6,2,7]);
    let ref1=useRef();
    let ref2=useRef();
    const change=(a,the)=>{
        let c=document.getElementsByClassName("colorchange");
        let f=ref1.current;
        let k=ref2.current
        for (const i of c) {
            i.classList.remove("toggle-btn");
            
        };
        
        let s=document.getElementById("chart");
        let v=document.getElementById("table");
        if(a==="chart"){
            for (const i of c) {
                i.classList.remove("toggle-btn");
                
            };
            k.classList.add("toggle-btn");
           
           
        s.style.transform="translateX(0%)";
        v.style.transform="translateX(100%)";
        v.style.opacity=0
        s.style.opacity=1;}
        else{
            for (const i of c) {
                i.classList.remove("toggle-btn");
                
            };
            f.classList.add("toggle-btn");
            
            s.style.transform="translateX(100%)";
            v.style.transform="translateX(0%)";
            v.style.opacity=1;
            s.style.opacity=0;};
            
        }
        
    
  return (
    <>
    <div className='main'>
    <div className= 'table-container'>
    <div className='  toggle '>
 
    <div className=' toggle-item   bg-slate-200 shadow-2xl  toggle-btn colorchange' ref={ref1}  onClick={()=>{change("Table");}}>Table</div>
               
                <div className=' toggle-item  shadow-2xl   bg-slate-200    colorchange' ref={ref2} onClick={()=>change("chart")}>Chart</div>
    
                
                
               
              </div>
    
              <br></br>
            <div className='tablecontain1'id="table"><hr></hr> <br></br>
            <div className='table-main-head'>
        <div className={`table-main-head-items`}>Id</div>
        <div className={`table-main-head-items`}>Year</div>
        <div className={`table-main-head-items`}>Medals</div>
        
     </div><Table /> </div>
     <div className='tablecontain2' id="chart"><hr></hr> <br></br>
            <Chart Xlabel={Xlabel} Ylabel={Ylabel}/> </div>
    </div>

</div></>
    
  )
}
export const Table=()=>{
    
    return (
        <div className=''><>
        
       
     
     {
        data.map((items)=><div className='pl-2 pr-2'>
        <br></br>
        <div className='table-content'>
        <div className={` table-content-item `}>{items.Id}</div>
        <div className={`table-content-item`}>{items.Year}</div>
        <div className={`table-content-item`}>{items.Medals}</div>
        
     </div>
     </div>)
     }
       
        </></div>
    )
}
export const Chart=({Xlabel,Ylabel})=>{
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      let labels=Xlabel;
      const options = {
        scales: {
            x: {
              title: { display: true, text: 'Years' }
            },
            y: {
              title: { display: true, text: 'Medals Won'}
            }
          },
       
      };
     
    const data = {
        labels,
        datasets: [
          {
            label: 'Medals Won by India in Olympics',
            data:Ylabel,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        
        ],
      };
    return(
        






 
 


    
  
    <div className='flex justify-center h-[85%] overflow-hidden'>
    <Line 
   options={options}
   data={data}
   
  /></div>  
  
    )}



export default Home