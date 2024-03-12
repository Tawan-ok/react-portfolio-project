import React from 'react'
import styles from './Service.module.css'
import {FaCode,FaPaintbrush,FaDesktop}  from "react-icons/fa6"
function Services() {
  return (
    <div className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_item}>
                <FaCode/>
                <h4>Web Development</h4>
                <p>
                    information
                </p>
            </div>
            <div className={styles.services_item}>
                <FaPaintbrush/>
                <h4>Web Development</h4>
                <p>
                    information
                </p>
            </div>
            <div className={styles.services_item}>
                <FaDesktop/>
                <h4>Web Development</h4>
                <p>
                    information
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services