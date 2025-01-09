import React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { LuUserRoundPlus } from "react-icons/lu";
import './NodeComponent.css'

function NodeComponent() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='img_div' >
                <LuUserRoundPlus size='50px' color='brown'/>
                </div>
                <div className='text_div'>
                    <p>Sample</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    );
}

export default NodeComponent;
