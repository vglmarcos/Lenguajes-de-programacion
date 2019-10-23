function Ecuaciones()
{
	var Variables= document.getElementById("variables").value;
	if(Variables==0)
	{
		Calculo_Tres_Variables();
	}
}


function Calculo_Tres_Variables()
{
	//Obteniendo valores del input
	var x1=document.getElementById("x1").value;
	var y1=document.getElementById("y1").value;
	var z1=document.getElementById("z1").value;
	var c1=document.getElementById("c1").value;

	var x2=document.getElementById("x2").value;
	var y2=document.getElementById("y2").value;
	var z2=document.getElementById("z2").value;
	var c2=document.getElementById("c2").value;

	var x3=document.getElementById("x3").value;
	var y3=document.getElementById("y3").value;
	var z3=document.getElementById("z3").value;
	var c3=document.getElementById("c3").value;
	

	//Declarando matriz del determinante del sistema
	var Determinante = new Array (6);
	for(i=0;i<Determinante.length;i++)
	{
	Determinante[i] = new Array(3);
	}

	//Declarando matriz del determinante de X
	var DeterminanteX = new Array (6);
	for(i=0;i<DeterminanteX.length;i++)
	{
	DeterminanteX[i] = new Array(3);
	}

	//Declarando matriz del determinante de Y
	var DeterminanteY = new Array (6);
	for(i=0;i<DeterminanteY.length;i++)
	{
	DeterminanteY[i] = new Array(3);
	}

	//Declarando matriz del determinante de Z
	var DeterminanteZ = new Array (6);
	for(i=0;i<DeterminanteZ.length;i++)
	{
	DeterminanteZ[i] = new Array(3);
	}



	//Fila 1 del sistema
	Determinante[1][1] = x1;
	Determinante[1][2] = y1;
	Determinante[1][3] = z1;
	
	//Fila 2 del sistema
	Determinante[2][1] = x2;
	Determinante[2][2] = y2;
	Determinante[2][3] = z2;
	
	//Fila 3 del sistema
	Determinante[3][1] = x3;
	Determinante[3][2] = y3;
	Determinante[3][3] = z3;

	//Repitiendo fila 1 y 2 debajo de la matriz determinante
	Determinante[4][1] = x1;
	Determinante[4][2] = y1;
	Determinante[4][3] = z1;

	Determinante[5][1] = x2;
	Determinante[5][2] = y2;
	Determinante[5][3] = z2;

	//Sacar determinante
	var DPMD= (Determinante[1][1] * Determinante[2][2] * Determinante[3][3]) + (Determinante[2][1] * Determinante[3][2] * Determinante[4][3]) + (Determinante[3][1] * Determinante[4][2] * Determinante[5][3])                           
	var DSMD= (Determinante[1][3] * Determinante[2][2] * Determinante[3][1]) + (Determinante[2][3] * Determinante[3][2] * Determinante[4][1]) + (Determinante[3][3] * Determinante[4][2] * Determinante[5][1])
	var Dsistema = DPMD - DSMD;
	

	//Fila 1 del X
	DeterminanteX[1][1] = c1;
	DeterminanteX[1][2] = y1;
	DeterminanteX[1][3] = z1;
	
	//Fila 2 del X
	DeterminanteX[2][1] = c2;
	DeterminanteX[2][2] = y2;
	DeterminanteX[2][3] = z2;

	//Fila 3 del X
	DeterminanteX[3][1] = c3;
	DeterminanteX[3][2] = y3;
	DeterminanteX[3][3] = z3;

	//Repitiendo fila 1 y 2 debajo de la matriz X
	DeterminanteX[4][1] = c1;
	DeterminanteX[4][2] = y1;
	DeterminanteX[4][3] = z1;

	DeterminanteX[5][1] = c2;
	DeterminanteX[5][2] = y2;
	DeterminanteX[5][3] = z2;

	var DPMX= (DeterminanteX[1][1] * DeterminanteX[2][2] * DeterminanteX[3][3]) + (DeterminanteX[2][1] * DeterminanteX[3][2] * DeterminanteX[4][3]) + (DeterminanteX[3][1] * DeterminanteX[4][2] * DeterminanteX[5][3])                           
	var DSMX= (DeterminanteX[1][3] * DeterminanteX[2][2] * DeterminanteX[3][1]) + (DeterminanteX[2][3] * DeterminanteX[3][2] * DeterminanteX[4][1]) + (DeterminanteX[3][3] * DeterminanteX[4][2] * DeterminanteX[5][1])
	var DX = DPMX - DSMX;


	//Fila 1 del Y
	DeterminanteY[1][1] = x1;
	DeterminanteY[1][2] = c1;
	DeterminanteY[1][3] = z1;
	
	//Fila 2 del Y
	DeterminanteY[2][1] = x2;
	DeterminanteY[2][2] = c2;
	DeterminanteY[2][3] = z2;
	
	//Fila 3 del Y
	DeterminanteY[3][1] = x3;
	DeterminanteY[3][2] = c3;
	DeterminanteY[3][3] = z3;

	//Repitiendo fila 1 y 2 debajo de la matriz Y
	DeterminanteY[4][1] = x1;
	DeterminanteY[4][2] = c1;
	DeterminanteY[4][3] = z1;

	DeterminanteY[5][1] = x2;
	DeterminanteY[5][2] = c2;
	DeterminanteY[5][3] = z2;

	//Sacar determinante Y
	var DPMY= (DeterminanteY[1][1] * DeterminanteY[2][2] * DeterminanteY[3][3]) + (DeterminanteY[2][1] * DeterminanteY[3][2] * DeterminanteY[4][3]) + (DeterminanteY[3][1] * DeterminanteY[4][2] * DeterminanteY[5][3]);                         
	var DSMY= (DeterminanteY[1][3] * DeterminanteY[2][2] * DeterminanteY[3][1]) + (DeterminanteY[2][3] * DeterminanteY[3][2] * DeterminanteY[4][1]) + (DeterminanteY[3][3] * DeterminanteY[4][2] * DeterminanteY[5][1]);
	var DY = DPMY - DSMY;


	//Fila 1 del Z
	DeterminanteZ[1][1] = x1;
	DeterminanteZ[1][2] = y1;
	DeterminanteZ[1][3] = c1;
	
	//Fila 2 del Z
	DeterminanteZ[2][1] = x2;
	DeterminanteZ[2][2] = y2;
	DeterminanteZ[2][3] = c2;
	
	//Fila 3 del Z
	DeterminanteZ[3][1] = x3;
	DeterminanteZ[3][2] = y3;
	DeterminanteZ[3][3] = c3;

	//Repitiendo fila 1 y 2 debajo de la matriz Z
	DeterminanteZ[4][1] = x1;
	DeterminanteZ[4][2] = y1;
	DeterminanteZ[4][3] = c1;

	DeterminanteZ[5][1] = x2;
	DeterminanteZ[5][2] = y2;
	DeterminanteZ[5][3] = c2;

	//Sacar determinante
	var DPMZ= (DeterminanteZ[1][1] * DeterminanteZ[2][2] * DeterminanteZ[3][3]) + (DeterminanteZ[2][1] * DeterminanteZ[3][2] * DeterminanteZ[4][3]) + (DeterminanteZ[3][1] * DeterminanteZ[4][2] * DeterminanteZ[5][3])                           
	var DSMZ= (DeterminanteZ[1][3] * DeterminanteZ[2][2] * DeterminanteZ[3][1]) + (DeterminanteZ[2][3] * DeterminanteZ[3][2] * DeterminanteZ[4][1]) + (DeterminanteZ[3][3] * DeterminanteZ[4][2] * DeterminanteZ[5][1])
	var DZ = DPMZ - DSMZ;


	//Sacar valores
	var X= DX/Dsistema;
	alert("X: " + X);
	var Y= DY/Dsistema;
	alert("Y: " + Y);
	var Z= DZ/Dsistema;
	alert("Z: " + Z);

	
}

function Calculo_Cuatro_Variables() {

	var x1 = document.getElementById("4x1").value;
	var y1 = document.getElementById("4y1").value;
	var z1 = document.getElementById("4z1").value;
	var w1 = document.getElementById("4w1").value;
	var c1 = document.getElementById("4c1").value;


	var x2 = document.getElementById("4x2").value;
	var y2 = document.getElementById("4y2").value;
	var z2 = document.getElementById("4z2").value;
	var w2 = document.getElementById("4w2").value;
	var c2 = document.getElementById("4c2").value;

	var x3 = document.getElementById("4x3").value;
	var y3 = document.getElementById("4y3").value;
	var z3 = document.getElementById("4z3").value;
	var w3 = document.getElementById("4w3").value;
	var c3 = document.getElementById("4c3").value;

	var x4 = document.getElementById("4x4").value;
	var y4 = document.getElementById("4y4").value;
	var z4 = document.getElementById("4z4").value;
	var w4 = document.getElementById("4w4").value;
	var c4 = document.getElementById("4c4").value;


	var DeterminanteS4 = new Array(5);

	for(var i=0;i<DeterminanteS4.length;i++)
	{
		DeterminanteS4[i] = new Array(5);
	}

	var DeterminanteS3 = new Array(4);

	for(var i=0;i<DeterminanteS3.length;i++)
	{
		DeterminanteS3[i] = new Array(4)
	}

	var DeterminanteS2 = new Array(3);

	for(var i=0;i<DeterminanteS2.length;i++)
	{
		DeterminanteS2[i] = new Array(3);
	}

	DeterminanteS4[1][1] = x1;
	DeterminanteS4[1][2] = y1;
	DeterminanteS4[1][3] = z1;
	DeterminanteS4[1][4] = w1;

	DeterminanteS4[2][1] = x2;
	DeterminanteS4[2][2] = y2;
	DeterminanteS4[2][3] = z2;
	DeterminanteS4[2][4] = w2;

	DeterminanteS4[3][1] = x3;
	DeterminanteS4[3][2] = y3;
	DeterminanteS4[3][3] = z3;
	DeterminanteS4[3][4] = w3;

	DeterminanteS4[4][1] = x4;
	DeterminanteS4[4][2] = y4;
	DeterminanteS4[4][3] = z4;
	DeterminanteS4[4][4] = w4;

	DeterminanteS3[1][1] = (DeterminanteS4[1][1]*DeterminanteS4[2][2])-(DeterminanteS4[1][2]*DeterminanteS4[2][1]);
	DeterminanteS3[1][2] = (DeterminanteS4[1][1]*DeterminanteS4[2][3])-(DeterminanteS4[1][3]*DeterminanteS4[2][1]);
	DeterminanteS3[1][3] = (DeterminanteS4[1][1]*DeterminanteS4[2][4])-(DeterminanteS4[1][4]*DeterminanteS4[2][1]);

	DeterminanteS3[2][1] = (DeterminanteS4[1][1]*DeterminanteS4[3][2])-(DeterminanteS4[1][2]*DeterminanteS4[3][1]);
	DeterminanteS3[2][2] = (DeterminanteS4[1][1]*DeterminanteS4[3][3])-(DeterminanteS4[1][3]*DeterminanteS4[3][1]);
	DeterminanteS3[2][3] = (DeterminanteS4[1][1]*DeterminanteS4[3][4])-(DeterminanteS4[1][4]*DeterminanteS4[3][1]);

	DeterminanteS3[3][1] = (DeterminanteS4[1][1]*DeterminanteS4[4][2])-(DeterminanteS4[1][2]*DeterminanteS4[4][1]); 
	DeterminanteS3[3][2] = (DeterminanteS4[1][1]*DeterminanteS4[4][3])-(DeterminanteS4[1][3]*DeterminanteS4[4][1]);
	DeterminanteS3[3][3] = (DeterminanteS4[1][1]*DeterminanteS4[4][4])-(DeterminanteS4[1][4]*DeterminanteS4[4][1]);

	DeterminanteS2[1][1] = ((DeterminanteS3[1][1]*DeterminanteS3[2][2])-(DeterminanteS3[1][2]*DeterminanteS3[2][1]))/DeterminanteS4[1][1];
	DeterminanteS2[1][2] = ((DeterminanteS3[1][1]*DeterminanteS3[2][3])-(DeterminanteS3[1][3]*DeterminanteS3[2][1]))/DeterminanteS4[1][1];

	DeterminanteS2[2][1] = ((DeterminanteS3[1][1]*DeterminanteS3[3][2])-(DeterminanteS3[1][2]*DeterminanteS3[3][1]))/DeterminanteS4[1][1];
	DeterminanteS2[2][2] = ((DeterminanteS3[1][1]*DeterminanteS3[3][3])-(DeterminanteS3[1][3]*DeterminanteS3[3][1]))/DeterminanteS4[1][1];

	var DS4 = ((DeterminanteS2[1][1]*DeterminanteS2[2][2])-(DeterminanteS2[1][2]*DeterminanteS2[2][1]))/DeterminanteS3[1][1];

	//Determinante de X


	var DeterminanteX4 = new Array(5);

	for(var i=0;i<DeterminanteX4.length;i++)
	{
		DeterminanteX4[i] = new Array(5);
	}

	var DeterminanteX3 = new Array(4);

	for(var i=0;i<DeterminanteX3.length;i++)
	{
		DeterminanteX3[i] = new Array(4)
	}

	var DeterminanteX2 = new Array(3);

	for(var i=0;i<DeterminanteX2.length;i++)
	{
		DeterminanteX2[i] = new Array(3);
	}

	DeterminanteX4[1][1] = c1;
	DeterminanteX4[1][2] = y1;
	DeterminanteX4[1][3] = z1;
	DeterminanteX4[1][4] = w1;

	DeterminanteX4[2][1] = c2;
	DeterminanteX4[2][2] = y2;
	DeterminanteX4[2][3] = z2;
	DeterminanteX4[2][4] = w2;

	DeterminanteX4[3][1] = c3;
	DeterminanteX4[3][2] = y3;
	DeterminanteX4[3][3] = z3;
	DeterminanteX4[3][4] = w3;

	DeterminanteX4[4][1] = c4;
	DeterminanteX4[4][2] = y4;
	DeterminanteX4[4][3] = z4;
	DeterminanteX4[4][4] = w4;

	DeterminanteX3[1][1] = (DeterminanteX4[1][1]*DeterminanteX4[2][2])-(DeterminanteX4[1][2]*DeterminanteX4[2][1]);
	DeterminanteX3[1][2] = (DeterminanteX4[1][1]*DeterminanteX4[2][3])-(DeterminanteX4[1][3]*DeterminanteX4[2][1]);
	DeterminanteX3[1][3] = (DeterminanteX4[1][1]*DeterminanteX4[2][4])-(DeterminanteX4[1][4]*DeterminanteX4[2][1]);

	DeterminanteX3[2][1] = (DeterminanteX4[1][1]*DeterminanteX4[3][2])-(DeterminanteX4[1][2]*DeterminanteX4[3][1]);
	DeterminanteX3[2][2] = (DeterminanteX4[1][1]*DeterminanteX4[3][3])-(DeterminanteX4[1][3]*DeterminanteX4[3][1]);
	DeterminanteX3[2][3] = (DeterminanteX4[1][1]*DeterminanteX4[3][4])-(DeterminanteX4[1][4]*DeterminanteX4[3][1]);

	DeterminanteX3[3][1] = (DeterminanteX4[1][1]*DeterminanteX4[4][2])-(DeterminanteX4[1][2]*DeterminanteX4[4][1]); 
	DeterminanteX3[3][2] = (DeterminanteX4[1][1]*DeterminanteX4[4][3])-(DeterminanteX4[1][3]*DeterminanteX4[4][1]);
	DeterminanteX3[3][3] = (DeterminanteX4[1][1]*DeterminanteX4[4][4])-(DeterminanteX4[1][4]*DeterminanteX4[4][1]);

	DeterminanteX2[1][1] = ((DeterminanteX3[1][1]*DeterminanteX3[2][2])-(DeterminanteX3[1][2]*DeterminanteX3[2][1]))/DeterminanteX4[1][1];
	DeterminanteX2[1][2] = ((DeterminanteX3[1][1]*DeterminanteX3[2][3])-(DeterminanteX3[1][3]*DeterminanteX3[2][1]))/DeterminanteX4[1][1];

	DeterminanteX2[2][1] = ((DeterminanteX3[1][1]*DeterminanteX3[3][2])-(DeterminanteX3[1][2]*DeterminanteX3[3][1]))/DeterminanteX4[1][1];
	DeterminanteX2[2][2] = ((DeterminanteX3[1][1]*DeterminanteX3[3][3])-(DeterminanteX3[1][3]*DeterminanteX3[3][1]))/DeterminanteX4[1][1];

	var DX4 = ((DeterminanteX2[1][1]*DeterminanteX2[2][2])-(DeterminanteX2[1][2]*DeterminanteX2[2][1]))/DeterminanteX3[1][1];
	alert(DX4/DS4);


	//Determinante de Y

	var DeterminanteY4 = new Array(5);

	for(var i=0;i<DeterminanteY4.length;i++)
	{
		DeterminanteY4[i] = new Array(5);
	}

	var DeterminanteY3 = new Array(4);

	for(var i=0;i<DeterminanteY3.length;i++)
	{
		DeterminanteY3[i] = new Array(4)
	}

	var DeterminanteY2 = new Array(3);

	for(var i=0;i<DeterminanteY2.length;i++)
	{
		DeterminanteY2[i] = new Array(3);
	}

	DeterminanteY4[1][1] = x1;
	DeterminanteY4[1][2] = c1;
	DeterminanteY4[1][3] = z1;
	DeterminanteY4[1][4] = w1;

	DeterminanteY4[2][1] = x2;
	DeterminanteY4[2][2] = c2;
	DeterminanteY4[2][3] = z2;
	DeterminanteY4[2][4] = w2;

	DeterminanteY4[3][1] = x3;
	DeterminanteY4[3][2] = c3;
	DeterminanteY4[3][3] = z3;
	DeterminanteY4[3][4] = w3;

	DeterminanteY4[4][1] = x4;
	DeterminanteY4[4][2] = c4;
	DeterminanteY4[4][3] = z4;
	DeterminanteY4[4][4] = w4;

	DeterminanteY3[1][1] = (DeterminanteY4[1][1]*DeterminanteY4[2][2])-(DeterminanteY4[1][2]*DeterminanteY4[2][1]);
	DeterminanteY3[1][2] = (DeterminanteY4[1][1]*DeterminanteY4[2][3])-(DeterminanteY4[1][3]*DeterminanteY4[2][1]);
	DeterminanteY3[1][3] = (DeterminanteY4[1][1]*DeterminanteY4[2][4])-(DeterminanteY4[1][4]*DeterminanteY4[2][1]);

	DeterminanteY3[2][1] = (DeterminanteY4[1][1]*DeterminanteY4[3][2])-(DeterminanteY4[1][2]*DeterminanteY4[3][1]);
	DeterminanteY3[2][2] = (DeterminanteY4[1][1]*DeterminanteY4[3][3])-(DeterminanteY4[1][3]*DeterminanteY4[3][1]);
	DeterminanteY3[2][3] = (DeterminanteY4[1][1]*DeterminanteY4[3][4])-(DeterminanteY4[1][4]*DeterminanteY4[3][1]);

	DeterminanteY3[3][1] = (DeterminanteY4[1][1]*DeterminanteY4[4][2])-(DeterminanteY4[1][2]*DeterminanteY4[4][1]); 
	DeterminanteY3[3][2] = (DeterminanteY4[1][1]*DeterminanteY4[4][3])-(DeterminanteY4[1][3]*DeterminanteY4[4][1]);
	DeterminanteY3[3][3] = (DeterminanteY4[1][1]*DeterminanteY4[4][4])-(DeterminanteY4[1][4]*DeterminanteY4[4][1]);

	DeterminanteY2[1][1] = ((DeterminanteY3[1][1]*DeterminanteY3[2][2])-(DeterminanteY3[1][2]*DeterminanteY3[2][1]))/DeterminanteY4[1][1];
	DeterminanteY2[1][2] = ((DeterminanteY3[1][1]*DeterminanteY3[2][3])-(DeterminanteY3[1][3]*DeterminanteY3[2][1]))/DeterminanteY4[1][1];

	DeterminanteY2[2][1] = ((DeterminanteY3[1][1]*DeterminanteY3[3][2])-(DeterminanteY3[1][2]*DeterminanteY3[3][1]))/DeterminanteY4[1][1];
	DeterminanteY2[2][2] = ((DeterminanteY3[1][1]*DeterminanteY3[3][3])-(DeterminanteY3[1][3]*DeterminanteY3[3][1]))/DeterminanteY4[1][1];

	var DY4 = ((DeterminanteY2[1][1]*DeterminanteY2[2][2])-(DeterminanteY2[1][2]*DeterminanteY2[2][1]))/DeterminanteY3[1][1];




	//Determinante de Z

	var DeterminanteZ4 = new Array(5);

	for(var i=0;i<DeterminanteZ4.length;i++)
	{
		DeterminanteZ4[i] = new Array(5);
	}

	var DeterminanteZ3 = new Array(4);

	for(var i=0;i<DeterminanteZ3.length;i++)
	{
		DeterminanteZ3[i] = new Array(4)
	}

	var DeterminanteZ2 = new Array(3);

	for(var i=0;i<DeterminanteZ2.length;i++)
	{
		DeterminanteZ2[i] = new Array(3);
	}

	DeterminanteZ4[1][1] = x1;
	DeterminanteZ4[1][2] = y1;
	DeterminanteZ4[1][3] = c1;
	DeterminanteZ4[1][4] = w1;

	DeterminanteZ4[2][1] = x2;
	DeterminanteZ4[2][2] = y2;
	DeterminanteZ4[2][3] = c2;
	DeterminanteZ4[2][4] = w2;

	DeterminanteZ4[3][1] = x3;
	DeterminanteZ4[3][2] = y3;
	DeterminanteZ4[3][3] = c3;
	DeterminanteZ4[3][4] = w3;

	DeterminanteZ4[4][1] = x4;
	DeterminanteZ4[4][2] = y4;
	DeterminanteZ4[4][3] = c4;
	DeterminanteZ4[4][4] = w4;

	DeterminanteZ3[1][1] = (DeterminanteZ4[1][1]*DeterminanteZ4[2][2])-(DeterminanteZ4[1][2]*DeterminanteZ4[2][1]);
	DeterminanteZ3[1][2] = (DeterminanteZ4[1][1]*DeterminanteZ4[2][3])-(DeterminanteZ4[1][3]*DeterminanteZ4[2][1]);
	DeterminanteZ3[1][3] = (DeterminanteZ4[1][1]*DeterminanteZ4[2][4])-(DeterminanteZ4[1][4]*DeterminanteZ4[2][1]);

	DeterminanteZ3[2][1] = (DeterminanteZ4[1][1]*DeterminanteZ4[3][2])-(DeterminanteZ4[1][2]*DeterminanteZ4[3][1]);
	DeterminanteZ3[2][2] = (DeterminanteZ4[1][1]*DeterminanteZ4[3][3])-(DeterminanteZ4[1][3]*DeterminanteZ4[3][1]);
	DeterminanteZ3[2][3] = (DeterminanteZ4[1][1]*DeterminanteZ4[3][4])-(DeterminanteZ4[1][4]*DeterminanteZ4[3][1]);

	DeterminanteZ3[3][1] = (DeterminanteZ4[1][1]*DeterminanteZ4[4][2])-(DeterminanteZ4[1][2]*DeterminanteZ4[4][1]); 
	DeterminanteZ3[3][2] = (DeterminanteZ4[1][1]*DeterminanteZ4[4][3])-(DeterminanteZ4[1][3]*DeterminanteZ4[4][1]);
	DeterminanteZ3[3][3] = (DeterminanteZ4[1][1]*DeterminanteZ4[4][4])-(DeterminanteZ4[1][4]*DeterminanteZ4[4][1]);

	DeterminanteZ2[1][1] = ((DeterminanteZ3[1][1]*DeterminanteZ3[2][2])-(DeterminanteZ3[1][2]*DeterminanteZ3[2][1]))/DeterminanteZ4[1][1];
	DeterminanteZ2[1][2] = ((DeterminanteZ3[1][1]*DeterminanteZ3[2][3])-(DeterminanteZ3[1][3]*DeterminanteZ3[2][1]))/DeterminanteZ4[1][1];

	DeterminanteZ2[2][1] = ((DeterminanteZ3[1][1]*DeterminanteZ3[3][2])-(DeterminanteZ3[1][2]*DeterminanteZ3[3][1]))/DeterminanteZ4[1][1];
	DeterminanteZ2[2][2] = ((DeterminanteZ3[1][1]*DeterminanteZ3[3][3])-(DeterminanteZ3[1][3]*DeterminanteZ3[3][1]))/DeterminanteZ4[1][1];

	var DZ4 = ((DeterminanteZ2[1][1]*DeterminanteZ2[2][2])-(DeterminanteZ2[1][2]*DeterminanteZ2[2][1]))/DeterminanteZ3[1][1];

	//Determinante de W

	var DeterminanteW4 = new Array(5);

	for(var i=0;i<DeterminanteW4.length;i++)
	{
		DeterminanteW4[i] = new Array(5);
	}

	var DeterminanteW3 = new Array(4);

	for(var i=0;i<DeterminanteW3.length;i++)
	{
		DeterminanteW3[i] = new Array(4)
	}

	var DeterminanteW2 = new Array(3);

	for(var i=0;i<DeterminanteW2.length;i++)
	{
		DeterminanteW2[i] = new Array(3);
	}

	DeterminanteW4[1][1] = x1;
	DeterminanteW4[1][2] = y1;
	DeterminanteW4[1][3] = z1;
	DeterminanteW4[1][4] = c1;

	DeterminanteW4[2][1] = x2;
	DeterminanteW4[2][2] = y2;
	DeterminanteW4[2][3] = z2;
	DeterminanteW4[2][4] = c2;

	DeterminanteW4[3][1] = x3;
	DeterminanteW4[3][2] = y3;
	DeterminanteW4[3][3] = z3;
	DeterminanteW4[3][4] = c3;

	DeterminanteW4[4][1] = x4;
	DeterminanteW4[4][2] = y4;
	DeterminanteW4[4][3] = z4;
	DeterminanteW4[4][4] = c4;

	DeterminanteW3[1][1] = (DeterminanteW4[1][1]*DeterminanteW4[2][2])-(DeterminanteW4[1][2]*DeterminanteW4[2][1]);
	DeterminanteW3[1][2] = (DeterminanteW4[1][1]*DeterminanteW4[2][3])-(DeterminanteW4[1][3]*DeterminanteW4[2][1]);
	DeterminanteW3[1][3] = (DeterminanteW4[1][1]*DeterminanteW4[2][4])-(DeterminanteW4[1][4]*DeterminanteW4[2][1]);

	DeterminanteW3[2][1] = (DeterminanteW4[1][1]*DeterminanteW4[3][2])-(DeterminanteW4[1][2]*DeterminanteW4[3][1]);
	DeterminanteW3[2][2] = (DeterminanteW4[1][1]*DeterminanteW4[3][3])-(DeterminanteW4[1][3]*DeterminanteW4[3][1]);
	DeterminanteW3[2][3] = (DeterminanteW4[1][1]*DeterminanteW4[3][4])-(DeterminanteW4[1][4]*DeterminanteW4[3][1]);

	DeterminanteW3[3][1] = (DeterminanteW4[1][1]*DeterminanteW4[4][2])-(DeterminanteW4[1][2]*DeterminanteW4[4][1]); 
	DeterminanteW3[3][2] = (DeterminanteW4[1][1]*DeterminanteW4[4][3])-(DeterminanteW4[1][3]*DeterminanteW4[4][1]);
	DeterminanteW3[3][3] = (DeterminanteW4[1][1]*DeterminanteW4[4][4])-(DeterminanteW4[1][4]*DeterminanteW4[4][1]);

	DeterminanteW2[1][1] = ((DeterminanteW3[1][1]*DeterminanteW3[2][2])-(DeterminanteW3[1][2]*DeterminanteW3[2][1]))/DeterminanteW4[1][1];
	DeterminanteW2[1][2] = ((DeterminanteW3[1][1]*DeterminanteW3[2][3])-(DeterminanteW3[1][3]*DeterminanteW3[2][1]))/DeterminanteW4[1][1];

	DeterminanteW2[2][1] = ((DeterminanteW3[1][1]*DeterminanteW3[3][2])-(DeterminanteW3[1][2]*DeterminanteW3[3][1]))/DeterminanteW4[1][1];
	DeterminanteW2[2][2] = ((DeterminanteW3[1][1]*DeterminanteW3[3][3])-(DeterminanteW3[1][3]*DeterminanteW3[3][1]))/DeterminanteW4[1][1];

	var DW4 = ((DeterminanteW2[1][1]*DeterminanteW2[2][2])-(DeterminanteW2[1][2]*DeterminanteW2[2][1]))/DeterminanteW3[1][1];


	alert("Valor de X: " + (DX4/DS4));
	alert("Valor de Y: " + (DY4/DS4));
	alert("Valor de Z: " + (DZ4/DS4));
	alert("Valor de W: " + (DW4/DS4));	


	



}

function Calculo_Cinco_Variables() {

	 x1 = document.getElementById("5x1").value;
	 y1 = document.getElementById("5y1").value;
	 z1 = document.getElementById("5z1").value;
	 w1 = document.getElementById("5w1").value;
	 v1 = document.getElementById("5v1").value;
	 c1 = document.getElementById("5c1").value;


	 x2 = document.getElementById("5x2").value;
	 y2 = document.getElementById("5y2").value;
	 z2 = document.getElementById("5z2").value;
	 w2 = document.getElementById("5w2").value;
	 v2 = document.getElementById("5v2").value;
	 c2 = document.getElementById("5c2").value;

	 x3 = document.getElementById("5x3").value;
	 y3 = document.getElementById("5y3").value;
	 z3 = document.getElementById("5z3").value;
	 w3 = document.getElementById("5w3").value;
	 v3 = document.getElementById("5v3").value;
	 c3 = document.getElementById("5c3").value;

	 x4 = document.getElementById("5x4").value;
	 y4 = document.getElementById("5y4").value;
	 z4 = document.getElementById("5z4").value;
	 w4 = document.getElementById("5w4").value;
	 v4 = document.getElementById("5v4").value;
	 c4 = document.getElementById("5c4").value;

	 x5 = document.getElementById("5x5").value;
	 y5 = document.getElementById("5y5").value;
	 z5 = document.getElementById("5z5").value;
	 w5 = document.getElementById("5w5").value;
	 v5 = document.getElementById("5v5").value;
	 c5 = document.getElementById("5c5").value;


	//Determinante del sistema

	 DeterminanteS5 = new Array(6);

	for(var i=0;i<DeterminanteS5.length;i++) {

		DeterminanteS5[i] = new Array(6);
	}

	 DeterminanteS4 = new Array(5);

	for(var i=0;i<DeterminanteS4.length;i++)
	{
		DeterminanteS4[i] = new Array(5);
	}

	 DeterminanteS3 = new Array(4);

	for(var i=0;i<DeterminanteS3.length;i++)
	{
		DeterminanteS3[i] = new Array(4)
	}

	 DeterminanteS2 = new Array(3);

	for(var i=0;i<DeterminanteS2.length;i++)
	{
		DeterminanteS2[i] = new Array(3);
	}

	DeterminanteS5[1][1] = x1;
	DeterminanteS5[1][2] = y1;
	DeterminanteS5[1][3] = z1;
	DeterminanteS5[1][4] = w1;
	DeterminanteS5[1][5] = v1;


	DeterminanteS5[2][1] = x2;
	DeterminanteS5[2][2] = y2;
	DeterminanteS5[2][3] = z2;
	DeterminanteS5[2][4] = w2;
	DeterminanteS5[2][5] = v2;

	DeterminanteS5[3][1] = x3;
	DeterminanteS5[3][2] = y3;
	DeterminanteS5[3][3] = z3;
	DeterminanteS5[3][4] = w3;
	DeterminanteS5[3][5] = v3;

	DeterminanteS5[4][1] = x4;
	DeterminanteS5[4][2] = y4;
	DeterminanteS5[4][3] = z4;
	DeterminanteS5[4][4] = w4;
	DeterminanteS5[4][5] = v4;

	DeterminanteS5[5][1] = x5;
	DeterminanteS5[5][2] = y5;
	DeterminanteS5[5][3] = z5;
	DeterminanteS5[5][4] = w5;
	DeterminanteS5[5][5] = v5;

	DeterminanteS4[1][1] = (DeterminanteS5[1][1]*DeterminanteS5[2][2])-(DeterminanteS5[1][2]*DeterminanteS5[2][1]);
	DeterminanteS4[1][2] = (DeterminanteS5[1][1]*DeterminanteS5[2][3])-(DeterminanteS5[1][3]*DeterminanteS5[2][1]);
	DeterminanteS4[1][3] = (DeterminanteS5[1][1]*DeterminanteS5[2][4])-(DeterminanteS5[1][4]*DeterminanteS5[2][1]);
	DeterminanteS4[1][4] = (DeterminanteS5[1][1]*DeterminanteS5[2][5])-(DeterminanteS5[1][5]*DeterminanteS5[2][1]);

	DeterminanteS4[2][1] = (DeterminanteS5[1][1]*DeterminanteS5[3][2])-(DeterminanteS5[1][2]*DeterminanteS5[3][1]);
	DeterminanteS4[2][2] = (DeterminanteS5[1][1]*DeterminanteS5[3][3])-(DeterminanteS5[1][3]*DeterminanteS5[3][1]);
	DeterminanteS4[2][3] = (DeterminanteS5[1][1]*DeterminanteS5[3][4])-(DeterminanteS5[1][4]*DeterminanteS5[3][1]);
	DeterminanteS4[1][4] = (DeterminanteS5[1][1]*DeterminanteS5[3][5])-(DeterminanteS5[1][5]*DeterminanteS5[3][1]);

	DeterminanteS4[3][1] = (DeterminanteS5[1][1]*DeterminanteS5[4][2])-(DeterminanteS5[1][2]*DeterminanteS5[4][1]); 
	DeterminanteS4[3][2] = (DeterminanteS5[1][1]*DeterminanteS5[4][3])-(DeterminanteS5[1][3]*DeterminanteS5[4][1]);
	DeterminanteS4[3][3] = (DeterminanteS5[1][1]*DeterminanteS5[4][4])-(DeterminanteS5[1][4]*DeterminanteS5[4][1]);
	DeterminanteS4[3][4] = (DeterminanteS5[1][1]*DeterminanteS5[4][5])-(DeterminanteS5[1][5]*DeterminanteS5[4][1]);

	DeterminanteS4[4][1] = (DeterminanteS5[1][1]*DeterminanteS5[5][2])-(DeterminanteS5[1][2]*DeterminanteS5[5][1]); 
	DeterminanteS4[4][2] = (DeterminanteS5[1][1]*DeterminanteS5[5][3])-(DeterminanteS5[1][3]*DeterminanteS5[5][1]);
	DeterminanteS4[4][3] = (DeterminanteS5[1][1]*DeterminanteS5[5][4])-(DeterminanteS5[1][4]*DeterminanteS5[5][1]);
	DeterminanteS4[4][4] = (DeterminanteS5[1][1]*DeterminanteS5[5][5])-(DeterminanteS5[1][5]*DeterminanteS5[5][1]);

	DeterminanteS3[1][1] = ((DeterminanteS4[1][1]*DeterminanteS4[2][2])-(DeterminanteS4[1][2]*DeterminanteS4[2][1]))/DeterminanteS5[1][1];
	DeterminanteS3[1][2] = ((DeterminanteS4[1][1]*DeterminanteS4[2][3])-(DeterminanteS4[1][3]*DeterminanteS4[2][1]))/DeterminanteS5[1][1];
	DeterminanteS3[1][3] = ((DeterminanteS4[1][1]*DeterminanteS4[2][4])-(DeterminanteS4[1][4]*DeterminanteS4[2][1]))/DeterminanteS5[1][1];

	DeterminanteS3[2][1] = ((DeterminanteS4[1][1]*DeterminanteS4[3][2])-(DeterminanteS4[1][2]*DeterminanteS4[3][1]))/DeterminanteS5[1][1];
	DeterminanteS3[2][2] = ((DeterminanteS4[1][1]*DeterminanteS4[3][3])-(DeterminanteS4[1][3]*DeterminanteS4[3][1]))/DeterminanteS5[1][1];
	DeterminanteS3[2][3] = ((DeterminanteS4[1][1]*DeterminanteS4[3][4])-(DeterminanteS4[1][4]*DeterminanteS4[3][1]))/DeterminanteS5[1][1];

	DeterminanteS3[3][1] = ((DeterminanteS4[1][1]*DeterminanteS4[4][2])-(DeterminanteS4[1][2]*DeterminanteS4[4][1]))/DeterminanteS5[1][1]; 
	DeterminanteS3[3][2] = ((DeterminanteS4[1][1]*DeterminanteS4[4][3])-(DeterminanteS4[1][3]*DeterminanteS4[4][1]))/DeterminanteS5[1][1];
	DeterminanteS3[3][3] = ((DeterminanteS4[1][1]*DeterminanteS4[4][4])-(DeterminanteS4[1][4]*DeterminanteS4[4][1]))/DeterminanteS5[1][1];

	DeterminanteS2[1][1] = ((DeterminanteS3[1][1]*DeterminanteS3[2][2])-(DeterminanteS3[1][2]*DeterminanteS3[2][1]))/DeterminanteS4[1][1];
	DeterminanteS2[1][2] = ((DeterminanteS3[1][1]*DeterminanteS3[2][3])-(DeterminanteS3[1][3]*DeterminanteS3[2][1]))/DeterminanteS4[1][1];

	DeterminanteS2[2][1] = ((DeterminanteS3[1][1]*DeterminanteS3[3][2])-(DeterminanteS3[1][2]*DeterminanteS3[3][1]))/DeterminanteS4[1][1];
	DeterminanteS2[2][2] = ((DeterminanteS3[1][1]*DeterminanteS3[3][3])-(DeterminanteS3[1][3]*DeterminanteS3[3][1]))/DeterminanteS4[1][1];

	 DS5 = ((DeterminanteS2[1][1]*DeterminanteS2[2][2])-(DeterminanteS2[1][2]*DeterminanteS2[2][1]))/DeterminanteS3[1][1];
	 alert(DS5);

	//Determinante del X
	
	 DeterminanteX5 = new Array(6);

	for(var i=0;i<DeterminanteX5.length;i++) {

		DeterminanteX5[i] = new Array(6);
	}

 DeterminanteX4 = new Array(5);

	for(var i=0;i<DeterminanteX4.length;i++)
	{
		DeterminanteX4[i] = new Array(5);
	}

	 DeterminanteX3 = new Array(4);

	for(var i=0;i<DeterminanteX3.length;i++)
	{
		DeterminanteX3[i] = new Array(4)
	}

	 DeterminanteX2 = new Array(3);

	for(var i=0;i<DeterminanteX2.length;i++)
	{
		DeterminanteX2[i] = new Array(3);
	}

	DeterminanteX5[1][1] = c1;
	DeterminanteX5[1][2] = y1;
	DeterminanteX5[1][3] = z1;
	DeterminanteX5[1][4] = w1;
	DeterminanteX5[1][5] = v1;


	DeterminanteX5[2][1] = c2;
	DeterminanteX5[2][2] = y2;
	DeterminanteX5[2][3] = z2;
	DeterminanteX5[2][4] = w2;
	DeterminanteX5[2][5] = v2;

	DeterminanteX5[3][1] = c3;
	DeterminanteX5[3][2] = y3;
	DeterminanteX5[3][3] = z3;
	DeterminanteX5[3][4] = w3;
	DeterminanteX5[3][5] = v3;

	DeterminanteX5[4][1] = c4;
	DeterminanteX5[4][2] = y4;
	DeterminanteX5[4][3] = z4;
	DeterminanteX5[4][4] = w4;
	DeterminanteX5[4][5] = v4;

	DeterminanteX5[5][1] = c5;
	DeterminanteX5[5][2] = y5;
	DeterminanteX5[5][3] = z5;
	DeterminanteX5[5][4] = w5;
	DeterminanteX5[5][5] = v5;

	DeterminanteX4[1][1] = (DeterminanteX5[1][1]*DeterminanteX5[2][2])-(DeterminanteX5[1][2]*DeterminanteX5[2][1]);
	DeterminanteX4[1][2] = (DeterminanteX5[1][1]*DeterminanteX5[2][3])-(DeterminanteX5[1][3]*DeterminanteX5[2][1]);
	DeterminanteX4[1][3] = (DeterminanteX5[1][1]*DeterminanteX5[2][4])-(DeterminanteX5[1][4]*DeterminanteX5[2][1]);
	DeterminanteX4[1][4] = (DeterminanteX5[1][1]*DeterminanteX5[2][5])-(DeterminanteX5[1][5]*DeterminanteX5[2][1]);

	DeterminanteX4[2][1] = (DeterminanteX5[1][1]*DeterminanteX5[3][2])-(DeterminanteX5[1][2]*DeterminanteX5[3][1]);
	DeterminanteX4[2][2] = (DeterminanteX5[1][1]*DeterminanteX5[3][3])-(DeterminanteX5[1][3]*DeterminanteX5[3][1]);
	DeterminanteX4[2][3] = (DeterminanteX5[1][1]*DeterminanteX5[3][4])-(DeterminanteX5[1][4]*DeterminanteX5[3][1]);
	DeterminanteX4[2][4] = (DeterminanteX5[1][1]*DeterminanteX5[3][5])-(DeterminanteX5[1][5]*DeterminanteX5[3][1]);

	DeterminanteX4[3][1] = (DeterminanteX5[1][1]*DeterminanteX5[4][2])-(DeterminanteX5[1][2]*DeterminanteX5[4][1]); 
	DeterminanteX4[3][2] = (DeterminanteX5[1][1]*DeterminanteX5[4][3])-(DeterminanteX5[1][3]*DeterminanteX5[4][1]);
	DeterminanteX4[3][3] = (DeterminanteX5[1][1]*DeterminanteX5[4][4])-(DeterminanteX5[1][4]*DeterminanteX5[4][1]);
	DeterminanteX4[3][4] = (DeterminanteX5[1][1]*DeterminanteX5[4][5])-(DeterminanteX5[1][5]*DeterminanteX5[4][1]);

	DeterminanteX4[4][1] = (DeterminanteX5[1][1]*DeterminanteX5[5][2])-(DeterminanteX5[1][2]*DeterminanteX5[5][1]); 
	DeterminanteX4[4][2] = (DeterminanteX5[1][1]*DeterminanteX5[5][3])-(DeterminanteX5[1][3]*DeterminanteX5[5][1]);
	DeterminanteX4[4][3] = (DeterminanteX5[1][1]*DeterminanteX5[5][4])-(DeterminanteX5[1][4]*DeterminanteX5[5][1]);
	DeterminanteX4[4][4] = (DeterminanteX5[1][1]*DeterminanteX5[5][5])-(DeterminanteX5[1][5]*DeterminanteX5[5][1]);

	DeterminanteX3[1][1] = ((DeterminanteX4[1][1]*DeterminanteX4[2][2])-(DeterminanteX4[1][2]*DeterminanteX4[2][1]))/DeterminanteX5[1][1];
	DeterminanteX3[1][2] = ((DeterminanteX4[1][1]*DeterminanteX4[2][3])-(DeterminanteX4[1][3]*DeterminanteX4[2][1]))/DeterminanteX5[1][1];
	DeterminanteX3[1][3] = ((DeterminanteX4[1][1]*DeterminanteX4[2][4])-(DeterminanteX4[1][4]*DeterminanteX4[2][1]))/DeterminanteX5[1][1];

	DeterminanteX3[2][1] = ((DeterminanteX4[1][1]*DeterminanteX4[3][2])-(DeterminanteX4[1][2]*DeterminanteX4[3][1]))/DeterminanteX5[1][1];
	DeterminanteX3[2][2] = ((DeterminanteX4[1][1]*DeterminanteX4[3][3])-(DeterminanteX4[1][3]*DeterminanteX4[3][1]))/DeterminanteX5[1][1];
	DeterminanteX3[2][3] = ((DeterminanteX4[1][1]*DeterminanteX4[3][4])-(DeterminanteX4[1][4]*DeterminanteX4[3][1]))/DeterminanteX5[1][1];

	DeterminanteX3[3][1] = ((DeterminanteX4[1][1]*DeterminanteX4[4][2])-(DeterminanteX4[1][2]*DeterminanteX4[4][1]))/DeterminanteX5[1][1]; 
	DeterminanteX3[3][2] = ((DeterminanteX4[1][1]*DeterminanteX4[4][3])-(DeterminanteX4[1][3]*DeterminanteX4[4][1]))/DeterminanteX5[1][1];
	DeterminanteX3[3][3] = ((DeterminanteX4[1][1]*DeterminanteX4[4][4])-(DeterminanteX4[1][4]*DeterminanteX4[4][1]))/DeterminanteX5[1][1];

	DeterminanteX2[1][1] = ((DeterminanteX3[1][1]*DeterminanteX3[2][2])-(DeterminanteX3[1][2]*DeterminanteX3[2][1]))/DeterminanteX4[1][1];
	DeterminanteX2[1][2] = ((DeterminanteX3[1][1]*DeterminanteX3[2][3])-(DeterminanteX3[1][3]*DeterminanteX3[2][1]))/DeterminanteX4[1][1];

	DeterminanteX2[2][1] = ((DeterminanteX3[1][1]*DeterminanteX3[3][2])-(DeterminanteX3[1][2]*DeterminanteX3[3][1]))/DeterminanteX4[1][1];
	DeterminanteX2[2][2] = ((DeterminanteX3[1][1]*DeterminanteX3[3][3])-(DeterminanteX3[1][3]*DeterminanteX3[3][1]))/DeterminanteX4[1][1];

	 DX5 = ((DeterminanteX2[1][1]*DeterminanteX2[2][2])-(DeterminanteX2[1][2]*DeterminanteX2[2][1]))/DeterminanteX3[1][1];
	 alert(DX5);




	//Determinante del y
	
	 DeterminanteY5 = new Array(6);

	for(var i=0;i<DeterminanteY5.length;i++) {

		DeterminanteY5[i] = new Array(6);
	}

	 DeterminanteY4 = new Array(5);

	for(var i=0;i<DeterminanteY4.length;i++)
	{
		DeterminanteY4[i] = new Array(5);
	}

	 DeterminanteY3 = new Array(4);

	for(var i=0;i<DeterminanteY3.length;i++)
	{
		DeterminanteY3[i] = new Array(4)
	}

	 DeterminanteY2 = new Array(3);

	for(var i=0;i<DeterminanteY2.length;i++)
	{
		DeterminanteY2[i] = new Array(3);
	}

	DeterminanteY5[1][1] = x1;
	DeterminanteY5[1][2] = c1;
	DeterminanteY5[1][3] = z1;
	DeterminanteY5[1][4] = w1;
	DeterminanteY5[1][5] = v1;


	DeterminanteY5[2][1] = x2;
	DeterminanteY5[2][2] = c2;
	DeterminanteY5[2][3] = z2;
	DeterminanteY5[2][4] = w2;
	DeterminanteY5[2][5] = v2;

	DeterminanteY5[3][1] = x3;
	DeterminanteY5[3][2] = c3;
	DeterminanteY5[3][3] = z3;
	DeterminanteY5[3][4] = w3;
	DeterminanteY5[3][5] = v3;

	DeterminanteY5[4][1] = x4;
	DeterminanteY5[4][2] = c4;
	DeterminanteY5[4][3] = z4;
	DeterminanteY5[4][4] = w4;
	DeterminanteY5[4][5] = v4;

	DeterminanteY5[5][1] = x5;
	DeterminanteY5[5][2] = c5;
	DeterminanteY5[5][3] = z5;
	DeterminanteY5[5][4] = w5;
	DeterminanteY5[5][5] = v5;

	DeterminanteY4[1][1] = (DeterminanteY5[1][1]*DeterminanteY5[2][2])-(DeterminanteY5[1][2]*DeterminanteY5[2][1]);
	DeterminanteY4[1][2] = (DeterminanteY5[1][1]*DeterminanteY5[2][3])-(DeterminanteY5[1][3]*DeterminanteY5[2][1]);
	DeterminanteY4[1][3] = (DeterminanteY5[1][1]*DeterminanteY5[2][4])-(DeterminanteY5[1][4]*DeterminanteY5[2][1]);
	DeterminanteY4[1][4] = (DeterminanteY5[1][1]*DeterminanteY5[2][5])-(DeterminanteY5[1][5]*DeterminanteY5[2][1]);

	DeterminanteY4[2][1] = (DeterminanteY5[1][1]*DeterminanteY5[3][2])-(DeterminanteY5[1][2]*DeterminanteY5[3][1]);
	DeterminanteY4[2][2] = (DeterminanteY5[1][1]*DeterminanteY5[3][3])-(DeterminanteY5[1][3]*DeterminanteY5[3][1]);
	DeterminanteY4[2][3] = (DeterminanteY5[1][1]*DeterminanteY5[3][4])-(DeterminanteY5[1][4]*DeterminanteY5[3][1]);
	DeterminanteY4[2][4] = (DeterminanteY5[1][1]*DeterminanteY5[3][5])-(DeterminanteY5[1][5]*DeterminanteY5[3][1]);

	DeterminanteY4[3][1] = (DeterminanteY5[1][1]*DeterminanteY5[4][2])-(DeterminanteY5[1][2]*DeterminanteY5[4][1]); 
	DeterminanteY4[3][2] = (DeterminanteY5[1][1]*DeterminanteY5[4][3])-(DeterminanteY5[1][3]*DeterminanteY5[4][1]);
	DeterminanteY4[3][3] = (DeterminanteY5[1][1]*DeterminanteY5[4][4])-(DeterminanteY5[1][4]*DeterminanteY5[4][1]);
	DeterminanteY4[3][4] = (DeterminanteY5[1][1]*DeterminanteY5[4][5])-(DeterminanteY5[1][5]*DeterminanteY5[4][1]);

	DeterminanteY4[4][1] = (DeterminanteY5[1][1]*DeterminanteY5[5][2])-(DeterminanteY5[1][2]*DeterminanteY5[5][1]); 
	DeterminanteY4[4][2] = (DeterminanteY5[1][1]*DeterminanteY5[5][3])-(DeterminanteY5[1][3]*DeterminanteY5[5][1]);
	DeterminanteY4[4][3] = (DeterminanteY5[1][1]*DeterminanteY5[5][4])-(DeterminanteY5[1][4]*DeterminanteY5[5][1]);
	DeterminanteY4[4][4] = (DeterminanteY5[1][1]*DeterminanteY5[5][5])-(DeterminanteY5[1][5]*DeterminanteY5[5][1]);

	DeterminanteY3[1][1] = ((DeterminanteY4[1][1]*DeterminanteY4[2][2])-(DeterminanteY4[1][2]*DeterminanteY4[2][1]))/DeterminanteY5[1][1];
	DeterminanteY3[1][2] = ((DeterminanteY4[1][1]*DeterminanteY4[2][3])-(DeterminanteY4[1][3]*DeterminanteY4[2][1]))/DeterminanteY5[1][1];
	DeterminanteY3[1][3] = ((DeterminanteY4[1][1]*DeterminanteY4[2][4])-(DeterminanteY4[1][4]*DeterminanteY4[2][1]))/DeterminanteY5[1][1];

	DeterminanteY3[2][1] = ((DeterminanteY4[1][1]*DeterminanteY4[3][2])-(DeterminanteY4[1][2]*DeterminanteY4[3][1]))/DeterminanteY5[1][1];
	DeterminanteY3[2][2] = ((DeterminanteY4[1][1]*DeterminanteY4[3][3])-(DeterminanteY4[1][3]*DeterminanteY4[3][1]))/DeterminanteY5[1][1];
	DeterminanteY3[2][3] = ((DeterminanteY4[1][1]*DeterminanteY4[3][4])-(DeterminanteY4[1][4]*DeterminanteY4[3][1]))/DeterminanteY5[1][1];

	DeterminanteY3[3][1] = ((DeterminanteY4[1][1]*DeterminanteY4[4][2])-(DeterminanteY4[1][2]*DeterminanteY4[4][1]))/DeterminanteY5[1][1]; 
	DeterminanteY3[3][2] = ((DeterminanteY4[1][1]*DeterminanteY4[4][3])-(DeterminanteY4[1][3]*DeterminanteY4[4][1]))/DeterminanteY5[1][1];
	DeterminanteY3[3][3] = ((DeterminanteY4[1][1]*DeterminanteY4[4][4])-(DeterminanteY4[1][4]*DeterminanteY4[4][1]))/DeterminanteY5[1][1];

	DeterminanteY2[1][1] = ((DeterminanteY3[1][1]*DeterminanteY3[2][2])-(DeterminanteY3[1][2]*DeterminanteY3[2][1]))/DeterminanteY4[1][1];
	DeterminanteY2[1][2] = ((DeterminanteY3[1][1]*DeterminanteY3[2][3])-(DeterminanteY3[1][3]*DeterminanteY3[2][1]))/DeterminanteY4[1][1];

	DeterminanteY2[2][1] = ((DeterminanteY3[1][1]*DeterminanteY3[3][2])-(DeterminanteY3[1][2]*DeterminanteY3[3][1]))/DeterminanteY4[1][1];
	DeterminanteY2[2][2] = ((DeterminanteY3[1][1]*DeterminanteY3[3][3])-(DeterminanteY3[1][3]*DeterminanteY3[3][1]))/DeterminanteY4[1][1];

	 DY5 = ((DeterminanteY2[1][1]*DeterminanteY2[2][2])-(DeterminanteY2[1][2]*DeterminanteY2[2][1]))/DeterminanteY3[1][1];
	 alert(DY5);




	//Determinante del Z
	
	 DeterminanteZ5 = new Array(6);

	for(var i=0;i<DeterminanteZ5.length;i++) {

		DeterminanteZ5[i] = new Array(6);
	}

	 DeterminanteZ4 = new Array(5);

	for(var i=0;i<DeterminanteZ4.length;i++)
	{
		DeterminanteZ4[i] = new Array(5);
	}

	 DeterminanteZ3 = new Array(4);

	for(var i=0;i<DeterminanteZ3.length;i++)
	{
		DeterminanteZ3[i] = new Array(4)
	}

	 DeterminanteZ2 = new Array(3);

	for(var i=0;i<DeterminanteZ2.length;i++)
	{
		DeterminanteZ2[i] = new Array(3);
	}

	DeterminanteZ5[1][1] = x1;
	DeterminanteZ5[1][2] = y1;
	DeterminanteZ5[1][3] = c1;
	DeterminanteZ5[1][4] = w1;
	DeterminanteZ5[1][5] = v1;


	DeterminanteZ5[2][1] = x2;
	DeterminanteZ5[2][2] = y2;
	DeterminanteZ5[2][3] = c2;
	DeterminanteZ5[2][4] = w2;
	DeterminanteZ5[2][5] = v2;

	DeterminanteZ5[3][1] = x3;
	DeterminanteZ5[3][2] = y3;
	DeterminanteZ5[3][3] = c3;
	DeterminanteZ5[3][4] = w3;
	DeterminanteZ5[3][5] = v3;

	DeterminanteZ5[4][1] = x4;
	DeterminanteZ5[4][2] = y4;
	DeterminanteZ5[4][3] = c4;
	DeterminanteZ5[4][4] = w4;
	DeterminanteZ5[4][5] = v4;

	DeterminanteZ5[5][1] = x5;
	DeterminanteZ5[5][2] = y5;
	DeterminanteZ5[5][3] = c5;
	DeterminanteZ5[5][4] = w5;
	DeterminanteZ5[5][5] = v5;

	DeterminanteZ4[1][1] = (DeterminanteZ5[1][1]*DeterminanteZ5[2][2])-(DeterminanteZ5[1][2]*DeterminanteZ5[2][1]);
	DeterminanteZ4[1][2] = (DeterminanteZ5[1][1]*DeterminanteZ5[2][3])-(DeterminanteZ5[1][3]*DeterminanteZ5[2][1]);
	DeterminanteZ4[1][3] = (DeterminanteZ5[1][1]*DeterminanteZ5[2][4])-(DeterminanteZ5[1][4]*DeterminanteZ5[2][1]);
	DeterminanteZ4[1][4] = (DeterminanteZ5[1][1]*DeterminanteZ5[2][5])-(DeterminanteZ5[1][5]*DeterminanteZ5[2][1]);

	DeterminanteZ4[2][1] = (DeterminanteZ5[1][1]*DeterminanteZ5[3][2])-(DeterminanteZ5[1][2]*DeterminanteZ5[3][1]);
	DeterminanteZ4[2][2] = (DeterminanteZ5[1][1]*DeterminanteZ5[3][3])-(DeterminanteZ5[1][3]*DeterminanteZ5[3][1]);
	DeterminanteZ4[2][3] = (DeterminanteZ5[1][1]*DeterminanteZ5[3][4])-(DeterminanteZ5[1][4]*DeterminanteZ5[3][1]);
	DeterminanteZ4[2][4] = (DeterminanteZ5[1][1]*DeterminanteZ5[3][5])-(DeterminanteZ5[1][5]*DeterminanteZ5[3][1]);

	DeterminanteZ4[3][1] = (DeterminanteZ5[1][1]*DeterminanteZ5[4][2])-(DeterminanteZ5[1][2]*DeterminanteZ5[4][1]); 
	DeterminanteZ4[3][2] = (DeterminanteZ5[1][1]*DeterminanteZ5[4][3])-(DeterminanteZ5[1][3]*DeterminanteZ5[4][1]);
	DeterminanteZ4[3][3] = (DeterminanteZ5[1][1]*DeterminanteZ5[4][4])-(DeterminanteZ5[1][4]*DeterminanteZ5[4][1]);
	DeterminanteZ4[3][4] = (DeterminanteZ5[1][1]*DeterminanteZ5[4][5])-(DeterminanteZ5[1][5]*DeterminanteZ5[4][1]);

	DeterminanteZ4[4][1] = (DeterminanteZ5[1][1]*DeterminanteZ5[5][2])-(DeterminanteZ5[1][2]*DeterminanteZ5[5][1]); 
	DeterminanteZ4[4][2] = (DeterminanteZ5[1][1]*DeterminanteZ5[5][3])-(DeterminanteZ5[1][3]*DeterminanteZ5[5][1]);
	DeterminanteZ4[4][3] = (DeterminanteZ5[1][1]*DeterminanteZ5[5][4])-(DeterminanteZ5[1][4]*DeterminanteZ5[5][1]);
	DeterminanteZ4[4][4] = (DeterminanteZ5[1][1]*DeterminanteZ5[5][5])-(DeterminanteZ5[1][5]*DeterminanteZ5[5][1]);

	DeterminanteZ3[1][1] = ((DeterminanteZ4[1][1]*DeterminanteZ4[2][2])-(DeterminanteZ4[1][2]*DeterminanteZ4[2][1]))/DeterminanteZ5[1][1];
	DeterminanteZ3[1][2] = ((DeterminanteZ4[1][1]*DeterminanteZ4[2][3])-(DeterminanteZ4[1][3]*DeterminanteZ4[2][1]))/DeterminanteZ5[1][1];
	DeterminanteZ3[1][3] = ((DeterminanteZ4[1][1]*DeterminanteZ4[2][4])-(DeterminanteZ4[1][4]*DeterminanteZ4[2][1]))/DeterminanteZ5[1][1];

	DeterminanteZ3[2][1] = ((DeterminanteZ4[1][1]*DeterminanteZ4[3][2])-(DeterminanteZ4[1][2]*DeterminanteZ4[3][1]))/DeterminanteZ5[1][1];
	DeterminanteZ3[2][2] = ((DeterminanteZ4[1][1]*DeterminanteZ4[3][3])-(DeterminanteZ4[1][3]*DeterminanteZ4[3][1]))/DeterminanteZ5[1][1];
	DeterminanteZ3[2][3] = ((DeterminanteZ4[1][1]*DeterminanteZ4[3][4])-(DeterminanteZ4[1][4]*DeterminanteZ4[3][1]))/DeterminanteZ5[1][1];

	DeterminanteZ3[3][1] = ((DeterminanteZ4[1][1]*DeterminanteZ4[4][2])-(DeterminanteZ4[1][2]*DeterminanteZ4[4][1]))/DeterminanteZ5[1][1]; 
	DeterminanteZ3[3][2] = ((DeterminanteZ4[1][1]*DeterminanteZ4[4][3])-(DeterminanteZ4[1][3]*DeterminanteZ4[4][1]))/DeterminanteZ5[1][1];
	DeterminanteZ3[3][3] = ((DeterminanteZ4[1][1]*DeterminanteZ4[4][4])-(DeterminanteZ4[1][4]*DeterminanteZ4[4][1]))/DeterminanteZ5[1][1];

	DeterminanteZ2[1][1] = ((DeterminanteZ3[1][1]*DeterminanteZ3[2][2])-(DeterminanteZ3[1][2]*DeterminanteZ3[2][1]))/DeterminanteZ4[1][1];
	DeterminanteZ2[1][2] = ((DeterminanteZ3[1][1]*DeterminanteZ3[2][3])-(DeterminanteZ3[1][3]*DeterminanteZ3[2][1]))/DeterminanteZ4[1][1];

	DeterminanteZ2[2][1] = ((DeterminanteZ3[1][1]*DeterminanteZ3[3][2])-(DeterminanteZ3[1][2]*DeterminanteZ3[3][1]))/DeterminanteZ4[1][1];
	DeterminanteZ2[2][2] = ((DeterminanteZ3[1][1]*DeterminanteZ3[3][3])-(DeterminanteZ3[1][3]*DeterminanteZ3[3][1]))/DeterminanteZ4[1][1];

	 DZ5 = ((DeterminanteZ2[1][1]*DeterminanteZ2[2][2])-(DeterminanteZ2[1][2]*DeterminanteZ2[2][1]))/DeterminanteZ3[1][1];
	 alert(DZ5);




	//Determinante del W
	
	 DeterminanteW5 = new Array(6);

	for(var i=0;i<DeterminanteW5.length;i++) {

		DeterminanteW5[i] = new Array(6);
	}

	 DeterminanteW4 = new Array(5);

	for(var i=0;i<DeterminanteW4.length;i++)
	{
		DeterminanteW4[i] = new Array(5);
	}

	 DeterminanteW3 = new Array(4);

	for(var i=0;i<DeterminanteW3.length;i++)
	{
		DeterminanteW3[i] = new Array(4)
	}

	 DeterminanteW2 = new Array(3);

	for(var i=0;i<DeterminanteW2.length;i++)
	{
		DeterminanteW2[i] = new Array(3);
	}

	DeterminanteW5[1][1] = x1;
	DeterminanteW5[1][2] = y1;
	DeterminanteW5[1][3] = z1;
	DeterminanteW5[1][4] = c1;
	DeterminanteW5[1][5] = v1;


	DeterminanteW5[2][1] = x2;
	DeterminanteW5[2][2] = y2;
	DeterminanteW5[2][3] = z2;
	DeterminanteW5[2][4] = c2;
	DeterminanteW5[2][5] = v2;

	DeterminanteW5[3][1] = x3;
	DeterminanteW5[3][2] = y3;
	DeterminanteW5[3][3] = z3;
	DeterminanteW5[3][4] = c3;
	DeterminanteW5[3][5] = v3;

	DeterminanteW5[4][1] = x4;
	DeterminanteW5[4][2] = y4;
	DeterminanteW5[4][3] = z4;
	DeterminanteW5[4][4] = c4;
	DeterminanteW5[4][5] = v4;

	DeterminanteW5[5][1] = x5;
	DeterminanteW5[5][2] = y5;
	DeterminanteW5[5][3] = z5;
	DeterminanteW5[5][4] = c5;
	DeterminanteW5[5][5] = v5;

	DeterminanteW4[1][1] = (DeterminanteW5[1][1]*DeterminanteW5[2][2])-(DeterminanteW5[1][2]*DeterminanteW5[2][1]);
	DeterminanteW4[1][2] = (DeterminanteW5[1][1]*DeterminanteW5[2][3])-(DeterminanteW5[1][3]*DeterminanteW5[2][1]);
	DeterminanteW4[1][3] = (DeterminanteW5[1][1]*DeterminanteW5[2][4])-(DeterminanteW5[1][4]*DeterminanteW5[2][1]);
	DeterminanteW4[1][4] = (DeterminanteW5[1][1]*DeterminanteW5[2][5])-(DeterminanteW5[1][5]*DeterminanteW5[2][1]);

	DeterminanteW4[2][1] = (DeterminanteW5[1][1]*DeterminanteW5[3][2])-(DeterminanteW5[1][2]*DeterminanteW5[3][1]);
	DeterminanteW4[2][2] = (DeterminanteW5[1][1]*DeterminanteW5[3][3])-(DeterminanteW5[1][3]*DeterminanteW5[3][1]);
	DeterminanteW4[2][3] = (DeterminanteW5[1][1]*DeterminanteW5[3][4])-(DeterminanteW5[1][4]*DeterminanteW5[3][1]);
	DeterminanteW4[2][4] = (DeterminanteW5[1][1]*DeterminanteW5[3][5])-(DeterminanteW5[1][5]*DeterminanteW5[3][1]);

	DeterminanteW4[3][1] = (DeterminanteW5[1][1]*DeterminanteW5[4][2])-(DeterminanteW5[1][2]*DeterminanteW5[4][1]); 
	DeterminanteW4[3][2] = (DeterminanteW5[1][1]*DeterminanteW5[4][3])-(DeterminanteW5[1][3]*DeterminanteW5[4][1]);
	DeterminanteW4[3][3] = (DeterminanteW5[1][1]*DeterminanteW5[4][4])-(DeterminanteW5[1][4]*DeterminanteW5[4][1]);
	DeterminanteW4[3][4] = (DeterminanteW5[1][1]*DeterminanteW5[4][5])-(DeterminanteW5[1][5]*DeterminanteW5[4][1]);

	DeterminanteW4[4][1] = (DeterminanteW5[1][1]*DeterminanteW5[5][2])-(DeterminanteW5[1][2]*DeterminanteW5[5][1]); 
	DeterminanteW4[4][2] = (DeterminanteW5[1][1]*DeterminanteW5[5][3])-(DeterminanteW5[1][3]*DeterminanteW5[5][1]);
	DeterminanteW4[4][3] = (DeterminanteW5[1][1]*DeterminanteW5[5][4])-(DeterminanteW5[1][4]*DeterminanteW5[5][1]);
	DeterminanteW4[4][4] = (DeterminanteW5[1][1]*DeterminanteW5[5][5])-(DeterminanteW5[1][5]*DeterminanteW5[5][1]);

	DeterminanteW3[1][1] = ((DeterminanteW4[1][1]*DeterminanteW4[2][2])-(DeterminanteW4[1][2]*DeterminanteW4[2][1]))/DeterminanteW5[1][1];
	DeterminanteW3[1][2] = ((DeterminanteW4[1][1]*DeterminanteW4[2][3])-(DeterminanteW4[1][3]*DeterminanteW4[2][1]))/DeterminanteW5[1][1];
	DeterminanteW3[1][3] = ((DeterminanteW4[1][1]*DeterminanteW4[2][4])-(DeterminanteW4[1][4]*DeterminanteW4[2][1]))/DeterminanteW5[1][1];

	DeterminanteW3[2][1] = ((DeterminanteW4[1][1]*DeterminanteW4[3][2])-(DeterminanteW4[1][2]*DeterminanteW4[3][1]))/DeterminanteW5[1][1];
	DeterminanteW3[2][2] = ((DeterminanteW4[1][1]*DeterminanteW4[3][3])-(DeterminanteW4[1][3]*DeterminanteW4[3][1]))/DeterminanteW5[1][1];
	DeterminanteW3[2][3] = ((DeterminanteW4[1][1]*DeterminanteW4[3][4])-(DeterminanteW4[1][4]*DeterminanteW4[3][1]))/DeterminanteW5[1][1];

	DeterminanteW3[3][1] = ((DeterminanteW4[1][1]*DeterminanteW4[4][2])-(DeterminanteW4[1][2]*DeterminanteW4[4][1]))/DeterminanteW5[1][1]; 
	DeterminanteW3[3][2] = ((DeterminanteW4[1][1]*DeterminanteW4[4][3])-(DeterminanteW4[1][3]*DeterminanteW4[4][1]))/DeterminanteW5[1][1];
	DeterminanteW3[3][3] = ((DeterminanteW4[1][1]*DeterminanteW4[4][4])-(DeterminanteW4[1][4]*DeterminanteW4[4][1]))/DeterminanteW5[1][1];

	DeterminanteW2[1][1] = ((DeterminanteW3[1][1]*DeterminanteW3[2][2])-(DeterminanteW3[1][2]*DeterminanteW3[2][1]))/DeterminanteW4[1][1];
	DeterminanteW2[1][2] = ((DeterminanteW3[1][1]*DeterminanteW3[2][3])-(DeterminanteW3[1][3]*DeterminanteW3[2][1]))/DeterminanteW4[1][1];

	DeterminanteW2[2][1] = ((DeterminanteW3[1][1]*DeterminanteW3[3][2])-(DeterminanteW3[1][2]*DeterminanteW3[3][1]))/DeterminanteW4[1][1];
	DeterminanteW2[2][2] = ((DeterminanteW3[1][1]*DeterminanteW3[3][3])-(DeterminanteW3[1][3]*DeterminanteW3[3][1]))/DeterminanteW4[1][1];

	 DW5 = ((DeterminanteW2[1][1]*DeterminanteW2[2][2])-(DeterminanteW2[1][2]*DeterminanteW2[2][1]))/DeterminanteW3[1][1];
	 alert(DW5);



	//Determinante del V
	
	 DeterminanteV5 = new Array(6);

	for(var i=0;i<DeterminanteV5.length;i++) {

		DeterminanteV5[i] = new Array(6);
	}

	 DeterminanteV4 = new Array(5);

	for(var i=0;i<DeterminanteV4.length;i++)
	{
		DeterminanteV4[i] = new Array(5);
	}

	 DeterminanteV3 = new Array(4);

	for(var i=0;i<DeterminanteV3.length;i++)
	{
		DeterminanteV3[i] = new Array(4)
	}

	 DeterminanteV2 = new Array(3);

	for(var i=0;i<DeterminanteV2.length;i++)
	{
		DeterminanteV2[i] = new Array(3);
	}

	DeterminanteV5[1][1] = x1;
	DeterminanteV5[1][2] = y1;
	DeterminanteV5[1][3] = z1;
	DeterminanteV5[1][4] = w1;
	DeterminanteV5[1][5] = c1;


	DeterminanteV5[2][1] = x2;
	DeterminanteV5[2][2] = y2;
	DeterminanteV5[2][3] = z2;
	DeterminanteV5[2][4] = w2;
	DeterminanteV5[2][5] = c2;

	DeterminanteV5[3][1] = x3;
	DeterminanteV5[3][2] = y3;
	DeterminanteV5[3][3] = z3;
	DeterminanteV5[3][4] = w3;
	DeterminanteV5[3][5] = c3;

	DeterminanteV5[4][1] = x4;
	DeterminanteV5[4][2] = y4;
	DeterminanteV5[4][3] = z4;
	DeterminanteV5[4][4] = w4;
	DeterminanteV5[4][5] = c4;

	DeterminanteV5[5][1] = x5;
	DeterminanteV5[5][2] = y5;
	DeterminanteV5[5][3] = z5;
	DeterminanteV5[5][4] = w5;
	DeterminanteV5[5][5] = c5;

	DeterminanteV4[1][1] = (DeterminanteV5[1][1]*DeterminanteV5[2][2])-(DeterminanteV5[1][2]*DeterminanteV5[2][1]);
	DeterminanteV4[1][2] = (DeterminanteV5[1][1]*DeterminanteV5[2][3])-(DeterminanteV5[1][3]*DeterminanteV5[2][1]);
	DeterminanteV4[1][3] = (DeterminanteV5[1][1]*DeterminanteV5[2][4])-(DeterminanteV5[1][4]*DeterminanteV5[2][1]);
	DeterminanteV4[1][4] = (DeterminanteV5[1][1]*DeterminanteV5[2][5])-(DeterminanteV5[1][5]*DeterminanteV5[2][1]);

	DeterminanteV4[2][1] = (DeterminanteV5[1][1]*DeterminanteV5[3][2])-(DeterminanteV5[1][2]*DeterminanteV5[3][1]);
	DeterminanteV4[2][2] = (DeterminanteV5[1][1]*DeterminanteV5[3][3])-(DeterminanteV5[1][3]*DeterminanteV5[3][1]);
	DeterminanteV4[2][3] = (DeterminanteV5[1][1]*DeterminanteV5[3][4])-(DeterminanteV5[1][4]*DeterminanteV5[3][1]);
	DeterminanteV4[2][4] = (DeterminanteV5[1][1]*DeterminanteV5[3][5])-(DeterminanteV5[1][5]*DeterminanteV5[3][1]);

	DeterminanteV4[3][1] = (DeterminanteV5[1][1]*DeterminanteV5[4][2])-(DeterminanteV5[1][2]*DeterminanteV5[4][1]); 
	DeterminanteV4[3][2] = (DeterminanteV5[1][1]*DeterminanteV5[4][3])-(DeterminanteV5[1][3]*DeterminanteV5[4][1]);
	DeterminanteV4[3][3] = (DeterminanteV5[1][1]*DeterminanteV5[4][4])-(DeterminanteV5[1][4]*DeterminanteV5[4][1]);
	DeterminanteV4[3][4] = (DeterminanteV5[1][1]*DeterminanteV5[4][5])-(DeterminanteV5[1][5]*DeterminanteV5[4][1]);

	DeterminanteV4[4][1] = (DeterminanteV5[1][1]*DeterminanteV5[5][2])-(DeterminanteV5[1][2]*DeterminanteV5[5][1]); 
	DeterminanteV4[4][2] = (DeterminanteV5[1][1]*DeterminanteV5[5][3])-(DeterminanteV5[1][3]*DeterminanteV5[5][1]);
	DeterminanteV4[4][3] = (DeterminanteV5[1][1]*DeterminanteV5[5][4])-(DeterminanteV5[1][4]*DeterminanteV5[5][1]);
	DeterminanteV4[4][4] = (DeterminanteV5[1][1]*DeterminanteV5[5][5])-(DeterminanteV5[1][5]*DeterminanteV5[5][1]);

	DeterminanteV3[1][1] = ((DeterminanteV4[1][1]*DeterminanteV4[2][2])-(DeterminanteV4[1][2]*DeterminanteV4[2][1]))/DeterminanteV5[1][1];
	DeterminanteV3[1][2] = ((DeterminanteV4[1][1]*DeterminanteV4[2][3])-(DeterminanteV4[1][3]*DeterminanteV4[2][1]))/DeterminanteV5[1][1];
	DeterminanteV3[1][3] = ((DeterminanteV4[1][1]*DeterminanteV4[2][4])-(DeterminanteV4[1][4]*DeterminanteV4[2][1]))/DeterminanteV5[1][1];

	DeterminanteV3[2][1] = ((DeterminanteV4[1][1]*DeterminanteV4[3][2])-(DeterminanteV4[1][2]*DeterminanteV4[3][1]))/DeterminanteV5[1][1];
	DeterminanteV3[2][2] = ((DeterminanteV4[1][1]*DeterminanteV4[3][3])-(DeterminanteV4[1][3]*DeterminanteV4[3][1]))/DeterminanteV5[1][1];
	DeterminanteV3[2][3] = ((DeterminanteV4[1][1]*DeterminanteV4[3][4])-(DeterminanteV4[1][4]*DeterminanteV4[3][1]))/DeterminanteV5[1][1];

	DeterminanteV3[3][1] = ((DeterminanteV4[1][1]*DeterminanteV4[4][2])-(DeterminanteV4[1][2]*DeterminanteV4[4][1]))/DeterminanteV5[1][1]; 
	DeterminanteV3[3][2] = ((DeterminanteV4[1][1]*DeterminanteV4[4][3])-(DeterminanteV4[1][3]*DeterminanteV4[4][1]))/DeterminanteV5[1][1];
	DeterminanteV3[3][3] = ((DeterminanteV4[1][1]*DeterminanteV4[4][4])-(DeterminanteV4[1][4]*DeterminanteV4[4][1]))/DeterminanteV5[1][1];

	DeterminanteV2[1][1] = ((DeterminanteV3[1][1]*DeterminanteV3[2][2])-(DeterminanteV3[1][2]*DeterminanteV3[2][1]))/DeterminanteV4[1][1];
	DeterminanteV2[1][2] = ((DeterminanteV3[1][1]*DeterminanteV3[2][3])-(DeterminanteV3[1][3]*DeterminanteV3[2][1]))/DeterminanteV4[1][1];

	DeterminanteV2[2][1] = ((DeterminanteV3[1][1]*DeterminanteV3[3][2])-(DeterminanteV3[1][2]*DeterminanteV3[3][1]))/DeterminanteV4[1][1];
	DeterminanteV2[2][2] = ((DeterminanteV3[1][1]*DeterminanteV3[3][3])-(DeterminanteV3[1][3]*DeterminanteV3[3][1]))/DeterminanteV4[1][1];

	DV5 = ((DeterminanteV2[1][1]*DeterminanteV2[2][2])-(DeterminanteV2[1][2]*DeterminanteV2[2][1]))/DeterminanteV3[1][1];
	alert(DV5);

	

	alert("Valor de X: " + (DX5/DS5));
	alert("Valor de Y: " + (DY5/DS5));
	alert("Valor de Z: " + (DZ5/DS5));
	alert("Valor de W: " + (DW5/DS5));	
	alert("Valor de V: " + (DV5/DS5));







}