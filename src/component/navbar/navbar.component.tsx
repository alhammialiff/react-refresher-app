import './navbar.component.scss';

function NavBarComponent(){

    return (

        <div className="row nav-bar-container">
            <div id="nav-logo" 
                className='col-4
                    d-flex
                    align-items-center'>
                Logo Here
            </div>
            <ul id="nav-bar-links"
                className="col
                    d-flex
                    justify-content-end 
                    align-items-center">
                <li>Home</li>
                <li>About</li>
            </ul>

        </div>

    )

}

export default NavBarComponent;