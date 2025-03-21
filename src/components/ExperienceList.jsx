import './ExperienceList.css'
import Experience from './Experience';
function ExperienceList(props){
    const experiences = props.experiences;
    const listExperiences = experiences.map((exp, index) => (
        <Experience key={index} title={exp.title} timePeriod={exp.timePeriod} location={exp.location} description={exp.description}/>
    ));
    return(
        <ul className="experience-list">   
            {listExperiences}
        </ul>);
}

export default ExperienceList