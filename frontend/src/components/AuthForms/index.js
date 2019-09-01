import React from "react";
import styles from "./styles.scss";
import Ionicon from "react-ionicons"
export const LoginForm = props => (
   <div className ={styles.formComponent}>
       <form className={styles.form}>
           <input type="text" placeholder="Username" className={styles.textInput} />
           <input
            type="password"
            placeholder="Password"
            className ={styles.textInput}
            />
            <input type="submit" value="Log in" className={styles.button} />
       </form>
       <span className={styles.divider}>OR</span>
       <span className={styles.facebookLink}>
           <Ionicon icon = "logo-facebook" fontSize="20px" color="#385185" /> Log in with Facebook
       </span>
       <span className={styles.forgotLink}>Forgot password?</span>
   </div>
);

export const SignupForm = props => (
    <div className={styles.formComponent}>
        <h3>Sign up to see photos and videos from your friends.</h3>
        <button className={styles.button}>
        <Ionicon icon="logo-facebook" fontsize="20px" color="white" />Log in with Facebook
        </button>
        <span className={styles.divider}>or</span>
        <form className={styles.form}>
            <input type="email" placeholder="Mobile Number or Email" className={styles.textInput}></input>
            <input type="text" placeholder="Full Name" className={styles.textInput}></input>
            <input type="text" placeholder="Username" className={styles.textInput}></input>
            <input type="password" placeholder="Password" className={styles.textInput}></input>
            <input type="submit" value="Sign up" className={styles.button}></input>
            <p>
            By signing up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy</span> .
            </p>
        </form>
    </div>
);