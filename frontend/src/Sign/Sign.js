// Sign.js

import React, { useState } from 'react';
import styles from './Sign.module.css';
import Sign_up from './Sign_in_up_component/Sign_up';
import Sign_in from './Sign_in_up_component/Sign_in';

const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(prevState => !prevState);
  };

  return (
    <>
      <div className={styles.SignContainer}>
        <div className={styles.SwitchContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              className={`${styles.toggle} toggle`}
              checked={isSignUp}
              onChange={toggleForm}
            />
            <span className={styles.slider}></span>
            <div className={styles.sliderLabel}>{isSignUp ? 'Sign up' : 'Sign in'}</div>
          </label>
        </div>
      </div>

      {isSignUp ? <Sign_up /> : <Sign_in />}
    </>
    
  );
};

export default Sign;
