interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: "Taofik",
    lastName: "Lawal",
    age: 27,
    location: "Ibadan"
  },
  {
    firstName: "Doe",
    lastName: "Ayomide",
    age: 37,
    location: "Abuja"
  }
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const rowHead = thead.insertRow(0);
const firstCellHead = rowHead.insertCell(0);
const secondCellHead = rowHead.insertCell(1);
const thirdCellHead = rowHead.insertCell(2);

firstCellHead.innerHTML = "First Name";
secondCellHead.innerHTML = "Location";
thirdCellHead.innerHTML = "age";
table.appendChild(thead);

studentsList.forEach(student => {
  const row = tbody.insertRow();
  const firstCell = row.insertCell();
  const secondCell = row.insertCell();
  const thirdCell = row.insertCell();

  firstCell.innerHTML = student.firstName;
  secondCell.innerHTML = student.location;
  thirdCell.innerHTML = student.age;
});

table.appendChild(tbody);
document.body.appendChild(table);

