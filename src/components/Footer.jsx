import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import logo from "../assets/img/logo.png";
import phone from "../assets/img/telephone-fill.svg";
import facebook from "../assets/img/face.svg";
import instagram from "../assets/img/insta.svg";
import linkedin from "../assets/img/linked.svg";

const useStyles = makeStyles({
  footBorder: {
    borderTop: "1px solid #dee2e6",
    marginTop: "2rem",
  },
  list1: {
    listStyle: "none",
    paddingLeft: 10,
    "& li::before": {
      position: "relative",
      content: `url(${phone})`,
      left: "-10px",
    },
  },
  list2: {
    display: "flex",
    listStyle: "none",
    paddingLeft: "0",
    "& img": {
      width: "45px",
    },
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Container component="footer" className={classes.footBorder}>
      <Grid container spacing={2} style={{ marginTop: "2rem" }}>
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} sm={12} md={3} align="left">
          <img src={logo} alt="logo" />
          <Typography color="textSecondary" gutterBottom>
            Crea tus propias aplicaciones en la nube de forma autónoma, sin la
            necesidad de conocimientos técnicos.
          </Typography>
          <Box component="ul" className={classes.list1}>
            <li>(+569) 9451 5329</li>
            <li>(+569) 8804 0293</li>
            <li>info@baustack.com</li>
          </Box>
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Typography variant="h4" gutterBottom>
            Links importantes
          </Typography>
          <Typography color="textSecondary">
            Templates
            <br />
            Pricing
            <br />
            FAQ
            <br />
            Términos de uso
            <br />
            Política de privacidad
            <br />
          </Typography>
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Typography variant="h4" gutterBottom>
            Síguenos en:
          </Typography>
          <Box component="ul" className={classes.list2}>
            <li>
              <img src={facebook} alt="facebookLogo" />
            </li>
            <li style={{ margin: "0px 10px" }}>
              <img src={instagram} alt="instagramLogo" />
            </li>
            <li>
              <img src={linkedin} alt="linkedinLogo" />
            </li>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            color="textSecondary"
            align="center"
            style={{ padding: "2rem 0" }}
          >
            2021 Todos los derechos reservados baustack.com
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
