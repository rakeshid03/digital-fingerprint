// Data Collect
//--------------------------------------

const userAgent = navigator.userAgent;

// Get user's Device Model Name
if (userAgent.includes("Android")) {
  // User is using an Android device
  const match = userAgent.match(/Android [\d.]+; ([a-zA-Z0-9\s]+)/);
  if (match) {
    deviceName = match[1];
  }
} else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
  // User is using an iOS device
  const match = userAgent.match(/\(([a-zA-Z0-9\s]+);/);
  if (match) {
    deviceName = match[1];
  }
} else if (userAgent.includes("Macintosh") || userAgent.includes("Windows")) {
  // User is using a laptop
  if (userAgent.includes("Macintosh")) {
    const match = userAgent.match(/Macintosh.*\) ([a-zA-Z0-9\s]+)/);
    if (match) {
      deviceName = match[1];
    }
  } else if (userAgent.includes("Windows")) {
    const match = userAgent.match(/Windows NT.*; ([a-zA-Z0-9\s]+)/);
    if (match) {
      deviceName = match[1];
    }
  }
} else {
  deviceName = "unknown";
}

// Get Device vendor name
let deviceVendor;
if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
  deviceVendor = "Apple";
} else if (userAgent.match(/Macintosh/i)) {
  deviceVendor = "Apple (Macintosh)";
} else if (userAgent.match(/Android/i)) {
  deviceVendor = "Android";
} else if (userAgent.match(/Windows Phone/i)) {
  deviceVendor = "Microsoft";
} else if (userAgent.match(/Windows/i)) {
  deviceVendor = "Microsoft (Windows)";
} else if (userAgent.match(/BlackBerry/i)) {
  deviceVendor = "BlackBerry";
} else if (userAgent.match(/Linux/i)) {
  deviceVendor = "Linux";
} else {
  deviceVendor = "Unknown";
}

// Get Network information
if ("connection" in navigator) {
  const connection = navigator.connection;
  networkType = `${connection.type}`;
  networkName = `${connection.effectiveType}`;
  ics = `${connection.downlink} Mbps`;
  Rtt = `${connection.rtt} ms`;
  dataSaver = `${connection.saveData}`;
  maximumBandwidth = `${connection.downlinkMax} Mbps`;
} else {
  networkType =
    networkName =
    ics =
    Rtt =
    dataSaver =
    maximumBandwidth =
      "Network information not supported";
}

// Get Referrer information
const referrer = document.referrer;
if (referrer === "") {
  referrerSource = "User typed in or bookmarked the URL";
} else if (referrer.includes("google.com")) {
  referrerSource = "User came from a Google search";
} else if (referrer.includes("facebook.com")) {
  referrerSource = "User came from a Facebook link";
} else {
  referrerSource = "User came from some other website";
}

// Get Battery information
navigator.getBattery().then(function (battery) {
  // Get the battery level
  BatteryLevel = battery.level * 100 + "%";
  // Get the charging status
  ChargingStatus =
    "Device is " + (battery.charging ? "charging" : "not charging");
});

// Get Ram
if ("deviceMemory" in navigator) {
  Ram = navigator.deviceMemory + "GB";
} else {
  Ram = "undefined";
}

// Get use fingers to touch screen
var fingersTouch;

function countTouches(event) {
  fingersTouch = event.touches.length;

  const fingerTouched = document.getElementById("fingers-Touched");
  if (fingerTouched) {
    fingerTouched.innerText = fingersTouch;
  }
}

// Get Browser plugins
if ("plugins" in navigator) {
  const plugins = navigator.plugins;
  let pluginNames = [];
  let pluginFilenames = [];
  for (let i = 0; i < plugins.length; i++) {
    pluginNames.push(plugins[i].name);
    pluginFilenames.push(plugins[i].filename);
  }
  var PluginName = pluginNames.join(", ");
  var PluginFilename = pluginFilenames.join(", ");
} else {
  PluginName = `plugin not found`;
  PluginFilename = `plugin not found`;
}

// Get Browser History
if (window.history) {
  // Check the current URL
  siteURL = window.location.href;
}

// Get mouseX and mouseY value
var MouseX = 0;
var MouseY = 0;
document.addEventListener("mousemove", function (event) {
  MouseX = event.clientX;
  MouseY = event.clientY;
  // Update the values in the output element
  var mouseXOutput = document.getElementById("mouseXValue");
  var mouseYOutput = document.getElementById("mouseYValue");
  if (mouseXOutput && mouseYOutput) {
    mouseXOutput.innerText = MouseX;
    mouseYOutput.innerText = MouseY;
  }
});

// Graphics Capabilities
// Get the number of logical processors
const numCores = navigator.hardwareConcurrency;

// Get the frame rate
let frameCount = 0;
let startTime = 0;
let frameRate;

function monitorFrameRate() {
  frameCount++;
  const currentTime = performance.now();
  const elapsedTime = currentTime - startTime;
  if (elapsedTime >= 1000) {
    frameRate = Math.round(frameCount / (elapsedTime / 1000));
    frameCount = 0;
    startTime = currentTime;
  }
  const frameCountElement = document.getElementById("frame-count");
  if (frameCountElement) {
    frameCountElement.innerText = frameRate;
  }

  requestAnimationFrame(monitorFrameRate);
}
requestAnimationFrame(monitorFrameRate);

// Get Installed fonts
// Wait for the document to load before accessing fonts
document.addEventListener("DOMContentLoaded", () => {
  // Access the fonts object
  const fonts = document.fonts;
  const fontFamilies = new Set();
  for (const font of fonts.values()) {
    fontFamilies.add(font.family);
    fontStyle = `${font.style}`;
  }
  allFontFamilies = Array.from(fontFamilies).join(", ");
});

// Get the name of elements clicked
var Clickedelement;
document.addEventListener("click", function (event) {
  Clickedelement = event.target.tagName;
  const ClickedElement = document.getElementById("Clicked-element");
  if (ClickedElement) {
    ClickedElement.innerText = Clickedelement;
  }
});

// Get Memory usage
if (window.performance && window.performance.memory) {
  var memory = window.performance.memory;
  var memoryUsed = memory.usedJSHeapSize / 1048576; // convert bytes to MB
  var memoryTotal = memory.totalJSHeapSize / 1048576; // convert bytes to MB
  Memoryused = memoryUsed.toFixed(2) + "MB";
  Memorytotal = memoryTotal.toFixed(2) + "MB";
} else {
  Memoryused = 'N/A';
  Memorytotal = 'N/A';
}

// Get Timing taken to load Page:
var PageLoadTime;
window.addEventListener("load", function () {
  var loadTime =
    performance.timing.loadEventEnd - performance.timing.navigationStart;
  PageLoadTime = loadTime + " ms";
});

// Get user location and more data
fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    Latitude = data.latitude;
    Longitude = data.longitude;
    Region = data.region;
    City = data.city;
    Country = data.country_name;
    IPS = data.org;
    Ip = data.ip; // IP
    ipVersion = data.version;
    Regioncode = data.region_code; // state
    Countrycode = data.country_code;
    countryCapital = data.country_capital;
    CountryCallingCode = data.country_calling_code;
    Currency = data.currency_name;
    Languages = data.languages;
    ASN = data.asn;
  })
  .catch(error => {
    console.error('Error fetching IP data:', error);
    Latitude = 'N/A';
    Longitude = 'N/A';
    Region = 'N/A';
    City = 'N/A';
    Country = 'N/A';
    IPS = 'N/A';
    Ip = 'N/A';
    ipVersion = 'N/A';
    Regioncode = 'N/A';
    Countrycode = 'N/A';
    countryCapital = 'N/A';
    CountryCallingCode = 'N/A';
    Currency = 'N/A';
    Languages = 'N/A';
    ASN = 'N/A';
  });

// Get OS version
const getUserAgentOS = () => {
  const userAgent = navigator.userAgent;
  const osVersion = (userAgent.match(
    /(iPhone|iPad|iPod|Android|Windows|Macintosh)\s([0-9._]+)/
  ) || [])[2];
  return osVersion || "Unknown";
};
const OSversion = getUserAgentOS();

// Get dark mode or light mode
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
  UserPrefers = "dark mode";
} else {
  UserPrefers = "white mode";
}

// Get browser name
if (userAgent.indexOf("Firefox") > -1) {
  BrowserName = "Firefox";
} else if (userAgent.indexOf("Chrome") > -1) {
  BrowserName = "Chrome";
} else if (userAgent.indexOf("Safari") > -1) {
  BrowserName = "Safari";
} else if (
  userAgent.indexOf("msie") !== -1 ||
  userAgent.indexOf("trident") !== -1
) {
  BrowserName = "Internet Explorer";
} else if (userAgent.indexOf("Opera") > -1) {
  BrowserName = "Opera";
} else if (userAgent.indexOf("Edge") > -1) {
  BrowserName = "Edge";
} else {
  BrowserName = "unknown";
}

// Get current time
var currentTime;

function updateTime() {
  var date = new Date();
  var hours = date.getHours();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  currentTime =
    hours +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    " " +
    ampm;

  // Update the time in the DOM
  const currentTimeElement = document.getElementById("current-Time");
  if (currentTimeElement) {
    currentTimeElement.innerText = currentTime;
  }
}
// UpdateTime
updateTime();
setInterval(updateTime, 1000);

// Get os name
const osName = navigator.platform;
Os = `${osName}`;

// Get browser language
BrowserLanguage = `${navigator.language}`;

// Get mobile, tablet or desktop
let deviceType = "";
if (/mobile|android/i.test(userAgent)) {
  deviceType = "Mobile";
} else if (/tablet|ipad/i.test(userAgent)) {
  deviceType = "Tablet";
} else {
  deviceType = "Desktop";
}

// Get Screen Size
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
ScreenSize = `${screenHeight}x${screenWidth}`;

// Get Viewport Size
const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const viewportSize = `${viewportHeight}x${viewportWidth}`;

// Get Browser version
const regex = /(?:MSIE|Edge|Opera|Firefox|Chrome|Safari)[\/\s](\d+\.\d+)/;
const match = userAgent.match(regex);
const browserVersion = match ? match[1] : "unknown";
BrowserVersion = `${browserVersion}`;

// Get Browser engine
let browserEngine;
if (userAgent.indexOf("Trident") != -1) {
  browserEngine = "Trident";
} else if (userAgent.indexOf("Edge") != -1) {
  browserEngine = "EdgeHTML";
} else if (userAgent.indexOf("AppleWebKit") != -1) {
  browserEngine = "WebKit";
} else if (
  userAgent.indexOf("Gecko") != -1 &&
  userAgent.indexOf("like Gecko") == -1
) {
  browserEngine = "Gecko";
} else {
  browserEngine = "Unknown";
}
BrowserEngine = `${browserEngine}`;

// Get Browser vendor
let browserVendor = window.navigator.vendor;

// Get Device pixal ratio
const devicePixelRatio = window.devicePixelRatio;

// Get Colour depth
const colorDepth = window.screen.colorDepth;

// Get cookie enabled
const cookieEnabled = window.navigator.cookieEnabled;

// Ge internet check
if (window.navigator.onLine) {
  onlineStatus = "Connected to the internet";
} else {
  onlineStatus = "Not Connected to the any internet";
}

// Get Do Not Track
function isDntEnabled() {
  var dntEnabled = false;
  if (
    "doNotTrack" in window.navigator &&
    (window.navigator.doNotTrack === "1" ||
      window.navigator.doNotTrack === "yes")
  ) {
    dntEnabled = true;
  } else if (
    "doNotTrack" in window &&
    (window.doNotTrack === "1" || window.doNotTrack === "yes")
  ) {
    dntEnabled = true;
  } else if (
    "msDoNotTrack" in window.navigator &&
    window.navigator.msDoNotTrack === "1"
  ) {
    dntEnabled = true;
  } else if (
    "doNotTrack" in navigator &&
    (navigator.doNotTrack === "1" || navigator.doNotTrack === "yes")
  ) {
    dntEnabled = true;
  }
  return dntEnabled;
}
var dntEnabled = isDntEnabled();

// Get browser's maximum touch points:
const maxTouchPoints = navigator.maxTouchPoints;

// Get user's device supports touch
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  touchSupports = "This device supports touch";
} else {
  touchSupports = "This device does not support touch";
}

// Get VR display support:
const vrDisplaySupport = !!navigator.getVRDisplays;

// Get speech recognition support
const speechRecognitionSupport =
  !!window.SpeechRecognition || !!window.webkitSpeechRecognition;

// Get virtual keyboard support:
const virtualKeyboardSupport =
  "visualViewport" in window &&
  "scrollIntoView" in document.createElement("input");

// Get device's orientation:
let orientation = window.screen.orientation.type;

// Get GPU information:
let gl = document.createElement("canvas").getContext("webgl");
let gpuInfo = gl.getExtension("WEBGL_debug_renderer_info");
let renderer = gl.getParameter(gpuInfo.UNMASKED_RENDERER_WEBGL);
let vendor = gl.getParameter(gpuInfo.UNMASKED_VENDOR_WEBGL);
let WebGLVendor = gl.getParameter(gl.VENDOR);
let WebGLRenderer = gl.getParameter(gl.RENDERER);
let WebGLVersion = gl.getParameter(gl.VERSION);

// Get ad blocker check
var adBlockEnabled = false;
var testAd = document.createElement("div");
testAd.innerHTML = "&nbsp;";
testAd.className = "adsbox";
document.body.appendChild(testAd);
window.setTimeout(function () {
  if (testAd.offsetHeight === 0) {
    adBlockEnabled = true;
  }
  testAd.remove();
  Adblock = adBlockEnabled;
}, 100);

// Get Audio formate support:
const audioFormats = [
  "audio/mpeg",
  "audio/mp4",
  "audio/ogg",
  "audio/wav",
  "audio/aac",
  "audio/flac",
  "audio/alac",
  "audio/wma",
];
const audioElement = document.createElement("audio");
const supportedAFormats = audioFormats.filter((format) => {
  const canPlay = audioElement.canPlayType(format);
  return canPlay !== "" && canPlay !== "no";
});
const SupportedAudioFormats = `${supportedAFormats.join(", ")}`;

// Get Video format support:
const videoFormats = [
  "video/mp4",
  "video/3gp",
  "video/webm",
  "video/mkv",
  "video/mpeg",
  "video/wmv",
  "video/m4v",
  "video/ogg",
  "video/mov",
  "video/avi",
  "video/flv",
];
const videoElement = document.createElement("video");
const supportedVFormats = videoFormats.filter((format) => {
  const canVPlay = videoElement.canPlayType(format);
  return canVPlay !== "" && canVPlay !== "no";
});
const supportedVideoFormats = supportedVFormats.join(", ");

// Get Host name
var hostName = window.location.hostname;

// Get character encoding :
var acceptCharset = document.characterSet || document.charset;

// Get all available sensors:
let sensors = [];
if (typeof DeviceMotionEvent !== "undefined") {
  sensors.push("accelerometer");
}
if (typeof DeviceOrientationEvent !== "undefined") {
  sensors.push("gyroscope");
}
if (typeof AmbientLightSensor !== "undefined") {
  sensors.push("ambient light sensor");
}
if (typeof AmbientTemperatureSensor !== "undefined") {
  sensors.push("ambient temperature sensor");
}
if (typeof ProximitySensor !== "undefined") {
  sensors.push("proximity sensor");
}
if (typeof Magnetometer !== "undefined") {
  sensors.push("magnetometer");
}
if (typeof AbsoluteOrientationSensor !== "undefined") {
  sensors.push("absolute orientation sensor");
}
if (typeof Geolocation !== "undefined") {
  sensors.push("geolocation");
}
let sensorsWithSpace = sensors.join(", ");

// Get timezome
var currenttime = new Date();
const timezone = currenttime.toString().match(/\(([^)]+)\)/)[1];

// Get Last visit on site working
var visit;
var visitTimes = JSON.parse(localStorage.getItem("visitTimes")) || [];
visitTimes.push(currenttime.toLocaleString());
localStorage.setItem("visitTimes", JSON.stringify(visitTimes));
var lastVisit =
  visitTimes.length > 1 ? visitTimes[visitTimes.length - 2] : undefined;
if (lastVisit !== undefined) {
  visit = "last visit- " + lastVisit;
} else {
  visit = "first visit";
}

// Get input Activity
function inputData(event) {
  let typedText = event.data;
  let inputActivity = event.inputType;

  const typeText = document.getElementById("typed-Text");
  if (typeText) {
    typeText.innerText = typedText;
  }

  const inputactivity = document.getElementById("input-Activity");
  if (inputactivity) {
    inputactivity.innerText = inputActivity;
  }
}
