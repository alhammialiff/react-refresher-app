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
                    <h1 className='highlighted-title'>A doodleboard for deep learning</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <h5>
                        Seen the layers in your study notes, but not interactively? Or have worked on it before in the past, but a lost knowledge now?
                    </h5>
                    <h5>
                       Try this little canvas as you <span className="highlighted-text">rekindle your spark with deep learning</span>. 
                    </h5>
                </div>
            </div>
        </div>
     );
}

export default JumbotronComponent;