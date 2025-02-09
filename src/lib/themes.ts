export type Theme = "dark" | "light" | "system"

export function setTheme(theme: Theme) {
  if (theme === "system") {
    localStorage.removeItem("theme")
  } else {
    localStorage.setItem("theme", theme)
  }

  if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
