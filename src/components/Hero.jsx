import heroImage from '../assets/background hero image.jpg'
import './Hero.css'
function Hero(){

    return(
        <div className="image-container">
            <img className="hero-image" src={heroImage} alt="Hero Image" />
            <h1 className="text">Isaiah Carrin <br/>Brigham Young University - Idaho</h1>

        </div>        
    );
}
export default Hero