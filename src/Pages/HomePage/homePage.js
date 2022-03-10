import homeStyle from "./homePage.module.css"
import AboutMe from "../../Components/AboutMe/AboutMe";
import Experience from "../../Components/Experiences/Experience";
import Work from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import NavBar from "../../Components/NavigationBar/NavBar";
import Introduction from "../../Components/Introduction/Introduction";
import Footer from "../../Components/Footer/Footer"
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function Website() {
  // console.log(process.env.REACT_APP_LOAD_INTRO)

  return (
    // Top Navigation Bar Section //
    <div>
    <div className={homeStyle.background}>

      {/* <Parallax pages = {4}>
      <ParallaxLayer sticky={{start: 0, end: 4.5}}> */}
      <nav id={homeStyle.Navigation}><NavBar /></nav>
      {/* </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> */}
        <section id={homeStyle.Introduction}><Introduction /></section>
      {/* </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}> */}
        <section id={homeStyle.AboutMe}><AboutMe /></section>
      {/* </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5}> */}
        <section id={homeStyle.Experience}><Experience /></section>
      {/* </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5}> */}
        <section id={homeStyle.Work}><Work /></section>
      {/* </ParallaxLayer>

      <ParallaxLayer sticky={{start: 4, end: 4}}> */}
    <section id={homeStyle.Contact}><Contact /></section>
    <section id={homeStyle.Footer}><Footer /></section>
      {/* </ParallaxLayer>
      </Parallax> */}
    </div>
    </div>
  );
}
