const API_KEY = "de70721a82fd944404b174a37aef7df3";

const requests = {
    fetchTrending = `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies=`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies=`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies=`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries=`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNetflixOriginals=`/discover/tv?api_key=${API_KEY}&with_networks=213`
}