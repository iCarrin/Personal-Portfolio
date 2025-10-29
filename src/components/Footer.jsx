import './Footer.css'
import linkden from './public/icons8-linkedin.svg'
import github from './public/icons8-github.svg'
function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Isaiah Carrin</p>
            <div className="links">
                <a href="https://www.linkedin.com/in/isaiah-carrin/">
                    <img className="footer-icon" src={linkden} alt="icon for Linkden" />
                </a>
                <a href="https://github.com/iCarrin">
                    <img className="footer-icon" src={github} alt="icon for GitHub" />
                </a>
            </div>
            
        </footer>
    );
}
export default Footer