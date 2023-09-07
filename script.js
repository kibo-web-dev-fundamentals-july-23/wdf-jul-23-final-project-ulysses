// Function to toggle the display of a table when respective button is clicked
function displayTable(table) {
    if (table.style.display == "none") {
      table.style.display = "table";
    } else {
      table.style.display = "none";
    }
}

// Storing the default website styles
const defaultStyles = {
    textColor: window.getComputedStyle(document.body).getPropertyValue('color'),
    buttonBackgroundColor: window.getComputedStyle(document.querySelector("button")).getPropertyValue('background-color'),
    backgroundColor: window.getComputedStyle(document.body).getPropertyValue('background-color'),
    fontFamily: window.getComputedStyle(document.body).getPropertyValue('font-family')
}

// Function to reset to default styles
function resetX() {
    document.body.style.color = defaultStyles.textColor;

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = defaultStyles.buttonBackgroundColor;
    });

    document.body.style.backgroundColor = defaultStyles.backgroundColor;

    document.body.style.fontFamily = defaultStyles.fontFamily;
}

// Function to change text color
function changeTextColor() {
    document.body.style.color = getRandomColor();
}

// Function to change button background color
function changeButtonBackgroundColor() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.style.backgroundColor = getRandomColor();
    });
}

// Function to change the color theme
function changeColorTheme() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners after the whole DOM content has loaded
document.addEventListener("DOMContentLoaded", function () {
    const sundayButton = document.getElementById("sundayButton");
    const sundayTable = document.getElementById("sundayTable");

    sundayButton.addEventListener('click', () => {
        displayTable(sundayTable);
    });

    const mondayButton = document.getElementById("mondayButton");
    const mondayTable = document.getElementById("mondayTable");

    mondayButton.addEventListener("click", () => {
        displayTable(mondayTable);
    });
    const tuesdayButton = document.getElementById("tuesdayButtton");
    const tuesdayTable = document.getElementById("tuesdayTable");

    tuesdayButton.addEventListener("click", () => {
        displayTable(tuesdayTable);
    });
    const wednesdayButton = document.getElementById("wednesdayButton");
    const wednesdayTable = document.getElementById("wednesdayTable");

    wednesdayButton.addEventListener("click", () => {
        displayTable(wednesdayTable);
    });

    const thursdayButton = document.getElementById("thursdayButton");
    const thursdayTable = document.getElementById("thursdayTable");

    thursdayButton.addEventListener("click", () => {
        displayTable(thursdayTable);
    });

    const fridayButton = document.getElementById("fridayButton");
    const fridayTable = document.getElementById("fridayTable");

    fridayButton.addEventListener("click", () => {
        displayTable(fridayTable);
    });

    const saturdayButton = document.getElementById("saturdayButton");
    const saturdayTable = document.getElementById("saturdayTable");

    saturdayButton.addEventListener("click", () => {
        displayTable(saturdayTable);
    })

    const changeTextColour = document.getElementById("changeTextColour");
    const changeButtonBackgroundColour = document.getElementById("changeButtonBackgroundColour");
    const changeColor = document.getElementById("changeColor");

    changeTextColour.addEventListener("click", changeTextColor);
    changeButtonBackgroundColour.addEventListener("click", changeButtonBackgroundColor);
    changeColor.addEventListener("click", changeColorTheme);

    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", resetX);
})