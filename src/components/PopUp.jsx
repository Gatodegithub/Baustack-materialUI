import React from "react";
import {
  TextField,
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import whatsapp from "../assets/img/whatsapp.svg";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      boxShadow:
        "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
    },
    "& .MuiFormControl-marginNormal": {
      marginTop: "16px",
      marginBottom: "0px",
    },
  },

  rootDialog: {
    "& .MuiTypography-root.MuiTypography-h3": {
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px",
      position: "relative",
      "& .MuiIconButton-root": {
        position: "absolute",
        right: 0,
        top: 0,
        [theme.breakpoints.down("sm")]: {
          top: "-10px",
          right: "-20px",
        },
        "& svg": {
          [theme.breakpoints.up("md")]: {
            fontSize: "50px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
          },
        },
      },
    },
  },

  wsp: {
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
    '& p':{
      color: "#4CC35C",
      fontWeight: "bold"
    }
  },

  listPopup: {
    listStyle: "none",
    textAlign: "center",
    paddingLeft: "0px",
    position: "relative",
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "3px",
      "& p": {
        color: "#000000",
      },
    },
  },
  
  emailRounded: {
    backgroundColor: "#2680EB",
    color: "#fff",
    padding: "8px",
    borderRadius: "50px",
    marginRight: "10px",
    fontSize: "45px",
  },
}));

export default function PopUp(props) {
  const classes = useStyles();

  const { openPopup, setPopup } = props;

  const handleToggle = () => {
    setPopup(false);
  };

  return (
    <Dialog
      open={openPopup}
      className={classes.rootDialog}
      onClose={() => setPopup(false)}
    >
      <DialogTitle align="center">
        <Typography variant="h3" gutterBottom>
          Contáctanos
          <IconButton className="xBtn" color="primary" onClick={handleToggle}>
            <CancelRoundedIcon />
          </IconButton>
        </Typography>
        <Typography align="center" style={{ fontSize: "20px" }}>
          Te responderemos en seguida para agendar una demostración para tu
          empresa
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container justify="center" className={classes.root}>
          <Grid item xs={10} sm={6} md={10} align="center">
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <TextField
                id="outlined-basic"
                label="Teléfono"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Mensaje"
                required
                multiline
                rows={5}
                rowsMax={8}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button
                className="btn-pill btn-blue"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  marginTop: "1em",
                  marginBottom: "3.5em",
                  fontSize: "1.2em",
                }}
              >
                Enviar
              </Button>
            </form>
          </Grid>

          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography
                align="center"
                style={{ fontSize: "20px" }}
                className="pb-1"
              >
                También nos puedes llamar o escribir directamente por los
                siguientes canales:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box component="ul" className={classes.listPopup} m={1}>
                <li>
                  <CallRoundedIcon className={classes.emailRounded} />
                  <Typography>(+569) 9451 5329</Typography>
                </li>
                <li>
                  <CallRoundedIcon className={classes.emailRounded} />
                  <Typography>(+569) 8804 0293</Typography>
                </li>
                <li>
                  <EmailRoundedIcon
                    style={{
                      backgroundColor: "#2680EB",
                      color: "#fff",
                      padding: "8px",
                      borderRadius: "50px",
                      marginLeft: "15px",
                      fontSize: "45px",
                    }}
                  />
                  <Typography style={{ marginLeft: "11px" }}>
                    info@baustack.com
                  </Typography>
                </li>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                className={classes.wsp}
              >
                <Link
                  href="true"
                  underline="none"
                  style={{ cursor: "pointer" }}
                >
                  <Box component="img" src={whatsapp} width="80px"></Box>
                  <Typography>
                    Whatsapp
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
