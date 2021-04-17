import React, { useRef } from "react";
import { Box, Button, Link, makeStyles } from "@material-ui/core";
import logo from "../assets/img/logo.png";
import "../helpers/stylesNav.css";
import classNames from "classnames";
import translator from "../assets/img/translator.svg";

const useStyles = makeStyles((theme) => ({
  sizeFont: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  translator: {
    "@media (max-width: 800px)": {
      display: "none!important",
    },
  },
  translatorCel: {
    "@media (min-width: 800px)": {
      display: "none!important",
    },
  },
  translatorA: {
    padding: "0px!important",
    minWidth: "35px!important",
    cursor: "pointer!important",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const navBarMenuRef = useRef();
  const navBarTogglerRef = useRef();

  const handleToggle = (e) => {
    e.currentTarget.classList.toggle("open-navbar-toggler");
    navBarMenuRef.current.classList.toggle("open");
  };

  const navbarAClick = () => {
    if (navBarMenuRef.current.classList.contains("open")) {
      // Ejecuto evento click al navbartoggler
      navBarTogglerRef.current.click();
    }
  };

  return (
    <div className="contNavbar">
      <nav className="navbar" id="navbar">
        <Link href="/" className="navbar-brand">
          <Box
            component="img"
            src={logo}
            alt="logo"
            style={{ verticalAlign: "middle" }}
          />
        </Link>

        <Box component="ul" className="listMenu" ref={navBarMenuRef}>
          <li>
            <Link
              href="#contact-title"
              underline="none"
              color="textPrimary"
              onClick={navbarAClick}
              className={classes.sizeFont}
            >
              Comunícate con ventas
            </Link>
          </li>
          <li>
            <Button
              className={classNames(classes.sizeFont, "btn-blue", "btn-pill")}
              style={{ padding: "4px 21px" }}
              onClick={navbarAClick}
            >
              Iniciar Sesión
            </Button>
          </li>
          <li className={classes.translator}>
            <Link className={classes.translatorA}>
              <Box
                component="img"
                src={translator}
                alt="Translator icon made with free pic"
                style={{ verticalAlign: "middle",marginLeft:"40px" }}
              />
            </Link>
          </li>
        </Box>

        <Link className={classes.translatorCel}>
          <Box
            component="img"
            src={translator}
            alt="Translator icon made with free pic"
            style={{
              verticalAlign: "middle",
              // display: "visible",
              position:"absolute",
              right:"80px",
              top: "28px",
            }}
          />
        </Link>
        <button
          className="navbar-toggler"
          ref={navBarTogglerRef}
          onClick={handleToggle}
        >
          <span></span>
        </button>
      </nav>
    </div>
  );
}
