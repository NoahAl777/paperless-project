// On load
document.addEventListener('DOMContentLoaded', fetchPatients)

// Urls
const patientsUrl = "http://localhost:3000/patients"

// Fetch Functions
function fetchPatients() {
  fetch(patientsUrl) //fetch database for information
    .then(response => response.json) //convert retrieved response object into json object
    .then(json => createPatientProfile)
}

// Handle Events
function createPatientProfile() {

}