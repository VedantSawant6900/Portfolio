(() => {
  const initPageTransitions = () => {
    const body = document.body;
    if (!body) {
      return;
    }

    body.classList.add("page-shell");
    window.requestAnimationFrame(() => {
      body.classList.add("page-ready");
    });
  };

  initPageTransitions();

  const robotHost = document.querySelector("[data-robot-hero]");
  if (robotHost) {
    import("./robot-hero.js?v=3")
      .then(({ initRobotHero }) => initRobotHero(robotHost))
      .catch((error) => {
        console.error("Robot hero failed to load:", error);
        robotHost.setAttribute("data-robot-error", error.message || "load failed");
      });
  }

  const setSkillTab = (selected) => {
    document.querySelectorAll("[data-skill-tab]").forEach((button) => {
      const active = button.dataset.skillTab === selected;
      button.dataset.state = active ? "active" : "inactive";
      button.setAttribute("aria-selected", String(active));
      button.classList.toggle("bg-background", active);
      button.classList.toggle("text-foreground", active);
      button.classList.toggle("shadow-sm", active);
    });

    document.querySelectorAll("[data-skill-panel]").forEach((panel) => {
      panel.classList.toggle("hidden", panel.dataset.skillPanel !== selected);
    });
  };

  document.querySelectorAll("[data-skill-tab]").forEach((button) => {
    button.addEventListener("click", () => setSkillTab(button.dataset.skillTab));
  });
})();
