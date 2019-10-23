function Temperaturas() {
	var E1= document.getElementById("Escala1").value; /*Obtener Valor de la primera opcion del formulario*/
	var E2= document.getElementById("Escala2").value; /*Obtener valor de la segunda opcion del formulario*/
	var T= document.getElementById("Temp").value;
	if(!(T==""))
	{
	T= parseFloat(document.getElementById("Temp").value); /*Obtener el valor de la temperatura a convertir*/
	/*Seleccionar las escalas*/
	if(!(isNaN(T)))
	{ 	
	if(E1==E2)
	{
		return ("Es lo mismo!");

	}

	else if(T>1000000) //validar valores extremadamente grandes 
	{
		return "Incineracion extrema D:";
	}

	else if(T<-1000000) //validar valores extremadamente helados 
	{
		return "Congelamiento extremo D:";
	}
	/*Celcius a Farhnheit*/
	else if (E1==1 && E2==2)
	{

		CaF= parseFloat(((T * 1.8 + 32).toFixed(3))) + " °F";
		return CaF;

	}
	/*Celcius a Kelvin*/
	else if (E1==1 && E2==3)
	{
		CaK= parseFloat((T + 273.15).toFixed(3)) + "  °K";
		return CaK;

	}
	/*Celcius a Rankine*/
	else if (E1==1 && E2==4)
	{
		CaR= parseFloat(((T * 1.8 + 491.67).toFixed(3))) + " Ra";
		return CaR;

	}
	/*Farhnheit a Celcius*/
	else if (E1==2 && E2==1)
	{
		FaC= parseFloat(((5*(T - 32))/9).toFixed(3)) + " °C";
		return FaC;

	}
	/*Farhnheit a Kelvin*/
	else if (E1==2 && E2==3)
	{
		FaK= parseFloat((((T + 459.67)*5/9).toFixed(3))) + " K";
		return FaK;

	}
	/*Fahrenheit a Rankine*/
	else if (E1==2 && E2==4)
	{
		FaR= (T + 459.67).toFixed(3) + " Ra";
		return FaR;

	}
	/*Kelvin a Celcius*/
	else if (E1==3 && E2==1)
	{
		KaC= T - 273.15 + " °C";
		return KaC;

	}
	/*Kelvin a Fahrenheit*/
	else if (E1==3 && E2==2)
	{
		KaF= parseFloat((((9*(T - 273.15))/5)+32).toFixed(3)) + " °C";
		return KaF;

	}
	/*Kelvin a Rankine*/
	else if (E1==3 && E2==4)
	{
		KaR= parseFloat((((T-273.15)*1.8)+491.67).toFixed(3)) + " Ra";
		return KaR;

	}
	/*Rankine a Celcius*/
	else if (E1==4 && E2==1)
	{
		RaC= parseFloat((((5*(T - 491.67))/9)).toFixed(3)) + " °C";
		return RaC;

	}
	/*Rankine a Fahrenheit*/
	else if (E1==4 && E2==2)
	{
		RaF= parseFloat((T -459.67).toFixed(3)) + " °F";
		return RaF;

	}
	/*Rankine a Kelvin*/
	else if (E1==4 && E2==3)
	{
		RaK= parseFloat(((((5*(T - 491.67))/9))+273.15).toFixed(3)) + " K";
		return RaK;

	}
}
else {
	return "Solo se permiten numeros";
}

}
else {
	return "Ingrese la temperatura";
	}
}


function Lista()
{

	var E1= document.getElementById("Escala1").value; 
		if(E1==1)
		{
			var lista = document.getElementById("Escala2")
			lista.options[0] = new Option("Fahrenheit","2")
			lista.options[1] = new Option("Kelvin","3")
			lista.options[2] = new Option("Rankine","4")
		}
		if(E1==2)
		{
			var lista = document.getElementById("Escala2")
			lista.options[0] = new Option("Celsius","1")
			lista.options[1] = new Option("Kelvin","3")
			lista.options[2] = new Option("Rankine","4")
			
		}
		if(E1==3)
		{
			var lista = document.getElementById("Escala2")
			lista.options[0] = new Option("Celsius","1")
			lista.options[1] = new Option("Fahrenheit","2")
			lista.options[2] = new Option("Rankine","4")
		}
		if(E1==4)
		{
			var lista = document.getElementById("Escala2")
			lista.options[0] = new Option("Celsius","1")
			lista.options[1] = new Option("Fahrenheit","2")
			lista.options[2] = new Option("Kelvin","3")
		}
	

	

}




	