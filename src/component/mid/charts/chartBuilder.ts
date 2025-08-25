import * as d3 from 'd3';
import { Plot } from "./types/plot.model";

export const chartBuilder = (plotData: Plot[], chartRef: React.RefObject<SVGSVGElement | null>) => {

            // Remove existing chart (this will be essential for live charting later)
        d3.select(chartRef.current).selectAll("*").remove();

        // Set margin, width and height
        const margin = {
            top: 50,
            right: 20,
            bottom: 30,
            left: 50
        }
        const width = window.innerWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create SVG with its attributes
        const svg = d3.select(chartRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height*2/3 + margin.top + margin.bottom)

        // This will be where our chart is inserted
        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)
        
        g.append("text")
            .attr("x", 20)
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")
            .style("font-size", "18px")
            // .style("font-weight", "bold")
            .style("fill","#333")
            .text("Machine 01")
        
        // Parse timestamps into Date object
        const parseTime = d3.timeParse("%d-%m-%Y");
        const data = plotData.map(d => ({
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
            // .domain(d3.extent(data, d => d.data) as [number, number])
            .domain([0,200])
            .range([height*2/3, 0]);

        const line = d3.line<any>()
            .x(d => xScale(d.timestamp))
            .y(d => yScale(d.data));
            // .curve(d3.curveMonotoneX);

        // Push xScale to the bottom of the defined height in g via transform translate
        g.append("g")
            .attr("transform", `translate(0,${height*2/3})`)
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

}