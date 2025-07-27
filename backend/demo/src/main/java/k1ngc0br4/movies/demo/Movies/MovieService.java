package k1ngc0br4.movies.demo.Movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }

    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }
    
    public String getTrailerLinkForMovie(String imdbId) {
     Movie movie_trailer_link = repository.findMovieByImdbId(imdbId)
             .orElseThrow(() -> new RuntimeException("Movie not found"));
    
     return movie_trailer_link.getTrailerLink(); 
    }
}