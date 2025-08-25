import { useEffect, useRef, useState } from 'react';
import DatasetCardComponent from './dataset-card/dataset-card.component';
import DatasetTableComponent from './dataset-table/dataset-table.component';
import './home.component.scss';
import { HomeComponentProps } from './types/home.model';
import JumbotronComponent from '../../header/jumbotron.component';
import ChartComponent from '../charts/chart.component';
import { Plot } from '../charts/types/plot.model';
import { generateMultiLevelWave, getDummyTimestamp } from '../../../service/dataset-service/dummy-data-service';

function HomeComponent(props: HomeComponentProps){

    // Set states
    const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
    const [liveChartData, setLiveChartData] = useState<Plot[]>([]);
    const [tickInterval, setTickInterval] = useState<number>(0.5);

    // This xRef refers to the initial x-axis value to generate a multilevel dummy wave
    const xRef = useRef(0);

    // Sample chart data - replace with real data from your API
    // Data shows clear peaks (morning rush, lunch, evening) and troughs (late night, mid-morning)
    const initialDummyData: Plot[] = [];
    const startTime = getDummyTimestamp();

    // =============================
    // Use Effect #1 - Initializing data
    // =============================
    useEffect(() => {
        setLiveChartData(initialDummyData)
    }, []);

    // =============================
    // Use Effect #2 - Simulate live data - adding new point every 2 seconds
    // =============================
    useEffect(() => {

        xRef.current = 0;
        setLiveChartData([]);

        // Define interval to generate datapoints
        const interval = setInterval(() => {

            // Use useState setter to generate new datapoints
            setLiveChartData((prevData: Plot[]) => {

                const hoursElapsed = Math.floor(xRef.current);
                const simulatedTime = new Date(startTime.getTime() + (hoursElapsed * 60 * 60 * 1000))

                // Generate new random data point
                const newDataPoint = {
                    // data: Math.random() * 80 + 20,
                    data: generateMultiLevelWave(xRef.current),
                    timestamp: simulatedTime.toISOString()
                }

                // Default to 48 ticks (30 mins interval in a day) 
                let dataPointsToShow = 48;
                
                // 30 mins or 1 hour
                if(tickInterval <= 1){

                    dataPointsToShow = 48

                // 2 hour or 4 hour
                }else if(tickInterval <= 4){

                    dataPointsToShow = 24

                // 6 hour
                }else if(tickInterval <=6){

                    dataPointsToShow = 12

                }

                // Keep only last 20 data points for performance
                // This is a very useful way to get new data (spread, add, slice)
                const updatedData = [...prevData,newDataPoint].slice(-dataPointsToShow)


                xRef.current += tickInterval;

                return updatedData

            })

        }, 500);

        // Cleanup function to clearinterval on component unmount
        return () => clearInterval(interval);

    }, [tickInterval]);

    // Return components 
    return (    
        <>  
            <JumbotronComponent />
            <div className='row p-4'>

                <div className='col'>
                    <h3>
                        Runtime
                    </h3>
                </div>

                {/* To decide whether to delete or not */}
                <div className='col'>
                    <div className="row">

                    </div>
                </div>
            </div>

            {/* Dropdown - Tick */}
            <div className='row p-4 pt-0 justify-content-end'>
                <div className="col-1">
                    Interval
                </div>
                <div className="col-1">
                    <form action="">
                        <select name="duration" 
                            value={tickInterval}
                            onChange={(e)=>setTickInterval(Number(e.target.value))}>
                            <option value={0.5}>
                                30 mins
                            </option>
                            <option value={1}>
                                1 hour
                            </option>
                            <option value={2}>
                                2 hour
                            </option>
                            <option value={4}>
                                4 hour
                            </option>
                            <option value={6}>
                                6 hour
                            </option>
                        </select>
                    </form>
                </div>
            </div>

            <div className="row p-4 pt-0">
                
                <ChartComponent currentData={liveChartData} />
                
            </div>
                

            <hr />

            <div className="row p-4">
                <h3>Take a peek at your dataset</h3>
            </div>

            {   
                selectedDataset &&
                <div className='row px-4'>
                    <DatasetTableComponent datasetPath={selectedDataset} />
                </div>
            }


            
        </>
    )

}

export default HomeComponent;