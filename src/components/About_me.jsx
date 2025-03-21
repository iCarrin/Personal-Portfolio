import "./About_me.css"
function About_me(props){
    const image = props.image;
    const paragraphs = props.paragraphs;
    const paragraphList = paragraphs.map(paragraph => 
        <p className="describe-paragraphs">{paragraph}</p>);
        

    return(
        <div className="about-me-div">
            <img className="my-image" src={image} alt="A nice picture of myself" />
            <div className="describe-me-words">
                {paragraphList}
            </div>
        </div>
    );
}
export default About_me