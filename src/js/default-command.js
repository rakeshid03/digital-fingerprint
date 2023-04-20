// Get Current Location
var Latitude;
var Longitude;

// Show current location on leaflet map
function showMap() {
  var div = document.createElement('div');
  div.innerHTML = `<div id="map"></div>
    
   <div class="command-line typing">
   <span class="prompt"><b>root@df:</b>~$</span>
   <input type="text" class="command" oninput="inputData(event)">
   </div>`;
  output.appendChild(div);

  const map = L.map('map').setView([Latitude, Longitude], 12.5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([Latitude, Longitude]).addTo(map)
    .openPopup();

  var newInput = div.querySelector('.command').focus();
  screen.scrollTop = output.scrollHeight;
};


// Function to run a command
function runCommand() {
  // Create a new div element and append
  var div = document.createElement("div");
  div.classList.add("typing");
  div.innerHTML = `
    <div class="command-line">
      <span class="prompt"><b>root@df:</b>~$</span>
      <input type="text" class="command" oninput="inputData(event)" placeholder="type help">
    </div>`;
  output.appendChild(div);
  // Set focus on the new input element
  var newInput = div.querySelector(".command").focus();
 
// Current location using geolocation api
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      Latitude = position.coords.latitude;
      Longitude = position.coords.longitude;
    }, error => {
      console.error("Error getting location using Geolocation API: ", error);
    });
  };


  // Add event listener for keydown event on the output element
  output.addEventListener("keydown", function (e) {
    // Check if Enter key is pressed
    if (e.target.classList.contains("command") && e.key === "Enter") {
      // Get the command text from the input and convert it to lowercase
      var commandText = e.target.value.toLowerCase();

      // Create a new div element
      var div = document.createElement("div");
      div.classList.add("typing");
      // Append the div to the output element
      output.appendChild(div);
      // Disable the input and remove the 'command' class
      e.target.disabled = true;
      e.target.classList.remove("command");

      // Check the commandText for different commands and set the inner HTML of the div accordingly
      if (commandText === "help") {
        div.innerHTML = `
          <b class="typing">Available commands:</b>
          <ul class="typing">
            <li>help - shows all available commands.</li>
            <li>df - Provides information about digital fingerprinting.</li>
            <li>pip install df - Displays your digital fingerprint.</li>
            <li>location - Shows your current location on a map.</li>
            <li>clear - Clears the terminal screen.</li>
          </ul>
          <div class="command-line typing">
            <span class="prompt"><b>root@df:</b>~$</span>
            <input type="text" class="command" oninput="inputData(event)">
          </div>`;
      } else if (commandText === "df") {
        div.innerHTML = `
          <b class="typing">Digital Fingerprint:</b>
          <p class="typing">This website demonstrates the power of web browsers and the concept of browser fingerprinting. When you visit any website, they has the ability to collect and store various information about you, such as your location, browser details, browsing habits, online activities, and device information, which can be a threat to your privacy. To create awareness and educate users about these risks I have created this website, which provides a visual representation of the data that can be collected by websites. Through this information, I want to encourage you to exercise caution when visiting unknown or unsafe websites. Rest assured, I do not collect or store any of your data on the my server.</p>
          <div class="command-line typing">
            <span class="prompt"><b>root@df:</b>~$</span>
            <input type="text" class="command" oninput="inputData(event)">
          </div>`;
      } else if (commandText === "pip install df") {
        div.innerHTML = `
      <div>
       <b id="fetching-data">Data fetching <span id="loading-value">0%</span>...</b>
      </div>
            
      <div id="progress-bar" style="width: 0%; background-color: #00ff00; transition: all 0.9s ease; height: 5px; margin-bottom: 8px;"></div>
          `;
        runPrint();
      } else if (commandText === 'location') {
        showMap();
      } else if (commandText === "clear") {
        output.innerHTML = "";

        output.innerHTML = `
          <div class="command-line typing">
            <span class="prompt"><b>root@df:</b>~$</span>
            <input type="text" class="command" oninput="inputData(event)" placeholder="type help">
          </div>`;
      } else {
        // If the command is invalid, display an error message
        div.innerHTML = `
          <b class="typing" style="color: #f00; text-shadow: 0px 0px 0.9px #f00;">Invalid command:</b>
          <p>Type 'help' for list of commands.</p>
          
          <div class="command-line typing">
            <span class="prompt"><b>root@df:</b>~$</span>
            <input type="text" class="command" oninput="inputData(event)">
          </div>`;
      }
      // Set focus on the new input element
      var newInput = div.querySelector(".command").focus();
      // Scroll to the bottom of the output element
      screen.scrollTop = output.scrollHeight;
    }
  });
  // Scroll to the bottom of the output element
  screen.scrollTop = output.scrollHeight;
}


// Browser title change on tab change
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
