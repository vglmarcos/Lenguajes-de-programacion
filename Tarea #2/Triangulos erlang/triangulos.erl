-module(triangulos).
-export([lados/3]).

lados (A, B, C) -> 
  if (((A + B) > C) and ((B + C) > A) and ((A + C) > B)) -> %if para verificar que los triangulos sean posibles de hacer.
    if ((A == B) or (B == C) or (C == A)) ->
    	if ((A == B) and (B == C ) and (C == A)) -> io:format("El triangulo es equilatero.\n");
    	true -> io:format("El triangulo es isosceles.\n")
    	end;
    true -> io:format("El triangulo es escaleno.\n")
    end;
  true -> io:format("Triangulo no valido.\n")
  end.