// DOM header
header = document.querySelector("header");
const h2 = document.createElement("h2");
const input = document.createElement("input");
const searchBtn = document.createElement("button");
const signInBtn = document.createElement("button");
h2.innerHTML = "YouTube Database Query" + `<hr>`;
signInBtn.innerHTML = "Sign In";
searchBtn.innerHTML = "Search";
input.setAttribute("type", "text");
input.setAttribute("placeholder", "search");
h2.classList.add("header-styling");
input.classList.add("header-styling");
searchBtn.classList.add("header-styling");
signInBtn.classList.add("signInBtn-styling");
header.append(input, searchBtn, signInBtn, h2);

// DOM main
main = document.querySelector("main");

// Search bar - form
// queryForm.id = "new-query-form"
// const label = document.createElement('label')

// Appending

// Div containers
const div = document.createElement("div");
div.classList.add("parentCard");

const div2 = document.createElement("div");
div2.innerHTML = "div2";
div2.classList.add("childCard");

const div3 = document.createElement("div");
div3.innerHTML = "div3";
div3.classList.add("childCard2");

const div4 = document.createElement("div");
div4.innerHTML = "div4";
div4.classList.add("childCard3");

const div5 = document.createElement("div");
div5.innerHTML = "div5";
div5.classList.add("childCard5");

// Child div container
const flexDivContainer = document.createElement("div");
flexDivContainer.classList.add("flexDiv-styling");

// Appending divs
main.append(flexDivContainer);
flexDivContainer.append(div2, div3, div4, div5);
main.append(div);

// Pokemon API
async function logCharName(charName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${charName}`
    );
    if (response.ok) {
      console.log("input is ok");
      const data = await response.json();
      console.log(data.name);
      if (data) {
        // Happy path
        return data.name;
      } else {
        // Sad path
        //404
        console.log("404");
      }
    } else {
      console.log("not ok");
    }
  } catch (error) {
    console.log({ error });
  }
}
logCharName("ditto");