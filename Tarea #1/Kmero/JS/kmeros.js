function kmeros()
{


	var array = document.getElementById("cadena").value;
	if(!(array.length>20))
	{
	if(!(array==""))
	{
		
		if(numeric(array)==1)
		{
			if(Flotante(array)==1)
			{

			array = document.getElementById("cadena").value;
	var n=array.length;
	var k=1
	var kmero = [];
	var kmerorep = [];
	var mayor = [];
	var repmax;
	var rep = 0;
	var frecuenciamax;
	while(k<=n)
	{
		var r=n-k+1;
		var array2 = [];
		var uniquearray2 = [];
		var count = 0;
		var found = false;
		var slkmers = [];
	
		var myset = new Set();
		
		var kmerorep;
		var rep2 = 0;
		var frecuencia;
		document.write("<br>");
		document.write("K= " + k);
		document.write("<br>");
		for(i=0;i<r;i++)
		{

			array2[i] = array.slice(i, i+k); //Separacion de k
			myset.add(array2[i]);
			array3 = Array.from(myset);
			
		}
		
		var valor = 0

		var copia = array2.slice(0);

		for(i=0;i<array2.length;i++)
		{
			var repeticiones = 0;
			for(j=0;j<copia.length;j++)
			{
				if(array2[i]==copia[j])
				{
					repeticiones++;	
					delete copia[j];

					
				}

				
			}
				

				if(repeticiones>0)
				{
					
					var a = new Object();
					a.kmero = array2[i];
					document.write("<br>");
					document.write("<b>Kmero</b> : " + array2[i])
					a.Repeticiones = repeticiones;
					document.write("    <b>Repeticiones:</b> " + repeticiones);
					frecuencia =  repeticiones*k;
					document.write("    <b>Frecuencia:</b> " + frecuencia)
					document.write("<br>");
					a.Frecuencia = frecuencia;
					console.log(a);
				}
			
				if(frecuencia > mayor)
				{
					mayor = frecuencia;
					kmero = array2[i];
				}



				if(repeticiones >= rep)
				{
					rep = repeticiones;
					kmerorep.push(array2[i]);
					
				}

				//rep.push(repeticiones);
				//repmax = Math.max(...rep);
				//mayor.push(frecuencia);
				//frecuenciamax = Math.max(...mayor);
				//kmero.push(array2[i]);
				
				
				



			
 		}
		k+=1;

	
	}



	
	console.log("---------------------------------------------------");
	console.log("---------------------------------------------------");
	document.write("<br>");
	document.write("<b>Kmero mas frecuente: </b>" + kmero + "  <b> Frecuencia: </b>" + mayor)
	document.write("<br>");
	document.write("<b>Mas repeticiones:</b> " + kmerorep + "   <b>Repeticiones: </b>" + rep)

	console.log("---------------------------------------------------");
	console.log("---------------------------------------------------");
}
else
{
	alert("Solo se permiten binarios");
}
}
else
{
	alert("Ingrese una cadena de binarios");
}
}
else
{
	alert("Ingrese una cadena de binarios");
}
}
else
{
	alert("La cadena debe ser de 20 binarios o menos");
}
		
		
}

function numeric(array)
{
	patron = /[0-1]/;
	
	if(patron.test(array) == true)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}

function Flotante(array) { /*Funcion para validar flotantes*/
  if(Number.isInteger(array/1)) {
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
