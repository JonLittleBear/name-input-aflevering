function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " +
    document.querySelector("#navn").value +
    ", du er " +
    document.querySelector("#alder").value +
    " år gammel. Din mail er: " +
    document.querySelector("#mail").value;
}

document.querySelector("button").addEventListener("click", sayHello);
