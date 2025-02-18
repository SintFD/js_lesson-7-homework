// 1 Автоматическое исправление заголовков

function fixTitles(str) {
  let newStr = str.toLowerCase();
  newStr = newStr[0].toUpperCase() + newStr.slice(1);
  console.log(newStr);
}

// fixTitles("пРивет КАк делА !!!");

// 2 Фильтр уникальных пользователей по ID
function usersFilter(arr) {
  let newArr = [];
  let usersId = [];

  for (const el of arr) {
    if (!usersId.includes(el.id)) {
      usersId.push(el.id);
      newArr.push(el);
    }
  }
  console.log(newArr);
}

// usersFilter([
//   { id: 1, name: "Алексей", age: 25 },
//   { id: 2, name: "Мария", age: 30 },
//   { id: 1, name: "Иван", age: 22 }, // Дубликат id = 1
//   { id: 3, name: "Ольга", age: 27 },
//   { id: 2, name: "Николай", age: 35 }, // Дубликат id = 2
//   { id: 4, name: "Татьяна", age: 28 },
// ]);

// 3 Поиск самой длинной подстроки без повторяющихся символов

function strLength(str) {
  let newArr = [];
  let temp = "";
  let b = 0;
  let maxLength = 0;

  for (let i = 0; i <= str.length; i++) {
    if (!temp.includes(str[i]) && i !== str.length) {
      temp = temp + str[i];
    } else {
      //   newArr = [...newArr, i + " " + temp];
      newArr = [...newArr, temp];
      temp = "";
      i = b;
      b++;
    }
  }

  for (const el of newArr) {
    if (el.length > maxLength) {
      maxLength = el.length;
      //   console.log(el);
    }
  }

  console.log("Макс длинна без повторений: " + maxLength);
}

// strLength("Привет как дела");
