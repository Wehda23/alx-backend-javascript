interface Student{
    firstName: String,
    lastName: String,
    age: Number,
    location: String
}


let student: Student = {
firstName: "John",
lastName: "Doe",
age: 25,
location: "New York"
}

let secondStudent: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "New York"
}

const studentList: Student[] = [student, secondStudent]

// Function to render table
function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = `<th>First Name</th><th>Location</th>`;
    table.appendChild(tableHeader);

students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
});

document.body.appendChild(table);
}

// Render the table when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => renderTable(studentList));