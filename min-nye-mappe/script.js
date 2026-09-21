const minKnap = document.querySelector("#knapElement");

minKnap.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log(this.alt);
}
