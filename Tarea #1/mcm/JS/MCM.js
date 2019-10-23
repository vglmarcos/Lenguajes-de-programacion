function MinimoComunMultiplo()
{
	mcm = 1;
	numero = parseInt(document.getElementById("NumeroDeElementos").value);
	array=[];
	/*Validaciones*/
	if(!(numero==""))
	{
	if(!(isNaN(numero)))
	{
	numero = document.getElementById("NumeroDeElementos").value;
	if(Flotante(numero)==1)
	{
	numero = parseInt(document.getElementById("NumeroDeElementos").value);
	if(!(numero<2))
	{
	guardar_elementos(numero,array);
	for(var i=0;i<numero;i++)
	{
		mcm=mcm_num(mcm,array[i]);  /*Obtencion del resultado */
	}
	document.write("Su minimo común multiplo: " + mcm + "<br>")   /*Impresion de los elementos y el resultado*/
	document.write("<br>")
	document.write("Presione F5 para calcular de nuevo")
	}
	else
	{
		alert("Debe ingresar un numero mayor a uno");
	}
	}
	else
	{
		alert("Solo se permiten numeros enteros");
	}
	
	}
	else
	{
		alert("Debe ingresar un numero");
	}
	}
	else
	{
	alert("Debe ingresar un numero mayor a uno");
	}

}

function mcm_num(num1,num2) /*Operaciones*/
{
	mcd=mcd_num(num1, num2);
	return (num1*num2)/mcd;
}

function mcd_num(n1,n2) /*Operaciones*/
{
	if(n1>n2)
	{
		t=n1;
		n1=n2;
		n2=t;
	}

	if(n2%n1==0)
	{
		return n1;
	}
	else
	{
		return mcd_num(n2%n1,n1);
	}

}

function guardar_elementos(numero,array) /*Funcion para guardar los valores a calcular*/
{	document.write("Lista de elementos: ")
	for(i=0;i<numero;i++)
	{	array[i] = prompt("Ingrese el elemento no. " + (i+1));	
		while((array[i]<=0) || (array[i]==0) || (isNaN(array[i])) || (array[i]==""))
		{
		array[i] = prompt("Ingrese el elemento no. " + (i+1));
		
		

		}
		document.write("<ul><li>" + array[i] + "</li></ul>");
		


	}


	return array;
}

function Flotante(numero) { /*Funcion para validar flotantes*/
  if(Number.isInteger(numero/1)) {
  	var t;
    t=1;
    return (t);
  }
  else
  {
  	t=0;
	return (t);
}
}