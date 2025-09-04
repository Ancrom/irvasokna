import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import timers from "./modules/timers";
import forms from "./modules/forms";
import setFormState from "./modules/setFormState";
import lightbox from "./modules/lightbox";

document.addEventListener("DOMContentLoaded", () => {
  let formState = {};

  setFormState(formState);
  modals();
  tabs();
  timers();
  forms(formState);
	lightbox();
});


