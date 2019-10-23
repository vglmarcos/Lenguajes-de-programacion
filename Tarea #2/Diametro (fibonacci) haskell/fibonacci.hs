fib a b = a: fib b (a+b)
diametro a b c d = a: diametro (a * (b!!(c) / b!!(d))) b (c-1) (d-1)
main = do putStr "Elija el numero de segmento: "
          x <- readLn
          putStr "\nElija el valor del diametro en metros: "
          y <- readLn
          if x < 1 || y < 1
           then putStrLn "\nNo valido"
           else do let lista = take x (fib 1 2)
                   let n = length(lista) - 1
                   let m = length(lista) - 2
                   putStrLn "\nLos diametros en metros son: "
                   let diametros = take x (diametro y lista m n)
                   print(diametros)
            