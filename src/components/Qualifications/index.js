import './index.scss'
import AnimatedLetter from '../AnimatedLetters'

import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendar, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Qualification = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container quali-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              strArray={[
                'Q',
                'u',
                'a',
                'l',
                'i',
                'f',
                'i',
                'c',
                'a',
                't',
                'i',
                'o',
                'n',
              ]}
              letterClass={letterClass}
              idx={15}
            />
          </h1>

          <div className="qualification_container">
            <div className="qualification_tabs">
              <div
                className={
                  toggleState === 1
                    ? 'qualification_button qualification_active button--flex'
                    : 'qualification_button button--flex'
                }
                onClick={() => toggleTab(1)}
              >
                <FontAwesomeIcon
                  className="qualification_icon"
                  icon={faUserGraduate}
                />{' '}
                Education
              </div>
              <div
                className={
                  toggleState === 2
                    ? 'qualification_button qualification_active button--flex'
                    : 'qualification_button button--flex'
                }
                onClick={() => toggleTab(2)}
              >
                <FontAwesomeIcon
                  className="qualification_icon"
                  icon={faBriefcase}
                />{' '}
                Experience
              </div>
            </div>

            <div className="qualification_sections">
              <div
                className={
                  toggleState === 1
                    ? 'qualification_content qualification_content-active'
                    : 'qualification_content'
                }
              >
                <div className="qualification_data">
                  <div>
                    <h3 className="qualification_title">Non-Medical</h3>
                    <span className="qualification_subtitle">
                      TSSM Sen. Secondary School - Ludhiana
                    </span>
                    <div className="qualification_calender">
                      <FontAwesomeIcon icon={faCalendar} />
                      2014 - 2016
                    </div>
                  </div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>

                <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div>
                    <h3 className="qualification_title">
                      Bachelor of Engineering in Mechanical
                    </h3>
                    <span className="qualification_subtitle">
                      Punjab technical university - Jalandhar
                    </span>
                    <div className="qualification_calender">
                      <FontAwesomeIcon icon={faCalendar} />
                      2016 - 2020
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2
                    ? 'qualification_content qualification_content-active'
                    : 'qualification_content'
                }
              >
                <div className="qualification_data">
                  <div>
                    <h3 className="qualification_title">Frontend Developer</h3>
                    <span className="qualification_subtitle">
                      Infino Digital Agency - Ludhiana
                    </span>
                    <div className="qualification_calender">
                      <FontAwesomeIcon icon={faCalendar} />
                      10/2020 - 07/2022
                    </div>
                  </div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>

                <div className="qualification_data">
                  <div></div>

                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div>
                    <h3 className="qualification_title">System Engineer</h3>
                    <span className="qualification_subtitle">
                      Infosys - Chandigarh
                    </span>
                    <div className="qualification_calender">
                      <FontAwesomeIcon icon={faCalendar} />
                      2022 - Ongoing
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

export default Qualification
