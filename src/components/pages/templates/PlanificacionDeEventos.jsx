import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import Videos from "../../../assets/videos/Una fuente de información.MOV";

const useStyles = makeStyles((theme) => ({
  templateImg: {
    backgroundImage:
      "url(https://dl.airtable.com/exploreCoverImages%2FwOwJj7EzR92l1n1GZCcB_play-stone-network-networked-interactive-163064.jpeg)",
    height: "200px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "6px",
    marginBottom: "2em",
  },
  useTemplate: {
    marginTop: "15px",
    fontSize: "19px",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
      width: "100%",
    }
  },
  marginVideo: {
    [theme.breakpoints.up("md")]: {
      marginRight: "230px",
    },
  },
}));

export default function Crm() {
  const classes = useStyles();

  return (
    <Grid container className="animate__animated animate__fadeIn">
      <Grid item xs={12} lg={12}>
        <Box className={classes.templateImg}></Box>
      </Grid>
      <Grid item sm={12} md={8} lg={8}>
        <Box>
          <Typography
            variant="h3"
            align="left"
            style={{ fontWeight: 500 }}
            gutterBottom
          >
            Planificación De Eventos
          </Typography>
          <Typography color="textPrimary">
            Most CRM products make a few too many assumptions about how a CRM
            should work for you. We don't pretend to understand your business
            better than you do. Get this lightweight CRM up and running in a
            matter of minutes and customize it to fit your unique needs today.
            <br />
            <br />
            This template is perfect for startup founders, entrepreneurs, and
            small business owners who need to manage relationships of all types.
            <br />
            <br />
            It will give you a starting point to manage many different important
            strategic relationships for your startup or small business,
            including but not limited to customers, distribution partners,
            investors, and PR firms.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} lg={4} align="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.useTemplate}
        >
          Usar template
        </Button>
      </Grid>
      <Grid item xs={12} md={12} className="pt-3">
        <Box className={classNames(classes.marginVideo, "contVideo")}>
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
  );
}
