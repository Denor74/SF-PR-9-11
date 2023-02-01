// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// personGenerator - объект
const personGenerator = {
  // строка с фамилиями
  surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  // строка с мужскими именами
  firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
  // строка с женскими именами
  firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Татьяна",
            "id_2": "Елена",
            "id_3": "Анна",
            "id_4": "Светлана",
            "id_5": "Яна",
            "id_6": "Оксана",
            "id_7": "Ирина",
            "id_8": "Алёна",
            "id_9": "Екатерина",
            "id_10": "Мария"
        }
    }`,
  // строка с женскими Профессиями
  proffNameFeMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Няня",
            "id_2": "Медсестра",
            "id_3": "Учительница",
            "id_4": "Волшебница"

        }
    }`,

  // строка с мужскими Профессиями
  proffNameMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Строитель",
            "id_2": "Спасатель",
            "id_3": "Шахтер",
            "id_4": "Инженер"
        }
    }`,

  // monthYearJson: `{
  //     "count": 12,
  //     "list": {
  //         "id_1": "января",
  //         "id_2": "февраля",
  //         "id_3": "марта",
  //         "id_4": "апреля",
  //         "id_5": "мая",
  //         "id_6": "июня",
  //         "id_7": "июля",
  //         "id_8": "августа",
  //         "id_9": "сентября",
  //         "id_10": "октября",
  //         "id_11": "ноября",
  //         "id_12": "декабря"
  //     }
  // }`,

  // Константы в верхнем регистре - псевдоним для константы используются только как псевдонимы для «жёстко закодированных» значений
  GENDER_MALE: "Мужчина",
  GENDER_FEMALE: "Женщина",

  // randomIntNumber - свойство объекта со значением стрелочной функции (return  не нужен т.к. есть только вычисления)
  // метод отвечающий за случайную генерацию
  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomGender: function () {
    const gender = this.randomIntNumber()
      ? this.GENDER_MALE
      : this.GENDER_FEMALE;
    return gender;
  },

  // метод randomValue преобразующий строки JSON в объект JS благодаря свойству parse
  randomValue: function (json) {
    // строка JSON помещается в объект obj
    const obj = JSON.parse(json);
    // производим выборку для аргумента max из значений свойства count
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },
  //  рандомное назначение пола

  randomFirstName: function (gender) {
    if (gender == this.GENDER_FEMALE) {
      return this.randomValue(this.firstNameFeMaleJson);
    }

    return this.randomValue(this.firstNameMaleJson);
  },

  randomSurname: function (gender) {
    // surnameJson - фамилия
    // происходит возврат объекта
    let surname = this.randomValue(this.surnameJson);
    if (gender === this.GENDER_FEMALE) {
      return surname + "a";
    }
    return surname;
  },

  randomProffName: function (gender) {
    if (gender == this.GENDER_FEMALE) {
      return this.randomValue(this.proffNameFeMaleJson);
    }

    return this.randomValue(this.proffNameMaleJson);
  },

  randomPatronomic: function (gender) {
    // Вводим переменную со свободной выборкой из JSON с мужскими именами
    let nameString = this.randomValue(this.firstNameMaleJson);
    // Определяем последний символ имени
    let nameLastSymbol = nameString.slice(-1);
    // Определяем два последних символа имени
    let nameLastSymbolTwo = nameString.slice(-2);

    // console.log('nameLastSymbol : ' + nameLastSymbol);
    // console.log('nameLastSymbolTwo : ' + nameLastSymbolTwo);
    // Генерация мужского отчества
    if (gender == this.GENDER_MALE) {
      if (nameLastSymbol == "й") {
        let nameStringPatr = nameString.slice(0, -1);
        return (patronomic = nameStringPatr + "евич");
      }
      if (nameLastSymbol == "а" || nameLastSymbol == "ч") {
        let nameStringPatr = nameString.slice(0, -1);
        return (patronomic = nameStringPatr + "ович");
      }
      if (
        nameLastSymbolTwo == "ил" ||
        nameLastSymbolTwo == "им" ||
        nameLastSymbolTwo == "ан" ||
        nameLastSymbolTwo == "др" ||
        nameLastSymbolTwo == "ем"
      ) {
        let nameStringPatr = nameString;
        return (patronomic = nameStringPatr + "ович");
      } else {
        return nameString + "евич";
      }
    }
    // Если gender == this.GENDER_FEMALE женское имя
    else {
      if (nameLastSymbol == "й") {
        let nameStringPatr = nameString.slice(0, -1);
        return (patronomic = nameStringPatr + "евна");
      }
      if (nameLastSymbolTwo == "та") {
        let nameStringPatr = nameString.slice(0, -1);
        return (patronomic = nameStringPatr + "ична");
      }
      return nameString + "овна";
    }
  },
  // Генерация месяца рождения
  randomMonthYear: function () {
    let monthNumber = this.randomIntNumber(12, 1);
    let monthBirth;

    switch (monthNumber) {
      case 1:
        monthBirth = "января";
        break;
      case 2:
        monthBirth = "февраля";
        break;
      case 3:
        monthBirth = "марта";
        break;
      case 4:
        monthBirth = "апреля";
        break;
      case 5:
        monthBirth = "мая";
        break;
      case 6:
        monthBirth = "июня";
        break;
      case 7:
        monthBirth = "июля";
        break;
      case 8:
        monthBirth = "августа";
        break;
      case 9:
        monthBirth = "сентября";
        break;
      case 10:
        monthBirth = "октября";
        break;
      case 11:
        monthBirth = "ноября";
        break;
      case 12:
        monthBirth = "декабря";
        break;
    }
    console.log(monthNumber);
    console.log(monthBirth);
    return monthBirth;
  },
  // Генерация даты рождения. Используется аргумент month для выбора числа в зависимости от месяца рождения
  randomDataBirth: function (month) {
    if (month == "февраля") {
      return this.randomIntNumber(28, 1);
    }
    if (
      month == "сентября" ||
      month == "апреля" ||
      month == "июня" ||
      month == "ноября"
    ) {
      return this.randomIntNumber(30, 1);
    }
    return this.randomIntNumber(31, 1);
  },

  // метод getPerson продолжает выполнение в файле init.js
  getPerson: function () {
    let gender = this.randomGender();
    let month = this.randomMonthYear();
    let birthYear = this.randomIntNumber(1974, 1999);
    console.log("monthYear " + month);
    console.log("gender " + gender);
    this.person = {};

    this.person.gender = gender;
    this.person.monthBirth = month;
    this.person.firstName = this.randomFirstName(gender);
    this.person.surName = this.randomSurname(gender);
    this.person.birthYear = birthYear;
    this.person.proffName = this.randomProffName(gender);
    this.person.patronomic = this.randomPatronomic(gender);
    this.person.dataBirth = this.randomDataBirth(month);

    return this.person;
  },
};

//console.log("randomPatronomic - " + personGenerator.randomPatronomic());
