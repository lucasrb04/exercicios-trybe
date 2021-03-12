let testGrade = -1;
if (testGrade > 100 || testGrade < 0) {
  console.log("Test grade invalid!!")
} else if (testGrade >= 90) {
  console.log("A")
} else if (testGrade >= 80) {
  console.log("B")
} else if (testGrade >= 70) {
  console.log("C")
} else if (testGrade >= 60) {
  console.log("D")
} else if (testGrade >= 50) {
  console.log("E")
} else {
  console.log("F")
}