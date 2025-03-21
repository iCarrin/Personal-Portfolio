
import './Experience.css'
function Experience(props){
    const title = props.title;
    const description = props.description;
    const timePeriod = props.timePeriod;
    const location = props.location;

    return(
        <>
            <li className="experience">
                <div className="line"></div>
                <div className="specifics">
                    <h3 className="title">{title}</h3>
                    <div className="deets">
                        <p className="time-period">{timePeriod}</p>
                        <p className="location">{location}</p>
                    </div>
                </div>
                <p className="description">{description}</p>
            </li>
        </>    
    );
}

export default Experience