// Ignition Screen Animation
export function initIgnition() {
  const ignitionScreen = document.querySelector('#ignition-screen');
  if(ignitionScreen) {
    setTimeout(() => {
      ignitionScreen.classList.add('is-hiding');
      ignitionScreen.addEventListener('transitionend', () => {
        ignitionScreen.remove();
      }, { once: true });
    }, 1500);
  }
}
