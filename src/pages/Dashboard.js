//rafc: Create a React Arrow Function Componet

import React from 'react'
import Dataserver from '../components/DataServer';
import Charts from '../components/Chart'

//import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>            
            <Dataserver/>
            <br/>
            <Charts/>
        </div>
    )
}

export default Dashboard
