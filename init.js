// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// window.onload - Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы
window.onload = funGeneration();
document
  .getElementById("buttonGeneration")
  .addEventListener("click", function () {
    funGeneration();
  });

function funGeneration() {
  // personGenerator - объект со значениями мужских имён из файла personGenerator.js
  // константа initPerson - присваеивается метод getPerson из объекта personGenerator
  const initPerson = personGenerator.getPerson();
  document.getElementById("firstNameOutput").innerText = initPerson.firstName;
  document.getElementById("surNameOutput").innerText = initPerson.surName;
  document.getElementById("birthYearOutput").innerText =
    initPerson.birthYear + " г.";
  document.getElementById("monthBirthOutput").innerText = initPerson.monthBirth;
  document.getElementById("dataBirthOutput").innerText = initPerson.dataBirth;
  // вывод пола
  document.getElementById("genderOutput").innerText = initPerson.gender;
  document.getElementById("proffOutput").innerText = initPerson.proffName;
  document.getElementById("patronomicOutput").innerText = initPerson.patronomic;
}
document.getElementById("buttonClear").addEventListener("click", function () {
  document.getElementById("firstNameOutput").innerText = "Имя";
  document.getElementById("surNameOutput").innerText = "Фамилия";
  document.getElementById("birthYearOutput").innerText = "Год";
  document.getElementById("monthBirthOutput").innerText = "Месяц ";
  document.getElementById("dataBirthOutput").innerText = "Дата ";
  // вывод пола
  document.getElementById("genderOutput").innerText = "Пол";
  document.getElementById("proffOutput").innerText = "Профессия";
  document.getElementById("patronomicOutput").innerText = "Отчество";
});
