import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme)=>({
  descriptionPadding: {
    fontSize: "24px",
    [theme.breakpoints.up("lg")]: {
      paddingRight: "325px",
      paddingLeft: "325px"
    },
    [theme.breakpoints.only("md")]: {
      paddingRight: "250px",
      paddingLeft: "250px"
    }
  },
  // title: {
  //   fontWeight: "bold",
  // }
}));

export default function Heros({title, description, color, variant, bg, textColor}) {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <Grid
        container
        justify="center"
        spacing={2}
        align="center"
        style={{ backgroundColor: `${bg}`, padding: "3em 0px", color: `${textColor}`}}
      >
        <Grid item xs={12}>
          <Typography variant="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="p" className={classes.descriptionPadding} gutterBottom>
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color={color} variant={variant} className="btn-pill" size="large">
            Empezar ahora
          </Button>
        </Grid>
      </Grid>
      ;
    </Container>
  );
}
