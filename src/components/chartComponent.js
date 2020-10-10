import React, { useEffect, useState } from 'react';
import { lineChart } from './lineChart';


function ChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        lineChart();
    }, []);


    return (
        <div className="chart">
            <h2>Data Statistics</h2>
            <div id="lineChart">
            </div>
        </div>
    );
}

export default ChartComponent;