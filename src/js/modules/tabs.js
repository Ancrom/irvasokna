const tabs = () => {
  const bindTabs = ({
    sectionSelector,
    contentSelector,
    triggersSelector = ".slick-slide",
    activeClass = "slick-current",
    triggerData = "slickIndex",
  }) => {
    window.addEventListener("load", () => {
      const section = document.querySelector(sectionSelector);
      if (!section) return;

      const tabsContent = section.querySelectorAll(contentSelector + " > *");
      const triggers = section.querySelectorAll(triggersSelector);
      const arrowBtns = section.querySelectorAll(".slick-arrow");

      setActiveTab();

      triggers.forEach((t) => {
        t.addEventListener("click", () => {
          triggers.forEach((tab) => tab.classList.remove(activeClass));
          t.classList.add(activeClass);
          setActiveTab(t.dataset[triggerData]);
        });
      });

      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => setActiveTab());
      });

      function setActiveTab(index) {
        if (index === undefined) {
          triggers.forEach((t) => {
            if (t.classList.contains(activeClass)) {
              index = t.dataset[triggerData];
            }
          });
        }
        tabsContent.forEach((tab) => tab.classList.remove(activeClass));
        tabsContent[index].classList.add(activeClass);
      }
    });
  };

  bindTabs({
    sectionSelector: ".glazing",
    contentSelector: ".glazing_content",
  });
  bindTabs({
    sectionSelector: ".decoration",
    contentSelector: ".decoration_content > .row",
  });
  bindTabs({
    sectionSelector: ".popup_calc",
    contentSelector: ".big_img",
    triggersSelector: ".balcon_icons_img",
    activeClass: "do_image_more",
    triggerData: "balconIndex",
  });
};

export default tabs;
