import Loader from "react-loaders";
import "./index.scss"

import React, { useEffect, useRef, useState } from 'react';
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {

    const [letterClass,setLetterClass]= useState('text-animate');

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    },[])

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs
        .sendForm(
          'service_kcjw3w3',
          'template_w7jcs2m',
          refForm.current,
          'OnxTgHTPgbDiAI4lN'
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                letterClass={letterClass}
                idx={15}
              />
            </h1>
            <p>
              I am interested in unique opportunities - especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-map">
            Amijot Singh <br />
            India
            <br />
            Ludhiana
            <br />
            <span>singh.ubhi47@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer
              center={[30.901830035414864, 75.85620033323744]}
              zoom={10}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[30.901830035414864, 75.85620033323744]}>
                <Popup>
                  Amijot lives here, come over for a cup of coffee &#128521; 
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
};

export default Contact;