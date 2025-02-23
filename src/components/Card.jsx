import React, {useState} from 'react';
import './card.css'
function Card(props){
    const cartoonImage = props.cartoonImage;
    const realImage = props.realImage;
    const projectName = props.projectName;
    const description = props.description;
    const link = props.link;
    const [image, changeImage] = useState(props.image);
    const [classImage, changeStyle] = useState("card-cartoon-image");

    return(
        <div className="card" onMouseEnter={() => {changeImage(realImage); changeStyle("card-real-image");}} onMouseLeave={() => {changeImage(cartoonImage); changeStyle("card-cartoon-image");}} >
            <img className={classImage} src={image} alt="Project picture" />
            <h2 className="card-title"> 
                <a className="gitHub-link" href={link}>
                    {projectName}
                </a>     
            </h2>
            <p className="card-description" >{description}</p>
            
        </div>
    );
}

export default Card