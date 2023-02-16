// console.log(0 && true && 8);
// console.log(false || 2 || false || 9);
// console.log(null || false || undefined || null);
// console.log(true && 4 && 2);
// console.log(false && 2 && true);
// console.log(!5);
// console.log(!true);
// console.log(!false);
// console.log(!null);
// console.log(!undefined);
// console.log(!0);
// const x1 = 34;
// const x2 = 78;
// const number = 54;

// console.log(`Чи входить число ${number} у відрізок від ${x1} до ${x2} ?`, number > x1 && number < x2);
// console.log(`Число ${number} потрапляє у відрізок ${x1} ?`, number > x1);
// console.log(`Число ${number} потрапляє у відрізок ${x2} ? `, number < x2);
// console.log(`Число ${number} більше чила ${x2} ?`, number > x2);
// console.log(`Число ${number} менше від числа ${x1} ?`, number < x1);
// const isOnline = true;
// const isFriend = true;
// const isDnd = true;
// const canOpenChat = isOnline && isFriend && isDnd;

// console.log('Можна відкрити чат? ', canOpenChat);

//  const balance = 100;
 

// if (balance < 0) {
//     message = 'Позитивний баланц';
// } else {
//     message = 'Негативний баланц';
// }
// console.log(message);




// if (!false) {
//    console.log('Hey my name Alina!');
// }

// const start = 63;

// if ( start < 35) {
//     console.log('Мрії збуваються!');
// } else if (start > 35 && start < 60) {
//     console.log('Ти можеш краще!');
// } else if (start > 60 && start < 75) {
//     console.log('Продовжуй, в тебе все вийде!');
// }

// const isFree = 40;

// const canItakeAway = isFree >= 45 ? 'yes' : 'not';
// console.log('Я можу позичити в тебе ручку?', canItakeAway);

// const youHaveMany = 20;
// const giveMeOne = youHaveMany <= 0 ? 'Чому питаєш?' : 'Так маю,ти щось хочеш?';
// console.log('Ти маєш гроші?', giveMeOne);
// const stars = 1;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         console.log('Будь ласка, залиште свій номер, ми вам передзвонимо');
//         break;
    
//     case 2:
//         price = 40;
//         console.log('Раді вас вітати в нашому магазині!');
//         break;
    
//     case 3:
//         price = 60;
//         console.log('Тут ви можете обрати актуальну для вас опцію');
//         break;
    
//     case 4:
//         price = 80;
//         console.log('Залиште, будь ласка, відгук, для нас важлива ваша думка');
//         break;
    
//     default:
//         console.log('Такого значення не існує');
// }
// const workBenefits = 4;
//  let listOfBenefits;

//  switch (workBenefits) {
//     case 1:
//     case 2:
//          listOfBenefits = 50;
//          console.log('Доброго дня, на разі в нас відкрита ваканція програмування, вас цікавить?');
//          break;

//      case 3:
//      case 4:
//      case 5:
    
//          listOfBenefits = 70;
//          console.log('Вітаю, ви отримали оферр від нашої компанії!');
//          break;
//      default:
//          console.log('продовжуйтк працювати у вас все вийде! Вірте у себе!');
//  }
// const option = 3;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'Ви можете забрати товар через відділення НП';
//         break;
//     case 2:
//         message = 'Ви можете забрати товар через відділення Укр Пошти';
//         break;
//     case 3:
//         message = 'Прийдіть за товарои самі, я нікому не наймався розвозити замовлення!';
//         break;
// }
// console.log(message);

// for (let i = 2; i <= 30; i += 2) {
//     console.log(i);
// }
// for (i = 40; i <= 100; i += 4) {
//     console.log(i);
// }
// const min = 10;
// const max = 28;
// let total = 0;


// for (let i = min; i <= 28; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('Не парне число', i);
//         continue;
//     }
//     console.log('Парне число', i);
//     total += i;
// }
// console.log('total', total);
// const grMotherAge = 67;
// const motherAge = 32;
// let totalAge = 0;

// for (let i = motherAge; i <= grMotherAge; i += 1) {
//     console.log(i);
//     if (i % 2 !== 0) {
//         console.log('Не парне число', i);
//         continue;
//     }
//     console.log('Парне число', i);
//     totalAge += i;
// }
// console.log('totalAge', totalAge);
// const product =  12000;
// const balance = 10000;


// console.log(`Загальна сума покупки ${product} . Перевіряємо наявні кошти...`);
// if (product <= balance) {
//     console.log('Все вірно. Списуємо кошти. Дякуємо за покупку!');
//     const total = balance - product;
//     console.log(`На рахунку залишилось ${total} грн`);
// }
// else {
//     console.log('Вибачте, але на рахунку недостатньо коштів, щоб провести операцію..');
// }



//  const totalSpend = 3800;
//  const payment = 3400;
//  balance = 20000;
//  let discount;
//  let result;

//  if (totalSpend >= 1000 && totalSpend <= 2000) {
//      console.log('Бронзовий клієнт, знижка 5%');
//      discount = 0.05;
//      console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);
//      result = payment - payment * discount;
//      console.log(`На вашому рахунку залишилось ${result}`);

//  } else if (totalSpend >= 2000 && totalSpend <= 3500) {
//      console.log('Срібний клієнт, знижка 10%');
//      discount = 0.1;
//      console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);
//      result = payment - payment * discount;
//      console.log(`На вашому рахунку залишилось ${result}`);
//  }
//  else if (totalSpend >= 3500 && totalSpend <= 5000) {
//      console.log('Золотий клієнт, знижка 15%');
//      discount = 0.15;
//      console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);
//      result = payment - payment * discount;
//      console.log(`На вашому рахунку залишилось ${result}`);
//  }


