import { useEffect, useState } from "react";
import { DatasetTableProps } from "./types/dataset-table.model";
import Papa from 'papaparse';
import './dataset-table.component.scss';

function DatasetTableComponent(props:DatasetTableProps) {

    const [dataset,setDataset] = useState<any[]>([])

    const datasetPath = props.datasetPath;

    // Only run everytime datasetPath changes
    useEffect(()=>{

        // If props is undefined return nothing
        if(!props.datasetPath){
            return;
        }

        // Otherwise fetch props
        fetch(props.datasetPath)
            .then(res => res.text())
            .then(csvText => {

                // Parse dataset
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        setDataset(results.data as any[])
                    }
                })

            })
    },[props.datasetPath]);


    return ( 

        // 
        <div className="container px-0">
            <div className="main-table-grid">
                {
                    dataset[0] && 
                    Object.keys(dataset[0]).map((attribute)=>(
                        <div key={attribute} className="attribute-grid">
                            {attribute}
                        </div>
                    ))
                }
            </div>
            <div className="data-grid-container">
                {
                    dataset[0] &&
                    dataset.map((row, rowIndex)=> (
                        <div className="data-grid-row">
                        { 
                            Object.keys(row).map((attribute, columnIndex)=>(
                                <div key={`attr${rowIndex}-${columnIndex}`} className="data-cell">
                                    {row[attribute]}
                                </div>
                            ))
                        }
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default DatasetTableComponent;