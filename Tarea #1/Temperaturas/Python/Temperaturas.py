def main():
    print("\n")
    print("Celsius=1 Fahrenheit=2 Kelvin=3 Rankine=4")
    print("-----------------------------------------")
    try:
        
        E1=int(input("Escoja la escala de su temperatura: "))
        if(E1<1):
            print("-----------------------------------------")
            print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
            print("-----------------------------------------")
            main()
        print("-----------------------------------------")
    except ValueError:
        print("-----------------------------------------")
        print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
        print("-----------------------------------------")
        main()
    
    if(E1==1):
        try:
            T=float(input("Ingrese °C: "))
        except ValueError:
            print("-----------------------------------------")
            print("Solo se permiten numeros")
            print("-----------------------------------------")
            main()
            
            
        try:
            print("-----------------------------------------")
            print("Fahrenheit=1 Kelvin=2 Rankine=3")
            print("-----------------------------------------")
            E2=int(input("Escoja la nueva escala: "))
            if(E2<1):
                print("-----------------------------------------")
                print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
                print("-----------------------------------------")
                main()
        except ValueError:
            print("-----------------------------------------")
            print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
            print("-----------------------------------------")
            main()
            
        print("-----------------------------------------")
        if(E2==1):
            CaF=str(T * 1.8 + 32)
            print("El resultado de la conversion es: " + CaF[:CaF.find(".")+3] + " °F")
            
        elif(E2==2):
            CaK=str(T + 273.15)
            print("El resultado de la conversion es: " + CaK[:CaK.find(".")+3] + " K")
            
        elif(E2==3):
            CaR=str(T * 1.8 + 491.67)
            print("El resultado de la conversion es: " + CaR[:CaR.find(".")+3] + " Ra")
            
            
    elif(E1==2):
        try:
            T=float(input("Ingrese °F: "))
        except ValueError:
            print("-----------------------------------------")
            print("Solo se permiten numeros")
            print("-----------------------------------------")
            main()
            
            
        try:
            print("-----------------------------------------")
            print("Celsius=1 Kelvin=2 Rankine=3")
            print("-----------------------------------------")
            E2=int(input("Escoja la nueva escala: "))
            if(E2<1):
                print("-----------------------------------------")
                print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
                print("-----------------------------------------")
                main()
        except ValueError:
            print("-----------------------------------------")
            print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
            print("-----------------------------------------")
            main()
            
        print("-----------------------------------------")
        if(E2==1):
            FaC=str((5*(T - 32))/9)
            print("El resultado de la conversion es: " + FaC[:FaC.find(".")+3] + " °C")
            
        elif(E2==2):
            FaK=str((T + 459.67)*5/9)
            print("El resultado de la conversion es: " + FaK[:FaK.find(".")+3] + " K")
            
        elif(E2==3):
            FaR=str(T + 459.67)
            print("El resultado de la conversion es: " + FaR[:FaR.find(".")+3] + " Ra")
            
            
    elif(E1==3):
        try:
            T=float(input("Ingrese K: "))
        except ValueError:
            print("-----------------------------------------")
            print("Solo se permiten numeros")
            print("-----------------------------------------")
            main()
            
            
        try:
            print("-----------------------------------------")
            print("Celsius=1 Fahrenheit=2 Rankine=3")
            print("-----------------------------------------")
            E2=int(input("Escoja la nueva escala: "))
            if(E2<1):
                print("-----------------------------------------")
                print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
                print("-----------------------------------------")
                main()
        except ValueError:
            print("-----------------------------------------")
            print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
            print("-----------------------------------------")
            main()
            
        print("-----------------------------------------")
        if(E2==1):
            KaC=str(T - 273.15)
            print("El resultado de la conversion es: " + KaC[:KaC.find(".")+3] + " °C")
            
        elif(E2==2):
            KaF=str(((9*(T - 273.15))/5)+32)
            print("El resultado de la conversion es: " + KaF[:KaF.find(".")+3] + " K")
            
        elif(E2==3):
            KaR=str(((9*(T - 273.15))/5)+491.67)
            print("El resultado de la conversion es: " + KaR[:KaR.find(".")+3] + " Ra")
            
            
    elif(E1==4):
        try:
            T=float(input("Ingrese Ra: "))
        except ValueError:
            print("-----------------------------------------")
            print("Solo se permiten numeros")
            print("-----------------------------------------")
            main()
            
            
        try:
            print("-----------------------------------------")
            print("Celsius=1 Fahrenheit=2 Kelvin=3")
            print("-----------------------------------------")
            E2=int(input("Escoja la nueva escala: "))
            if(E2<1):
                print("-----------------------------------------")
                print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
                print("-----------------------------------------")
                main()
        except ValueError:
            print("-----------------------------------------")
            print("SOLO SE PERMITEN LOS NUMEROS DE LAS OPCIONES")
            print("-----------------------------------------")
            main()
            
        print("-----------------------------------------")
        if(E2==1):
            RaC=str(((5*(T - 491.67))/9))
            print("El resultado de la conversion es: " + RaC[:RaC.find(".")+3] + " °C")
            
        elif(E2==2):
            RaF=str(T -459.67)
            print("El resultado de la conversion es: " + RaF[:RaF.find(".")+3] + " K")
            
        elif(E2==3):
            RaK=str((((5*(T - 491.67))/9))+273.15)
            print("El resultado de la conversion es: " + RaK[:RaK.find(".")+3] + " Ra")



main()
    

    
    
