import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/header.css";
import NormalHeader from "./NormalHeader";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const [countBtnNum, setCountBtnNum] = useState(1);
  const [width, setWidth] = useState(0);
  const [isShowHumberger, setIsShowHumberger] = useState(true);
  const [scrollTop20, setScrollTop20] = useState(false);
  // if scrollTop > 20 change to backgroungColor for header
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop20]);
  function handleScroll() {
    if (document.documentElement.scrollTop > 20) {
      setScrollTop20(true);
    } else {
      setScrollTop20(false);
    }
  }
  // Resposnsive Header
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    width >= 768 ? setIsShowHumberger(false) : setIsShowHumberger(true);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return (
    <header
      style={
        scrollTop20
          ? { backgroundColor: "#e8c4c4", color: "#f2e5e5" }
          : { backgroundColor: "#f2e5e5" }
      }
    >
      {isShowHumberger ? (
        <ResponsiveHeader />
      ) : (
        <NormalHeader
          countBtnNum={countBtnNum}
          setCountBtnNum={setCountBtnNum}
        />
      )}
    </header>
  );
};

export default Header;
