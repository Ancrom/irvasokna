const modals = () => {
  let triggeredOnce = false;

  function bindModal({
    triggerSelector,
    modalSelector,
    closeSelector = ".popup_close",
    overlayClickClose = true,
  }) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const scrollLock = calcScroll();

    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        triggeredOnce = true;
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.classList.add("modal-open");
        document.body.style.marginRight = `${scrollLock}px`;
      });
    });

    modal
      .querySelectorAll(closeSelector)
      .forEach((item) => item.addEventListener("click", closeModal));

    if (overlayClickClose)
      window.addEventListener(
        "click",
        (e) => e.target === modal && closeModal()
      );

    function closeModal() {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.marginRight = `0px`;
    }
  }

  function showModalTimeout(selector, time) {
    setTimeout(function () {
      if (!triggeredOnce) {
        document.querySelector(selector).style.display = "block";
        document.body.classList.add("modal-open");
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");

    div.style.cssText = `
			width: 50px;
			height: 50px;
			overflow-y: scroll;
			visibility: hidden;
		`;

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal({
    triggerSelector: ".popup_engineer_btn",
    modalSelector: ".popup_engineer",
  });
  bindModal({
    triggerSelector: ".phone_link",
    modalSelector: ".popup",
  });
  bindModal({
    triggerSelector: ".popup_calc_btn",
    modalSelector: ".popup_calc",
  });
  bindModal({
    triggerSelector: ".popup_calc_button",
    modalSelector: ".popup_calc_profile",
    overlayClickClose: false,
  });
  bindModal({
    triggerSelector: ".popup_calc_profile_button",
    modalSelector: ".popup_calc_end",
    overlayClickClose: false,
  });

  showModalTimeout(".popup", 60000);
};

export default modals;
