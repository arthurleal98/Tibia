import Chart from "react-apexcharts";
import quickSort from './quick_sort';
import React, { useState, useEffect} from 'react';
import { formatDate } from "canvasjs";
const fetch = require("node-fetch");


const ServerLocal = (props)=>{
	
	const [numbers,setNumbers] = useState([]);
	const [labels,setLabels] = useState([]);
	useEffect(()=>{async function a(){
		const tit = await fetch('https://api.tibiadata.com/v2/worlds.json');
		const data = await tit.json();
		var t = data.worlds.allworlds;
		var dados = []
		for (let a in t) {
			dados.push({
				label: t[a].name,
				number: t[a].online,
                location:t[a].location
			})
		}
		var pip = quickSort(dados,0,dados.length-1,'location');
        const lista_location=[];
        for(let a in pip){
            lista_location.push(pip[a].location)

        }
        console.log(lista_location)
		pip.length= 10;
		var label = [];
		var number = [];
		for (let a in pip) {
			label.push(pip[a].label);
			number.push(pip[a].number)
		}
		setNumbers(number);
		setLabels(label);}
		a();
	},[props]);
	
	
	const state ={
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
              ],
            }
          },
        
        
        };
		const divStyle={
			display:"block",
			
		};		
		const labelstyle={
			margin:20
		}
		
		return (<div style={divStyle}>
				<label style={labelstyle}><h2>{props.titulo}</h2></label>
				<div id='div-canvas'>	
				<Chart
					options={state.options}
					series={state.series}
					type="bar"
					width="800"
				/>
					</div>

			

		</div>
			
		);
	}

	


export default ServerLocal;