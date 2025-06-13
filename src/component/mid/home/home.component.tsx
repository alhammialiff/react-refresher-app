import { useState } from 'react';
import DatasetCardComponent from './dataset-card/dataset-card.component';
import DatasetTableComponent from './dataset-table/dataset-table.component';
import './home.component.scss';
import { HomeComponentProps } from './types/home.model';
import JumbotronComponent from '../../header/jumbotron.component';

function HomeComponent(props: HomeComponentProps){

    const [selectedDataset, setSelectedDataset] = useState<string | null>(null);

    // What do I need?
    // 2x2 grid that takes in:
    //  - Dataset Thumbnail Image
    //  - Each grid route to :id route,
    //    pointing to the Playground page with
    //    selected id
    const dummyDatasetCardData = [
        {
            title: 'Iris',
            imagePath: 'public/images/iris.jpg',
            datasetPath: '/dataset/iris.csv'
        },
        {
            title: 'Heart Disease',
            imagePath: 'public/images/heart-disease.jpg',
            datasetPath: '/dataset/iris.csv'

        },
        {
            title: 'Bank Marketing',
            imagePath: 'public/images/bank-marketting.jpg',
            datasetPath: '/dataset/iris.csv'

        },
        {
            title: 'Student Performance',
            imagePath: 'public/images/student-performance.jpg',
            datasetPath: '/dataset/iris.csv'

        }
    ]

    return (    
        <>  
            <JumbotronComponent />
            <div className='row p-4'>

                <h3 className='col'>
                    Pick a dataset to start tinkering
                </h3>
                
            </div>

            <div className="row p-4"
                id="top-grid-thumbnail-link">
                
                { 
                    dummyDatasetCardData.map((dataset)=>{
                        return (
                            // To change key with uuid in future
                            <DatasetCardComponent key={dataset.title} 
                                title={dataset.title} 
                                imagePath={dataset.imagePath} 
                                onClick={()=> setSelectedDataset(dataset.datasetPath)} />

                        )
                    })
                }

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