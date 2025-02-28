"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.98);
  z-index: 9999;
`;

const LoaderContainer = styled(motion.div)`
  width: 64px;
  height: 64px;
  position: relative;
`;

const LoaderCircle = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #3498db;
  box-sizing: border-box;
`;

const SplashScreen = () => {
  return (
    <SplashContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoaderContainer>
        <LoaderCircle
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <LoaderCircle
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: "75%",
            height: "75%",
            top: "12.5%",
            left: "12.5%",
            borderTopColor: "#2ecc71",
          }}
        />
      </LoaderContainer>
    </SplashContainer>
  );
};

export default SplashScreen;
