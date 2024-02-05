function getRandomPhrase(number, phrases) {
  // Фильтруем фразы, оставляя только те, которые соответствуют диапазону
  const validPhrases = phrases.filter(phrase => {
    const [text, min, max] = phrase;
    if (min <= max) {
      return number >= min && number <= max;
    } else {
      return number >= max && number <= min;
    }
  });

  // Если есть подходящие фразы, выбираем случайную из них
  if (validPhrases.length > 0) {
    const randomIndex = Math.floor(Math.random() * validPhrases.length);
    return validPhrases[randomIndex][0];
  } else {
    // Если нет подходящих фраз, возвращаем null или любое другое значение по умолчанию
    return null;
  }
}

// Пример использования
const phrases = [
  ["Фраза1", 1, 12],
  ["Фраза2", 12, 12],
  // Добавьте другие фразы с их диапазонами
];

const inputNumber = 7; // Замените на полученное число от 1 до 12
const result = getRandomPhrase(inputNumber, phrases);

console.log(result);















function updateComments() {
  // Найти все элементы <div> с классом "hw-md_item ng-scope"
  const divElements = document.querySelectorAll('div.hw-md_item.ng-scope');

  // Пройти по каждому элементу
  divElements.forEach((divElement, index) => {
    console.log(`Processing element ${index + 1}`);

    // Найти <md-radio-group> внутри текущего элемента
    const radioGroup = divElement.querySelector('md-radio-group.hw-md_single__select-mark');

    // Найти все <md-radio-button> внутри <md-radio-group>
    const radioButtons = radioGroup.querySelectorAll('md-radio-button');

    // Логирование количества кнопок
    console.log(`Total radio buttons for element ${index + 1}: ${radioButtons.length}`);

    // Проверка, выбрана ли какая-то кнопка
    const selectedRadioButton = radioGroup.querySelector('md-radio-button.md-checked');
    if (selectedRadioButton) {
      const selectedValue = selectedRadioButton.getAttribute('value');
      console.log(`Selected radio button value: ${selectedValue}`);

      // Найти <textarea> и обновить его значение
      const textareaElement = divElement.querySelector('textarea.hw-md_single_teacher__comment');
      textareaElement.value = selectedValue;

      console.log(`Updated textarea for element ${index + 1} with value: ${selectedValue}`);
    } else {
      console.log(`No radio button selected for element ${index + 1}`);
    }
  });
}

// Вызвать функцию каждые 5 секунд
setInterval(updateComments, 5000);
















// Функция, которая будет вызываться при клике на кнопку-цифру
function handleButtonClick(event) {
  const clickedButton = event.target;
  const selectedValue = clickedButton.getAttribute('value');

  // Найти родительский <div> элемента кнопки
  const parentDiv = clickedButton.closest('div.hw-md_item.ng-scope');

  // Найти <textarea> внутри родительского <div> и обновить его значение
  const textareaElement = parentDiv.querySelector('textarea.hw-md_single_teacher__comment');
  textareaElement.value = selectedValue;

  console.log(`Updated textarea for element with value: ${selectedValue}`);
}

// Найти все кнопки-цифры и назначить обработчик события
const allNumberButtons = document.querySelectorAll('md-radio-button.ng-scope');
allNumberButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Функция для периодического логирования
function logInfo() {
  const divElements = document.querySelectorAll('div.hw-md_item.ng-scope');
  divElements.forEach((divElement, index) => {
    console.log(`Processing element ${index + 1}`);
    const textareaElement = divElement.querySelector('textarea.hw-md_single_teacher__comment');
    console.log(`Textarea value for element ${index + 1}: ${textareaElement.value}`);
  });
}

// Вызвать функцию каждые 5 секунд
setInterval(logInfo, 5000);













function updateComments() {
  // Найти все элементы <div> с классом "hw-md_item ng-scope"
  const divElements = document.querySelectorAll('div.hw-md_item.ng-scope');

  // Пройти по каждому элементу
  divElements.forEach((divElement, index) => {
    // Найти <md-radio-group> внутри текущего элемента
    const radioGroup = divElement.querySelector('md-radio-group.hw-md_single__select-mark');

    // Найти все <md-radio-button> внутри <md-radio-group>
    const radioButtons = radioGroup.querySelectorAll('md-radio-button');

    // Проверка, выбрана ли какая-то кнопка
    const selectedRadioButton = radioGroup.querySelector('md-radio-button.md-checked');
    if (selectedRadioButton) {
      const selectedValue = selectedRadioButton.getAttribute('value');

      // Найти <textarea> и обновить его значение
      const textareaElement = divElement.querySelector('textarea.hw-md_single_teacher__comment');
      textareaElement.value = selectedValue;
    }
  });
}

// Добавить обработчик событий для делегирования кликов на дочерние кнопки
document.addEventListener('click', function(event) {
  const target = event.target;

  // Проверить, является ли целью клика элемент <md-radio-button>
  if (target.matches('md-radio-button')) {
    // Получить значение кнопки
    const buttonValue = target.getAttribute('value');

    // Найти соответствующий <textarea> и обновить его значение
    const parentDiv = target.closest('div.hw-md_item.ng-scope');
    if (parentDiv) {
      const textareaElement = parentDiv.querySelector('textarea.hw-md_single_teacher__comment');
      textareaElement.value = buttonValue;
    }
  }
});

// Вызвать функцию каждые 5 секунд
setInterval(updateComments, 5000);
