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

            <div className='container p-4'>
                
                <div className="row m-4"
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

        </>
    )

}

export default HomeComponent;