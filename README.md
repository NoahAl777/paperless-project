# paperless-project

# Description:
  - Doctor's portal for patient profiles

# Project Requirements:
 - Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

 - Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

 - Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

 - Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

 - Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

 # Objectives:
 - Patients class
  *firstName, lastName, dateOfBirth, address, etc

 - Comments class
  *date, title, content, patient_id
  *doctors can leave comments on patient user profiles

 - HTML forms
  *patient info
  *submit comment

 - More interactions
  *ability to highliht most important comments

# DB-JSON:
 - Patients routes
 *GET    /patients
 *GET    /patients/1
 *POST   /patients
 *PUT    /patients/1
 *PATCH  /patients/1
 *DELETE /patients/1
 
 - Comments routes
 *GET    /comments
 *GET    /comments/1
 *POST   /comments
 *PUT    /comments/1
 *PATCH  /comments/1
 *DELETE /comments/1 
