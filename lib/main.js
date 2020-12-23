let anykitLib = document.createElement("script");
// load the latest anykit script
anykitLib.src = "https://cdn.jsdelivr.net/npm/anykit/dist/index.js";

let initScript = document.createElement("script");

initScript.textContent = `
  const anykit = new AnyKit({});
  anykit.init();
`;

document.body.appendChild(anykitLib);
// add init script after appending the anykit script.
// this ensures the presence of window.Anykit class.
setTimeout(() => {
  anykitLib.insertAdjacentElement("afterend", initScript);
}, 0);
