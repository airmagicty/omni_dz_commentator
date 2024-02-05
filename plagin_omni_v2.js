// Пример использования

const phrases = [
  ["Отличная работа!", 11, 12],
  ["Замечательная работа!", 10, 12],
  ["Прекрасная работа!", 10, 11],
  ["Ты великолепен!", 11, 11],
  ["Браво!", 12, 12],

  ["Хорошая работа!", 8, 9],
  ["Ты справился хорошо!", 8, 10],
  ["Молодец, продолжай в том же духе!", 9, 9],
  ["Твои усилия видны, продолжай развиваться!", 9, 10],
  ["Приятно видеть твой прогресс!", 8, 8],

  ["Неплохо, но есть над чем поработать.", 5, 7],
  ["Требуется некоторое улучшение.", 6, 7],
  ["Дай мне повод задуматься.", 5, 6],
  ["Ты можешь лучше.", 6, 6],
  ["Требуется больше усилий.", 5, 5],

  ["Неудовлетворительно, пора задуматься о коррекции.", 1, 4],
  ["Требуется серьезное улучшение.", 2, 4],
  ["Повысь свой уровень.", 1, 3],
  ["Ты можешь лучше, не сдавайся.", 3, 3],
  ["Ты можешь сделать это лучше.", 2, 2],

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
    // Найти <md-radio-group> внутри текущего элемента
    const radioGroup = divElement.querySelector('md-radio-group.hw-md_single__select-mark');

    // Найти все <md-radio-button> внутри <md-radio-group>
    const radioButtons = radioGroup.querySelectorAll('md-radio-button');
    
    // Найти <textarea> и пометить их
    const textareaElement = divElement.querySelector('textarea.hw-md_single_teacher__comment');
    textareaElement.placeholder ? true : textareaElement.placeholder = "Поле для комментирования успешно обнаружено плагином.";

    // Проверка, выбрана ли какая-то кнопка
    const selectedRadioButton = radioGroup.querySelector('md-radio-button.md-checked');
    if (selectedRadioButton) {
      const selectedValue = selectedRadioButton.getAttribute('value');

      // Обновить его значение
       textareaElement.value ? true : textareaElement.value = getRandomPhrase(buttonValue, phrases);
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
      textareaElement.value = getRandomPhrase(buttonValue, phrases);
    }
  }
});

// Вызвать функцию каждые k/1000 секунд
setInterval(updateComments, 1000);
