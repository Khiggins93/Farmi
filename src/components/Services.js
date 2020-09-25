import React, { Component } from 'react' 

//React-ICON
import { FaChartArea, FaMapMarkedAlt } from "react-icons/fa";
import { GiTankTread  } from "react-icons/gi"; //GiTrackedRobot
import { WiThermometer, WiHumidity, WiShowers} from "react-icons/wi";
import {IoMdAnalytics, IoMdBatteryCharging} from 'react-icons/io'

//
import Title from './Title';

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <GiTankTread />,
                title: "farmi robotic tank",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <WiThermometer />,
                title: "Temperature",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <WiHumidity />,
                title: "Humidity",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <WiShowers />,
                title: "precipitation",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <FaMapMarkedAlt />,
                title: "Tracking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <FaChartArea />, 
                title: "Chart",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <IoMdAnalytics />, 
                title: "analytics",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            },
            {
                icon: <IoMdBatteryCharging />, 
                title: "battery",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores ipsam tempore aut quis praesentium."
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>);
                    })}
                </div>
            </section>
        )
    }
}
