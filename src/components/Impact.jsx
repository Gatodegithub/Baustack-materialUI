import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import pR from "../assets/img/peopleRelog.svg";
import wR from "../assets/img/worldRelog.svg";
import cR from "../assets/img/calendarRelog.svg";
import pT from "../assets/img/peopleTeach.svg";
import pG from "../assets/img/peopleGraphics.svg";
import tC from "../assets/img/twoCircle.svg";

const useStyles = makeStyles((theme) => ({
  centerRow1: {
    [theme.breakpoints.up("md")]: {
      display:"flex",
      flexDirection:"column",
      alignItems:"right"
    },
    [theme.breakpoints.down("md")]: {
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }
  },
  centerRow2: {
    [theme.breakpoints.up("md")]: {
      display:"flex",
      flexDirection:"column",
      alignItems:"left"
    },
    [theme.breakpoints.down("md")]: {
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }
  }
}));

export default function Impact() {
  const classes = useStyles();

  return (
    <Grid container style={{backgroundColor: "#fafafa",marginTop:"-12px"}}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          className="pt-2 pb-2"
          style={{ color: "#2B2C5D" }}
        >
          El impacto de utilizar Baustack
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} align="right" className={classes.centerRow1}>
        <Box style={{padding:"2em"}}>
          <Box
            style={{ display: "flex", flexDirection: "row", width: "325px" }}
          >
            <img src={pR} alt="People Relog" style={{ marginRight: "1.7em" }} />
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              style={{
                paddingRight: "2em",
                fontSize: "1.2rem",
                lineHeight: "1.3",
              }}
            >
              <span
                style={{
                  color: "#773090",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                }}
              >
                3 Horas <b></b>
              </span>
              a la semana ahorradas en promedio por cada empleado
            </Typography>
          </Box>
        </Box>

        <Box style={{padding:"1em 2em 2em"}}>
          <Box
            style={{ display: "flex", flexDirection: "row", width: "325px" }}
          >
            <img
              src={wR}
              alt="People Relog"
              style={{ marginRight: "1.7em", alignSelf: "flex-start" }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              style={{
                paddingRight: "2em",
                fontSize: "1.2rem",
                lineHeight: "1.3",
              }}
            >
              <span
                style={{
                  color: "#773090",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                }}
              >
                15.600 Horas <b></b>
              </span>
              ahorradas por empresas semanalmente usando Baustack
            </Typography>
          </Box>
        </Box>

        <Box style={{padding:"0em 2em 2em"}}>
          <Box
            style={{ display: "flex", flexDirection: "row", width: "325px" }}
          >
            <img src={cR} alt="People Relog" style={{ marginRight: "1.7em" }} />
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              style={{ paddingRight: "2em", fontSize: "1.2rem" }}
            >
              Payback time
              <br />
              <span
                style={{
                  color: "#773090",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                }}
              >
                menor a 3 meses <b></b>
              </span>
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* SEGUNDA COLUMNA */}

      <Grid item xs={12} md={6} className={classes.centerRow2}>
        <Box style={{padding:"2.5em 2em 2em"}}>
          <Box
            style={{ display: "flex", flexDirection: "row", width: "325px" }}
          >
            <img src={pT} alt="People Teach" style={{ marginRight: "1.7em" }} />
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ fontSize: "1.2rem", lineHeight: "1.3" }}
            >
              <span
                style={{
                  color: "#773090",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  paddingRight: "35px",
                }}
              >
                50% de reducción <br />
              </span>
              en tiempo de reuniones de coordinación
            </Typography>
          </Box>
        </Box>

        <Box style={{padding:"2em 2em 2em"}}>
          <Box
            style={{ display: "flex", flexDirection: "row", width: "325px" }}
          >
            <img
              src={pG}
              alt="People Graphics"
              style={{ marginRight: "1.7em", alignSelf: "flex-start" }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              style={{
                paddingRight: "1.9em",
                fontSize: "1.2rem",
                lineHeight: "1.3",
              }}
            >
              <span
                style={{
                  color: "#773090",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                }}
              >
                27% de reducción <b></b>
              </span>
              en tiempo de presentaciones para seguimiento a proyectos
            </Typography>
          </Box>
        </Box>

        <Box style={{padding:"0em 2em 2em"}}>
          <Box
            style={{ display: "flex", flexDirection: "row", width: "347px" }}
          >
            <img
              src={tC}
              alt="Two Circle"
              style={{ marginRight: "1.7em", alignSelf: "flex-start" }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              align="left"
              style={{ fontSize: "1.2rem", lineHeight: "1.3" }}
            >
              <span
                style={{
                  color: "#773090",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  paddingRight: "1.4em",
                }}
              >
                Mayor transparencia
                <br /> y responsabilidad
                <br />
              </span>
              mayor nivel de participación de empleados y feedback positivo de
              clientes
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
