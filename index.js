// On load
document.addEventListener('DOMContentLoaded', fetchPatients)
document.addEventListener('DOMContentLoaded', init)

// Urls
const patientsUrl = "http://localhost:3000/patients"
const commentsUrl = "http://localhost:3000/comments"

// Query Selectors
const patientList = document.querySelector(".patient-list")
const inputForm = document.querySelector("form")

// Fetch Functions
function fetchPatients() {
  fetch(patientsUrl) //fetch database for information
    .then(response => response.json()) //convert retrieved response object into json object
    .then(json => createPatientCard(json)) //take json object and pass into function
  // .catch(error => console.log(error))
}

function postPatientProfile(patientObj) {
  fetch(patientsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(patientObj)
  })
    .then(response => response.json())
    .then(json => renderOnePatient(json))
}

// Handle Events
function createPatientCard(json) {
  json.forEach((patient) => {
    renderOnePatient(patient)
  })
}

function renderOnePatient(patient) {
  let div = document.createElement("div.patient-card")
  let h4 = document.createElement("h4")
  h4.innerText = `${patient.firstName} ${patient.lastName}`
  patientList.appendChild(div)
  div.appendChild(h4)
  addPatientInfo(patient, h4)
}

function addPatientInfo(patient, h4) {
  Object.keys(patient).forEach((data) => {
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    li.innerText = `${data}: ${patient[data]}`
    ul.appendChild(li)
    h4.appendChild(ul)
  })
}

// Form
function init() {
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault() //prevents form default behavior (we don't want to refresh on submit)
    console.log(event.target.children)
    let patientObj = {
      firstName: event.target.children[2].value,
      lastName: event.target.children[6].value,
      dateOfBirth: event.target.children[10].value,
      address: event.target.children[14].value
    }
    postPatientProfile(patientObj)
  })
}