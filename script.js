let apiKey = 'f2db999c6b017031429840a9f9811bde'
let baseURL = 'https://api.themoviedb.org/3/search/movie'
let imageURL = 'https://image.tmdb.org/t/p/w200'

document.getElementById('searchButton').addEventListener('click',searchMovies)
let resultContainer = document.getElementById('results')

function searchMovies(){
    resultContainer.innerHTML = 'Buscando...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${baseURL}?api_key=${apiKey}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}


function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontraron resultados para este título </p>'
        return
    }

    movies.forEach(movie =>{
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let description = document.createElement('p')
        description.textContent = movie.overview

        let posterPath = imageURL + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(description)

        resultContainer.appendChild(movieDiv)
    })
}