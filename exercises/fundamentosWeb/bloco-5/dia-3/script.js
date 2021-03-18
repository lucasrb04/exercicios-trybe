function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days')
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.className = 'day'
    if (days == 24 || days == 25 || days == 31) {
      dayListItem.classList.add('holiday');
    }
    if (days == 4 || days == 11 || days == 18 || days == 25) {
      dayListItem.classList.add('friday');
    }
    dayListItem.innerText = days;
    monthDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheMonth();

function holidays(Feriados) {
  const placeHolidaybtn = document.querySelector(".buttons-container");
  const holidaybtn = document.createElement('button');
  holidaybtn.id = "btn-holiday";
  holidaybtn.innerText = "Feriados"
  placeHolidaybtn.appendChild(holidaybtn)
}
holidays ()
let count = 1;
function changeColorHoliday() {
  const holidays = document.querySelectorAll('.holiday');
  count += 1;
  for (let index = 0; index < holidays.length; index++) {
    if (holidays[index].style.backgroundColor === 'red') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'red';
    }
  }
}
const holidaybtn = document.querySelector('#btn-holiday')
holidaybtn.addEventListener("click", changeColorHoliday);

function friday(Feriados) {
  const placeHolidaybtn = document.querySelector(".buttons-container");
  const fridaybtn = document.createElement('button');
  fridaybtn.id = "btn-friday";
  fridaybtn.innerText = "Sexta-feira";
  placeHolidaybtn.appendChild(fridaybtn)
}
friday()
const fridayDays = [4, 11, 18, 25];
function changeTextFriday() {
  const fridays = document.querySelectorAll('.friday');
  for (let index = 0; index < fridays.length; index++) {
    if (fridays[index].innerHTML == "sextou") {
      fridays[index].innerHTML = fridayDays[index];
    } else {
    fridays[index].innerHTML = "sextou";
    }
  }
}
const fridaybtn = document.querySelector('#btn-friday')
fridaybtn.addEventListener("click", changeTextFriday);

