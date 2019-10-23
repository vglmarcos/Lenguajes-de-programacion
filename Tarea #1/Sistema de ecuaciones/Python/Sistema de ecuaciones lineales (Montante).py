def main():
    print("\n.:Solucion de sistemas de ecuaciones lineales por Montante:.\n")
    print("Solo se pueden ingresar de 2 a 5 ecuaciones.")
    try:
        n = int(input("\nIngrese el numero de ecuaciones a calcular: "))
    except ValueError:
        input("\nSolo se admiten enteros, presione enter para salir. . .")
        quit()

    if n < 2 or n > 5:
        input("\nSolo se permite ingresar de 2 a 5 ecuaciones, presione enter para salir. . .")
        quit()
    else:
        matriz = []
        filas = n
        columnas = n + 1
        p_a = 0

        for i in range(filas):
            matriz.append([])
            for j in range(columnas):
                matriz[i].append(None)

        if n == 2:
            
            for i in range(filas):
                print("\nIngrese los elementos de la ecuacion {:d}.".format(i+1))
                for j in range(columnas):
                    try:
                        if j == 0:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable X: "))
                        elif j == 1:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Y: "))
                        else:
                            matriz[i][j] = int(input("\nIgual: "))
                            
                    except ValueError:
                        input("\nSolo se permiten enteros, presione enter para salir . . .")
                        quit()

            #--------------------------------------------------------------------------------------------------------------

            matriz[1][1] = (matriz[0][0] * matriz[1][1] - matriz[1][0] * matriz[0][1]) / 1
            matriz[1][2] = (matriz[0][0] * matriz[1][2] - matriz[1][0] * matriz[0][2]) / 1
            matriz[1][0] = 0
            p_a = matriz[0][0]

            #--------------------------------------------------------------------------------------------------------------

            matriz[0][0] = (matriz[1][1] * matriz[0][0] - matriz[1][0] * matriz[0][1]) / p_a
            matriz[0][2] = (matriz[1][1] * matriz[0][2] - matriz[0][1] * matriz[1][2]) / p_a
            matriz[0][1] = 0

            #--------------------------------------------------------------------------------------------------------------

            x = matriz[0][2] / matriz[0][0]
            y = matriz[1][2] / matriz[1][1]

            print("\n")

            print("X = {:f} \n".format(x))
            print("Y = {:f} \n".format(y))

        elif n == 3:
            for i in range(filas):
                print("\nIngrese los elementos de la ecuacion {:d}.".format(i+1))
                for j in range(columnas):
                    try:
                        if j == 0:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable X: "))
                        elif j == 1:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Y: "))
                        elif j == 2:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Z: "))
                        else:
                            matriz[i][j] = int(input("\nIgual: "))
                    except ValueError:
                        input("\nSolo se permiten enteros, presione enter para salir . . .")
                        quit()  

            #--------------------------------------------------------------------------------------------------------------

            matriz[1][1] = (matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0]) / 1
            matriz[1][2] = (matriz[0][0] * matriz[1][2] - matriz[0][2] * matriz[1][0]) / 1
            matriz[1][3] = (matriz[0][0] * matriz[1][3] - matriz[0][3] * matriz[1][0]) / 1
            matriz[2][1] = (matriz[0][0] * matriz[2][1] - matriz[0][1] * matriz[2][0]) / 1
            matriz[2][2] = (matriz[0][0] * matriz[2][2] - matriz[0][2] * matriz[2][0]) / 1
            matriz[2][3] = (matriz[0][0] * matriz[2][3] - matriz[0][3] * matriz[2][0]) / 1

            matriz[1][0] = 0
            matriz[2][0] = 0
            p_a = matriz[0][0]

	    #--------------------------------------------------------------------------------------

            matriz[0][0] = matriz[1][1]
            matriz[0][2] = (matriz[1][1] * matriz[0][2] - matriz[0][1] * matriz[1][2]) / p_a
            matriz[0][3] = (matriz[1][1] * matriz[0][3] - matriz[0][1] * matriz[1][3]) / p_a
            matriz[2][2] = (matriz[1][1] * matriz[2][2] - matriz[2][1] * matriz[1][2]) / p_a
            matriz[2][3] = (matriz[1][1] * matriz[2][3] - matriz[2][1] * matriz[1][3]) / p_a
            matriz[0][1] = 0
            matriz[2][1] = 0
            p_a = matriz[1][1]

	    #--------------------------------------------------------------------------------------

            matriz[0][0] = matriz[2][2]
            matriz[1][1] = matriz[2][2]
            matriz[0][3] = (matriz[2][2] * matriz[0][3] - matriz[0][2] * matriz[2][3]) / p_a
            matriz[1][3] = (matriz[2][2] * matriz[1][3] - matriz[1][2] * matriz[2][3]) / p_a
            matriz[0][2] = 0
            matriz[1][2] = 0

	    #--------------------------------------------------------------------------------------

            x = matriz[0][3] / matriz[0][0]
            y = matriz[1][3] / matriz[1][1]
            z = matriz[2][3] / matriz[2][2]

	    #--------------------------------------------------------------------------------------

            print("\n")

            print("X = {:f} \n".format(x))
            print("Y = {:f} \n".format(y))
            print("Z = {:f} \n".format(z))

        elif n == 4:
            for i in range(filas):
                print("\nIngrese los elementos de la ecuacion {:d}.".format(i+1))
                for j in range(columnas):
                    try:
                        if j == 0:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable W: "))
                        elif j == 1:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable X: "))
                        elif j == 2:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Y: "))
                        elif j == 3:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Z: "))
                        else:
                            matriz[i][j] = int(input("\nIgual: "))
                    except ValueError:
                        input("\nSolo se permiten enteros, presione enter para salir . . .")
                        quit()

            #--------------------------------------------------------------------------------------

            matriz[1][1] = (matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0]) / 1
            matriz[1][2] = (matriz[0][0] * matriz[1][2] - matriz[0][2] * matriz[1][0]) / 1
            matriz[1][3] = (matriz[0][0] * matriz[1][3] - matriz[0][3] * matriz[1][0]) / 1
            matriz[1][4] = (matriz[0][0] * matriz[1][4] - matriz[0][4] * matriz[1][0]) / 1
            matriz[2][1] = (matriz[0][0] * matriz[2][1] - matriz[0][1] * matriz[2][0]) / 1
            matriz[2][2] = (matriz[0][0] * matriz[2][2] - matriz[0][2] * matriz[2][0]) / 1
            matriz[2][3] = (matriz[0][0] * matriz[2][3] - matriz[0][3] * matriz[2][0]) / 1
            matriz[2][4] = (matriz[0][0] * matriz[2][4] - matriz[0][4] * matriz[2][0]) / 1
            matriz[3][1] = (matriz[0][0] * matriz[3][1] - matriz[0][1] * matriz[3][0]) / 1
            matriz[3][2] = (matriz[0][0] * matriz[3][2] - matriz[0][2] * matriz[3][0]) / 1
            matriz[3][3] = (matriz[0][0] * matriz[3][3] - matriz[0][3] * matriz[3][0]) / 1
            matriz[3][4] = (matriz[0][0] * matriz[3][4] - matriz[0][4] * matriz[3][0]) / 1
            matriz[1][0] = 0
            matriz[2][0] = 0
            matriz[3][0] = 0
            p_a = matriz[0][0]

            #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[1][1]
            matriz[0][2] = (matriz[1][1] * matriz[0][2] - matriz[0][1] * matriz[1][2]) / p_a
            matriz[0][3] = (matriz[1][1] * matriz[0][3] - matriz[0][1] * matriz[1][3]) / p_a
            matriz[0][4] = (matriz[1][1] * matriz[0][4] - matriz[0][1] * matriz[1][4]) / p_a
            matriz[2][2] = (matriz[1][1] * matriz[2][2] - matriz[1][2] * matriz[2][1]) / p_a
            matriz[2][3] = (matriz[1][1] * matriz[2][3] - matriz[1][3] * matriz[2][1]) / p_a
            matriz[2][4] = (matriz[1][1] * matriz[2][4] - matriz[1][4] * matriz[2][1]) / p_a
            matriz[3][2] = (matriz[1][1] * matriz[3][2] - matriz[1][2] * matriz[3][1]) / p_a
            matriz[3][3] = (matriz[1][1] * matriz[3][3] - matriz[1][3] * matriz[3][1]) / p_a
            matriz[3][4] = (matriz[1][1] * matriz[3][4] - matriz[1][4] * matriz[3][1]) / p_a
            matriz[0][1] = 0
            matriz[2][1] = 0
            matriz[3][1] = 0
            p_a = matriz[1][1]

            #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[2][2]
            matriz[1][1] = matriz[2][2]
            matriz[0][3] = (matriz[2][2] * matriz[0][3] - matriz[0][2] * matriz[2][3]) / p_a
            matriz[0][4] = (matriz[2][2] * matriz[0][4] - matriz[0][2] * matriz[2][4]) / p_a
            matriz[1][3] = (matriz[2][2] * matriz[1][3] - matriz[1][2] * matriz[2][3]) / p_a
            matriz[1][4] = (matriz[2][2] * matriz[1][4] - matriz[1][2] * matriz[2][4]) / p_a
            matriz[3][3] = (matriz[2][2] * matriz[3][3] - matriz[3][2] * matriz[2][3]) / p_a
            matriz[3][4] = (matriz[2][2] * matriz[3][4] - matriz[3][2] * matriz[2][4]) / p_a
            matriz[0][2] = 0
            matriz[1][2] = 0
            matriz[3][2] = 0
            p_a = matriz[2][2]

            #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[3][3]
            matriz[1][1] = matriz[3][3]
            matriz[2][2] = matriz[3][3]
            matriz[0][4] = (matriz[3][3] * matriz[0][4] - matriz[0][3] * matriz[3][4]) / p_a
            matriz[1][4] = (matriz[3][3] * matriz[1][4] - matriz[1][3] * matriz[3][4]) / p_a
            matriz[2][4] = (matriz[3][3] * matriz[2][4] - matriz[2][3] * matriz[3][4]) / p_a
            matriz[2][3] = 0
            matriz[1][3] = 0
            matriz[0][3] = 0

            #------------------------------------------------------------------------------------

            w = matriz[0][4] / matriz[0][0]
            x = matriz[1][4] / matriz[1][1]
            y = matriz[2][4] / matriz[2][2]
            z = matriz[3][4] / matriz[3][3]

            #------------------------------------------------------------------------------------

            print("\n")

            print("W = {:f} \n".format(w))
            print("X = {:f} \n".format(x))
            print("Y = {:f} \n".format(y))
            print("Z = {:f} \n".format(z))


        elif n == 5:
            for i in range(filas):
                print("\nIngrese los elementos de la ecuacion {:d}.".format(i+1))
                for j in range(columnas):
                    try:
                        if j == 0:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable V: "))
                        elif j == 1:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable W: "))
                        elif j == 2:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable X: "))
                        elif j == 3:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Y: "))
                        elif j == 4:
                            matriz[i][j] = int(input("\nIngrese el coeficiente de la variable Z: "))
                        else:
                            matriz[i][j] = int(input("\nIgual: "))
                    except ValueError:
                        input("\nSolo se permiten enteros, presione enter para salir . . .")
                        quit()

            #------------------------------------------------------------------------------------

            matriz[1][1] = (matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0]) / 1
            matriz[1][2] = (matriz[0][0] * matriz[1][2] - matriz[0][2] * matriz[1][0]) / 1
            matriz[1][3] = (matriz[0][0] * matriz[1][3] - matriz[0][3] * matriz[1][0]) / 1
            matriz[1][4] = (matriz[0][0] * matriz[1][4] - matriz[0][4] * matriz[1][0]) / 1
            matriz[1][5] = (matriz[0][0] * matriz[1][5] - matriz[0][5] * matriz[1][0]) / 1
            matriz[2][1] = (matriz[0][0] * matriz[2][1] - matriz[0][1] * matriz[2][0]) / 1
            matriz[2][2] = (matriz[0][0] * matriz[2][2] - matriz[0][2] * matriz[2][0]) / 1
            matriz[2][3] = (matriz[0][0] * matriz[2][3] - matriz[0][3] * matriz[2][0]) / 1
            matriz[2][4] = (matriz[0][0] * matriz[2][4] - matriz[0][4] * matriz[2][0]) / 1
            matriz[2][5] = (matriz[0][0] * matriz[2][5] - matriz[0][5] * matriz[2][0]) / 1
            matriz[3][1] = (matriz[0][0] * matriz[3][1] - matriz[0][1] * matriz[3][0]) / 1
            matriz[3][2] = (matriz[0][0] * matriz[3][2] - matriz[0][2] * matriz[3][0]) / 1
            matriz[3][3] = (matriz[0][0] * matriz[3][3] - matriz[0][3] * matriz[3][0]) / 1
            matriz[3][4] = (matriz[0][0] * matriz[3][4] - matriz[0][4] * matriz[3][0]) / 1
            matriz[3][5] = (matriz[0][0] * matriz[3][5] - matriz[0][5] * matriz[3][0]) / 1
            matriz[4][1] = (matriz[0][0] * matriz[4][1] - matriz[0][1] * matriz[4][0]) / 1
            matriz[4][2] = (matriz[0][0] * matriz[4][2] - matriz[0][2] * matriz[4][0]) / 1
            matriz[4][3] = (matriz[0][0] * matriz[4][3] - matriz[0][3] * matriz[4][0]) / 1
            matriz[4][4] = (matriz[0][0] * matriz[4][4] - matriz[0][4] * matriz[4][0]) / 1
            matriz[4][5] = (matriz[0][0] * matriz[4][5] - matriz[0][5] * matriz[4][0]) / 1
            matriz[1][0] = 0
            matriz[2][0] = 0
            matriz[3][0] = 0
            matriz[4][0] = 0
            p_a = matriz[0][0]

	    #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[1][1]
            matriz[0][2] = (matriz[1][1] * matriz[0][2] - matriz[0][1] * matriz[1][2]) / p_a
            matriz[0][3] = (matriz[1][1] * matriz[0][3] - matriz[0][1] * matriz[1][3]) / p_a
            matriz[0][4] = (matriz[1][1] * matriz[0][4] - matriz[0][1] * matriz[1][4]) / p_a
            matriz[0][5] = (matriz[1][1] * matriz[0][5] - matriz[0][1] * matriz[1][5]) / p_a
            matriz[2][2] = (matriz[1][1] * matriz[2][2] - matriz[2][1] * matriz[1][2]) / p_a
            matriz[2][3] = (matriz[1][1] * matriz[2][3] - matriz[2][1] * matriz[1][3]) / p_a
            matriz[2][4] = (matriz[1][1] * matriz[2][4] - matriz[2][1] * matriz[1][4]) / p_a
            matriz[2][5] = (matriz[1][1] * matriz[2][5] - matriz[2][1] * matriz[1][5]) / p_a
            matriz[3][2] = (matriz[1][1] * matriz[3][2] - matriz[3][1] * matriz[1][2]) / p_a
            matriz[3][3] = (matriz[1][1] * matriz[3][3] - matriz[3][1] * matriz[1][3]) / p_a
            matriz[3][4] = (matriz[1][1] * matriz[3][4] - matriz[3][1] * matriz[1][4]) / p_a
            matriz[3][5] = (matriz[1][1] * matriz[3][5] - matriz[3][1] * matriz[1][5]) / p_a
            matriz[4][2] = (matriz[1][1] * matriz[4][2] - matriz[4][1] * matriz[1][2]) / p_a
            matriz[4][3] = (matriz[1][1] * matriz[4][3] - matriz[4][1] * matriz[1][3]) / p_a
            matriz[4][4] = (matriz[1][1] * matriz[4][4] - matriz[4][1] * matriz[1][4]) / p_a
            matriz[4][5] = (matriz[1][1] * matriz[4][5] - matriz[4][1] * matriz[1][5]) / p_a
            matriz[0][1] = 0
            matriz[2][1] = 0
            matriz[3][1] = 0
            matriz[4][1] = 0
            p_a = matriz[1][1]

	    #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[2][2]
            matriz[1][1] = matriz[2][2]
            matriz[0][3] = (matriz[2][2] * matriz[0][3] - matriz[2][3] * matriz[0][2]) / p_a
            matriz[0][4] = (matriz[2][2] * matriz[0][4] - matriz[2][4] * matriz[0][2]) / p_a
            matriz[0][5] = (matriz[2][2] * matriz[0][5] - matriz[2][5] * matriz[0][2]) / p_a
            matriz[1][3] = (matriz[2][2] * matriz[1][3] - matriz[2][3] * matriz[1][2]) / p_a
            matriz[1][4] = (matriz[2][2] * matriz[1][4] - matriz[2][4] * matriz[1][2]) / p_a
            matriz[1][5] = (matriz[2][2] * matriz[1][5] - matriz[2][5] * matriz[1][2]) / p_a
            matriz[3][3] = (matriz[2][2] * matriz[3][3] - matriz[2][3] * matriz[3][2]) / p_a
            matriz[3][4] = (matriz[2][2] * matriz[3][4] - matriz[2][4] * matriz[3][2]) / p_a
            matriz[3][5] = (matriz[2][2] * matriz[3][5] - matriz[2][5] * matriz[3][2]) / p_a
            matriz[4][3] = (matriz[2][2] * matriz[4][3] - matriz[2][3] * matriz[4][2]) / p_a
            matriz[4][4] = (matriz[2][2] * matriz[4][4] - matriz[2][4] * matriz[4][2]) / p_a
            matriz[4][5] = (matriz[2][2] * matriz[4][5] - matriz[2][5] * matriz[4][2]) / p_a
            matriz[0][2] = 0
            matriz[1][2] = 0
            matriz[3][2] = 0
            matriz[4][2] = 0
            p_a = matriz[2][2]

	    #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[3][3]
            matriz[1][1] = matriz[3][3]
            matriz[2][2] = matriz[3][3]
            matriz[0][4] = (matriz[3][3] * matriz[0][4] - matriz[3][4] * matriz[0][3]) / p_a
            matriz[0][5] = (matriz[3][3] * matriz[0][5] - matriz[3][5] * matriz[0][3]) / p_a
            matriz[1][4] = (matriz[3][3] * matriz[1][4] - matriz[3][4] * matriz[1][3]) / p_a
            matriz[1][5] = (matriz[3][3] * matriz[1][5] - matriz[3][5] * matriz[1][3]) / p_a
            matriz[2][4] = (matriz[3][3] * matriz[2][4] - matriz[3][4] * matriz[2][3]) / p_a
            matriz[2][5] = (matriz[3][3] * matriz[2][5] - matriz[3][5] * matriz[2][3]) / p_a
            matriz[4][4] = (matriz[3][3] * matriz[4][4] - matriz[3][4] * matriz[4][3]) / p_a
            matriz[4][5] = (matriz[3][3] * matriz[4][5] - matriz[3][5] * matriz[4][3]) / p_a
            matriz[0][3] = 0
            matriz[1][3] = 0
            matriz[2][3] = 0
            matriz[4][3] = 0
            p_a = matriz[3][3]
            
            #------------------------------------------------------------------------------------

            matriz[0][0] = matriz[4][4]
            matriz[1][1] = matriz[4][4]
            matriz[2][2] = matriz[4][4]
            matriz[3][3] = matriz[4][4]
            matriz[0][5] = (matriz[4][4] * matriz[0][5] - matriz[0][4] * matriz[4][5]) / p_a
            matriz[1][5] = (matriz[4][4] * matriz[1][5] - matriz[1][4] * matriz[4][5]) / p_a
            matriz[2][5] = (matriz[4][4] * matriz[2][5] - matriz[2][4] * matriz[4][5]) / p_a
            matriz[3][5] = (matriz[4][4] * matriz[3][5] - matriz[3][4] * matriz[4][5]) / p_a
            matriz[0][4] = 0
            matriz[1][4] = 0
            matriz[2][4] = 0
            matriz[3][4] = 0
            
	    #------------------------------------------------------------------------------------

            v = matriz[0][5] / matriz[0][0]
            w = matriz[1][5] / matriz[1][1]
            x = matriz[2][5] / matriz[2][2]
            y = matriz[3][5] / matriz[3][3]
            z = matriz[4][5] / matriz[4][4]

	    #------------------------------------------------------------------------------------

            print("\n")

            print("V = {:f} \n".format(v))
            print("W = {:f} \n".format(w))
            print("X = {:f} \n".format(x))
            print("Y = {:f} \n".format(y))
            print("Z = {:f} \n".format(z))

        input("\nPrograma finalizado, presione ENTER para salir. . .")


main()

	
