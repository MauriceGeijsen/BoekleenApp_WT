package wt.okt;

import org.springframework.data.repository.CrudRepository;
// CRUD refers to CREATE, READ, UPDATE, DELETE
public interface BookRepository extends CrudRepository<Book, Integer> {

}
