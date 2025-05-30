import HomeComponent from "./home/home.component";

function MidSectionComponent(){

    // This Component should consolidate components residing 
    // in the mid section of the viewport - or main contents in short

    const datasetImages: string[] = [];

    return (

        <>
            <div className="row">
                <HomeComponent datasetImages={[]} />
            </div>
        </>


    )
    
}

export default MidSectionComponent;