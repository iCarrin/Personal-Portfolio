import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About_me from './components/About_me.jsx'
import Card from './components/Card.jsx';
import ExperienceList from './components/ExperienceList.jsx';
import Footer from './components/Footer.jsx'
import './App.css'

function App(){
  const experienceList = [  {title:"BYU-I", timePeriod:"2026", location:"Rexburg, ID", description:"Getting my bachelor's degree in computer science with an emphasis in machine learning."},
                            {title:"Other Jobs", timePeriod:"2013 - 2025", location:"Georgia Idaho Utah", description:"I don't have any industry related work yet to put up here, but I've had a job since I was 15. I've worked all over in just about everything, so some skills are bound to be important. (customer relations, sales, creative problem solving, etc)"},
                          ];
  const paragraphList = [ "Hey, I'm Isaiah. I'm a computer science student at BYU-Idaho with a passion for learning and creating. I enjoy web development, QA, and general problem solving. That's why I got into programming because I love solving puzzles.", 
                          "When I'm not coding (or slaving over homework) I enjoy being with my family, 3D printing, making a cosplay or halloween costumes, and working on house projects and improvements.", 
                          "I'm almost done with school and looking for what I want to do with my degree and where I'll find my internship."];

    
  return(
    <>
      <Header about="#About"/>
      <div id="Home">
        <Hero/>
      </div>
      <div id="About">
        <About_me image="src\assets\headshot.jpg" paragraphs={paragraphList}/>
      </div>
      <div id="Experience">
        <ExperienceList  experiences={experienceList}/>
      </div>
      <div id="Projects">          

        <Card 
              cartoonImage="./src/assets/dna.png" 
              // Freepik on flaticon.com https://www.flaticon.com/authors/freepik
              realImage="\src\assets\DNA real picture.jpg" 
              projectName="DNA Primer Multiplexer" 
              link="https://github.com/EldonBird/Bio_dpt"
              description="Finding SNP specific primers that can all replicate without interfering with one another. I've worked as a devops, a project manager finally the project lead."/>
        <Card 
              cartoonImage="./src/assets/recipe-book.png" 
              // Freepik on flaticon.com https://www.flaticon.com/authors/freepik
              realImage="\src\assets\scuttle real.jpg" 
              projectName="Scuttle" 
              link="https://github.com/celeste-wahlquist/2025_I-Hack"
              description="Hackathon project that scrapped recipes from the web to be used to generate meal plans and shopping lists from those meal plans. Unfinished"/>
        <Card 
              cartoonImage="./src/assets/checklist.png" 
              // Shashank Singh on flaticon.com  https://www.flaticon.com/authors/Shashank
              realImage="\src\assets\Habitlings.jpg" 
              projectName="Habitlings" 
              link="https://github.com/iCarrin/Habitlings"
              description="A habit tracker that uses tamagotchi like pets who die if you don't keep up with them. Only image and check boxes ever implemented."/> 
        <Card 
              cartoonImage="./src/assets/garden-icon-design-free-vector.jpg" 
              realImage="./src/assets/Garden Planner real.jpg" 
              projectName="Garden Planner" 
              link="https://github.com/iCarrin/CSE-210---code-templates/tree/main/Garden%20Planner/Sandbox"
              description="In C# I made a program that stores plant's needs and recommend plants based on the garden's conditions and other plants already in the garden. It stores the plant's data as strings, but the gardens are stored as JSON data"/>
        <Card 
              cartoonImage="./src/assets/website.png" 
              realImage="src\assets\web page real.jpg" 
              projectName="Portfolio Web Page" 
              link="#Home"
              description="This is the site you're looking at. I created this as a way to delve into React. I got a lot of practice making this. I used just the classing HTML, CSS, JavaScript, and some built in React functions"/>
        <Card 
              cartoonImage="./src/assets/code.png" 
              //Shahid-Mehmood on flaticon.com  https://www.flaticon.com/authors/Shahid-Mehmood
              realImage="\src\assets\Google tasks.jpg" 
              projectName="Google tasks API experiment" 
              link="https://github.com/iCarrin/google-tasks-api-practice"
              description="Drew up a quick Google tasks editor to practice working with API's, and google OAuth"/>

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
      footer 
      
      
*/}

    </>
  );

}
export default App