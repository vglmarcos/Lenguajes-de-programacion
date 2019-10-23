function ObtenerFyC(){
Operaciones = parseInt(document.getElementById("Operacion").value);
if(Operaciones==1)
{
	Fila1= document.getElementById("Fila1").value;
	Columna1= document.getElementById("Columna1").value;
	Fila2= document.getElementById("Fila2").value;
	Columna2= document.getElementById("Columna2").value;
/* Validaciones*/
if(Columna1==Fila2)
{

if(!(isNaN(Fila1)))
{
	if(!(isNaN(Columna1)))
	{
		if(!(isNaN(Fila2)))
		{
			if(!(isNaN(Columna2)))
			{
	
				if(!Fila1=="" && !Fila2=="" && !Columna1=="" && !Columna2=="")
				{	
					if(Number.isInteger(Fila1/1) || Number.isInteger(Columna1/1) || Number.isInteger(Fila2/1) || Number.isInteger(Columna2/1) )
					{
					if(!(Fila1<1) || !(Columna1<1) || !(Fila2<1) || !(Columna2<1))
					{
					
					Fila1= parseInt(document.getElementById("Fila1").value);
					Columna1= parseInt(document.getElementById("Columna1").value);
					Fila2= parseInt(document.getElementById("Fila2").value);
					Columna2= parseInt(document.getElementById("Columna2").value);
					}
					else{
						alert("Debe ingresar un numero entero positivo");
					}
					T=1;	
					}
					else
					{
						alert("No se permiten flotantes");
						T=0;
					}
					
				}
				else
				{
					alert("Debe ingresar las filas y columnas");
				}
				
			}		
			else
			{
			alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
			}
		}
		else
		{
		alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
		}
	}
	else
	{
	alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
	}
	}	
	else
	{
	alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
	}
}
else
	{
		alert("Las COLUMNAS de la PRIMERA MATRIZ deben ser iguales a las FILAS de la SEGUNDA MATRIZ");
		T=0;
	}


if(T==1)
{
Fila1= parseInt(document.getElementById("Fila1").value);
Columna1= parseInt(document.getElementById("Columna1").value);
Fila2= parseInt(document.getElementById("Fila2").value);
Columna2= parseInt(document.getElementById("Columna2").value);

/* PRIMERA MATRIZ */
var Matriz1= new Array (Fila1);

for(i=0;i<Matriz1.length;i++)
{
	Matriz1[i] = new Array(Columna1)
}



for(i=0;i<Fila1;i++)
{
	for(var j=0;j<Columna1;j++)
	{
		
		Matriz1[i][j]= prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
		if(!(isNaN(Matriz1[i][j])))
		{
		while(Matriz1[i][j]=="")
				{
					alert("Debe ingresar un numero");
					Matriz1[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
				}
		}
		else
		{
			while(isNaN(Matriz1[i][j]))
			{
					alert("Debe ingresar uyn numero");
					Matriz1[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
				
			
			}
		}
		
			
		}
	}


/*Impresion de la primer matriz*/

document.write("<table width=50 border=1 cellpadding=1 cellspacing=1>")
for(i=0;i<Fila1;i++)
{
	document.write("<tr>")
	for(var j=0;j<Columna1;j++)
	{

		document.write("<td>" + Matriz1[i][j] + " " + "</td>")
	}
	document.write("</tr>")
	
}
document.write("<br>")

/*SEGUNDA MATRIZ*/

document.write("Primera Matriz ");

var Matriz2 = new Array (Fila2);

for(i=0;i<Matriz2.length;i++)
{
	Matriz2[i] = new Array(Columna2)
}
document.write("<br>")



for(i=0;i<Fila2;i++)
{
	for(var j=0;j<Columna2;j++)
	{
		Matriz2[i][j]= prompt("Ingrese la posicion (" + i +"," + j + ") de la Segunda matriz");
		if(!(isNaN(Matriz2[i][j])))
		{
		while(Matriz2[i][j]=="")
			{
			alert("Debe ingresar un numero");
			Matriz2[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
			}
		}
		else
		{
			while(isNaN(Matriz2[i][j]))
			{
			alert("Debe ingresar un numero");
			Matriz2[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
			}
		}
	}
}

/*Impresion de la segunda matriz*/

document.write("<table width=50 border=1 cellpadding=1 cellspacing=1>")
for(i=0;i<Fila2;i++)
{	
	document.write("<tr>");
	for(var j=0;j<Columna2;j++)
	{
		document.write("<td>" + Matriz2[i][j] + " " + "</td>")
	}
	document.write("</tr>")
	
}
document.write("<br>")



document.write("Segunda Matriz ")
document.write("<br>")
/*Matriz resultado*/
var Producto = 0;
var SumPro = 0;
var MatrizR = new Array(Fila1);
for(i=0;i<MatrizR.length;i++)
{
	MatrizR[i] = new Array(Columna2);
}

if(Columna1==Fila2 || Fila1==Fila2 && Columna1==Columna2)
{

	for(var i=0;i<Fila1;i++)
	{

		for(var j=0;j<Columna2;j++) 
		{
			MatrizR[i][j]= 0;

			for(var k=0;k<Columna1;k++)
			{
			MatrizR[i][j]= MatrizR[i][j] + (Matriz1[i][k] * Matriz2[k][i]);
			}

		}
	
	}


}

/*Impresion de la matriz resultante*/

document.write("<table width=50 border=1 cellpadding=1 cellspacing=1>")
document.write("<br>")
document.write("Matriz Resultante")

for(i=0;i<Fila1;i++)
{
	document.write("<tr>")
	for(var j=0;j<Columna2;j++)
	{	
		document.write("<td>" + MatrizR[j][i] + " " + "</td>")
	}
	document.write("</tr>")

	
}
}

}
else
{
	Fila1= document.getElementById("Fila1").value;
	Columna1= document.getElementById("Columna1").value;
	Fila2= document.getElementById("Fila2").value;
	Columna2= document.getElementById("Columna2").value;
/* Validaciones*/
if(Columna1==Fila2)
{

if(!(isNaN(Fila1)))
{
	if(!(isNaN(Columna1)))
	{
		if(!(isNaN(Fila2)))
		{
			if(!(isNaN(Columna2)))
			{
	
				if(!Fila1=="" && !Fila2=="" && !Columna1=="" && !Columna2=="")
				{	if(Number.isInteger(Fila1/1) || Number.isInteger(Columna1/1) || Number.isInteger(Fila2/1) || Number.isInteger(Columna2/1) )
					{
					if(!(Fila1<1) || !(Columna1<1) || !(Fila2<1) || !(Columna2<1))
					{
						
					Fila1= parseInt(document.getElementById("Fila1").value);
					Columna1= parseInt(document.getElementById("Columna1").value);
					Fila2= parseInt(document.getElementById("Fila2").value);
					Columna2= parseInt(document.getElementById("Columna2").value);
					T=1;
					}
					else{
						alert("Solo se permite declarar filas y columnas con un numero positivo");
						T=0;
					}	
					}
					else
					{
						alert("No se permiten flotantes");
						T=0;
					}
					
				}
				else
				{
					alert("Debe ingresar las filas y columnas");
				}
				
			}		
			else
			{
			alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
			}
		}
		else
		{
		alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
		}
	}
	else
	{
	alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
	}
	}	
	else
	{
	alert("SOLO SE PERMITEN NUMEROS ENTEROS POSITIVOS");
	}
}
else
	{
		alert("Las COLUMNAS de la PRIMERA MATRIZ deben ser iguales a las FILAS de la SEGUNDA MATRIZ");
		T=0;
	}


if(T==1)
{
Fila1= parseInt(document.getElementById("Fila1").value);
Columna1= parseInt(document.getElementById("Columna1").value);
Fila2= parseInt(document.getElementById("Fila2").value);
Columna2= parseInt(document.getElementById("Columna2").value);

/* PRIMERA MATRIZ */
var Matriz1= new Array (Fila1);

for(i=0;i<Matriz1.length;i++)
{
	Matriz1[i] = new Array(Columna1)
}



for(i=0;i<Fila1;i++)
{
	for(var j=0;j<Columna1;j++)
	{
		
		Matriz1[i][j]= prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
		if(!(isNaN(Matriz1[i][j])))
		{
		while(Matriz1[i][j]=="")
			{
			alert("Debe ingresar un numero");
			Matriz1[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
			}
		}
		else
		{
			while(isNaN(Matriz1[i][j]))
			{
			alert("Debe ingresar un numero");
			Matriz1[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
			}
		}
		
			
		}
	}


/*Impresion de la primer matriz*/

document.write("<table width=50 border=1 cellpadding=1 cellspacing=1>")
for(i=0;i<Fila1;i++)
{
	document.write("<tr>")
	for(var j=0;j<Columna1;j++)
	{

		document.write("<td>" + Matriz1[i][j] + " " + "</td>")
	}
	document.write("</tr>")
	
}
document.write("<br>")

/*SEGUNDA MATRIZ*/

document.write("Primera Matriz ");

var Matriz2 = new Array (Fila2);

for(i=0;i<Matriz2.length;i++)
{
	Matriz2[i] = new Array(Columna2)
}
document.write("<br>")



for(i=0;i<Fila2;i++)
{
	for(var j=0;j<Columna2;j++)
	{
		Matriz2[i][j]= prompt("Ingrese la posicion (" + i +"," + j + ") de la Segunda matriz");
		if(!(isNaN(Matriz2[i][j])))
		{
		while(Matriz2[i][j]=="")
			{
			alert("Debe ingresar un numero");
			Matriz2[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
			}
		}
		else
		{
			while(isNaN(Matriz2[i][j]))
			{
			alert("Debe ingresar un numero");
			Matriz2[i][j]=prompt("Ingrese la posicion (" + i +"," + j + ") de la primera matriz");
			}
		}
	}
}

/*Impresion de la segunda matriz*/

document.write("<table width=50 border=1 cellpadding=1 cellspacing=1>")
for(i=0;i<Fila2;i++)
{	
	document.write("<tr>");
	for(var j=0;j<Columna2;j++)
	{
		document.write("<td>" + Matriz2[i][j] + " " + "</td>")
	}
	document.write("</tr>")
	
}
document.write("<br>")



document.write("Segunda Matriz ")
document.write("<br>")
/*Matriz resultado*/
var Producto = 0;
var SumPro = 0;
var MatrizR = new Array(Fila1);
for(i=0;i<MatrizR.length;i++)
{
	MatrizR[i] = new Array(Columna2);
}

if(Columna1==Fila2 || Fila1==Fila2 && Columna1==Columna2)
{

	for(var i=0;i<Fila1;i++)
	{

		for(var j=0;j<Columna2;j++) 
		{
			MatrizR[i][j]= 0;

			MatrizR[i][j]= parseInt(Matriz1[i][j]) + parseInt(Matriz2[i][j]);

		}
	
	}


}

/*Impresion de la matriz resultante*/

document.write("<table width=50 border=1 cellpadding=1 cellspacing=1>")
document.write("<br>")
document.write("Matriz Resultante")

for(i=0;i<Fila1;i++)
{
	document.write("<tr>")
	for(var j=0;j<Columna2;j++)
	{	
		document.write("<td>" + MatrizR[i][j] + " " + "</td>")
	}
	document.write("</tr>")

	
}
}


}





}




