import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About_me from './components/About_me.jsx'
import Card from './components/Card.jsx';
import ExperienceList from './components/ExperienceList.jsx';
import Footer from './components/Footer.jsx'
import headshot from ".\public\headshot.jpg"
import dnaCartoon from "./public/dna.png"
import dnaReal from ".\public\DNA real picture.jpg"
import recipeCartoon from "./public/recipe-book.png"
import recipeReal from ".\public\scuttle real.jpg"
import checklistCartoon from "./public/checklist.png"
import habitlingReal from ".\public\Habitlings.jpg" 
import gardenCartoon from "./public/garden-icon-design-free-vector.jpg"
import gardenReal from "./public/Garden Planner real.jpg"
import websiteCartoon from "./public/website.png"
import websiteReal from ".\public\web page real.jpg"
import tasksCartoon from "./public/code.png"
import tasksReal from ".\public\Google tasks.jpg"
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
        <About_me image={headshot} paragraphs={paragraphList}/>
      </div>
      <div id="Experience">
        <ExperienceList  experiences={experienceList}/>
      </div>
      <div id="Projects">          

        <Card 
              cartoonImage={dnaCartoon} 
              // Freepik on flaticon.com https://www.flaticon.com/authors/freepik
              realImage= {dnaReal}
              projectName="DNA Primer Multiplexer" 
              link="https://github.com/EldonBird/Bio_dpt"
              description="Finding SNP specific primers that can all replicate without interfering with one another. I've worked as a devops, a project manager finally the project lead."/>
        <Card 
              cartoonImage={recipeCartoon}
              // Freepik on flaticon.com https://www.flaticon.com/authors/freepik
              realImage={recipeReal}
              projectName="Scuttle" 
              link="https://github.com/celeste-wahlquist/2025_I-Hack"
              description="Hackathon project that scrapped recipes from the web to be used to generate meal plans and shopping lists from those meal plans. Unfinished"/>
        <Card 
              cartoonImage={checklistCartoon}
              // Shashank Singh on flaticon.com  https://www.flaticon.com/authors/Shashank
              realImage={habitlingReal}
              projectName="Habitlings" 
              link="https://github.com/iCarrin/Habitlings"
              description="A habit tracker that uses tamagotchi like pets who die if you don't keep up with them. Only image and check boxes ever implemented."/> 
        <Card 
              cartoonImage={gardenCartoon}
              realImage={gardenReal}
              projectName="Garden Planner" 
              link="https://github.com/iCarrin/CSE-210---code-templates/tree/main/Garden%20Planner/Sandbox"
              description="In C# I made a program that stores plant's needs and recommend plants based on the garden's conditions and other plants already in the garden. It stores the plant's data as strings, but the gardens are stored as JSON data"/>
        <Card 
              cartoonImage={websiteCartoon}
              realImage={websiteReal}
              projectName="Portfolio Web Page" 
              link="#Home"
              description="This is the site you're looking at. I created this as a way to delve into React. I got a lot of practice making this. I used just the classing HTML, CSS, JavaScript, and some built in React functions"/>
        <Card 
              cartoonImage={tasksCartoon}
              //Shahid-Mehmood on flaticon.com  https://www.flaticon.com/authors/Shahid-Mehmood
              realImage={tasksReal}
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