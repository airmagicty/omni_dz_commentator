// Пример использования
const phrases = [
  ["Фраза1", 1, 12],
  ["Фраза2", 1, 12],
  ["Фраза3", 12, 12],
  // Добавьте другие фразы с их диапазонами
];

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

function updateComments() {
  // Найти все элементы <div> с классом "hw-md_item ng-scope"
  const divElements = document.querySelectorAll('div.hw-md_item.ng-scope');

  // Пройти по каждому элементу
  divElements.forEach((divElement, index) => {
    // console.log(`Processing element ${index + 1}`);

    // Найти <md-radio-group> внутри текущего элемента
    const radioGroup = divElement.querySelector('md-radio-group.hw-md_single__select-mark');

    // Найти все <md-radio-button> внутри <md-radio-group>
    const radioButtons = radioGroup.querySelectorAll('md-radio-button');

    // Логирование количества кнопок
    // console.log(`Total radio buttons for element ${index + 1}: ${radioButtons.length}`);

    // Проверка, выбрана ли какая-то кнопка
    const selectedRadioButton = radioGroup.querySelector('md-radio-button.md-checked');
    if (selectedRadioButton) {
      const selectedValue = selectedRadioButton.getAttribute('value');
      // console.log(`Selected radio button value: ${selectedValue}`);

      // Найти <textarea> и обновить его значение
      const textareaElement = divElement.querySelector('textarea.hw-md_single_teacher__comment');
      textareaElement.value = getRandomPhrase(selectedValue, phrases);

      // console.log(`Updated textarea for element ${index + 1} with value: ${selectedValue}`);
    } else {
      // console.log(`No radio button selected for element ${index + 1}`);

      divElement.querySelector('textarea.hw-md_single_teacher__comment').placeholder = "Поле для комментирования успешно обнаружено плагином.";
    }
  });
}

// Вызвать функцию каждые 5 секунд
setInterval(updateComments, 5000);