import './Hero.css'
function Hero(){

    return(
        <div>
            <div className="image-container">
                <img className="hero-image" src="src\assets\background hero image.jpg" alt="Hero Image" />
            </div>
            <h1 className="text">Isaiah Carrin <br/>Brigham Young University - Idaho</h1>
            {/* <hl className="gradient"></hl> */}
        </div>
    );
}
export default Hero