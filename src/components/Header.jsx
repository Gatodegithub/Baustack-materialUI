import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import imgHeader from "../assets/img/Imagen Inicial.png";
import classNames from "classnames";
import PopUp from "./PopUp.jsx";
// import VideoHeader from "../assets/videos/Loop Intro.MOV"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "94px",
    [theme.breakpoints.only("md")]: {
      height: "calc(100vh - 254px)",
      paddingLeft: "72px",
      paddingRight: "72px",
    },
  },
  title: {
    [theme.breakpoints.up("md")]: {
      marginTop: ".5em",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: ".4em",
      fontSize: "4.5rem",
      paddingRight: "3.4em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
      paddingRight: "2em",
    },
  },
  description: {
    [theme.breakpoints.up("lg")]: {
      paddingRight: "8.3em",
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10em",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Container
      className={classNames(classes.root, "animate__animated animate__fadeIn animate__faster")}
      component="header"
    >
      <Grid container alignItems="flex-end">
        <Grid item sm={12} md={5}>
          <Typography variant="h1" className={classes.title}>
            Tablas inteligentes en la nube
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classNames(classes.description, "pb-1")}
          >
            Aprovecha las ventajas de trabajar en una base de datos, con la
            simpleza de una planilla Excel
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className="btn-pill"
            // onClick={() => setOpen(true)}
            href="#contact-title"
          >
            Empezar ahora
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          {/* <Box className="contVideo">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className="videoResponsive"
            >
              <source src={VideoHeader} type="video/mp4" />
            </video>
          </Box> */}
          <Box
            component="img"
            src={imgHeader}
            alt="Header img"
            style={{ width: "100%" }}
          ></Box>
        </Grid>
      </Grid>

      <PopUp openPopup={open} setPopup={setOpen} />
    </Container>
  );
}
