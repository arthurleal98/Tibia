import Chart from "react-apexcharts";
import quickSort from '../Utility/quickSort';
import React, { useState, useEffect} from 'react';


const Graph = (props)=>{
	
	const [numbers,setNumbers] = useState([]);
	const [labels,setLabels] = useState([]);
    const [loading,setLoading] = useState(true);
	useEffect(()=>{
		async function a(){
			try{
				const tit = await fetch('https://api.tibiadata.com/v2/worlds.json');
				const data = await tit.json();
				var t = data.worlds.allworlds;
				var dados = []
				for (let a in t) {
					dados.push({
						label: t[a].name,
						number: t[a].online
					})
				}
				var pip = quickSort(dados,0,dados.length-1,'number');
				pip.length= 10;
				var label = [];
				var number = [];
				for (let a in pip) {
					label.push(pip[a].label);
					number.push(pip[a].number)
				}
				setNumbers(number);
				setLabels(label);
			}
			catch(e){
				console.log(e)
			}
			finally{
				setLoading(false)
			}
		}
		a();
	},[props]);
	
	
	const state ={
		series: [{
			data: numbers
		  }],
		  options: {
			chart: {
				toolbar: {
					show: false
				  },
				animations: {
					enabled: false,},
			  type: 'bar',
			  height: 380
			},
			plotOptions: {
			  bar: {
				barHeight: '100%',
				horizontal: true,
				dataLabels: {
				  position: 'bottom'
				},
			  }
			},
			
			dataLabels: {
			  enabled: true,
			  textAnchor: 'start',
			  style: {
				colors: ['#fff']
			  },
			  formatter: function (val, opt) {
				return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
			  },
			  offsetX: 0,
			  
			},
			stroke: {
			  width: 1,
			  colors: ['#fff']
			},
			xaxis: {
			  categories: labels,
			},
			yaxis: {
			  labels: {
				show: false
			  }
			},
			
			
		  },
		
		
		};
	
		const divStyle={
			display:"block",
			
			
		};		
		const labelstyle={
			margin:20
		}
		const styleLoading = {
			display:'flex',
			marginLeft:'auto',
			marginRight:'auto',
			marginTop:'100px'
		}
		if(loading){
			return(		
            
				<div className="lds-ring" style={styleLoading}><div></div><div></div><div></div><div></div></div>
				
				)
		}
		else{
			return (<div style={divStyle}>
				
					<label style={labelstyle}><h2>{props.titulo}</h2>
					</label>
					<div id='div-canvas'>	
					<Chart
						options={state.options}
						series={state.series}
						type="bar"
						width="100%"
						height='100%'
					/>
						</div>
			</div>	
		);
			}
		
	}

	


export default Graph;