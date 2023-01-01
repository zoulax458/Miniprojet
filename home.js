var courses = [{
        path: 'courses/cssAnimation.png',
        title: 'CSS Animation',
        price: 19,
        category: 'CSS'
    },
    {
        path: 'courses/cssMesures.png',
        title: 'CSS Mesures',
        price: 15,
        category: 'CSS'
    },
    {
        path: 'courses/cssSelectors.jpg',
        title: 'CSS Selector',
        price: 35,
        category: 'CSS'
    },
    {
        path: 'courses/htmlAttrVal.jpg',
        title: 'Manipulation des attributs et valeurs en HTML',
        price: 7,
        category: 'HTML'
    },
    {
        path: 'courses/htmlElements.png',
        title: 'Manipulation des elements en HTML',
        price: 10,
        category: 'HTML'
    },
    {
        path: 'courses/htmlTags.png',
        title: 'Manipulation des attributs et valeurs en HTML',
        price: 21,
        category: 'HTML'
    },
    {
        path: 'courses/javascriptDef.png',
        title: 'Javascript Def',
        price: 17,
        category: 'JS'
    },
    {
        path: 'courses/javascriptDOM.png',
        title: 'DOM en JS',
        price: 10,
        category: 'JS'
    },
    {
        path: 'courses/javascriptEvents.png',
        title: 'Manipulation des evenement en JS',
        price: 7,
        category: 'JS'
    },
    {
        path: 'courses/phpBasics.png',
        title: 'Les bases de Javascript',
        price: 45,
        category: 'PHP'
    },
    {
        path: 'courses/phpCRUD.png',
        title: 'Manipulation du phpCRUD',
        price: 16,
        category: 'PHP'
    },
    {
        path: 'courses/phpDataBase.png',
        title: 'DATABASE en JS',
        price: 25,
        category: 'PHP'
    }
]

var el = document.querySelector('#aleat');

function creationCourses(image, titre, prix) {

    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = image;

    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(prix));
    div.setAttribute('class', 'card col-3 me-3 mb-3');

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    el.append(div);

}

function aleatoire() {
    let cp = courses.length;

    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * cp);
        creationCourses(courses[x].path, courses[x].title, courses[x].price);
    }

}

window.onload = aleatoire();