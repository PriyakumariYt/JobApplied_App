let BookmarkDataLS = JSON.parse(localStorage.getItem("bookmarkData"));
console.log(BookmarkDataLS);

const tbody = document.querySelector("tbody");

BookmarkDataLS.forEach((elem, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${elem.personName}</td><td>${elem.personEmail}</td><td>${elem.personRole}</td><td><button class="btn" onclick="deleteBookmark(${index})">Delete</button></td>`;
    tbody.appendChild(row);
});

function deleteBookmark(index) {
    BookmarkDataLS.splice(index, 1); // Remove the bookmark from the array
    localStorage.setItem("bookmarkData", JSON.stringify(BookmarkDataLS)); // Update the local storage
    location.reload(); // Refresh the page to reflect the changes
}