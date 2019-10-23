genero(alisma, alisma-lancelatum).
familia(alismataceae, alisma).

genero(baldellia, junquera).
familia(alismataceae, baldellia).

genero(alisma, plantago-aquatica).

genero(damasonium, seta-de-aqua).
familia(alismataceae, damasonium).

genero(damasonium, damasonium-polysperum).

genero(arisaum, aro).
familia(araceae, arisaum).

orden(arales, araceae).
clase(liliopsida, arales).


orden(alismatales, alismataceae).
clase(liliopsida, alismatales).
division(angiospermae, liliopsida).

genero(pistia,lechuga-de-agua).
familia(araceae,pistia).

genero(lemna,lemna-minor).
genero(lemna,lemna-gibba).
genero(lemna,lemna-trisulca).
familia(lemnaceae,lemna).
orden(arales,lemnaceae).

genero(ammoides,ammoides-pusilla).
familia(umberliferea,ammoides).
orden(apiales,umberliferea).
clase(magnoliopsida,apiales).
division(angiospermae,magnoliopsida).

genero(anthriscus,anthriscus-caucalis).
familia(umberliferea,anthriscus).

genero(marsilea, marsilea-strigosa).
genero(marsilea, marsilea-crenata).
genero(marsilea, marsilea-vestita).
familia(marsilaceae, marsilea).
orden(hydropteridales, marsilaceae).
genero(azolla,helecho-de-agua).
familia(azollaceae,azolla).
orden(hydropteridales,azollaceae).
clase(filicopsida,hydropteridales).
division(pteridophyta,filicopsida).

genero(ophioglossum,ophioglossum-lusitanicum).
familia(ophioglossaceae,ophioglossum).
orden(ophioglossales,ophioglossaceae).
clase(filicopsida,ophioglossales).

genero(ophioglossum,lengua-de-serpiente).

genero(pterdium,helecho-comun).
genero(pterdium,helecho-aguila).
familia(denstaedtiaceae,pterdium).
orden(polypoidales,denstaedtiaceae).
clase(filicopsida,polypoidales).

pertenece(X,Y) :- X=Y, write('Son lo mismo').
pertenece(X,Y) :- genero(Y,X), nl, write('Si pertenece al genero').
%pertenece(X,Y) :- !, write('No existe en la base de conocimiento').
pertenece(X,Y) :- genero(Z,X), familia(Y,Z), nl, write('Si pertenece a la familia').
pertenece(X,Y) :- genero(Z,X), familia(W,Z), orden(Y,W), nl, write('Si pertenece al orden').
pertenece(X,Y) :- genero(Z,X), familia(W,Z), orden(Q,W), clase(Y,Q),
     nl, write('Si pertenece a la clase').
pertenece(X,Y) :- genero(Z,X), familia(W,Z), orden(Q,W), clase(R,Q), division(Y,R) ,
     nl, write('Si pertenece a la division').
pertenece(X) :- write('Debe ingresar una especie y una rama para comparar').
pertenece(X,Y,Z) :- write('Solo se permite comparar una especie y una rama').

%seCruzan(X,Y) :- !, write('No existe en la base del conocimiento').

seCruzan(X,Y) :- X=Y, write('Son lo mismo').

seCruzan(X,Y) :- genero(Z,X), genero(Z,Y),
    write('Se cruzan en genero: '),nl,write(Z),nl.

seCruzan(X,Y) :- genero(Z,X), genero(W,Y), familia(L,Z), familia(L,W),
    write('Se cruzan en familia: '),nl,write(L),nl.


seCruzan(X,Y) :- genero(Z,X), genero(W,Y), familia(L,W), familia(M,Z),
    orden(R,M), orden(R,L),
    write('Se cruzan en orden: '),nl,write(R),nl.

seCruzan(X,Y) :- genero(Z,X), genero(W,Y), familia(L,W), familia(M,Z),
    orden(R,M), orden(T,L), clase(J,R), clase(J,T),
    write('Se cruzan en clase: '),nl,write(J),nl.

seCruzan(X,Y) :- genero(Z,X), genero(W,Y), familia(L,Z), familia(M,W),
    orden(R,L), orden(T,M), clase(J,R), clase(K,T), division(I,J), division(I,K),
    write('Se cruzan en division: '),nl,write(I),nl,!.

seCruzan(X) :- write('Debe ingresar dos especies').
seCruzan(X,Y,Z) :- write('Solo se permite comparar dos especies').
