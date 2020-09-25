import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import socketIOClient from 'socket.io-client';

/*const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}*/

export default class Chart extends Component {

    constructor(props) {
        super(props);

        this.state = {

            MqttApi: {
                endpoint: "http://10.0.0.11:4001",

            },
            chartOptions: {
                chart:{
                    type: 'line'
                },
                title: {
                    text: 'Temperature °C'
                    
                },
                subtitle: {
                    text: 'Grafico de la temperatura del sensor'
                },
                xAxis: {

                    type: 'datetime',
                    dateTimeLabelFormats: {
                        second: '%H:%M:%S'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    type: 'logaritmic',
                    minorTickInterval: 0.1,
                    plotLines:[{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]   
                },
                
                series: [
                    {
                        name: 'Temp',
                        showInLegend: true,
                        data: [39.2, 26.4, 21.8, 33.5, 33.9, 32.1, 31.5, 30, 29.4
                        ], //39.2, 26.4, 21.8, 33.5, 33.9, 32.1, 31.5, 30, 29.4

                    }
                ],

            },
            tooltip: {
                pointFormat: "value: {point.y:.2f} <b>°C</b>",
                backgroundColor: '#FCFFC5',
                valueSuffix: '°C',
                borderWidth: 3,
                borderRadius: 6,
                shared: true
            },
            plotOptions: {
                line: {
                    animation: false,
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                },
                series: {
                    color: '#059e8a'
                }
            },            
            credits: {
                enabled: false
            }
        }

    }
    componentDidMount() {
        const { endpoint } = this.state.MqttApi;

        const socket = socketIOClient(endpoint);
        //let x = (new Date()).getTime();
        socket.on('MqttAPI', (dataESP32) => {
             
            this.setState({
                chartOptions: {
                    series: {
                       data: [dataESP32.temp]
                   },

                }
            });
        });
    }

    render() {
        const { chartOptions } = this.state;
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        )
    }


}








