import { useState } from "react";
import * as d3 from "d3";
import { DonutChart } from "./DonutChart";
import './Graphical.scss';
import barchart from './../../assets/bar-chart.png'

const data = [
    { name: "Wiltshire", value: 54 },
    { name: "West Yorkshire", value: 121 },
    { name: "Manchester", value: 117 },
    { name: "Cleveland", value: 54 },
    { name: "London", value: 111 },
]

function Graphical() {


    return (
        <div className="SearchBar">
            <DonutChart data={data} width={400} height={200} />
            <img src={barchart} />
        </div>
    );
}

export default Graphical;