fib(0, 1).
fib(1, 2).
fib(X, Y) :-
    X1 is X - 1, X2 is X - 2, fib(X1, Y1), fib(X2, Y2),
    Y is Y1 + Y2.

pi(X) :- X is 3.1416.

arbol(_, N, _, _) :- N is 0, abort.

arbol(_, N, _, _) :- N < 0, nl,
    write("Ingrese al menos 1 rama."), nl, abort.

arbol(X, _, _, _) :- X < 0, nl,
    write("Ingrese una posicion valida."), nl, abort.

arbol(_, _, P, _) :- P < 0, nl,
    write("Ingrese un perimetro valido."), nl, abort.

arbol(_, _, _, A) :- A < 0, nl,
    write("Ingrese un angulo valido."), nl, abort.

%arbol(_, N, _, _) :- N > 8, nl,
    %write("Ha rebasado el limite."), nl, abort.

arbol(X, N, P, A) :-
    pi(PI), ARD is A * PI / 180,
    fib(X, Y), B is Y * sin(ARD),
    H is sqrt(Y**Y - B**B),
    AR is B / P * 360, nl,
    write("La altura de la rama "),
    write(X),
    write(" es: "),
    write(H),
    write(" m, la base es: "),
    write(B),
    write(" m."), nl, nl,
    write("El angulo de rotacion es : "),
    write(AR), write(" grados."), nl, nl,
    X1 is X + 1, N1 is N - 1, arbol(X1, N1, P, A).

