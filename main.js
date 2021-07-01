let submit = document.querySelector('#submit-btn');
let m = document.querySelector('#movie');
let result = document.querySelector('.dispaly1')
let found = document.querySelector('.notFound');
m.addEventListener('keyup' , function(e){

    const API_KEY = 'api_key=22e583d5eaa59cb733e462ccbdd30703';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

    const IMGPATH= "https://image.tmdb.org/t/p/w500"

    fetch(API_URL)
    fetch(API_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.results.forEach(element1 => {
            if(m.value === element1.title.charAt().toLowerCase() || m.value === element1.title.charAt().toUpperCase()){
                if(data.results.length){
                    let t = document.createElement('p');
                    t.className = "para";
                    t.innerHTML = `${element1.title}`;
                    result.appendChild(t);
                }
            }
        });
    })
})

submit.addEventListener('click' ,function(e){
    let moviename = document.querySelector('#movie').value;

    getmovies(moviename);
    moviename = "";
    e.preventDefault();
})
function getmovies(moviename){

    const API_KEY = 'api_key=22e583d5eaa59cb733e462ccbdd30703';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;

    const IMGPATH= "https://image.tmdb.org/t/p/w500"

    fetch(API_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.results.forEach(element => {
            //  console.log(element.title)
            if(element.title.toLowerCase() === moviename || element.title.toUpperCase() === moviename.toUpperCase()){
                console.log(element);
                 
                const TITLE = document.querySelector('.title')
                const DATE = document.querySelector('.date')
                const ADULTHOOD = document.querySelector('.adultHood')
                const IMAGE = document.querySelector('.img')

                TITLE.innerHTML = "TITLE : " + element.title;
                // TITLE.innerHTML = `TITLE : ${element.title}`;
                DATE.innerHTML = `DATE : ${element.release_date}`
                ADULTHOOD.innerHTML =`ADULT : ${element.adult}`
                IMAGE.src = `${IMGPATH + element.poster_path}`;

            }
        });
    })

}



