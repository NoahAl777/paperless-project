// On load
document.addEventListener('DOMContentLoaded', fetchPatients)

// Urls
const patientsUrl = "http://localhost:3000/patients"
const commentsUrl = "http://localhost:3000/comments"
// Query Selectors
const patientList = document.querySelector(".patient-list")

// Fetch Functions
function fetchPatients() {
  fetch(patientsUrl) //fetch database for information
    .then(response => response.json()) //convert retrieved response object into json object
    .then(json => createPatientCard(json)) //take json object and pass into function
  // .catch(error => console.log(error))
}

// Handle Events
function createPatientCard(json) {
  json.forEach((patient) => {
    let div = document.createElement("div.patient-card")
    let h3 = document.createElement("h3")
    h3.innerText = `${patient.firstName} ${patient.lastName}`
    patientList.appendChild(div)
    div.appendChild(h3)
    // debugger
    addPatientInfo(patient, h3)
  })
}

function addPatientInfo(patient, h3) {
  Object.keys(patient).forEach((data) => {
    console.log(data)
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    // debugger
    li.innerText = `${data}: ${patient[data]}`
    ul.appendChild(li)
    h3.appendChild(ul)
  })
}