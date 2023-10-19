let arrFromls = JSON.parse(localStorage.getItem("jobData")) || [];
let bookmarkArr = JSON.parse(localStorage.getItem("bookmarkData")) || [];

displayData(arrFromls);

function displayData(arrFromls) {
    arrFromls.forEach((elem, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = elem.personName;
        let td2 = document.createElement("td");
        td2.innerText = elem.personEmail;
        let td3 = document.createElement("td");
        td3.innerText = elem.personRole;
        let td4 = document.createElement("td");
        td4.innerText = elem.personSalary;
        let td5 = document.createElement("td");
        td5.innerText = "BookMark";
        td5.classList.add("bookmarkBg")  //add a class 
        td5.addEventListener("click", function () {
            bookmarkFun(elem);
        });

        let td6 = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("btn"); // Apply the btn class

        deleteButton.addEventListener("click", function () {
            deleteRow(index);
        });

        td6.appendChild(deleteButton);
        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    });
}

function bookmarkFun(elem) {
    bookmarkArr.push(elem);
    localStorage.setItem("bookmarkData", JSON.stringify(bookmarkArr));
}

function deleteRow(index) {
    arrFromls.splice(index, 1); // Remove the element from the array
    localStorage.setItem("jobData", JSON.stringify(arrFromls)); // Update the local storage
    location.reload(); // Refresh the page to reflect the changes
}