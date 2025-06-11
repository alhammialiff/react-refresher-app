import './dataset-card.component.scss';

function DatasetCardComponent(props: DatasetCardComponentProps) {
    
    const styles={
        backgroundImage: `url(${props.imagePath}`,
        backgroundSize: 'cover',
    }
    
    return ( 
        
        <div className='col 
            m-3 
            mb-0 
            thumbnail-card 
            d-flex 
            justify-content-center 
            align-items-center
            dataset-card'
            style={styles}>

            {props.title}
        
        </div>

    );

}

export default DatasetCardComponent;