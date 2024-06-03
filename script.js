$(document).ready(event => {
    $("#btnCallMovies").on("click", event => {
        fetch("http://localhost:3000/movies")
            .then(response => {
                return response.json();
            })
            .then(data => {
                const movies = data.movies;
                movies.forEach(movie => {
                    const row = `<tr>
                    <td>${movie.id}</td>
                    <td><a href="https://namu.wiki/w/${movie.title}" target="_blank">${movie.title}</a></td>
                    <td>${movie.year}</td>
                    <td><img src = "http://localhost:3000/images/${movie.image}" alt = "&${movie.title} 이미지" width="300"</td>
                    <td>${movie.director}</td>
                    </tr>`;
                    $("#list").append(row);
                })
            })
            .catch(error => {
                console.error(error);
            })
    })
})
