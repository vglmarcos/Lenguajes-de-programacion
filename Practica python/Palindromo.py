#Definicion de variables
longitud=None
i=None
a=None
j=None 
array=[]

def main():
    print("\nPrograma que determina si una palabra es palindroma o no.\n")
    while True:
        while True: #Validamos que solo se introduzcan palabras
            array=input("\nIntroduzca una palabra: ")
            if array.isalpha(): #el .isalpha() sirve para saber si la cadena de texto que se ingreso es alfabetica y arroja un True, en caso de que sea numerica 
                break             #o alfanumerica se arroja un False
            else:
                print("\nSolo se permiten palabras sin numeros.")
    
        print("\nPalabra ingresada: {:s}.".format(array))
        array=array.lower() #En caso de que el usuario introduca combinacion de Mayusculas, se vuelven todas minusculas.
        longitud=len(array)
        print(array)
        
        if longitud<2: #validamos que el usuario no introduzca una letra
            print("\nLa palabra no puede contener menos de 2 letras.")
            continue
        else:
            break
        
    j=longitud-1
    i=0

    while i<longitud:
        if array[i]==array[j]: # si array posicion 'i' (inicial) es igual a array posicion 'j' (final), aplica en la primera vuelta
            a=True
        else:
            a=False
            break
        
        i+=1
        j-=1

    if a:
        print("\nLa palabra es Palíndroma.")
    else:
        print("\nLa palabra no es Palíndroma.")

    input("\nFin del programa, presione ENTER para continuar. . .")
            
main()
