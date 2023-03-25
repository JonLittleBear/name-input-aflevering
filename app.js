"use strict";
/*
const firstName = document.querySelector("#name");
const age = document.querySelector("#age");
const something = "10" % 3;
*/

/*
const obj = {
  cats: 0,
  cars: 40
}
*/
/*
function sayHello() {
  const mail = document.querySelector("#mail").value;
  const h3 = document.querySelector("h3");

  h3.textContent = `Hej ${firstName.value}, du er ${Number(age.value)} år gammel. Din mail er: ${mail}`;
}

document.querySelector("button").addEventListener("click", sayHello);

sayHello();

console.log(something);


const symbol = Symbol("allan");

const day = "friday";

console.log(Boolean(day));
*/

//-----ØVELSER MANDAG D.13/3
const image = "beautiful_image.jpg";
const hyphen = "Hyphen-hyphen";
const someName = "Anders andersen";
const padString = "abcde";
const stringWithÅToA = "bål i min sål"
const tooManySpaces = "Riget er  en   god    serie!"
const urlSite = "https://homepage"
const nameHarry = "harry James Potter"
const text = "   Jeg har fanget mig en myg...    "
const text2 = "Jeg har      fanget mig en myg...";

console.log("does the string image end with .jpg?: " + image.endsWith(".jpg"));
console.log("is there a hyphen in the string hyphen?: " + hyphen.includes("-"));
console.log("The last character of the first name in someName ends at position: " + someName.search(" ") + 2)
console.log("The first character of the last name in someName ends at position: " + Number(someName.search(" ") + 2));
console.log("padString is only " + padString.length + " characters long, but now with dots added it is 20: " + padString.padEnd(20, "."));
console.log("padString is only " + padString.length + " characters long, but now with spaces added it is 10: " + padString.padStart(10, " "));
console.log(stringWithÅToA.replaceAll("å", "a"));
console.log(tooManySpaces.replaceAll("    ", " ").replaceAll("   ", " ").replaceAll("  ", " "));

console.log("last 10 chars of someName: " + someName.slice(-10));

if (urlSite.startsWith("http://")) {
  console.log("true case of http://");
} else if (urlSite.startsWith("https://")) {
  console.log("true case of http://");
} else {
  console.log("false, not http:// nor https://");
}

console.log(nameHarry.substring(nameHarry.indexOf(" "), nameHarry.lastIndexOf(" ")));
console.log(nameHarry.toUpperCase());
console.log(nameHarry.toLowerCase());
console.log(nameHarry.charAt(0).toUpperCase() + nameHarry.substring(1, nameHarry.length));
console.log(text.trimStart().trimEnd());
console.log(text2.replace(text2.substring(text2.indexOf("  "), text2.lastIndexOf("  ")), "") + "?");
