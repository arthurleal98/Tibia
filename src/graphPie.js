import Chart from "react-apexcharts";
import quickSort from './quickSort';
import React, { useState, useEffect } from 'react';


const GraphPie = (props) => {

    const [numbers, setNumbers] = useState([]);
    const [labels, setLabels] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchApi = async() => {
            try{
                const tit = await fetch('https://api.tibiadata.com/v2/worlds.json');
                const data = await tit.json();
                const t = data.worlds.allworlds;
                const dados = []
                for (let a in t) {
                    dados.push({
                        label: t[a].name,
                        number: t[a].online,
                        location: t[a].location
                    })
                }
                const pip = quickSort(dados, 0, dados.length - 1, 'location');
                const location = []

                const label = [];
                const number = [];
                for (let a in pip) {
                    label.push(pip[a].label);
                    number.push(pip[a].number);
                    location.push(pip[a].location);
                }
                const filter_location = [...new Set(location)]

                const sum_locations = [];
                for (let a in filter_location) {
                    let soma = 0;
                    for (let b in location) {
                        if (location[b] === filter_location[a]) {
                            soma += number[b];
                        }
                    }
                    sum_locations.push(soma);

                };
                setLabels(filter_location);
                setNumbers(sum_locations);
            }
            catch(e){
                console.log(e)
            }
            finally{
                setLoading(false)
            }
        }
        fetchApi();
    }, [props]);


    const state = {
        series: numbers,
        options: {
            plotOptions: {
                pie: {
                    startAngle: 0,
                    endAngle: 360,
                    expandOnClick: true,
                    offsetX: 0,
                    offsetY: 0,
                    customScale: 1,
                    dataLabels: {
                        position: 'bottom'
                    },
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '22px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                color: undefined,
                                offsetY: -10,
                                formatter: function(val) {
                                    return val
                                }
                            },
                            value: {
                                show: true,
                                fontSize: '22px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 400,
                                color: undefined,
                                offsetY: 16,
                                formatter: function(val) {
                                    return val
                                }
                            },
                            total: {
                                show: true,
                                showAlways: false,
                                label: 'Total players',
                                fontSize: '22px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                color: '#373d3f',
                                formatter: function(w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                        return a + b
                                    }, 0)
                                }
                            }
                        }
                    },
                }
            },
            chart: {
                type: 'donut',
            },
            labels: labels,
            legend: { position: 'bottom' }
        },


    };

    const divStyle = {
        display: "block",

    };
    const labelstyle = {
        margin: 20,

    }
    if(loading){
        return(		
            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>            
            )
    }
    
    else{    
        return ( <div style = { divStyle }>
                    <label style = { labelstyle } > <h2 > { props.titulo } </h2></label >
                    <div id = 'div-canvas' >
                        <Chart options = { state.options }
                        series = { state.series }
                        type = "donut"
                        width = "100%"
                        height = '400px' />
                    </div>
            </div>

        );
    }
}




export default GraphPie;