document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
});


// viewGoals page
// pass in id values to function
addGoal("addDailyBtn", "dailyTextInput");
addGoal("addShortBtn", "shortTextInput");
addGoal("addLongBtn", "longTextInput");

function addGoal(btnID, inputID){
  const addBtn = document.getElementById(btnID); // uses the string to get specific element
  const textInput = document.getElementById(inputID)

  // checks for a click of the button and then does stuff
  addBtn.addEventListener("click", () => {
    // remove whitespace
    const filteredTextInput = textInput.value.trim();
    // check if user entered nothing
    if (filteredTextInput === ""){
      return;
    }else{
      // create div, checkbox, and label elements with appropriate classes
      const goalDiv = document.createElement("div");
      
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.classList.add("strikethrough");

      const label = document.createElement("label");
      label.classList.add("cb-label");
      label.textContent = filteredTextInput // add input from user to label

      // add to html
      goalDiv.appendChild(checkBox);
      goalDiv.appendChild(label);

      addBtn.parentElement.before(goalDiv);

      // reset textbox used
      textInput.value = "";
    };
  });
};
