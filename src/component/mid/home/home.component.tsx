import { useState } from 'react';
import DatasetCardComponent from './dataset-card/dataset-card.component';
import DatasetTableComponent from './dataset-table/dataset-table.component';
import './home.component.scss';
import { HomeComponentProps } from './types/home.model';

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
            <div className='row m-4'>

                <h2 className='m-3'>
                    A doodleboard for deep learning
                </h2>

                <p className='m-3 mt-0'>
                    Powered by Pytorch, DLoodler (I don't even how to pronounce this either) makes it easy to tinker with deep learning models.
                </p>
                <p className='m-3 mt-0'>
                    The idea of DLoodler is to enable anyone - be it beginner, hobbyists, or revisiting practitioners to jump right in, and learn or re-learn, about deep learning. 
                </p>

            </div>

            <div className='row m-4 my-0'>

                <h3 className='m-3 mb-0'>
                    Pick a dataset to start tinkering
                </h3>
                
            </div>

            <div className='row'>

                <div className='container p-4'>
                    
                    <div className="row m-4 mt-0"
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
                
                </div>

            </div>

            <hr />
            
            {   
                selectedDataset &&
                <div className='row'>
                    <DatasetTableComponent datasetPath={selectedDataset} />
                </div>
            }


            
        </>
    )

}

export default HomeComponent;