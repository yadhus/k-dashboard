const countryStateCity = {
  USA: {
    California: ["Los Angeles", "San Diego", "Sacramento"],
    Texas: ["Houston", "Austin"],
    Florida: ["Miami", "Orlando", "Tampa"],
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    TamilNadu: ["Chennai", "Madurai", "Trichy"],
    Karnataka: ["Bangalore", "Mangalore"],
  },
  Canada: {
    Alberta: ["Calgary", "Edmonton", "Red Deer"],
    BritishColumbia: ["Vancouver", "Kelowna"],
    Manitoba: ["Winnipeg", "Brandon"],
  },
  Germany: {
    Bavaria: ["Munich", "Nuremberg"],
    NorthRhine: ["Cologne", "Düsseldorf"],
  },
};

const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");

for (let country in countryStateCity) {
  countrySelect.options[countrySelect.options.length] = new Option(
    country,
    country
  );
}

countrySelect.onchange = function () {
  stateSelect.length = 1;
  citySelect.length = 1;
  if (this.selectedIndex < 1) return;
  for (var state in countryStateCity[this.value]) {
    stateSelect.options[stateSelect.options.length] = new Option(state, state);
  }
};

stateSelect.onchange = function () {
  citySelect.length = 1;
  if (this.selectedIndex < 1) return;
  var city = countryStateCity[countrySelect.value][this.value];
  for (var i = 0; i < city.length; i++) {
    citySelect.options[citySelect.options.length] = new Option(
      city[i],
      city[i]
    );
  }
};

const form = document.getElementById("personalForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const hobbiesInput = document.getElementById("hobbies");

hobbiesInput.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    console.log(evt.target.value);
    let hobbyEl = document.createElement("div");
    let hobbyText = document.createTextNode(evt.target.value);
    hobbyEl.appendChild(hobbyText);
    let hobbiesList = document.querySelector(".hobbiesList");
    hobbiesList.appendChild(hobbyEl);
    hobbiesList.style.display = "flex";
    hobbiesInput.value = "";
  }
});

const reactjsCheckbox = document.getElementById("reactjs");
const angularCheckbox = document.getElementById("angular");
const pythonCheckbox = document.getElementById("python");
const mongodbCheckbox = document.getElementById("mongodb");

reactjsCheckbox.onchange = (evt) => showSkillLevel(evt, ".reactjsSkillLevel");
angularCheckbox.onchange = (evt) => showSkillLevel(evt, ".angularSkillLevel");
pythonCheckbox.onchange = (evt) => showSkillLevel(evt, ".pythonSkillLevel");
mongodbCheckbox.onchange = (evt) => showSkillLevel(evt, ".mongodbSkillLevel");

function showSkillLevel(evt, className) {
  const skillLevel = document.querySelector(className);
  if (evt.target.checked) {
    skillLevel.style.display = "flex";
  } else {
    skillLevel.style.display = "none";
  }
}

ageInput.onblur = function () {
  console.log(this.value);
};

const reactjsLevel = document.getElementsByName("reactjsLevel");
const angularLevel = document.getElementsByName("angularLevel");
const pythonLevel = document.getElementsByName("pythonLevel");
const mongodbLevel = document.getElementsByName("mongodbLevel");

const submitButton = document.getElementById("submit");
const overlayEl = document.querySelector(".overlay");
const confirmPopupEl = document.querySelector(".confirmPopup");
const confirmH2 = document.querySelector(".confirmPopup>h2");

function handleFormSubmit() {
  console.log("Form submitted");
  let loader = document.createElement("i");
  loader.className = "fa fa-circle-o-notch fa-spin";
  submitButton.insertBefore(loader, submitButton.firstChild);

  nameInput.disabled = true;
  ageInput.disabled = true;
  hobbiesInput.disabled = true;
  reactjsCheckbox.disabled = true;
  angularCheckbox.disabled = true;
  pythonCheckbox.disabled = true;
  mongodbCheckbox.disabled = true;

  reactjsLevel && reactjsLevel.forEach((level) => (level.disabled = true));
  angularLevel && angularLevel.forEach((level) => (level.disabled = true));
  pythonLevel && pythonLevel.forEach((level) => (level.disabled = true));
  mongodbLevel && mongodbLevel.forEach((level) => (level.disabled = true));

  countrySelect.disabled = true;
  stateSelect.disabled = true;
  citySelect.disabled = true;

  form.reset();

  setTimeout(() => {
    submitButton.removeChild(loader);
    // alert("Form submitted successfully");
    let sucessText = document.createTextNode("Form submitted successfully");
    confirmH2.appendChild(sucessText);
    overlayEl.style.display = "block";
    confirmPopupEl.style.display = "flex";
    nameInput.disabled = false;
    ageInput.disabled = false;
    hobbiesInput.disabled = false;
    reactjsCheckbox.disabled = false;
    angularCheckbox.disabled = false;
    pythonCheckbox.disabled = false;
    mongodbCheckbox.disabled = false;
    reactjsLevel && reactjsLevel.forEach((level) => (level.disabled = false));
    angularLevel && angularLevel.forEach((level) => (level.disabled = false));
    pythonLevel && pythonLevel.forEach((level) => (level.disabled = false));
    mongodbLevel && mongodbLevel.forEach((level) => (level.disabled = false));
    countrySelect.disabled = false;
    stateSelect.disabled = false;
    citySelect.disabled = false;
  }, 1000);
}

function onSuccessOk() {
  overlayEl.style.display = "none";
  confirmPopupEl.style.display = "none";
  confirmH2.childNodes.forEach((child) => child.remove());
}

function handleFormCancel() {
  form.reset();
  setTimeout(() => {
    let cancelText = document.createTextNode(
      "Form cleared! You can re-enter values."
    );
    confirmH2.appendChild(cancelText);
    overlayEl.style.display = "block";
    confirmPopupEl.style.display = "flex";
  }, 0);
}
