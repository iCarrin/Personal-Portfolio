import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About_me from './components/About_me.jsx'
import Card from './components/Card.jsx';
import ExperienceList from './components/ExperienceList.jsx';
import Footer from './components/Footer.jsx'

function App(){
  const experienceList = [  {title:"BYU-I", timePeriod:"2026", location:"Rexburg, ID", description:"Getting my bachelor's degree in computer science with an emphasis in machine learning."},
                            {title:"Other Jobs", timePeriod:"2013 - 2025", location:"Georgia Idaho Utah", description:"I don't have any industry related work yet to put up here, but I've had a job since I was 15. I've worked all over in just about everything, so some skills are bound to be important. (customer relations, sales, creative problem solving, etc)"},
                          ];
  const paragraphList = ["I grew up in Georgia but after serving a proselyting mission for the Church of Jesus Christ of Latter-Day Saint I moved out to Idaho for college, and that's still where I currently live.",
                          "I have the ability to add another paragarph here dynamically, but I can't think of anything to put."];

    
  return(
    <>
      <Header/>
      <div id="Home">
        <Hero/>
      </div>
      <div id="About">
        <About_me image="src\assets\ME.jpg" paragraphs={paragraphList}/>
      </div>
      <div id="Experience">
        <ExperienceList  experiences={experienceList}/>
      </div>
      <div id="Projects">
        <Card 
              cartoonImage="./src/assets/garden-icon-design-free-vector.jpg" 
              realImage="./src/assets/Garden Planner real.jpg" 
              projectName="Garden Planner" 
              link="https://github.com/iCarrin/CSE-210---code-templates/tree/main/Garden%20Planner/Sandbox"
              description="In C# I made a program that stores plant's needs and recommend plants based on the garden's conditions and other plants already in the garden. It stores the plant's data as strings, but the gardens are stored as JSON data"/>
        <Card 
              cartoonImage="./src/assets/website.png" 
              realImage="./src/assets/react.svg" 
              projectName="Portfolio Web Page" 
              link="#Home"
              description="This is the site you're looking at. I created this as a way to delve into React. I got a lot of practice making this. I used just the classing HTML, CSS, JavaScript, and some built in React functions"/>
      </div>
      <Footer/>
      {/* hero image - I want an interactive background
      section about me - 
      section about my experiance (education)
      big section about my projects
        card 
          img
          description (what languages)
          link to git hub
          on hover turn the image into a demo of my project
        card
        card
      trivia about me
      contact me
      footer */}

    </>
  );

}
export default App