// #1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// #2
function isEmpty(object) {
    for (let key in object) {
        return true;
    }
    return false
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390


// #4
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    
  function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }
      } 
  }

  multiplyNumeric(menu);
