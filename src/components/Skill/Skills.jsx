import React from 'react'
import styles from './Skills.module.css'
import {FaSquareJs,FaReact,FaSass,FaGitAlt ,FaNode ,FaJava }  from "react-icons/fa6"
import { SiSpringboot } from "react-icons/si";

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaSquareJs/>
            </li>
            <li>
                <FaJava/>
            </li>
            <li>
                <FaReact/>
            </li>
            <li>
               <SiSpringboot />
            </li>
            <li>
                <FaGitAlt/>
            </li>
            <li>
                <FaNode/>
            </li>


        </ul>
    </div>
  )
}

export default Skills