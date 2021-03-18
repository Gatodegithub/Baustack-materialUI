import React from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { services } from "../helpers/dataServices";
import classNames from "classnames";
import crm from "../assets/img/Servicess/crm.svg";
import gc from "../assets/img/Servicess/gestionCausas.svg";
import cv from "../assets/img/Servicess/contratosVencer.svg";
import cp from "../assets/img/Servicess/controlPolizas.svg";
import pe from "../assets/img/Servicess/planifEventos.svg";
import gp from "../assets/img/Servicess/gestionProyects.svg";

const arrIcons = [crm, gc, cv, cp, pe, gp];

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "245px",
    borderRadius: "15px",
  },
  card: {
    height: "100%",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  carDescription: {
    padding: "30px 0px 0px",
  },
  titlePadding: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "6em",
      paddingLeft: "6em",
    },
    fontWeight: "bold",
  },
  contCard: {
    [theme.breakpoints.up("md")]: {
      padding: "0px 17em",
    },
    "& div:nth-child(3)": {
      "& img": {
        marginLeft: "1.2em",
      },
    },
    "& div:nth-child(6)": {
      "& img": {
        marginLeft: "1.2em",
      },
    },
  },
}));

function ServiceCard({ title, arrImg, description, id }) {
  const classes = useStyles();

  return (
    <Box boxShadow={14} className={classes.paper}>
      <Card className={classes.card}>
        <Typography
          variant="h6"
          align="center"
          style={{ paddingTop: "15px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <CardContent align="center">
          <Box component="img" src={arrImg[id]} width="120px"></Box>
          <Typography color="textSecondary" className={classes.carDescription}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function Services() {
  const classes = useStyles();

  const getData = (service) => {
    return (
      // Le paso todas las propiedades con su valor al componente y termino retornando la grilla con la tarjeta. solo que en dos pasos (funciones)
      <Grid
        key={service.id}
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ServiceCard {...service} arrImg={arrIcons} />
      </Grid>
    );
  };

  return (
    <Container component="main">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className={classNames(classes.titlePadding, "pt-3", "pb-3")}
      >
        Estas son algunas de las aplicaciones que puedes crear con Baustack:
      </Typography>
      <Grid container spacing={3} className={classes.contCard}>
        {/* Lo mejor para recorrer un elemento es enviar el dato a una funcion. */}
        {services.map((service) => getData(service))}
      </Grid>
      <Grid container>
        <Grid item xs={12} align="center">
          <Typography
            variant="h4"
            className="pt-3 pb-4"
            style={{ fontWeight: "bold", color: "#F89321" }}
          >
            ...y muchas más!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
