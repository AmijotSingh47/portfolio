import './index.scss'
import AnimatedLetter from '../AnimatedLetters'

import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobileAlt, faWind } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3, faGit, faHtml5, faJsSquare, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
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
        </div>

        <div className=" skills section" id="skills">
          <div className="skill_container  grid">
            <div className="skills_content ">
              <h3 className="skills_title">My Skills</h3>
              <div className="skills_box">
                <div className="skills_group">
                  <div className="skills_data _1">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faHtml5}
                      color="#F06529"
                    />
                    <div>
                      <h3 className="skills_name">HTML</h3>
                      <span className="skills_level">Advance</span>
                    </div>
                  </div>
                  <div className="skills_data _2">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faCss3}
                      color="#28a4d9"
                    />
                    <div>
                      <h3 className="skills_name">Css</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data _3">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faBootstrap}
                      color="#563d7c"
                    />
                    <div>
                      <h3 className="skills_name">Bootstrap</h3>
                      <span className="skills_level">Advance</span>
                    </div>
                  </div>
                  <div className="skills_data _4">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faJsSquare}
                      color="#efd81d"
                    />
                    <div>
                      <h3 className="skills_name">JavaScript</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data _5">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faMobileAlt}
                      color="#181818"
                    />
                    <div>
                      <h3 className="skills_name">Responsive Web Design</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="skills_group">
                  <div className="skills_data _6">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faSass}
                      color="#cd6799"
                    />
                    <div>
                      <h3 className="skills_name">Sass</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data _7">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faReact}
                      color="#61dbfb"
                    />
                    <div>
                      <h3 className="skills_name">React</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data _8">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faGit}
                      color="#4d4d4e"
                    />
                    <div>
                      <h3 className="skills_name">Git</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data _9">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faWind}
                      color="#4d4d4e"
                    />
                    <div>
                      <h3 className="skills_name">Tailwind</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                  <div className="skills_data _10">
                    <FontAwesomeIcon
                      className="skills-icons"
                      icon={faWordpress}
                      color="#21759b"
                    />
                    <div>
                      <h3 className="skills_name">Wordpress</h3>
                      <span className="skills_level">intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skill
