const inputElt = document.querySelector("#input");
const spanElt = document.querySelector("#output");

inputElt.addEventListener("input", (event) => {
  spanElt.innerText = event.target.value;
});
