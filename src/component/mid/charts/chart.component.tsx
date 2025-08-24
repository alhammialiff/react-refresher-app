import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { ChartComponentProps } from "./types/chart.model";
import "./chart.component.scss";

function ChartComponent(props: ChartComponentProps){

    // States Hooks
    const svgCurrentChartRef = useRef<SVGSVGElement>(null);
    const svgTemperatureChartRef = useRef<SVGSVGElement>(null);

    useEffect(() => {

        if(!props.currentData || props.currentData.length === 0){
            return;
        }

        d3.select(svgCurrentChartRef.current).selectAll("*").remove();

        // Set margin, width and height
        const margin = {
            top: 20,
            right: 20,
            bottom: 40,
            left: 50
        }
        const width = window.innerWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create SVG with its attributes
        const svg = d3.select(svgTemperatureChartRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

        // This will be where our chart is inserted
        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)
        
        // Parse timestamps into Date object
        const parseTime = d3.timeParse("%d-%m-%Y");
        const data = props.currentData.map(d => ({
            // Using spread operator to copy existing d.data & d.timestamp
            ...d,

            // Only change timestamp prop
            timestamp: new Date(d.timestamp)

        }));

        
        const xScale = d3.scaleTime()
            // d3.extent maps earliest and latest Date from var data above 
            // ({ data: number, timestamp: Date })
            .domain(d3.extent(data, d => d.timestamp) as [Date, Date])
            // Maps domain to pixel position
            .range([0,width]);

        const yScale = d3.scaleLinear()
            .domain(d3.extent(data, d => d.data) as [number, number])
            .range([height, 0]);

        const line = d3.line<any>()
            .x(d => xScale(d.timestamp))
            .y(d => yScale(d.data))
            .curve(d3.curveMonotoneX);

        // Push xScale to the bottom of the defined height in g via transform translate
        g.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));
        
        g.append("g")
            .call(d3.axisLeft(yScale));

        // Create path for current data
        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", line)

        // Append points for each 
        g.selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("cx", d => xScale(d.timestamp))
            .attr("cy", d => yScale(d.data))
            .attr("r",4)
            .attr("fill","steelblue")
            
    }, [props.currentData]);

    return(
        <>
            <div className="chart-container">
                <svg ref={svgTemperatureChartRef}></svg>
            </div>
        </>
    )

}

export default ChartComponent;