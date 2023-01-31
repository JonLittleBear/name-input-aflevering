function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " +
    document.querySelector("#navn").value +
    ", du er " +
    document.querySelector("#alder").value +
    " år gammel";
}

document.querySelector("button").addEventListener("click", sayHello);
