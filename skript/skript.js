//Калькулятор стоимости товаров: Создайте функцию, которая принимает цену товара и количество единиц, 
//а затем возвращает общую стоимость.
function calculateTotalCost(price, quantity){
    const totalCost = price * quantity;
    return totalCost;
    }
    let price = 4;
    let quantity = 8;
    let result = calculateTotalCost(price,quantity)
    console.log('Общая стоимость товаров:' ,result)
   
   // Проверка на четность: Создайте функцию, которая определяет, является ли число четным и 
    //возвращает булевое значение.
    function isEven(number){
        return typeof number === 'number' ? number % 2 === 0 : false;
    }
    let number =10;

    console.log('Число',number,'четное?',isEven(number));
    
    //Реверс строки: Напишите функцию, которая принимает строку и возвращает ее в обратном 
   // порядке (reverse использовать нельзя).
// перевернуть строку написать в обратном порядке

//по буквам:
   function reverseString(str) {
      // Преобразуем строку в массив символов
      let arr = str.split('');
      // Используем цикл для переворота символов
      for(let i = 0;i < Math.floor(arr.length / 2);i++){
      let tmp = arr[i];
      arr[i]= arr[arr.length -1 -i];
      arr[arr.length -1 -i] = tmp;
   }
   return arr.join('');
   ß
} 
   let originalString = 'JavaScript нравится мне ';
   let reversedString = reverseString(originalString);

   console.log('Исходная строка:', originalString);
   console.log('Перевернутая строка:', reversedString);

   //по словам:
   function reverseWordsInSentence(sentence) {
      // Разбиваем предложение на слова
      let words = sentence.split(' ');
      // Используем цикл для переворота порядка слов
      for(let i = 0; i < Math.floor(words.length / 2); i++) {
         let tmp = words[i];
         words[i] = words[words.length - 1 - i];
         words[words.length - 1 - i] = tmp;
      }
      // Возвращаем объединенную строку из перевернутых слов
      return words.join(' ');
   }
   
   let originalSentence = 'JavaScript  нравится мне';
   let reversedSentence = reverseWordsInSentence(originalSentence);
   
   console.log('Исходное предложение:', originalSentence);
   console.log('Реверс предложения :', reversedSentence);

   //Конвертер температуры: Создайте функцию для конвертации температуры из градусов
   // Цельсия в градусы Фаренгейта.
   function celsiusToFahrenheit(celsius) {
      // Используем формулу для конвертации
      let fahrenheit = (celsius * 9/5) + 32;
      return fahrenheit;
   }
   
   // Пример использования функции
   let celsiusTemperature = 25;
   let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
   
   console.log(`${celsiusTemperature} градусов Цельсия равны ${fahrenheitTemperature} градусам Фаренгейта.`);
   