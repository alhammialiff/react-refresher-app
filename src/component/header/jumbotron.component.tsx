import './jumbotron.component.scss';

function JumbotronComponent() {
    return ( 
        <div className="container-fluid 
            jumbotron-container 
            d-flex
            flex-column
            justify-content-center
            p-5">
            <div className='row'>
                <div className="col">
                    <h1 className='highlighted-title'>Fabrication Machine 01</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <h4 className='highlighted-title'>Fabrication Floor - Section 1A</h4>
                </div>
            </div>
            
        </div>
     );
}

export default JumbotronComponent;