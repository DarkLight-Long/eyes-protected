window.addEventListener('DOMContentLoaded', () => {

  const replateText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) {
      element.innerText = text
    }
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replateText(`${dependency}-version`, process.versions[dependency])
  }
})