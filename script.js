        $(document).ready(event => {
            $("#btnCallMovies").on("click", event => {
                $.ajax({
                    url: "http://localhost:3000/movies",
                    type: "GET",
                    dataType: "json",
                    success: function(response) {
                        console.log(response);
                        $("#list").html(response);  //  JSON

                        // 영화 목록 정보
                        const movies = response.movies;
                        console.log(movies); 
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
                    },
                    error: function(request, status, error) {
                        console.error(error);
                    }
                })
            })
        });
