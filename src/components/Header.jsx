import './Header.css'
function Header(){
    return(
        <header>
            
            <p className="name"><b>Isaiah Carrin</b></p>
            <ul className="links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                {/* <li><a href="#">Contact</a></li> */}
            </ul>
        </header>

    );
}
export default Header