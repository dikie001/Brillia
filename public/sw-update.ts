export function enableInstantSWUpdates() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
      console.log("updated!")
    });
  }
}
