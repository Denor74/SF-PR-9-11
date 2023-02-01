// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

//   let json = JSON.stringify(student);
//   console.log(json);

//   let object = JSON.parse(json);
//   console.log(object);

// const random = (max = 15, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
// console.log('random - ' + random());

// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// personGenerator - объект
const personGenerator = {
  // поля
  gender: "",
  firstname: "",
  surname: "",
  birthYear: 0,

  // Константы в верхнем регистре - псевдоним для константы
  // используются только как псевдонимы для «жёстко закодированных» значений
  GENDER_MALE: "Мужчина",
  GENDER_FEMALE: "Женщина",

  // фамилии
  surnames: [
      "Иванов",
      "Смирнов",
      "Кузнецов",
      "Васильев",
      "Петров",
      "Михайлов",
      "Новиков",
      "Федоров",
      "Кравцов",
      "Николаев",
      "Семёнов",
      "Славин",
      "Степанов",
      "Павлов",
      "Александров",
      "Морозов",
  ],
  // мужские имена
  maleFirstNames: [
      "Александр",
      "Максим",
      "Иван",
      "Артем",
      "Дмитрий",
      "Никита",
      "Михаил",
      "Даниил",
      "Егор",
      "Андрей",
  ],
  // строка с женскими именами
  femaleFirstNames: [
      "Татьяна",
      "Елена",
      "Анна",
      "Светлана",
      "Яна",
      "Оксана",
      "Ирина",
      "Алёна",
      "Екатерина",
      "Мария",
  ],

  // методы
  // randomIntNumber - свойство объекта со значением стрелочной функции (return  не нужен т.к. есть только вычисления)
  // метод отвечающий за случайную генерацию
  randomIntNumber: (min = 0, max = 1) =>
      Math.floor(Math.random() * (max - min + 1) + min),

  //  случайное назначение пола
  randomGender: function () {
      let gender = this.randomIntNumber()
          ? this.GENDER_MALE
          : this.GENDER_FEMALE;
      return gender;
  },

  // метод randomItem возвращает случайный элемент массива
  randomItem: function (array) {
      // производим выборку для аргумента max из значений свойства count
      const index = this.randomIntNumber(0, array.length - 1); // this = personGenerator
      return array[index];
  },

  randomFirstName: function () {
      return this.randomItem(
          this.gender == this.GENDER_FEMALE
              ? this.femaleFirstNames
              : this.maleFirstNames
      );
  },

  randomSurname: function () {
      // surnames - массив фамилий
      // происходит возврат объекта
      let surname = this.randomItem(this.surnames);
      if (this.gender == this.GENDER_FEMALE) {
          surname += "a";
      }

      return surname;
  },



  // метод getPerson продолжает выполнение в файле init.js
  getPerson: function () {
      // this.person = {};
      this.gender = this.randomGender();
      this.firstname = this.randomFirstName();
      this.surname = this.randomSurname();
      this.birthYear = this.randomIntNumber(1974, 1999);

      return this;
  },
};

// console.log();
// console.log("randomIntNumber - " + personGenerator.randomIntNumber());
// console.log("randomGender - " + personGenerator.randomGender());
// console.log(" this.randomGender() " + personGenerator.randomGender());
