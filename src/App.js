import React from "react";
import NavBar from "./components/NavBar.jsx";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Heros from "./components/Heros.jsx";
import Demos from "./components/Demos.jsx";
import Contact from "./components/Contact.jsx";
import classNames from "classnames";
import Videos from "./assets/videos/Intro Baustack.mp4";
// import { useStyles } from "./helpers/globalAppClasses";
import Impact from "./components/Impact.jsx";
import WhoWork from "./components/WhoWork.jsx";
import Testimonials from "./components/Testimonials.jsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import NavBar from "./components/NavBar.jsx";
// import { useTheme } from "@material-ui/core/styles";
/* DEBO IMPORTAR LOS VIDEOS Y LAS IMAGENES YA QUE NO PUEDO PONER PATH DIRECTAMENTE */
// DEBO AÑADIR MUTED A LA ETIQUETA VIDEO PARA QUE SE REPRODUSCA SOLO

const useStyles = makeStyles((theme) => ({
  textColor: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "4.8em",
      paddingLeft: "4.8em",
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      <NavBar />
      <Header />
      {/* VIDEO PRINCIPAL */}
      <Container>
        <Grid container justify="center" component="section">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              className={classNames(
                classes.textColor,
                "pb-2",
                matches ? "h4InCel" : ""
              )}
              color="secondary"
              style={{ paddingTop: "3.5em" }}
            >
              Crear tu propia aplicación con tablas inteligentes nunca fue tan
              fácil, no necesitas saber de programación!
            </Typography>
          </Grid>
          <Grid item xs={11} sm={10} md={7} align="center">
            <Box className="contVideo">
              <video
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
                className="videoResponsive"
              >
                <source src={Videos} type="video/mp4" />
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Services />

      {/* HERO ONE */}
      <Heros
        title="Gestiona todo en Baustack"
        description="¡Incluye fechas, checkboxes, documentos, alertas de vencimiento y mucho más!"
        color="secondary"
        variant="contained"
        bg={"#F89321"}
        textColor="#fff"
      />
      <Demos />
      {/* HERO TWO */}
      <div id="hero2">
        <Heros
          title="Prueba Baustack con tu equipo"
          description="Prueba gratuita de 14 días | No se requiere tarjeta de crédito"
          light
          variant="contained"
          bg="#773090"
          textColor="#fff"
        />
      </div>

      <Impact />
      <WhoWork />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
