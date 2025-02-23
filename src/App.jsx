import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx';
import ExperienceList from './components/ExperienceList.jsx';


function App(){
  const experienceList5 = [ {title:"BYU-I", timePeriod:"2026", location:"Rexburg, ID", description:"Went here, still here"},
                            {title:"Made This Up", timePeriod:"Mar 2001 - Jan 2025", location:"The Moon", description:"really really long description. Probaly the description that i'll actually give. This one is really long to show what something will really look like."},
                            {title:"Your Mom", timePeriod:"Dec 2011 - Jan 2005", location:"The Moon", description:"really really long description. Probaly the description that i'll actually give. This one is really long to show what something will really look like."},
                            {title:"Hamburger", timePeriod:"Mar 2001 - Jan 2025", location:"The Moon", description:"really really long description. Probaly the description that i'll actually give. This one is really long to show what something will really look like."},
                            {title:"Top Knot", timePeriod:"Mar 2001 - Jan 2025", location:"The Moon", description:"really really long description. Probaly the description that i'll actually give. This one is really long to show what something will really look like."},
                            {title:"made this up", timePeriod:"Mar 2001 - Jan 2025", location:"The Moon", description:"really really long description. Probaly the description that i'll actually give. This one is really long to show what something will really look like."}];


  return(
    <>
      <Header id="Home"/>
      <Hero/>
      <ExperienceList id="Experience" experiences={experienceList5}/>
      <div id="Projects">
        <Card 
              cartoonImage="./src/assets/react.svg" 
              realImage="./src/assets/ghost pepper profile picture.png" 
              projectName="garden planner" 
              link="Https/I made this up"
              description="I made a simple script to store plant's needs and recommend plants based on the garden's conditions and other plants already selected"/>
      </div>
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