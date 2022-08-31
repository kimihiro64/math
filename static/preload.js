// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);

    if (element) element.innerText = text;
  };
  const types = ['chrome', 'node', 'electron'];

  Object.keys(types).forEach((type) => {
    replaceText(`${type}-version`, process.versions[type]);
  });
});
