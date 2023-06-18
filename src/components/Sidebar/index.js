import { Link, NavLink } from "react-router-dom";
import "./index.scss"
import LogoS from "../../assets/images/color.logo.png"
import LogoSubtitle from "../../assets/images/my-name.png"

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope, faGear, faGraduationCap, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {

    const [showNav,setShowNav] = useState(false);

    return (
      <div class="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="amijot" />
        </Link>
        <nav className={showNav ? 'mobile-show': '' }>
          <NavLink onClick={() => setShowNav(false)} exact="true" activeClassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setShowNav(false)}
            exact="true"
            activeClassName="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setShowNav(false)}
            exact="true"
            activeClassName="active"
            className="skill-link"
            to="/skill"
          >
            <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setShowNav(false)}
            exact="true"
            activeClassName="active"
            className="study-link"
            to="/study"
          >
            <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setShowNav(false)}
            exact="true"
            activeClassName="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon  onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className="close-icon"/>
        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="/">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://join.skype.com/invite/uSmAmQkI0QmI"
            >
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    )
};

export default Sidebar;