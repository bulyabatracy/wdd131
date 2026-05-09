// FOOTER YEAR

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// LAST MODIFIED

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// WEATHER VALUES

const temperature = 2;
const windSpeed = 15;

// WIND CHILL FUNCTION

function calculateWindChill(temp, speed) {

    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

// DISPLAY WIND CHILL

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {

    windChill =
        `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.getElementById("windchill").textContent =
    windChill;

// HAMBURGER MENU

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menuButton.classList.toggle("open");

});
