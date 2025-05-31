import './home.component.scss';
import { HomeComponentProps } from './types/home.model';

function HomeComponent(props: HomeComponentProps){

    // What do I need?
    // (1) Welcome to 
    // 2x2 grid that takes in:
    //  - Dataset Thumbnail Image
    //  - Each grid route to :id route,
    //    pointing to the Playground page with
    //    selected id


    return (    
        <>
            <div className='row m-4'>

                <h2 className='m-3'>
                    A doodleboard for deep learning
                </h2>

                <p className='m-3 mt-0'>
                    Powered by Tensorflow, DLoodler (I don't even how to pronounce this either) makes it easy to tinker with deep learning models.
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
                    
                        <div className='col m-3 mb-0 thumbnail-card'>
                            Thumbnail #1
                        </div>
                    
                        <div className='col m-3 mb-0 thumbnail-card'>
                            Thumbnail #2
                        </div>
                    
                    </div>
                    
                    <div className="row m-4"
                        id="btm-grid-thumbnail-link">
                        
                        <div className='col m-3 thumbnail-card'>
                            Thumbnail #3
                        </div>
                        
                        <div className='col m-3 thumbnail-card'>
                            Thumbnail #4
                        </div>
                    
                    </div>
                
                </div>

            </div>

            
        </>
    )

}

export default HomeComponent;