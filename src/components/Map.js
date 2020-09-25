import React, { Component } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://10.0.0.11:4001"
        }
    }

    componentDidMount() {

        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('MqttAPI', (dataESP32) => {
            this.setState({response: dataESP32}
            )
        console.log(`${dataESP32.lat}, ${dataESP32.lgt}`);
        });    
            
        this.map = L.map('map', {
            center: [58, 16],
            zoom: 17,
            zoomControl: false
        }).setView([10.93033, -74.77194]);

        L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
            {
                detectRetina: true,
                maxZoom: 20,
                maxNativeZoom: 17,
            }).addTo(this.map);

        this.map.locate({ enableHighAccuracy: true });

        const marker = L.marker([10.93033, -74.77194]).bindPopup('HOla');

        this.map.addLayer(marker);
        

     // let marker = L.marker([10.93031,-74.77195]);
      
      //marker.bindPopup('Aquí estoy');

      //this.map.addLayer(marker);

   
       

    }
    render() {
        
        return (
            <Wrapper width="1280px" height="500px" id="map" />
        )
    }
}

