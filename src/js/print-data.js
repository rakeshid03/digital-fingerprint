// target elements
const commandLine = document.querySelector(".command-line");
const screen = document.querySelector(".screen");
const output = document.querySelector(".output");

// install and loading
output.innerHTML += `
      <div class="command-line"><span class="prompt"><b>root@df:</b>~$</span><input type="text" value="pip install df" disabled>
      </div>
      
      <div>
       <b id="fetching-data">Data fetching <span id="loading-value">0%</span>...</b>
      </div>
            
      <div id="progress-bar" style="width: 0%; background-color: #00ff00; transition: all 0.9s ease; height: 5px; margin-bottom: 8px;"></div>
          `;

function runPrint() {
  //----- Output Data -----
  let i = 0;
  const intervalId = setInterval(() => {
    i += 10;
    if (i <= 100) {
      document.getElementById("progress-bar").style.width = `${i}%`;
      document.getElementById("loading-value").innerText = `${i}%`;
    } else {
      clearInterval(intervalId);
      document.getElementById("fetching-data").innerText = "Data fetching done";

      // Add results to the 'output' element
      // an array of strings containing HTML div elements
      const newDivs = [
        `
         <b>Device name:</b> ${deviceName}
         `,
        `
         <b>Device vendor:</b> ${deviceVendor}
         `,
        `
         <b>Device type:</b> ${deviceType}
         `,
        `
         <b>Device's orientation:</b> ${orientation}
         `,
        `
         <b>Screen size:</b> ${ScreenSize}
         `,
         `
         <b>Viewport size:</b> ${viewportSize}
         `,
        `
         <b>Device pixel ratio:</b> ${devicePixelRatio}
         `,
        `
         <b>Color depth:</b> ${colorDepth}
         `,
        `
         <b>Ram:</b> ${Ram}
         `,
        `
         <b>Number of logical processors:</b> ${numCores}
         `,
        `
         <b>Device OS:</b> ${Os}
         `,
        `
         <b>OS version:</b> ${OSversion}
         `,
        `
         <b>User prefers:</b> ${UserPrefers}
         `,
        `
         <b>Touch supports:</b> ${touchSupports}
         `,
        `
         <b>Battery level:</b> ${BatteryLevel}
         `,
        `
         <b>Charging status:</b> ${ChargingStatus}
         `,
        `
         <b>Available sensors:</b> ${sensorsWithSpace}
         `,
        `
         <b>Network Type:</b> ${networkType}
         `,
        `
         <b>Network Name:</b> ${networkName}
         `,
        `
         <b>Online status:</b> ${onlineStatus}
         `,
        `
         <b>Internet connection speed:</b> ${ics}
         `,
        `
         <b>ISP name:</b> ${IPS}
         `,
        `
         <b>Autonomous system number:</b> ${ASN}
         `,
        `
         <b>Round-trip time (RTT):</b> ${Rtt}
         `,
        `
         <b>Data saver mode:</b> ${dataSaver}
         `,
        `
         <b>Maximum available bandwidth:</b> ${maximumBandwidth}
         `,
        `
         <b>Ip address:</b> ${Ip}
         `,
        `
         <b>Ip version:</b> ${ipVersion}
         `,
        `
         <b>Latitude:</b> ${Latitude}
         `,
        `
         <b>Longitude:</b> ${Longitude}
         `,
        `
         <b>City:</b> ${City}
         `,
        `
         <b>Region/State:</b> ${Region}
         `,
        `
         <b>Region/State code:</b> ${Regioncode}
         `,
        `
         <b>Country:</b> ${Country}
         `,
        `
         <b>Country code:</b> ${Countrycode}
         `,
        ` 
         <b>Capital of the country:</b> ${countryCapital}
         `,
        `
         <b>Country calling code:</b> ${CountryCallingCode}
         `,
        `
         <b>Currency:</b> ${Currency}
         `,
        `
         <b>Languages spoken:</b> ${Languages}
         `,
        `
         <b>URL:</b> ${siteURL}
         `,
        `
         <b>Host name:</b> ${hostName}
         `,
        `
         <b>Page load time:</b> ${PageLoadTime}
         `,
        `
         <b>Referrer information:</b> ${referrer}
         `,
        `
         <b>Referrer source:</b> ${referrerSource}
         `,
        `
         <b>Do Not Track:</b> ${dntEnabled}
         `,
        `
         <b>GPU manufacturer:</b> ${vendor}
         `,
        `
         <b>GPU model:</b> ${renderer}
         `,
        `
         <b>WebGL vendor:</b> ${WebGLVendor}
         `,
        `
         <b>WebGL renderer:</b> ${WebGLRenderer}
         `,
        `
         <b>WebGL version:</b> ${WebGLVersion}
         `,
        `
         <b>VR display support:</b> ${vrDisplaySupport}
         `,
        `
         <b>Speech recognition support:</b> ${speechRecognitionSupport}
         `,
        `
         <b>Virtual keyboard support:</b> ${virtualKeyboardSupport}
         `,
        `
         <b>Supported audio formats:</b> ${SupportedAudioFormats}
         `,
        `
         <b>Supported video formats:</b> ${supportedVideoFormats}
         `,
        `
         <b>Browser name:</b> ${BrowserName}
         `,
        `
         <b>Browser version:</b> ${BrowserVersion}
         `,
        `
         <b>Browser engine:</b> ${BrowserEngine}
         `,
        `
         <b>Browser vendor:</b> ${browserVendor}
         `,
        `
         <b>Browser language:</b> ${BrowserLanguage}
         `,
        `
         <b>Browser's maximum touch points:</b> ${maxTouchPoints}
         `,
        `
         <b>Ad block enabled:</b> ${Adblock}
         `,
        `
         <b>Cookie Enabled:</b> ${cookieEnabled}
         `,
        `
         <b>Character encoding:</b> ${acceptCharset}
         `,
        `
         <b>Font Families:</b> ${allFontFamilies}
         `,
        `
         <b>Font Style:</b> ${fontStyle}
         `,
        `
         <b>Memory used by javascript:</b> ${Memoryused}
         `,
        `
         <b>Total javascript heap:</b> ${Memorytotal}
         `,
        `
         <b>Plugin name:</b> ${PluginName}
         `,
        `
         <b>Plugin filename:</b> ${PluginFilename}
         `,
        `
         <b>Visit on site:</b> ${visit}
         `,
        `
         <b>Fingers use to touch the screen:</b> <span id="fingers-Touched">${fingersTouch}</span>
         `,
        `
         <b>Time:</b> <span id="current-Time">${currentTime}</span>
         `,
        `
         <b>Timezone:</b> ${timezone}
         `,
        `
         <b>Frame rate:</b> <span id="frame-count">${frameRate}</span>
         `,
        `
         <b>Clicked on:</b> <span id="Clicked-element">${Clickedelement}</span>
         `,
        `
         <b>Mouse X:</b> <span id="mouseXValue">${MouseX}</span>
         `,
        `
         <b>Mouse Y:</b> <span id="mouseYValue">${MouseY}</span>
         `,
        `
         <b>Input Text:</b> <span id="typed-Text">null</span>
         `,
        `
         <b>Input Activity:</b> <span id="input-Activity">null</span>
         `,
      ];

      // This code adds the results to the 'output' element one by one, with a typing effect.
      let index = 0;
      const intervalIdd = setInterval(() => {
        if (index < newDivs.length) {
          const div = document.createElement("div");
          div.innerHTML = newDivs[index];
          div.classList.add("typing");
          output.appendChild(div);
          index++;
          screen.scrollTop = output.scrollHeight;
        } else {
          clearInterval(intervalIdd);
          runCommand();
        }
      }, 550);
    }
  }, 300);
}

runPrint();
