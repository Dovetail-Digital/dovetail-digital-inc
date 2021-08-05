/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { jsx } from "theme-ui";
import { keyframes } from '@emotion/react'
import { FaChevronDown } from 'react-icons/fa';

export default function ScrollToContent() {
  const [isVisible, setIsVisible] = useState(false);
  const link = "about";

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset < 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div sx={styles.sticky}>
      {isVisible && (
        <Link
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
        >
          {<FaChevronDown sx={styles.arrow}/>}
        </Link>
      )}
    </div>
  );
}


const bounce = keyframes`
from, 20%, 53%, 80%, to {
  transform: translate3d(0,0,0);
}

40%, 43% {
  transform: translate3d(0, -30px, 0);
}

70% {
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0,-4px,0);
}
`

const styles = {
  sticky: {
    position: 'absolute',
    top: 'calc(100vh - 60px)',
    width: '100%',
    animation: `${bounce} 2s infinite` ,

  },
  arrow: {
    cursor: 'pointer',
    fontWeight: 'bold',
    position: "absolute",
    color: '#fff',
    fontSize: '40px',
    top: 0,
    left: "50%",
    transform: 'translate(-50%, -50%)',
    width: "48px",
    height: "48px",
    boxSizing: "border-box",
  },
};
