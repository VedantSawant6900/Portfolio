(() => {
  const robotHost = document.querySelector("[data-robot-hero]");
  if (robotHost) {
    import("./robot-hero.js")
      .then(({ initRobotHero }) => initRobotHero(robotHost))
      .catch((error) => {
        console.warn("Robot hero failed to load.", error);
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

  const form = document.querySelector("[data-contact-form]");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio message from ${name || "visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, "", message].join("\n"),
    );

    window.location.href = `mailto:vedant.sawant.6900@gmail.com?subject=${subject}&body=${body}`;
  });
})();
