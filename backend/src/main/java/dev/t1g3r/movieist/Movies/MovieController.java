package main.java.dev.t1g3r.movieist.Movies;

@RestController
@RequestMapping("/api/v1/movies")

public class MovieController {
    @GetMapping
    public ResponseEntity<String>  allMovies(){
        return new ResponseEntity<String>("All Movies", HttpStatus.OK);

    }
}

