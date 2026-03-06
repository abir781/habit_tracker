import React from 'react';
import Habitsmaker from './Habitsmaker';
import Navbar from '../Navbar';
import Navbarglobal from '../Navbarglobal';
import PrivateRoute from '../PrivateRoute';

const Habitpage = () => {
    return (
        <div>

            <Navbarglobal></Navbarglobal>

            <PrivateRoute>

                <Habitsmaker></Habitsmaker>

            </PrivateRoute>

            
           
            
        </div>
    );
};

export default Habitpage;