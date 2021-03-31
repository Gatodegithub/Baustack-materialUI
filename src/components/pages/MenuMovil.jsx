import {
  Button,
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    fontSize: "18px",
    fontWeight: 500,
  },
  paper: {
    width: "300px",
    "& li": {
      padding: "0",
      "& a": {
        padding: "20px",
        width: "100%",
        height: "100%",
        textDecoration: "none",
        color: [theme.palette.text.secondary],
        fontSize: "18px",
      },
    },
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.menuBtn}
        disableTouchRipple
        endIcon={
          <ArrowDropDownIcon
            style={{ fontSize: "30px", marginBottom: "1px" }}
          />
        }
      >
        Categorías
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/crm">Crm</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/gestiondecausas">Gestion de causas</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/contratosporvencer">Contratos Por Vencer</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/controldepolizas">Control De Polizas</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/planificaciondeeventos">Planificación De Eventos</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/gestiondeproyectos">Gestión De Proyectos</Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
