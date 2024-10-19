import { mock, when, instance } from 'ts-mockito'; 
import { Author } from './author';
import { Book } from './book.model';
import { Library } from './library.model'; 

describe('Library', () => { 
  let autor: Author; 
  let libro: Book; 
  let libreria: Library; 
  var autorejemplo1 = "Antoine de Saint-Exupéry";  
  var libroejemplo1 = "El Principito";  
  var autorejemplo2 = "Gabriel García Márquez";
  var libroejemplo2 = "Cien años de soledad";  
  var autorejemplo3 = "Autor Desconocido";
  var libroejemplo3 = "Libro no registrado";

  beforeEach(() => {
    // Inicializamos una nueva librería antes de cada prueba
    libreria = new Library();
  });

  /**
   * Nombre de la prueba: Agregar un libro con autor válido
   * Objetivo: Verificar que un libro con un autor válido se agrega correctamente a la biblioteca.
   * Datos de prueba: Libro con título "El Principito" y autor "Antoine de Saint-Exupéry".
   * Resultado esperado: El libro se agrega a la biblioteca y el autor se registra correctamente.
   */
  it('1. Agregar un libro con autor válido', function () {
    // Creamos un mock de Author
    let autor = mock<Author>();
    when(autor.getName()).thenReturn(autorejemplo1);
    // Creamos un libro con el autor válido
    let libro = new Book(libroejemplo1, instance(autor), 5);
    // Agregamos el libro a la biblioteca
    libreria.addBook(libro);
    // Verificamos que el libro fue agregado
    expect(libreria.getBooks().length).toBe(1);
    // Verificamos que el libro fue agregado con el nombre de autor correcto
    expect(libreria.getBooks()[0].getAuthor().getName()).toBe(autorejemplo1);
  });

  /**
   * Nombre de la prueba: Buscar un libro por autor
   * Objetivo: Verificar que se puede buscar un libro en la biblioteca por el nombre del autor.
   * Datos de prueba: Libro con título "Cien años de soledad" y autor "Gabriel García Márquez".
   * Resultado esperado: El libro se encuentra correctamente en la biblioteca cuando se busca por el nombre del autor.
   */
  it('2. Buscar un libro por autor', function () {
    // Creamos un mock de Author
    let autor = mock<Author>();
    when(autor.getName()).thenReturn(autorejemplo2);
    // Creamos un libro con el autor válido
    let libro = new Book(libroejemplo2, instance(autor), 5);
    libreria.addBook(libro);
    // Buscamos el libro por autor
    let librosEncontrados = libreria.searchByAuthor(autorejemplo2).getBooks();
    // Verificamos que se encontró un libro
    expect(librosEncontrados.length).toBe(1);
    // Verificamos que el libro corresponde con un libro del autor
    expect(librosEncontrados[0].getTitle()).toBe(libroejemplo2);
  });

  /**
   * Nombre de la prueba: Agregar un libro con título vacío
   * Objetivo: Verificar que se puede agregar un libro con un título vacío a la biblioteca.
   * Datos de prueba: Libro con título vacío y autor "Antoine de Saint-Exupéry".
   * Resultado esperado: El libro se agrega a la biblioteca con el título vacío, aunque se podría considerar un error en el diseño.
   * Comentario: Aunque el programa permite agregar un libro con un título vacío, esto podría ser considerado un error, sin embargo, 
   * desconozco los requerimientos específicos del programa, y por ende no puedo corroborar que se trate de un error y no de un feature.
   */
  it('3. Agregar un libro con título vacío', function () {
    let libreria = new Library();
    // Creamos un mock de Author
    let autor = mock<Author>();
    when(autor.getName()).thenReturn(autorejemplo1);
    // Creamos un libro con el título vacío
    let libro = new Book("", instance(autor), 5);
    // Agregamos el libro a la biblioteca
    libreria.addBook(libro);
    // Verificamos que el libro se agregó a la biblioteca a pesar de tener el título vacío
    expect(libreria.getBooks().length).toBe(1);
    expect(libreria.getBooks()[0].getTitle()).toBe("");
  });

  /**
   * Nombre de la prueba: Buscar un libro con autor no registrado
   * Objetivo: Verificar que no se puede encontrar un libro cuyo autor no está registrado en la biblioteca.
   * Datos de prueba: Libro con autor "Autor Desconocido".
   * Resultado esperado: No se encuentra ningún libro en la biblioteca al buscar por un autor que no existe.
   */
  it('4. Buscar un libro con autor no registrado', function () {
    // Creamos un mock de Author
    let autor = mock<Author>();
    when(autor.getName()).thenReturn(autorejemplo3);
    // Creamos un libro con el autor
    let libro = new Book(libroejemplo3, instance(autor), 5);
    // Agregamos el libro a la biblioteca
    libreria.addBook(libro);
    // Intentamos buscar un libro con otro autor
    let librosEncontrados = libreria.searchByAuthor("Autor no existe").getBooks();
    // Verificamos que no se encontró ningún libro
    expect(librosEncontrados.length).toBe(0);
  });

});


/*** 
import { Library } from './library.model';

describe('Library', () => {
  it('should create an instance', () => {
    expect(new Library()).toBeTruthy();
  });
});
***/