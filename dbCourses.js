const courses = [{
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
        price: 5.5,
        category: 'HTML'
    },
    {
        path: 'courses/javascriptDef.png',
        title: 'Javascript Def',
        price: 5.5,
        category: 'JS'
    },
    {
        path: 'courses/javascriptDOM.png',
        title: 'DOM en JS',
        price: 5.5,
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
        price: 5,
        category: 'PHP'
    }
]

const listBn = document.querySelectorAll('.btn');
listBn.forEach(function(btn) {
    btn.addEventListener("click", function(filtre) {
        const category = filtre.target.dataset.cg;
        console.log(category)
        const courseCatg = courses.filter(function(list) {
            if (list.category === category) {
                el.innerHTML = '';
                return list;
            }
        });
        if (filtre.target.innerHTML != "All") {

            courseCatg.forEach(function(e) {
                creationCourses(e.path, e.title, e.price)
            })
        } else {
            console.log(courses)
            courses.forEach(function(e) {
                creationCourses(e.path, e.title, e.price)
            })
        }
    });
});
window.addEventListener('DOMContentLoaded', function() {
    courses.forEach(function(e) {
        creationCourses(e.path, e.title, e.price)
    })
})
const el = document.querySelector('#content2');

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

function seapx(val) {
    document.getElementById('re').innerHTML = val
}