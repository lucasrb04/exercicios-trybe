let footer = document.getElementsByTagName("footer")[0];
footer.style.backgroundColor = ("black");
let header = document.getElementsByTagName("header")[0];
header.style.backgroundColor = ("green");
let emergerncyTasks = document.querySelector(".emergency-tasks");
emergerncyTasks.style.backgroundColor = ("pink");
let noEmergerncyTasks = document.querySelector(".no-emergency-tasks");
noEmergerncyTasks.style.backgroundColor = ("yellow");
let titleEmergerncyTasks = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < titleEmergerncyTasks.length; i += 1) {
  titleEmergerncyTasks[i].style.backgroundColor = ("purple");
}
let titleNoEmergerncyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < titleEmergerncyTasks.length; i += 1) {
  titleNoEmergerncyTasks[i].style.backgroundColor = ("black");
}