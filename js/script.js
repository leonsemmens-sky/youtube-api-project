
// DOM header
header = document.querySelector("header");
const h2 = document.createElement("h2");
h2.innerHTML = "YouTube Database Query" + `<hr>`;
const input = document.createElement('input')
const searchBtn = document.createElement('button')
const signInBtn = document.createElement('button')
signInBtn.innerHTML = 'Sign In'
searchBtn.innerHTML = 'Search'
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'search')
h2.classList.add('header-styling')
input.classList.add('header-styling')
searchBtn.classList.add('header-styling')

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

// Appending divs
div.append(div2, div3, div4);
main.append(div);

//add video cards to webpage
function displayVideos(videos) {
    for (let video of videos) {
        let element = document.createElement("article")
        // add details
        // append to grid
    }
}

function search(input) {
    getTrendingVideos().then(videos => {
        let result = []
        for (let video of videos) {
            //title.includes(input)
            //check video title with input
            //add video to result if it matches
        }
        displayVideos(result)
    }).catch(err => {
        //handle error
    })
}

const searchBar = document.getElementById("search")
searchBar.addEventListener("input", () => {
    search(searchBar.value)
})