import { makeStyles } from "@material-ui/core/styles";

export const useStylesGlobal = makeStyles((theme) => ({
  // Clase global!
  "@global": {
    ".btn-pill": { borderRadius: "50rem!important" },
    ".btn-blue": {
      backgroundColor: "#2680EB",
      color: "#fff",
      padding: "9px 38px",
    },
    ".btn-blue:hover": { backgroundColor: "#2680EB", color: "#fff" },
    // theme spacing?
    ".pt-1": { paddingTop: "1em" },
    ".pt-2": { paddingTop: "2em" },
    ".pt-3": { paddingTop: "2.5em" },
    ".pt-4": { paddingTop: "3.5em" },
    ".pb-1": { paddingBottom: "1em" },
    ".pb-2": { paddingBottom: "2em" },
    ".pb-3": { paddingBottom: "2.5em" },
    ".pb-4": { paddingBottom: "3.5em" },
    ".contVideo": { position: "relative", paddingTop: "56.25%" },
    ".videoResponsive": { position: "absolute", top: "0", left: "0" },
    ".MuiButton-containedPrimary": { color: "#fff" },
    ".MuiButton-outlinedSizeLarge,.MuiButton-containedSizeLarge": {
      padding: "7px 38px",
    },
    ".subtitleHeroInCel": { fontSize: "20px" },
    "html": {
      scrollBehavior: "smooth",
    },
    "#root": {
      overflow: "hidden",
      backgroundColor: "#fff",
    },
  },
}));

window.addEventListener("load", () => {
  try{
    const hero2 = document.querySelector("#hero2 p");

    hero2.innerHTML = `Prueba gratuita de 14 días | <br/> No se requiere tarjeta de crédito`
  } catch {
    return;
  }
});
