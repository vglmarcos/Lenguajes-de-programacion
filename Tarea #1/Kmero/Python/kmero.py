#Declaracion de variables
array=None
n=None
f=None
a=None
array2=None
i=None
k=None
mayor=None
kmero=None
#array='10110010110001001110'
while True:
    try:
        array=int(input("Ingrese su cadena de binarios, límite 20: "))
    except ValueError:
        input("\nSolo se permiten enteros, vuelva a intentarlo.\n")
        continue
    
    array=str(array)

    n=len(array)
    
    #for i in array:
        #if not i in "01":
            #print("\nSolo se permite ingresar binarios.")
            #input("\nPresione enter para continuar. . .\n")
            
    if n > 20:
        print("Se sobre paso el limite del string, favor de ingresar uno mayor o igual a 20")
    elif n < 0:
        print("No se pueden ingresar numeros negativos")
        input("Pulse enter para continuar. . .")
    else:
        break
k=1

while k <= n:
    r=n-k+1
    array2=[]
    f=0
    a=0
    
    for i in range(r):
        array2.append(array[i:i+k])

    array2 = list(set(array2))
    mayor = 0
    n2 = len(array2)
    valor = []
    print("\n---------------------------------------------------------------------------\n")
    print("Cuando k es: {:d} \n".format(k))

    for i in range(n2):
        valor = array.count(array2[i])
        f = valor*k
        print(array2[i], ": veces repetidas ", valor, " x  k:", k, " = ", f, "\n")
        #Kmero mayor
        if f > mayor:
            mayor = f
            kmero = array2[i]
        a=a+f

    print("Suma: {:d}\n".format(a))
          
    input("Presione ENTER")
    
    k+=1

print(mayor, kmero) #Imprimir kmero mayor
