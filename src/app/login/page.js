import React from 'react';
import Navbarglobal from '../Navbarglobal';
import Login from './Login';
import PrivateRoute from '../PrivateRoute';

const page = () => {
    return (
        <div>

           <Navbarglobal></Navbarglobal> 
        

             <Login></Login>

           
          
            
        </div>
    );
};

export default page;