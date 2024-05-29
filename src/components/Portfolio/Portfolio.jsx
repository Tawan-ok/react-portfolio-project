import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import Tilt from 'react-parallax-tilt';
import NannyRightNow from '../../assets/NannyRightNow.jpg';
import Memo from '../../assets/memo.jpg';
import NannyRightNowVideo from '../../assets/nannyrightnow.mp4';
import HotTrain from '../../assets/Hot train.jpg'
function Portfolio() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_item}>
          {!showVideo ? (
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img
                src={NannyRightNow}
                alt="Nanny Right Now"
                onClick={() => setShowVideo(true)}
                style={{ cursor: 'pointer' }}
              />
            </Tilt>
          ) : (
            <video
              width="300"
              height="300"
              controls
              autoPlay
              loop
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            >
              <source src={NannyRightNowVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <p>Project: <a href="https://gitlab.com/Tawan-ok/senior_ict.git" >NannyRightNow</a></p> 
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <a href="https://memo-website-pi.vercel.app/">
              <img src={Memo} alt="Memo" />
            </a>
          </Tilt>
          <p>Project: <a href="https://github.com/Tawan-ok/memo-website">Memo Website</a> </p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lottery"
            />
          </Tilt>
          <p>Project: <a href="https://github.com/Tawan-ok/Lottory">Lottery</a></p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Weather360"
            />
          </Tilt>
          <p>Project: <a href="https://github.com/Tawan-ok/Weather360">Weather360</a> </p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chat"
            />
          </Tilt>
          <p>Project: Chat</p>
        </div>
        <div className={styles.port_item}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={HotTrain}
              alt="Movie Rating"
            />
          </Tilt>
          <p>Project: Hot train</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
