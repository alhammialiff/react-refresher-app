import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { ChartComponentProps } from "./types/chart.model";
import "./chart.component.scss";
import { chartBuilder } from "./chartBuilder";

function ChartComponent(props: ChartComponentProps){

    // States Hooks
    const svgCurrentChartRef = useRef<SVGSVGElement>(null);

    // A hook that triggers when there is a change in current data
    useEffect(() => {

        if(!props.currentData || props.currentData.length === 0){
            return;
        }

        // Invoke chart builder with currentData (binded by useState), and chart ref (binded by useRef)
        chartBuilder(props.currentData, svgCurrentChartRef);

            
    }, [props.currentData]);

    return(
        <>
            <div className="chart-container">
                <svg ref={svgCurrentChartRef}></svg>
            </div>
        </>
    )

}

export default ChartComponent;