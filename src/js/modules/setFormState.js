const setFormState = (state) => {
  const formInputs = [...document.querySelectorAll("[data-event]")];
  const checkboxes = formInputs.filter(
    (box) => box.getAttribute("type") === "checkbox"
  );

  formInputs.forEach((item) => {
    const event = item.dataset.event;

    item.addEventListener(event, () => {
      if (event === "click") state.form = item.dataset.balconIndex;

      if (event === "input") {
        checkboxes.forEach((box) => {
          box === item ? !box.checked : (box.checked = false);
        });
        state.profile = item.checked && item.nextElementSibling.id;
      }

      if (item.id) state[item.id] = item.value;
      console.log(state);
    });
  });
};
export default setFormState;
