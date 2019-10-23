print("\n         .:Calculadora de matrices:.         ")
while True:
    try:
        n = int(input("\nIngrese un opcion; Sumar(1) o Multiplicar(0): "))
        if n < 0 or n > 1:
            input("\nSolo se permiten los valores mencionados, presione enter para continuar.")
            continue
    except ValueError:
        input("\nSolo se permiten enteros, presione enter para continuar.")
        continue
    
    while True:
        if n == 1:
            try:
                filas = int(input ("\nIntroduzca el numero de filas de sus matrices: "))
                if filas < 0:
                    input("\nNo se admiten numeros negativos, presione enter para continuar.")
                    continue
                columnas = int(input ("\nIntroduzca el numero de columnas de sus matrices: "))
                if columnas < 0:
                    input("\nNo se admiten numeros negativos, presione enter para continuar.")
                    continue
            except ValueError:
                input("\nSolo se permiten enteros, presione enter para continuar.")
                continue
            matriz1 = []
            matriz2 = []
            matriz3 = []
            for i in range (filas):
                matriz1.append( [0] * columnas)
                matriz2.append( [0] * columnas)
                matriz3.append( [0] * columnas)
            print ("\nIngrese su primera matriz\n")
            for i in range(filas):
                for j in range(columnas):
                    matriz1[i][j] = int(input('\nElemento (%d,%d): ' % (i, j)))
            print ("\nIngrese su segunda matriz \n")
            for i in range(filas):
                for j in range(columnas):
                    matriz2[i][j] = int(input('\nElemento (%d,%d): ' % (i, j)))
            for i in range(filas):
                for j in range(columnas):
                    matriz3[i][j] += matriz1[i][j] + matriz2[i][j]
            print ("\nSu matriz resultante es: \n")
            print (matriz3)
            input("Programa finalizado, presione enter para salir. . .")
            break
    
        elif n == 0:
            m = int(input("\nIngresa el orden de las matrices: "))
            matrizA = []
            for i in range(m):
                matrizA.append( [0] * m )
            matrizB = []
            for i in range(m):
                matrizB.append( [0] * m )
            print ("\nIngrese su Matriz 1")
            for i in range(m):
                for j in range(m):
                    matrizA[i][j] = int(input("\nElemento (%d,%d): " % (i, j)))
            print ("\nIngrese su Matriz 2")
            for i in range(m):
                for j in range(m):
                    matrizB[i][j] = int(input("\nElemento (%d,%d): " % (i, j)))
            matrizr = []
            for i in range(m):
                matrizr.append( [0] * m )
            for i in range(m):
                for j in range(m):
                    for k in range(m):
                        matrizr[i][j] += matrizA[i][k] * matrizB[k][j]
            print ("\nSu matriz resultante es: \n")
            print (matrizr)
            input("\nPrograma finalizado, presione enter para salir. . .")
            break
    break
