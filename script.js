let currentDate = new Date(); // Data for the first calendar
let selectedDates = [];
let selectedDateClone;
// For moving to the previous or next month
function moveDate(direction) {
    if (direction === 'prev') {
        currentDate.setMonth(currentDate.getMonth() - 1);
    } else if (direction === 'next') {
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    renderCalendar();
}

function handleDateClick(selectedDate) {
    if (selectedDates.length < 2) {
        selectedDates.push(selectedDate);
    } else {
        selectedDates = [selectedDate]; // If there are already two dates selected, reset the array
    }
    displaySelectedDates(); // Function to display the selected dates on the website
}
// Function to display the selected dates on the website
function displaySelectedDates() {
    // You can modify this logic to display the selected dates in a specific part of your webpage
    const selectedDatesElement = document.getElementById('selectedDates');

    // Clear previous content
    selectedDatesElement.innerHTML = '';

    // Display the selected dates
    selectedDates.forEach((date, index) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `Selected Date ${index + 1}: ${date.toDateString()}`;
        selectedDatesElement.appendChild(paragraph);
    });
}


function renderCalendar() {
    const monthDays = document.querySelector("#calendar .days");
  
    const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
    ).getDate();

    const firstDayIndex = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const lastDayIndex = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    document.getElementById("month").innerText = months[currentDate.getMonth()];
    document.getElementById("day").innerText = currentDate.toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="current">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;

    const dayElements = document.querySelectorAll("#calendar .days div");
    dayElements.forEach(day => {
        day.addEventListener('click', () => {
            const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(day.innerText));
            handleDateClick(selectedDate);
        });
    });
    

            selectedDateClone = new Date(selectedDate.getTime());
            alert(`Selected date: ${selectedDate.toDateString()}`);
            // Call the function to display the selected date if needed
            // displayClonedDate(`Selected date: ${selectedDate1.toDateString()}`);
}
renderCalendar();
// Assuming you have two date inputs with ids: startDate and endDate


function handleDateClick(selectedDate) {
    if (selectedDates.length < 2) {
        selectedDates.push(selectedDate);

        // Check the checkboxes based on the number of selected dates
        if (selectedDates.length === 1) {
            checkbox1.checked = true; // Activate the first checkbox
            checkbox2.checked = false;
        } else if (selectedDates.length === 2) {
            checkbox1.checked = true;
            checkbox2.checked = true; // Activate the second checkbox
        }
    } else {
        selectedDates = [selectedDate]; // If there are already two dates selected, reset the array

        // Reset the checkboxes
        checkbox1.checked = false;
        checkbox2.checked = false;
    }
    displaySelectedDates(); // Function to display the selected dates on the website
}

const singleBedroom = document.getElementById('singleBedroom');
const doubleBedroom = document.getElementById('doubleBedroom');
const checkbox3 = document.getElementById('checkbox3');
const checkbox4 = document.getElementById('checkbox4');

// Add change event listeners to date inputs
singleBedroom.addEventListener('change', updateCheckboxColor);
doubleBedroom.addEventListener('change', updateCheckboxColor);


function updateCheckboxColor() {
    // Check if both dates are selected
    if (singleBedroom.value && doubleBedroom.value) {
      // Convert date strings to Date objects for comparison
      const single = new Bedroom(singleBedroom.value);
      const double = new Bedroom(doubleBedroom.value);
  
      // Compare the selected dates
      if (single < double) {
        checkbox1.style.backgroundColor = 'green'; // Change checkbox1 color to green
        checkbox2.style.backgroundColor = 'green'; // Change checkbox2 color to green
      } else {
        checkbox1.style.backgroundColor = 'red'; // Change checkbox1 color to red
        checkbox2.style.backgroundColor = 'red'; // Change checkbox2 color to red
      }
    }
  }

  