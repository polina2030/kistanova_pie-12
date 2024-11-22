const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const img = document.getElementById('img');


function startGame(storyIndex) {

    const currentStory = story[storyIndex];
    //alert(currentStory.id)
    // Обновляем текст истории
    storyElement.innerHTML = currentStory.text;
    
    // Очищаем предыдущие варианты выбора
    choicesElement.innerHTML = '';


    // Проходим по всем вариантам выбора в текущей истории
    for (let i = 0; i < currentStory.choices.length; i++) {
        let choice = currentStory.choices[i]; // Получаем текущий выбор
        //alert(choice.nextStory)
        let button = document.createElement('button'); // Создаём кнопку
        button.innerHTML = choice.text; // Добавляем кнопке текст
        
    
        // Ищем индекс следующей истории по идентификатору choice.nextStory
        for (let j = 0; j < story.length; j++) { // Проходим по всему массиву story
            if (story[j].id == choice.nextStory) { // Если нашли подходящий идентификатор
                let nextStoryIndex = j; // Сохраняем индекс найденной истории
                
                button.onclick  = () => {
                    startGame(nextStoryIndex);
                }; // Запускаем игру с выбранной историей
 
                break; // Прекращаем поиск
            }
        }
    
        // Добавляем кнопку в элемент интерфейса для отображения выбора
        choicesElement.appendChild(button);
    }

}

const story = [
    {
        id: 1,
        img: '1.png',
        text: "Вы находитесь в лесу. Куда вы хотите пойти?",
        choices: [
            { text: "Пойти налево, в сторону горы", nextStory: 15 },
            { text: "Пойти направо, вдоль реки", nextStory: 2 }
        ]
    },
    {
        id: 2,
        text: "Девушка сказала: Что будете делать?",
        choices: [
            { text: "Подойти к людям", nextStory: 3 },
        ]
    },
    {
        id: 50,
        text: "Идя всё время вдоль реки, вы натыкаетесь на старый замок. Что будете делать?",
        choices: [
            { text: "Попробуете войти и исследовать", nextStory: 3 },
            { text: "Обойдёте замок и пойдёте дальше", nextStory: 6 },
            { text: "Назад", nextStory: 1 },
            { text: "Начать сначала", nextStory: 1 }
        ]
    },
    {
        id: 3,
        text: "Вы вошли в замок и увидели множество старинных предметов. Что делать дальше?",
        choices: [
            { text: "Исследовать зал", nextStory: 15 },
            { text: "Вернуться назад", nextStory: 2 }
        ]
    },
    {
        id: 4,
        text: "В зале вы находите таинственную книгу. Что вы сделаете?",
        choices: [
            { text: "Откроете книгу", nextStory: 5 },
            { text: "Положите книгу обратно и уйдёте", nextStory: 2 }
        ]
    },
    {
        id: 5,
        text: "Книга оказывается заколдованной! Вы попадаете в другой мир. Игра окончена.",
        choices: []
    },
    {
        id: 6,
        text: "Вы обошли замок и нашли красивую поляну. Что делать?",
        choices: [
            { text: "Собрать цветы", nextStory: 7 },
            { text: "Сесть отдохнуть", nextStory: 8 }
        ]
    },
    {
        id: 7,
        text: "Вы собрали много цветов и вернулись домой. Игра окончена.",
        choices: []
    },
    {
        id: 8,
        text: "Вы отдохнули и насладились природой. Игра окончена.",
        choices: []
    },
    {
        id: 15,
        text: "Вы идёте в сторону горы и встречаете волка. Что делать?",
        choices: [
            { text: "Попробовать поговорить с волком", nextStory: 9 },
            { text: "Убежать обратно", nextStory: 1 }
        ]
    }
]
startGame(0);
