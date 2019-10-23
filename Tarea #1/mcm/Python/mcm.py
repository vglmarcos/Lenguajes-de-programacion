print(".: PROGRAMA PARA HALLAR EL M.C.M:.\n")

def main():

    mcm=1 #establecemos el mcm como valor inicial 1
    numero=None

    while True:

        try: #se intentara hacer la operacion mientras el dato ingresado sea correcto
            numero=int(input("Introduzca el numero de elementos que desea calcular: ")) #obtenemos el valor en forma de texto y se guarda en 'n'

        except ValueError: #validamos que el numero ingresado sea un entero
            print("\nSe debe colocar un numero entero.")
            input("\nPulse ENTER para continuar. . .\n") #pausamos el sistema
            continue #Si suelta una excepcion el continue hara que vuelva a preguntar por el numero, en caso de que no de error el while se hace falso y se sale del ciclo

        if numero>=2: #validamos si el numero ingresado es igual o mayor a 2
           print("\nEl numero es valido")
           break #rompe el ciclo en caso de que el numero sea valido
        
        elif numero<0: #validamos que no se introduzcan numeros negativos
            print("\nNo se admiten numeros negativos.")
            
        elif numero==0: #validamos que el numero ingresado no sea 0
            print("\nNo se puede hallar el m.c.m de cero elementos.")
            
        elif numero==1: #validamos que el numero ingresado no sea 1
            print("\nNo se puede hallar el m.c.m de un elemento.")

        input("\nPulse ENTER para continuar. . .\n") #pausamos el sistema
                  
    array=[] #creamos un array o lista para asignar los elementos
    guardar_elementos(numero, array)#Llamamos la funcion que guardara los elementos ingresados
    #repeticiones(numero, array)#Funcion que valida que no se repite ningun elemento ingresado

    for i in range(numero):
        mcm=mcm_num(mcm,array[i])


    print("\n\nEl m.c.m es: ", mcm)
    input("\nPrograma finalizado, presione ENTER para salir :D. . .\n")

#Funcion mcm
def mcm_num(num1, num2):
    mcd=mcd_num(num1, num2)
    return (num1*num2)/mcd

#Funcion mcd
def mcd_num(n1, n2):
    
    if n1>n2: #En caso de que n1 sea mayor a n2 se intercambian los valores, n1=n2 y n2=n1
        t=n1
        n1=n2
        n2=t

    if n2%n1==0:
        return n1
    else:
        return mcd_num(n2%n1, n1)

def guardar_elementos(numero, array):
    print("\nIngresa los elementos a calcular: ")
    
    for i in range(numero):
        
        while True:

            try: #validamos si los elementos son enteros
            
                b=i+1 #variable para enumerar los datos
                valor=int(input("\nDato numero " + str(b) + ": "))
                
                if valor<0:#convertimos a positivo en caso de que se introduzcan negativos
                    valor=abs(valor)

                if valor==0:
                    print("\nNo se permite poner un elemento con valor 0. Ingrese otro valor!")
                    continue
                
                array.append(valor)

                if array.count(array[i])!=1:
                    print("\nNo se pueden repetir elementos, introduzca un valor diferente!")
                    array.remove(array[i])
                    continue
                
                break
            
            except ValueError:
            
                print("\nSolo se permiten enteros, introduzca un valor numerico: ")
                continue
            
    return array       

#Llamamos la funcion principal para ejecutar el codigo
#intentar con un set en vez de la funcion de validar las repeticiones
main()
