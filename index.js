// On load
document.addEventListener('DOMContentLoaded', fetchPatients)
document.addEventListener('DOMContentLoaded', init)
document.addEventListener('DOMContentLoaded', fetchComments)

// Urls
const patientsUrl = "http://localhost:3000/patients"
const commentsUrl = "http://localhost:3000/comments"

// Query Selectors
const patientList = document.querySelector(".patient-list")
const patientForm = document.querySelector("form.patient-form")
const commentForm = document.querySelector("form.comment-form")

// Fetch Functions - Patients
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

// Fetch Functions - Comments
function fetchComments() {
  fetch(commentsUrl)
    .then(response => response.json())
    .then(json => createCommentCard(json))
}

function postComments(commentObj) {
  fetch(commentsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentObj)
  })
    .then(response => response.json())
    .then(json => renderOneComment(json))
}

// Handle Events - Patients
function createPatientCard(json) {
  json.forEach((patient) => {
    createPatientList(patient)
    // renderOnePatient(patient)
  })
}

function createPatientList(patient) {
  let h4 = document.createElement("h4")
  h4.innerText = `${patient.firstName} ${patient.lastName}`
  let button = document.createElement("button")
  let patientList = document.querySelector("h2.patient-list")
  patientList.append(button)
  button.appendChild(h4)
  clickOnPatientListItem(button, patient)
}

function clickOnPatientListItem(button, patient) {
  button.addEventListener("click", (event) => {
    checkIfAlreadyRendered(patient)
  })
}

function checkIfAlreadyRendered(patient) {
  let allPatientCards = document.querySelectorAll("div.patient-card")
  if (allPatientCards.length === 0) {
    renderOnePatient(patient)
  }
  else if (allPatientCards.length > 0) {
    let ids = []
    allPatientCards.forEach(card => ids.push(parseInt(card.id)))
    if (!ids.includes(patient.id)) {
      c = document.querySelector('div.patient-card')
      c.remove()
      renderOnePatient(patient)
    }
  }
}

function renderOnePatient(patient) {
  let div = document.createElement("div")
  div.className = "patient-card"
  let h4 = document.createElement("h4")
  h4.innerText = `${patient.firstName} ${patient.lastName}`
  patientList.parentElement.appendChild(div)
  div.appendChild(h4)
  addPatientInfo(patient, h4)
}

function addPatientInfo(patient, h4) {
  let patientCard = h4.parentElement
  Object.keys(patient).forEach((data) => {
    // debugger
    if (data !== "id") {
      let ul = document.createElement("ul")
      let li = document.createElement("li")
      li.innerText = `${data}: ${patient[data]}`
      ul.appendChild(li)
      patientCard.append(ul)
    }
    else {
      patientCard.id = patient[data]
    }
  })
  let commentsHeader = document.createElement('h4')
  commentsHeader.innerText = "Doctor's Comments"
  patientCard.append(commentsHeader)
}

function createPatientObject(event) {
  let patientObj = {
    firstName: event.target.children[2].value,
    lastName: event.target.children[6].value,
    dateOfBirth: event.target.children[10].value,
    address: event.target.children[14].value
  }
  postPatientProfile(patientObj)
}


// Handle Events - Comments
function createCommentCard(json) {
  json.forEach((comment) => {
    // renderOneComment(comment)
    console.log(comment)
  })
}

function renderOneComment(comment) {
  let div = document.createElement("div")
  div.className = "comment-card"
  div.innerHTML = `<h4>${comment.title} ${comment.date}</h4><p>${comment.content}</p>`
  let patientCard = document.getElementById(comment.patient_id)
  patientCard.append(div)
}

function createCommentObject(event) {
  let commentObj = {
    patient_id: 1,
    date: event.target.children[2].value,
    title: event.target.children[6].value,
    content: event.target.children[10].value,
  }
  postComments(commentObj)
}

// Forms
function init() {
  patientForm.addEventListener('submit', (event) => {
    event.preventDefault() //prevents form default behavior (we don't want to refresh on submit)
    createPatientObject(event)
  })
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    createCommentObject(event)
  })
}

// Handle Events - User Interaction