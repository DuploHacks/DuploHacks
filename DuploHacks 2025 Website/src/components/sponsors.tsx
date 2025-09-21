import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/Sponsors.css"
import hackclubLogo from '../assets/hackclub.png';
import codeCraftersLogo from '../assets/CodeCrafters.png';
import interviewCakeLogo from '../assets/interviewcake.png';
import youthCreativityFundLogo from '../assets/youthcreativityfund.png';

function Sponsors() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.18
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <motion.div
      className="sponsors-container"
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative SVG Wave Transition */}
      <div className="sponsors-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width: '100%', height: '180px', display: 'block'}}>
          <path d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z" fill="#240043" />
        </svg>
      </div>
      <motion.div className="sponsors-grayheading" variants={itemVariants}>
        [THANK YOU TO]
      </motion.div>

      <motion.div className="sponsors-heading" variants={itemVariants}>
        OUR SPONSORS
      </motion.div>

      <motion.div className="sponsors-flex" variants={containerVariants}>
        <motion.div className="sponsors-row sponsors-row-top" variants={itemVariants}>
          <motion.a 
            href="https://hackclub.com" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={logoVariants}
            whileHover="hover"
          >
            <img className="sponsor-image hackclub-logo" src={hackclubLogo} alt="Hack Club" loading="lazy" />
          </motion.a>
          <motion.a 
            href="https://codecrafters.io" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={logoVariants}
            whileHover="hover"
          >
            <img className="sponsor-image codecrafters-logo" src={codeCraftersLogo} alt="CodeCrafters" loading="lazy" />
          </motion.a>
        </motion.div>
        <motion.div className="sponsors-row sponsors-row-bottom" variants={itemVariants}>
          <motion.a 
            href="https://www.interviewcake.com" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={logoVariants}
            whileHover="hover"
          >
            <img className="sponsor-image interviewcake-logo" src={interviewCakeLogo} alt="Interview Cake" loading="lazy" />
          </motion.a>
          <motion.a 
            href="https://youthcreativityfund.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={logoVariants}
            whileHover="hover"
          >
            <img className="sponsor-image youthcreativityfund-logo" src={youthCreativityFundLogo} alt="Youth Creativity Fund" loading="lazy" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Sponsors; 