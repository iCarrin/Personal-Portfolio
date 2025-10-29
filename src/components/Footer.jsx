import './Footer.css'
function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Isaiah Carrin</p>
            <div className="links">
                <a href="https://www.linkedin.com/in/isaiah-carrin/">
                    <img className="footer-icon" src=".\public\icons8-linkedin.svg" alt="icon for Linkden" />
                </a>
                <a href="https://github.com/iCarrin">
                    <img className="footer-icon" src=".\public\icons8-github.svg" alt="icon for GitHub" />
                </a>
            </div>
            
        </footer>
    );
}
export default Footer