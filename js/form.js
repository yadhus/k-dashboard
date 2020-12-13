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
const dobInput = document.getElementById("dob");
const hobbiesInput = document.getElementById("hobbies");
const hobbiesList = document.querySelector(".hobbiesList");

hobbiesInput.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    console.log(evt.target.value);
    let hobbyEl = document.createElement("div");
    let hobbyText = document.createTextNode(evt.target.value);
    hobbyEl.appendChild(hobbyText);
    hobbiesList.appendChild(hobbyEl);
    hobbiesList.style.display = "flex";
    hobbiesInput.value = "";
  }
});

const reactjsCheckbox = document.getElementById("reactjs");
const angularCheckbox = document.getElementById("angular");
const pythonCheckbox = document.getElementById("python");
const mongodbCheckbox = document.getElementById("mongodb");

const reactjsSkillLevelEl = document.querySelector(".reactjsSkillLevel");
const angularSkillLevelEl = document.querySelector(".angularSkillLevel");
const pythonSkillLevelEl = document.querySelector(".pythonSkillLevel");
const mongodbSkillLevelEl = document.querySelector(".mongodbSkillLevel");

reactjsCheckbox.onchange = (evt) => showSkillLevel(evt, reactjsSkillLevelEl);
angularCheckbox.onchange = (evt) => showSkillLevel(evt, angularSkillLevelEl);
pythonCheckbox.onchange = (evt) => showSkillLevel(evt, pythonSkillLevelEl);
mongodbCheckbox.onchange = (evt) => showSkillLevel(evt, mongodbSkillLevelEl);

function showSkillLevel(evt, skillLevel) {
  if (evt.target.checked) {
    skillLevel.style.display = "flex";
  } else {
    skillLevel.style.display = "none";
  }
}

const cometEl = document.querySelector(".comet");

dobInput.onchange = function () {
  let lastHalleyCometDay = new Date("1986-06-12");
  let birthday = new Date(this.value);
  let today = new Date();
  let nextBirthday = new Date(
    today.getFullYear() + 1,
    birthday.getMonth(),
    birthday.getDate()
  );
  const diffTime = Math.abs(nextBirthday - lastHalleyCometDay);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));

  cometEl.innerHTML = "";
  const cometText = document.createTextNode(
    `Its been ${diffDays} days since last halley's comet and your next birthday`
  );
  cometEl.style.display = "flex";
  cometEl.appendChild(cometText);
};

const reactjsLevelEls = document.getElementsByName("reactjsLevel");
const angularLevelEls = document.getElementsByName("angularLevel");
const pythonLevelEls = document.getElementsByName("pythonLevel");
const mongodbLevelEls = document.getElementsByName("mongodbLevel");

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
  dobInput.disabled = true;
  hobbiesInput.disabled = true;
  reactjsCheckbox.disabled = true;
  angularCheckbox.disabled = true;
  pythonCheckbox.disabled = true;
  mongodbCheckbox.disabled = true;

  reactjsLevelEls &&
    reactjsLevelEls.forEach((level) => (level.disabled = true));
  angularLevelEls &&
    angularLevelEls.forEach((level) => (level.disabled = true));
  pythonLevelEls && pythonLevelEls.forEach((level) => (level.disabled = true));
  mongodbLevelEls &&
    mongodbLevelEls.forEach((level) => (level.disabled = true));

  countrySelect.disabled = true;
  stateSelect.disabled = true;
  citySelect.disabled = true;

  // If needed make a API call to send or store the form data
  console.log("Form values", getFormValues());

  setTimeout(() => {
    formReset();
    submitButton.removeChild(loader);
    // alert("Form submitted successfully");
    let sucessText = document.createTextNode("Form submitted successfully");
    confirmH2.appendChild(sucessText);
    overlayEl.style.display = "block";
    confirmPopupEl.style.display = "flex";
    nameInput.disabled = false;
    dobInput.disabled = false;
    hobbiesInput.disabled = false;
    reactjsCheckbox.disabled = false;
    angularCheckbox.disabled = false;
    pythonCheckbox.disabled = false;
    mongodbCheckbox.disabled = false;
    reactjsLevelEls &&
      reactjsLevelEls.forEach((level) => (level.disabled = false));
    angularLevelEls &&
      angularLevelEls.forEach((level) => (level.disabled = false));
    pythonLevelEls &&
      pythonLevelEls.forEach((level) => (level.disabled = false));
    mongodbLevelEls &&
      mongodbLevelEls.forEach((level) => (level.disabled = false));
    countrySelect.disabled = false;
    stateSelect.disabled = false;
    citySelect.disabled = false;
  }, 2000);
}

function onSuccessOk() {
  overlayEl.style.display = "none";
  confirmPopupEl.style.display = "none";
  confirmH2.innerHTML = "";
}

function handleFormCancel() {
  setTimeout(() => {
    let cancelText = document.createTextNode(
      "Form cleared! You can re-enter values."
    );
    confirmH2.appendChild(cancelText);
    overlayEl.style.display = "block";
    confirmPopupEl.style.display = "flex";
  }, 0);
}

function formReset() {
  form.reset();
  cometEl && (cometEl.style.display = "none");

  hobbiesList.innerHTML = "";
  hobbiesList.style.display = "none";
  reactjsSkillLevelEl && (reactjsSkillLevelEl.style.display = "none");
  angularSkillLevelEl && (angularSkillLevelEl.style.display = "none");
  pythonSkillLevelEl && (pythonSkillLevelEl.style.display = "none");
  mongodbSkillLevelEl && (mongodbSkillLevelEl.style.display = "none");
}

function getFormValues() {
  let formValue = {
    name: nameInput.value,
    dob: dobInput.value,
    hobbies: [],
    technologies: [],
    skills: {},
    country: countrySelect.value,
    state: stateSelect.value,
    city: citySelect.value,
  };
  if (hobbiesList.hasChildNodes) {
    hobbiesList.childNodes.forEach((child) => {
      formValue.hobbies.push(child.textContent);
    });
  }
  if (reactjsCheckbox.checked) {
    formValue.technologies.push(reactjsCheckbox.value);
    let reactjsSkillLevel;
    reactjsLevelEls.forEach((level) => {
      if (level.checked) {
        reactjsSkillLevel = level.value;
      }
    });
    formValue.skills[reactjsCheckbox.value] = reactjsSkillLevel;
  }
  if (angularCheckbox.checked) {
    formValue.technologies.push(angularCheckbox.value);
    let angularSkillLevel;
    angularLevelEls.forEach((level) => {
      if (level.checked) {
        angularSkillLevel = level.value;
      }
    });
    formValue.skills[angularCheckbox.value] = angularSkillLevel;
  }
  if (pythonCheckbox.checked) {
    formValue.technologies.push(pythonCheckbox.value);
    let pythonSkillLevel;
    pythonLevelEls.forEach((level) => {
      if (level.checked) {
        pythonSkillLevel = level.value;
      }
    });
    formValue.skills[pythonCheckbox.value] = pythonSkillLevel;
  }
  if (mongodbCheckbox.checked) {
    formValue.technologies.push(mongodbCheckbox.value);
    let mongodbSkillLevel;
    mongodbLevelEls.forEach((level) => {
      if (level.checked) {
        mongodbSkillLevel = level.value;
      }
    });
    formValue.skills[mongodbCheckbox.value] = mongodbSkillLevel;
  }

  return formValue;
}
