package wt.okt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@SpringBootApplication
public class Main {

    @Autowired
    private BookRepository bookRepository;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    @GetMapping("/greet")
    public String greet() {
        return "Welkom to the Book rental App :)";
    }

    @GetMapping("/getBooks")
    public List<Book> getBooks() {
        return (List<Book>) bookRepository.findAll();
    }

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewBook (@RequestParam String titel, @RequestParam String auteur, @RequestParam int Exemplaren, @RequestParam String URL) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        Book n = new Book();
        n.setTitel(titel);
        n.setAuteur(auteur);
        n.setAantalExemplaren(Exemplaren);
        n.setAfbeeldingURL(URL);
        bookRepository.save(n);
        return titel + " is saved";
    }

    @PostMapping(path="/addBooks")
    public @ResponseBody String addNewBooks(@RequestBody List<Book> books) {
        bookRepository.saveAll(books);
        return "Books added successfully";
    }

    @PutMapping(path="/update/{id}")
    public String updateBook (@PathVariable int id, @RequestBody Book book) {
        Book updatedBook = bookRepository.findById(id).get();

        updatedBook.setTitel(book.getTitel());
        updatedBook.setAuteur(book.getAuteur());
        updatedBook.setAantalExemplaren(book.getAantalExemplaren());
        updatedBook.setAfbeeldingURL(book.getAfbeeldingURL());

        bookRepository.save(updatedBook);
        return "Book with id: " + id + " updated";
    }

    @DeleteMapping(path="/deleteBook/{id}")
    public String deleteBook(@PathVariable int id){
        Book deleteBook = bookRepository.findById(id).get();
        bookRepository.delete(deleteBook);
        return "User with id: " + id + " deleted.";
    }


}
