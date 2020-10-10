import React, { useEffect, useState } from 'react';
import { donutChartTwo } from './donutChartTwo';


function DonutComponentTwo() {
    useEffect(() => {
        donutChartTwo();
    }, []);


    return (
        <div className="chart">
            <h4 style={{display:"inline"}}>Data Quality Index</h4><span className="more" >MORE &#129170;</span>
            <div id="donutTwo">
            </div>
        </div>
    );
}

export default DonutComponentTwo;