function lightbox() {
  const section = document.querySelector(".works");

  const lightbox = document.createElement("div");
  const bigImg = document.createElement("img");

  const scrollLock = calcScroll();

  lightbox.classList.add("popup");
  bigImg.classList.add("popup_img");

  section.appendChild(lightbox);
  lightbox.appendChild(bigImg);

  section.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      lightbox.style.display = "block";
      document.body.classList.add("modal-open");
      document.body.style.marginRight = `${scrollLock}px`;

      const path = target.parentNode.getAttribute("href");

      bigImg.setAttribute("src", path);
      bigImg.setAttribute("alt", target.alt);
    }
  });

  lightbox.addEventListener("click", () => closeLightbox());

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.classList.remove("modal-open");
    document.body.style.marginRight = `0px`;
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
}

export default lightbox;
