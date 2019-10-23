-module (cifrado).
-export ([cifrar/1, descifrar/1]).
  
cifrar(String) -> 
  list_to_atom([X+13 || X <- String]).
  
descifrar(String) ->
  list_to_atom([X-13 || X <- String]).