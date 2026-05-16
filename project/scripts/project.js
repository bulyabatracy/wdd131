const welcome = document.querySelector("#welcome");

const parksContainer = document.querySelector("#parks-container");

const parks = [
    {
        name: "Bwindi National Park",
        image: "images/bwindi.jpg",
        description: "Famous for mountain gorillas."
    },
    {
        name: "Murchison Falls",
        image: "images/murchison.jpg",
        description: "Known for waterfalls and wildlife."
    },
    {
        name: "Queen Elizabeth National Park",
        image: "images/queen.jpg",
        description: "Popular for safaris and tree-climbing lions."
    }
];

function displayWelcome() {

    let visitorName = localStorage.getItem("visitorName");

    if (!visitorName) {
        visitorName = "Visitor";
    }

    if (welcome) {
        welcome.textContent = `Welcome ${visitorName} to Pearl of Africa Tourism!`;
    }
}

function displayParks() {

    if (parksContainer) {

        parks.forEach((park) => {
           