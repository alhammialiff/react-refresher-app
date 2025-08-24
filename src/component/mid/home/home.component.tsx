import { useState } from 'react';
import DatasetCardComponent from './dataset-card/dataset-card.component';
import DatasetTableComponent from './dataset-table/dataset-table.component';
import './home.component.scss';
import { HomeComponentProps } from './types/home.model';
import JumbotronComponent from '../../header/jumbotron.component';
import ChartComponent from '../charts/chart.component';

function HomeComponent(props: HomeComponentProps){

    const [selectedDataset, setSelectedDataset] = useState<string | null>(null);

    // Sample chart data - replace with real data from your API
    // Data shows clear peaks (morning rush, lunch, evening) and troughs (late night, mid-morning)
    const chartData = [
        { data: 15.2, timestamp: "2024-01-01T00:00:00Z" }, // Midnight - low activity
        { data: 8.5, timestamp: "2024-01-01T01:00:00Z" },  // 1 AM - lowest point
        { data: 12.1, timestamp: "2024-01-01T02:00:00Z" },
        { data: 18.7, timestamp: "2024-01-01T03:00:00Z" },
        { data: 25.3, timestamp: "2024-01-01T04:00:00Z" },
        { data: 42.8, timestamp: "2024-01-01T05:00:00Z" }, // Early morning rise
        { data: 68.5, timestamp: "2024-01-01T06:00:00Z" },
        { data: 85.2, timestamp: "2024-01-01T07:00:00Z" }, // Morning peak starts
        { data: 92.7, timestamp: "2024-01-01T08:00:00Z" }, // Peak morning rush
        { data: 78.4, timestamp: "2024-01-01T09:00:00Z" },
        { data: 45.6, timestamp: "2024-01-01T10:00:00Z" }, // Mid-morning trough
        { data: 38.2, timestamp: "2024-01-01T11:00:00Z" }, // Lowest daytime point
        { data: 67.9, timestamp: "2024-01-01T12:00:00Z" }, // Lunch peak starts
        { data: 74.5, timestamp: "2024-01-01T13:00:00Z" }, // Lunch peak
        { data: 58.3, timestamp: "2024-01-01T14:00:00Z" },
        { data: 52.7, timestamp: "2024-01-01T15:00:00Z" }, // Afternoon lull
        { data: 48.9, timestamp: "2024-01-01T16:00:00Z" },
        { data: 65.4, timestamp: "2024-01-01T17:00:00Z" }, // Evening rise
        { data: 88.6, timestamp: "2024-01-01T18:00:00Z" }, // Evening peak
        { data: 95.1, timestamp: "2024-01-01T19:00:00Z" }, // Highest peak
        { data: 82.7, timestamp: "2024-01-01T20:00:00Z" },
        { data: 64.3, timestamp: "2024-01-01T21:00:00Z" }, // Evening decline
        { data: 41.8, timestamp: "2024-01-01T22:00:00Z" },
        { data: 28.5, timestamp: "2024-01-01T23:00:00Z" }  // Night wind-down
    ];


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

            {/*  */}
            <div className="row p-4 pt-0">
                
                <ChartComponent currentData={chartData} />
                
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