import React from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
 
axios.defaults.baseURL= 'http://192.168.0.110:3000'

function App(){
 

        return (
            <div >
              <Navbar/>
                <div className="container-fluid" id="main">
                 <div className="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App