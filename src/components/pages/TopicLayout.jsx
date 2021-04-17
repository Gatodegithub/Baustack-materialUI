import React from "react";
import {
  Container,
  Grid,
  Hidden,
  makeStyles,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Crm from "./templates/Crm";
import GestionDeCausas from "./templates/GestionDeCausas";
import ContratosPorVencer from "./templates/ContratosPorVencer";
import ControlDePolizas from "./templates/ControlDePolizas";
import PlanificacionDeEventos from "./templates/PlanificacionDeEventos";
import GestionDeProyectos from "./templates/GestionDeProyectos";
import MenuMovil from "./MenuMovil";
import { Link } from "react-router-dom";
import Sticky from "wil-react-sticky";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "94px",
    [theme.breakpoints.only("md")]: {
      paddingRight: "72px",
      paddingLeft: "72px",
    },
  },
  menu: {
    padding: "40px 0px 0px",
    outline:"none",
    "& li": {
      padding: 0,
      "&:hover": {
        backgroundColor: "#fff",
      },
    },
    "& a": {
      wordWrap: "break-word",
      width: "100%",
      height: "100%",
      padding: "20px",
      textDecoration: "none",
      color: [theme.palette.text.secondary],
      "&:hover": {
        color: [theme.palette.text.primary],
      },
    },
  },
}));

export default function TopicLayout({ topicId }) {
  const classes = useStyles();

  function TopicTemplate() {
    switch (topicId) {
      case "crm":
        return <Crm />;
      case "gestiondecausas":
        return <GestionDeCausas />;
      case "contratosporvencer":
        return <ContratosPorVencer />;
      case "controldepolizas":
        return <ControlDePolizas />;
      case "planificaciondeeventos":
        return <PlanificacionDeEventos />;
      case "gestiondeproyectos":
        return <GestionDeProyectos />;
      default:
        break;
    }
  }

  return (
    <>
      <NavBar />
      <Container className={classes.root}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            align="center"
            id="containerSelectorFocus"
          >
            <Hidden mdUp>
              <MenuMovil />
            </Hidden>
            <Hidden smDown>
              <Sticky
                containerSelectorFocus="#containerSelectorFocus"
                offsetTop={100}
                stickyEnableRange={[768, Infinity]}
              >
                <MenuList className={classes.menu}>
                  <MenuItem disableRipple>
                    <Link to="/crm">Crm</Link>
                  </MenuItem>
                  <MenuItem disableRipple>
                    <Link to="/gestiondecausas">Gestion de causas</Link>
                  </MenuItem>
                  <MenuItem disableRipple>
                    <Link to="/contratosporvencer">Contratos Por Vencer</Link>
                  </MenuItem>
                  <MenuItem disableRipple>
                    <Link to="/controldepolizas">Control De Polizas</Link>
                  </MenuItem>
                  <MenuItem disableRipple>
                    <Link to="/planificaciondeeventos">
                      Planificacion De Eventos
                    </Link>
                  </MenuItem>
                  <MenuItem disableRipple>
                    <Link to="/gestiondeproyectos">Gestión De Proyectos</Link>
                  </MenuItem>
                </MenuList>
              </Sticky>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            {TopicTemplate()}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
