import React, { useEffect, useState } from 'react';
import { donutChart } from './donutChart';


function DonutComponent() {
    useEffect(() => {
        donutChart();
    }, []);


    return (
        <div className="chart">
            <h4 style={{display:"inline"}}>Business Impact</h4><span className="more" >MORE &#129170;</span>
            <div id="donut">
            </div>
        </div>
    );
}

export default DonutComponent;