interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "student",
	lastName: "1",
	age: 21,
	location: "jeddah",
};

const student2: Student = {
	firstName: "student",
	lastName: "2",
	age: 22,
	location: "Assir",
};

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = studentsList
	.map(function ({ firstName, location }) {
		return [firstName, location]
			.map(function (v) {
				const colText = document.createTextNode(v);
				const col = document.createElement("td");
				col.appendChild(colText);
				return col;
			})
			.reduce(function (acc, col) {
				acc.appendChild(col);
				return acc;
			}, document.createElement("tr"));
	})
	.reduce(
		function (acc, row) {
			acc[0].appendChild(row);
			return acc;
		},
		[document.createElement("tbody")],
	)
	.reduce(function (acc, tbody) {
		acc.appendChild(tbody);
		return acc;
	}, document.createElement("table"));

table.prepend(
	["First name", "Location"]
		.map(function (text) {
			const headerText = document.createTextNode(text);
			const header = document.createElement("th");
			header.appendChild(headerText);
			return header;
		})
		.reduce(
			function (acc, header) {
				acc[0].appendChild(header);
				return acc;
			},
			[document.createElement("tr")],
		)
		.reduce(function (acc, row) {
			acc.appendChild(row);
			return acc;
		}, document.createElement("thead")),
);

const body = document.querySelector("body");
body?.appendChild(table);
