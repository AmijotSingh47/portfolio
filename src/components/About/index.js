import './index.scss'
import AnimatedLetter from '../AnimatedLetters'

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJsSquare, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import CV from '../../assets/Amijot Singh Latest.pdf'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() =>{
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    },[] )

    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetter
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                letterClass={letterClass}
                idx={15}
              />
            </h1>
            <p>
              I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, father of a beautiful daughter, a sports fanatic,
              photography enthusiast, and tech-obsessed!!!
            </p>
            <a download="" href={CV} className="flat-button button--flex ">DOWNLOAD CV</a>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#61dbfb" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faWordpress} color="#21759b" />
              </div>
              {/* <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div> */}
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
};

export default About;