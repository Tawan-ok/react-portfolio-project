import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profilePic from "../../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi ,it's me</p>
            <h3 className={styles.text_2}>Tawan-ok Ruekveerawattana</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}> I'm a </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Software Engineering",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              About me <br />
              I am a strong interest in coding and a positive mindset <br />
               and I am eager to learn and grow as a programmer <br />
            </p>
            <ul className={styles.hero_social}>
              <li>
                {" "}
                <a href="https://github.com/Tawan-ok">
                  <FaGithub />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/in/tawanoak-ruekveerawattana-557340214/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}>
              <img src={profilePic} alt="profile pic" />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
