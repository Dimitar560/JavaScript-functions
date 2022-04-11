// Another type of sorting

let students = [
  { name: "Ivan", score: 5 },
  { name: "Dimitar", score: 5.5 },
  { name: "Kristian", score: 4 },
  { name: "Valentin", score: 6 },
  { name: "Veselin", score: 3 },
  { name: "Genadi", score: 5 },
  { name: "Yavor", score: 3 },
  { name: "Marin", score: 5.5 },
  { name: "Kalin", score: 3 },
  { name: "Yavor", score: 6 },
];

let highestGrade = [];

for (let student in students) {
  let highGrade = students[student];

  highGrade.score > 5.5 ? highestGrade.push(highGrade) : "";
}

console.log(highestGrade);
