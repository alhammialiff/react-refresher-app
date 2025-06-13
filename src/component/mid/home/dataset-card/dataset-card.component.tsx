import './dataset-card.component.scss';

function DatasetCardComponent(props: DatasetCardComponentProps) {
    
    const styles={
        backgroundImage: `url(${props.imagePath}`,
        backgroundSize: 'cover',
    }
    
    return ( 
        <>
            <div className='col 
                thumbnail-card 
                d-flex 
                justify-content-center 
                align-items-center
                dataset-card'
                style={styles}
                onClick={props.onClick}>

                {props.title}
            
            </div>
        </>
    );

}

export default DatasetCardComponent;