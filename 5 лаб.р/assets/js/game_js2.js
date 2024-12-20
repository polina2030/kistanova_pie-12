let story = document.getElementById('story');
let choicesE = document.getElementById('choices');
let img = document.getElementById('img');

/**
 * Функция запуска игры
 * @param {number} scriptI - Индекс текущей истории 
 */
function startGame(scriptI) {
    let currentStory = script[scriptI];

    story.innerHTML = currentStory.text;

    img.src = currentStory.img; 
    
    choicesE.innerHTML = '';

    for (let i = 0; i < currentStory.choices.length; i++) {
        let choice = currentStory.choices[i];
        let button = document.createElement('button');
        button.innerHTML = choice.text;

        choicesE.appendChild(button);
        
        button.onclick = () => {
            startGame(choice.nextStory);
        };
    }
}

//сценарий
let script = [
    {   //0
        img: "../assets/img/photo_1.jpg",
        text: "Одинокий мужчина приходит в город в поисках новых заданий. Так как город ему незнаком, он решает спросить где находится гильдия. Недалеко от себя он замечает торговца и рыцаря, который охраняет ворота в город. У кого спросить?",
        choices: [
            { text: "Спросить у рыцаря", nextStory: 1 },
            { text: "Спросить у торговца", nextStory: 1 }
        ]
    },
    {   //1
        img: "../assets/img/photo_2.jpg",
        text: "Вы узнаете, где находится гильдия и заходите в нее, чтобы взять новое поручение. Пока вы читаете заинтересовавшее вас поручение, распахнув двери, вбегает девушка, которая просит помочь найти ее парня. Что вы будете делать?",
        choices: [
            { text: "Помочь девушке", nextStory: 2 },
            { text: "Не обращать на нее внимание", nextStory: 47 },
            { text: "Назад", nextStory: 0 }
        ]
    },
    {   //2
        img: "../assets/img/photo_17.jpg",
        text: "Вы подходите к девушке и узнаете, что парень является сыном мэра и охотником на гоблинов. Но она не знает, где он сейчас находится, поэтому просит спросить у рыцаря на воротах или у отца парня. У кого спросить где парень?",
        choices: [
            { text: "Пойти к рыцарю", nextStory: 3 },
            { text: "Пойти к отцу", nextStory: 4 },
            { text: "Назад", nextStory: 1 }
        ]
    },
    {   //3
        img: "../assets/img/photo_20.jpg",
        text: "Рыцарь рассказывает, что парень ушел убивать гоблинов, убежище которых находится недалеко от деревушки к востоку. Вы решаете пойти расспросить жителей деревни, но по пути в неё вам встречается путник, который просит отдать ему перо грифона. Отдать перо путнику?",
        choices: [
            { text: "Отдать перо", nextStory: 26},
            { text: "Пройти мимо", nextStory: 5},
            { text: "Назад", nextStory: 2 }
        ]
    },
    {   //4
        img: "../assets/img/photo_20.jpg",
        text: "Отец рассказывает, что парень ненавидит гоблинов, которые в прошлом убили его мать. Поэтому он часто уходит их убивать. На этот раз ему не повезло, когда он так же ушел их убивать. Их убежище находится недалеко от деревушки к востоку. Вы решаете пойти расспросить жителей деревни, но по пути в деревню вам встречается путник, который просит вас отдать ему перо грифона. Отдать перо путнику?",
        choices: [
            { text: "Отдать перо", nextStory: 26},
            { text: "Пройти мимо", nextStory: 5},
            { text: "Назад", nextStory: 2}
        ]
    },
    {   //5
        img: "../assets/img/photo_5.jpg",
        text: "По приходу в деревню вы замечаете в центре площади мужчину. А недалеко от него плачущего ребенка. Вы решаете расспросить одного из них. У кого спросить про логово гоблинов?",
        choices: [
            { text: "Подойти к мужчине", nextStory: 6},
            { text: "Подойти к ребенку", nextStory: 23},
            { text: "Назад", nextStory: 4 }
        ]
    },
    {   //6
        img: "../assets/img/photo_19.jpg",
        text: "Подойдя к мужчине вы замечаете что он поёт. Что делать с бардом?",
        choices: [
            { text: "Перебить барда", nextStory: 7},
            { text: "Подождать пока он допоет", nextStory: 14},
            { text: "Назад", nextStory: 5 }
        ]
    },
    {   //7
        img: "../assets/img/photo_7.jpg",  
        text: "Спросив у барда о логове гоблинов, он отправляет вас к торговцу, которого не любит вся деревня. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. И что они воры, которые украли у торговца все ценное, что он вез с собой для продажи. Теперь он остался без гроша. Одним словом испортили ему жизнь. Вы принимаете сторону торговца и решаете, что гоблинов нужно убить. Вы отправились в путь, но перед вами появилась развилка. Какую дорогу выбрать?",
        choices: [
            { text: "Выбрать дорогу направо", nextStory: 8},
            { text: "Выбрать дорогу налево", nextStory: 13},
            { text: "Назад", nextStory: 6 }
        ]
    },
    {   //8
        img: "../assets/img/photo_8.jpg", 
        text: "Вы шли до пещеры больше часа. Проделав такой долгий путь от города до деревни вы устали и думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 9},
            { text: "Не делать привал и отправиться в путь", nextStory: 9},
            { text: "Назад", nextStory: 7 }
        ]
    },
    {   //9
        img: "../assets/img/photo_9.jpg", 
        text: "Подойдя к пещере, вы замечаете около нее разбросанные вещи,а в далеке могилки. Что вы хотите исследовать?",
        choices: [
            { text: "Исследовать разбросанные вещи", nextStory: 10},
            { text: "Исследовать могилки", nextStory: 12},
            { text: "Назад", nextStory: 8 }
        ]
    },
    {   //10
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев вещи поближе, вы понимаете, что эти вещи принадлежат богатым людям, у которых гоблины их воруют. Вы еще больше убеждаетесь, что их нужно убить. Как вы войдете в пещеру?",
        choices: [
            { text: "Быстро и громко", nextStory: 11},
            { text: "Медленно и скрытно", nextStory: 11},
            { text: "Назад", nextStory: 9 }
        ]
    },
    {   //11
        img: "../assets/img/photo_11.jpg", 
        text: "Гоблины вас замечают и понимают, что вы пришли с плохими намерениями, поэтому начинают вас атаковать. У вас практически получается отбиться, но неожиданно они вас окружают и вы падаете без сил. На этом ваша жизнь заканчивается. А стоило помочь тому путнику)",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },



//_______________________________________________________________________________________________________________________________________________________________
    
    {   //12
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев могилки поближе, вы понимаете, что в них закопаны гоблины, они слишком маленькие для людей. Вы начинаете сомневаться правда ли гоблины такие плохие. Как вы войдете в пещеру?",
        choices: [
            { text: "Быстро и громко", nextStory: 11},
            { text: "Медленно и скрытно", nextStory: 11},
            { text: "Назад", nextStory: 9}
        ]
    },
    {   //13
        img: "../assets/img/photo_8.jpg", 
        text: "Вы дошли до пещеры очень быстро, но дорога от города до деревни вас измотала. Вы думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 9},
            { text: "Не делать привал и отправиться в путь", nextStory: 9},
            { text: "Назад", nextStory: 7}
        ]
    },
    



    
    {   //14
        img: "../assets/img/photo_13.jpg",
        text: "Спросив у барда о логове гоблинов, он отправляет вас к крестьянину, которого все любят и уважают. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. Чтобы до них дойти нужно идти по левой дороге, так как она быстрее приведет вас к цели. Крестьянин рассказывает, что гоблины воруют деньги и вещи у богатых и отдают их бедным. Благодаря им он разбогател. Вы убеждаетесь, что гоблины добрые и не хотите их убивать. Вы отправились в путь, но перед вами появилась развилка. Какую дорогу выбрать?",
        choices: [
            { text: "Выбрать длинную дорогу", nextStory: 15},
            { text: "Выбрать короткую дорогу", nextStory: 22},
            { text: "Назад", nextStory: 6 }
        ]
    },
    {   //15
        img: "../assets/img/photo_8.jpg", 
        text: "Вы шли до пещеры больше часа. Проделав такой долгий путь от города до деревни вы устали и думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 16},
            { text: "Не делать привал и отправиться в путь", nextStory: 16},
            { text: "Назад", nextStory: 14}
        ]
    },
    {   //16
        img: "../assets/img/photo_9.jpg", 
        text: "Подойдя к пещере? вы замечаете около нее разбросанные вещи? а в далеке могилки. Что вы хотите исследовать?",
        choices: [
            { text: "Исследовать разбросанные вещи", nextStory: 17},
            { text: "Исследовать могилки", nextStory: 21},
            { text: "Назад", nextStory: 15}
        ]
    },
    {   //17
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев вещи поближе, вы понимаете, что эти вещи принадлежат богатым людям, у которых гоблины их воруют. Вы начинаете сомневаться правда ли гоблины такие хорошие, но доверившись словам крестьянина вы решаетесь войти в пещеру. Как вы войдете в пещеру?",
        choices: [
            { text: "Без меча", nextStory: 18},
            { text: "С мечом, но не проявляя злых намерений", nextStory: 18},
            { text: "Назад", nextStory: 16}
        ]
    },
    {   //18
        img: "../assets/img/photo_14.jpg",
        text: "Гоблины вас замечают и понимают, что вы пришли с миром, поэтому ждут ваших дальнейших действий. Вы решаете с ними поговорить. Теперь гоблины ваши друзья. Они отдают парня, которого они схватили, когда тот пришел их убивать.",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },
    {   //19 пропускаю
        img: "../assets/img/photo_14.jpg",
        text: "Теперь гоблины ваши друзья. Они отдают парня, которого они схватили, когда тот пришел их убивать.",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },
    {   //20 пропускаю 
        img: "../assets/img/photo_11.jpg",
        text: "У вас практически получается отбиться, но неожиданно они вас окружают и вы не в силах отбиться от всех сразу. На этом ваша жизнь заканчивается. А стоило помочь тому путнику",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },
    {   //21
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев могилки поближе, вы понимаете, что в них закопаны гоблины, они слишком маленькие для людей. Вы начинаете проявлять сострадание к ним, но все равно решаете спасти парня, который их убивал. Как вы войдете в пещеру?",
        choices: [
            { text: "Без меча", nextStory: 18},
            { text: "С мечом, но не проявляя злых намерений", nextStory: 18},
            { text: "Назад", nextStory: 16}
        ]
    },
    
    {   //22
        img: "../assets/img/photo_8.jpg",
        text: "Вы дошли до пещеры очень быстро, но дорога от города до деревни вас измотала. Вы думаете, стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 16},
            { text: "Не делать привал и отправиться в путь", nextStory: 16},
            { text: "Назад", nextStory: 14}
        ]
    },
    
//_______________________________________________________________________________________________________________________________________________________________
    
    {   //23
        img: "../assets/img/photo_15.jpg",
        text: "Подойдя к мальчику, вы хотите у него спросить где находится логово гоблинов, но замечаете что у него ранена нога. Что делать с мальчиком?",
        choices: [
            { text: "Помочь мальчику", nextStory: 25},
            { text: "Не помогать", nextStory: 24},
            { text: "Назад", nextStory: 5}
        ]
    },  
    {   //24
        img: "../assets/img/photo_7.jpg",  
        text: "Мальчик отправляет вас к торговцу, которого не любит вся деревня. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. И что они воры, которые украли у него все ценное, что он вез с собой для продажи. Теперь он остался без гроша. Одним словом испортили ему жизнь. Вы принимаете сторону торговца и решаете, что гоблинов нужно убить. Вы отправились в путь. Но перед вами появилась развилка, нужно выбрать по какому пути вам идти.",
        choices: [
            { text: "Выбрать дорогу направо", nextStory: 8},
            { text: "Выбрать дорогу налево", nextStory: 13},
            { text: "Назад", nextStory: 23}
        ]
    },
    {   //25
        img: "../assets/img/photo_13.jpg",
        text: "Мальчик отправляет вас к крестьянину, которого все любят и уважают. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. Чтобы до них дойти нужно идти по левой дороге, так как она быстрее приведет их к цели. Крестьянин рассказывает, что гоблины воруют деньги и вещи у богатых, и отдают их бедным. Благодаря им он разбогател. Вы убеждаетесь, что гоблины добрые и не хотите их убивать. Вы отправились в путь, но перед вами появилась развилка. Какую дорогу выбрать?",
        choices: [
            { text: "Выбрать длинную дорогу", nextStory: 15},
            { text: "Выбрать короткую дорогу", nextStory: 22},
            { text: "Назад", nextStory: 23}
        ]
    },









//_______________________________________________________________________________________________________________________________________________________________

    {   //26
        img: "../assets/img/photo_5.jpg",
        text: "За вашу доброту путник отдает вам зелье лечения. По приходу в деревню, вы замечаете в центре площади мужчину. А недалеко от него плачущего ребенка. Вы решаете расспросить одного из них. У кого спросить про логово гоблинов?",
        choices: [
            { text: "Подойти к мужчине", nextStory: 27},
            { text: "Подойти к ребенку", nextStory: 44},
            { text: "Назад", nextStory: 4}
        ]
    },
    {   //27
        img: "../assets/img/photo_19.jpg",
        text: "Подойдя к мужчине вы замечаете что он поёт. Что cделать с бардом?",
        choices: [
            { text: "Перебить барда", nextStory: 28},
            { text: "Подождать пока он допоет", nextStory: 35},
            { text: "Назад", nextStory: 26}
        ]
    },
    {   //28
        img: "../assets/img/photo_7.jpg",  
        text: "Спросив у барда о логове гоблинов он отправляет вас к торговцу, которого не любят вся деревня. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. И что они воры, которые украли у него все ценное, что он вез с собой для продажи. Теперь он остался без гроша. Одним словом испортили ему жизнь. Вы принимаете сторону торговца и решаете, что гоблинов нужно убить. Вы отправились в путь, но перед вами появилась развилка. какую дорогу выбрать?",
        choices: [
            { text: "Выбрать дорогу направо", nextStory: 29},
            { text: "Выбрать дорогу налево", nextStory: 34},
            { text: "Назад", nextStory: 27}
        ]
    },
    {   //29
        img: "../assets/img/photo_8.jpg",
        text: "Вы шли до пещеры больше часа. Проделав такой долгий путь от города до деревни вы устали и думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 30},
            { text: "Не делать привал и отправиться в путь", nextStory: 30},
            { text: "Назад", nextStory: 28}
        ]
    },
    {   //30
        img: "../assets/img/photo_9.jpg",
        text: "Подойдя к пещере, вы замечаете около нее разбросанные вещи, а в далеке могилки. Что вы хотите исследовать?",
        choices: [
            { text: "Исследовать разбросанные вещи", nextStory: 31},
            { text: "Исследовать могилки", nextStory: 33},
            { text: "Назад", nextStory: 29}
        ]
    },
    {   //31
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев вещи поближе, вы понимаете, что эти вещи принадлежат богатым людям, у которых гоблины их воруют. Вы еще больше убеждаетесь, что их нужно убить. Как вы войдете в пещеру?",
        choices: [
            { text: "Быстро и громко", nextStory: 32},
            { text: "Медленно и скрытно", nextStory: 32},
            { text: "Назад", nextStory: 30}
        ]
    },
    {   //32
        img: "../assets/img/photo_16.jpg",
        text: "Вы долго держитесь, но вас сильно ранят. Выпив зелье, которое вам дал путник, вы побеждаете гоблинов и спасаете парня, которого они схватили, когда тот пытался их убить. А ведь можно было и без насилия(",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },



//_______________________________________________________________________________________________________________________________________________________________
    
    {   //33
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев могилки поближе, вы понимаете, что в них закопаны гоблины, они слишком маленькие для людей. Вы начинаете сомневаться, правда ли гоблины такие плохие. Но все равно доверяете словам торговца. Как вы войдете в пещеру?",
        choices: [
            { text: "Быстро и громко", nextStory: 32},
            { text: "Медленно и скрытно", nextStory: 32},
            { text: "Назад", nextStory: 30}
        ]
    },
    {   //34
        img: "../assets/img/photo_8.jpg",
        text: "Вы дошли до пещеры очень быстро, но дорога от города до деревни вас измотала. Вы думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 30},
            { text: "Не делать привал и отправиться в путь", nextStory: 30},
            { text: "Назад", nextStory: 28}
        ]
    },
    



    
    {   //35
        img: "../assets/img/photo_13.jpg",
        text: "Спросив у барда о логове гоблинов, он отправляет вас к крестьянину. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. Чтобы до них дойти нужно идти по левой дороге, так как она быстрее приведет их к цели. Крестьянин рассказывает, что гоблины воруют деньги и вещи у богатых и отдают их бедным. Благодаря им он разбогател. Вы убеждаетесь, что гоблины добрые и не хотите их убивать. Вы отправились в путь, но перед вами появилась развилка. Какую дорогу выбрать?",
        choices: [
            { text: "Выбрать длинную дорогу", nextStory: 36},
            { text: "Выбрать короткую дорогу", nextStory: 43},
            { text: "Назад", nextStory: 27}
        ]
    },
    {   //36
        img: "../assets/img/photo_8.jpg",
        text: "Вы шли до пещеры больше часа. Проделав такой долгий путь от города до деревни вы устали и думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 37},
            { text: "Не делать привал и отправиться в путь", nextStory: 37},
            { text: "Назад", nextStory: 35}
        ]
    },
    {   //37
        img: "../assets/img/photo_9.jpg",
        text: "Подойдя к пещере, вы замечаете около нее разбросанные вещи, а в далеке могилки. Что вы хотите исследовать?",
        choices: [
            { text: "Исследовать разбросанные вещи", nextStory: 38},
            { text: "Исследовать могилки", nextStory: 42},
            { text: "Назад", nextStory: 36}
        ]
    },
    {   //38
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев вещи поближе, вы понимаете, что эти вещи принадлежат богатым людям, у которых гоблины их воруют. Вы начинаете сомневаться правда ли гоблины такие хорошие, но доверившись словам крестьянина вы решаетесь войти в пещеру. Как вы войдете в пещеру?",
        choices: [
            { text: "Без меча", nextStory: 40},
            { text: "С мечом, но не проявляя злых намерений", nextStory: 40},
            { text: "Назад", nextStory: 37}
        ]
    },
    {   //39
        text: "Гоблины вас замечают и понимают, что вы пришли с миром, поэтому ждут ваших дальнейших действий. Что вы будете делать?",
        choices: [
            { text: "Поговорить", nextStory: 40},
            { text: "Атаковать", nextStory: 41}
        ]
    },
    {   //40
        img: "../assets/img/photo_14.jpg",
        text: "Гоблины вас замечают и понимают, что вы пришли с миром, поэтому ждут ваших дальнейших действий. Вы решаете с ними поговорить. Теперь гоблины ваши друзья. Они отдают парня, которого они схватили, когда тот пришел их убивать. Хэппи енд)",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },
    {   //41 пропускаю
        img: "../assets/img/photo_16.jpg",
        text: "Вы долго держитесь, но вас сильно ранят. Выпив зелье, которое вам дал путник, вы побеждаете гоблинов и спасаете парня, которого они схватили, когда тот пытался их убить.",
        choices: [
            { text: "Начать сначала", nextStory: 0 }
            ]
    },
    {   //42
        img: "../assets/img/photo_12.jpg",
        text: "Рассмотрев могилки поближе, вы понимаете, что в них закопаны гоблины, они слишком маленькие для людей. Как вы войдете в пещеру?",
        choices: [
            { text: "Без меча", nextStory: 40},
            { text: "С мечом, но не проявляя злых намерений", nextStory: 40},
            { text: "Назад", nextStory: 37}
        ]
    },
    
    {   //43
        img: "../assets/img/photo_8.jpg",
        text: "Вы дошли до пещеры очень быстро, но дорога от города до деревни вас измотала. Вы думаете стоит ли сделать вам привал. Сделать привал?",
        choices: [
            { text: "Сделать привал и восстановить силы", nextStory: 37},
            { text: "Не делать привал и отправиться в путь", nextStory: 37},
            { text: "Назад", nextStory: 35}
        ]
    },
    
//_______________________________________________________________________________________________________________________________________________________________
    
    {   //44
        img: "../assets/img/photo_15.jpg",
        text: "Подойдя к мальчику, вы хотите у него спросить где находится логово гоблинов, но замечаете что у него ранена нога. Что делать с мальчиком?",
        choices: [
            { text: "Помочь мальчику", nextStory: 46},
            { text: "Не помогать", nextStory: 45},
            { text: "Назад", nextStory: 26}
        ]
    },  
    {   //45
        img: "../assets/img/photo_7.jpg",  
        text: "Мальчик отправляет вас к торговцу, которого не любит вся деревня. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. И что они воры, которые украли у него все ценное, что он вез с собой для продажи. Теперь он остался без гроша. Одним словом испортили ему жизнь. Вы принимаете сторону торговца и решаете, что гоблинов нужно убить. Вы отправились в путь, но перед вами появилась развилка. Какую дорогу выбрать?",
        choices: [
            { text: "Выбрать дорогу направо", nextStory: 29},
            { text: "Выбрать дорогу налево", nextStory: 34},
            { text: "Назад", nextStory: 44}
        ]
    },
    {   //46
        img: "../assets/img/photo_13.jpg",
        text: "Мальчик отправляет вас к крестьянину, которого все любят и уважают. Вы отправляетесь к нему и узнаете, что гоблины живут к северу от деревни. Чтобы до них дойти нужно идти по левой дороге, так как она быстрее приведет их к цели. Мужчина рассказывает, что гоблины воруют деньги и вещи у богатых и отдают их бедным. Благодаря им он разбогател. Вы убеждаетесь, что гоблины добрые и не хотите их убивать. Вы отправились в путь, но перед вами появилась развилка. Какую дорогу выбрать?",
        choices: [
            { text: "Выбрать длинную дорогу", nextStory: 36},
            { text: "Выбрать короткую дорогу", nextStory: 43},
            { text: "Назад", nextStory: 44}
        ]
    },


    {   //47
        img: "../assets/img/photo_17.jpg",
        text: "Девушка подходит к вам и слезно просит помочь ей. Вы не в силах отказать соглашаетесь и узнаете, что парень является сыном мэра и охотником на гоблинов. Но она не знает, где он сейчас находится, поэтому просит спросить у рыцаря на воротах или у отца парня. У кого спроситт где парень?",
        choices: [
            { text: "Пойти к рыцарю", nextStory: 3 },
            { text: "Пойти к отцу", nextStory: 4 },
            { text: "Назад", nextStory: 1},
        ]
    }
    
];

startGame(0);
