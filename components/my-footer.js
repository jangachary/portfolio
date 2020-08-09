import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'


const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = 2;

export default function MyFooter() {

  const durations = [0.9, 0.7, 0.5, 0.2, 1.3];
  // const durations = [0.1, 0.4, 0.1, 0.4, 0.1];


  return <div>
    <div
      className={styles.sticky}>
      {
        durations.map((d) => {
          return <BouncingBall d={d} key={d} />
        })
      }
    </div>
    <footer className={styles.footer}>
      &#128151;
  </footer>
  </div>
    ;

}

function BouncingBall(props) {
  const { d } = props;


  const ballStyle = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "black",
    borderRadius: "0.5rem"
  };

  const r=Math.random() * (0.9 - 0.2) + 0.2;
  const bounceTransition = {
    y: {
      duration: r,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: r
    }
  }


  return (

    <div

    // style={{
    //   width: "2rem",
    //   height: "2rem",
    //   display: "flex",
    //   justifyContent: "space-around",
    // }}
    >
      <motion.div
        // style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          // backgroundColor: ["#6666ff", "#6666ff"],
        }}
      >
        <img src="./images/cat.png" className={styles.icon} />
      </motion.div>
    </div>
  )
}