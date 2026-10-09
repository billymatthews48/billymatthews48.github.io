(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  const storageKey = "portfolio-theme";

  if (!button) return;

  let savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch {
    // Theme switching still works for this visit when storage is unavailable.
  }

  root.dataset.theme = savedTheme === "dark" ? "dark" : "light";

  const updateButton = () => {
    const dark = root.dataset.theme === "dark";
    const nextTheme = dark ? "light" : "dark";
    button.textContent = `Use ${nextTheme} theme`;
    button.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    button.setAttribute("aria-pressed", String(dark));
  };

  updateButton();
  button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem(storageKey, root.dataset.theme);
    } catch {
      // The selected theme remains active until the page is closed.
    }
    updateButton();
  });
})();
