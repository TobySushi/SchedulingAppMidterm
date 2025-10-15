document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
});


// viewGoals page - addDeleteGoals function
// pass in id values to function
addDeleteGoals("addDailyBtn", "dailyTextInput", "dailyGoals", "clearDailyBtn");
addDeleteGoals("addShortBtn", "shortTextInput", "shortTermGoals", "clearShortBtn");
addDeleteGoals("addLongBtn", "longTextInput", "longTermGoals", "clearLongBtn");

function addDeleteGoals(btnID, inputID, containerID, clearBtnID){
  // uses the string passed to get specific element
  const addBtn = document.getElementById(btnID);
  const textInput = document.getElementById(inputID); // textbox input
  const containerLocation = document.getElementById(containerID); // this is the specific div element we are in
  const clearBtn = document.getElementById(clearBtnID);

  // checks for a click of the ADD button and then does stuff
  addBtn.addEventListener("click", () => {
    // remove whitespace
    const filteredTextInput = textInput.value.trim();
    // check if user entered nothing
    if (filteredTextInput === ""){
      return;
    }
    else{
      // create div, checkbox, and label elements with appropriate html/CSS classes
      const goalDiv = document.createElement("div");
      
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.classList.add("strikethrough");

      const label = document.createElement("label");
      label.classList.add("cb-label");
      label.textContent = filteredTextInput // add input from user to label

      // add to html in specific div location from earlier
      goalDiv.appendChild(checkBox);
      goalDiv.appendChild(label);
      containerLocation.appendChild(goalDiv);

      // reset textbox used
      textInput.value = "";
    };
  });
  // check for CLEAR button click
  clearBtn.addEventListener("click", () => {
    // find every checkbox that is checked in that specific container (div) and remove it
    containerLocation.querySelectorAll(".strikethrough:checked").forEach(cb => {
      cb.parentElement.remove();
    });
  });
};
