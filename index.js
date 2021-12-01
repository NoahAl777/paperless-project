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
    .then(json => createPatientProfile(json)) //take json object and pass into function
  // .catch(error => console.log(error))
}

// Handle Events
function createPatientProfile(json) {
  json.forEach((element) => {
    let li = document.createElement("li")
    li.innerText = `${element.firstName} ${element.lastName}`
    patientList.appendChild(li)
  })
}