
// index file
document.querySelector("form").addEventListener("submit",myJobapp)
let jobArray = JSON.parse(localStorage.getItem("jobData"))|| [];
function myJobapp(event){
event.preventDefault();
let jobObj = {
personName:document.querySelector("#name").value,
personEmail:document.querySelector("#email").value,
personSalary:document.querySelector("#salary").value,
personRole:document.querySelector("#role").value
}
// console.log(jobObj)
jobArray.push(jobObj)
// console.log(jobArray)
localStorage.setItem("jobData",JSON.stringify(jobArray))
}

