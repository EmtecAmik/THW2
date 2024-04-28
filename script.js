// 1. Напишите функцию checkEmail(string), которая в качестве аргумента будет получать строковый тип. Функция должна проверить, есть ли в строке символ “@” и “.” Если оба символа будут находиться в строке - функция должна вернуть true, в противном случае false

// function checkEmail(string) {
//     if (string.includes("@") && string.includes(".")) {
//         return true
//     } else {
//         return false
//     }
// }

// let result1 = checkEmail("some@email.com")
// let result2 = checkEmail("some@emailcom")

// console.log(result1)
// console.log(result2)


// 2. Напишите функцию initCap(string), которая получает строковое значение и возвращает эту же строку с заглавной первой буквой по примеру: 


// function initCap(string) {
//     const swap = string.charAt(0).toUpperCase()
    
//     return swap + string.slice(1)
//   }
  
//   let result1 = initCap("sam")
//   let result2 = initCap("steven")
  
//   console.log(result1)
//   console.log(result2)



// 3. Задан массив phones, передающий элемент HTML разметки. 
// Создайте функцию clearDataCards(array), которая будет получать в качестве аргумента массив и реализует очистку данных. Каждый номер карты нужно переопределить, заменив первые и последние 4 цифры на звездочки
// по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):


//   function clearDataCards(array) {
//     const result = []

//     for (let i = 0; i < array.length; i++) {
//         const card = array[i]
//         let maskedCard = ''

//         for (let j = 0; j < 4; j++) {
//             maskedCard += '*'
//         }

//         for (let j = 4; j < card.length - 4; j++) {
//             maskedCard += card[j]
//         }

//         for (let j = card.length - 4; j < card.length; j++) {
//             maskedCard += '*'
//         }

//         result.push(maskedCard)
//     }

//     return result
// }

// let cards = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869', 
//     '4000 0015 3466 7859',
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699' 
// ]

// const result = clearDataCards(cards)
// console.log(result)



// 4. Задан массив elems, передающий элемент HTML разметки. 
// Создайте функцию clearData(array), которая будет получать в качестве аргумента массив и реализует очистку данных по примеру ниже (должна вывести в консоль МАССИВ, а не элементы массива):


function clearData(array, newarray) {
    for (let i = 0; i < array.length; i++) {
      array[i] = newarray[i]
    }
    
    return array
  }
  
  let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
  ]
  
  const newarray = ['Home', 'About', 'FAQ', 'Contacts']
  
  const result = clearData(elems, newarray)
  console.log(result)
