sub main {
	print "\nCalculadora de matrices\n\n";
	print "Ingrese una opcion; Sumar (s) o Multiplicar (m): ";
	my $n=<STDIN>;

	if($n eq "s\n") {
		#Suma de matrices. . .
		print "\nIntroduzca el numero de filas de sus matrices: ";
		my $filas = <STDIN>;
		print "\nIntroduzca el numero de columnas de sus matrices: ";
		my $columnas = <STDIN>;
		my @matriz1;
		my @matriz2;
		my @matriz3;

		for($i=0;$i<$filas;$i++) {
			push @matriz1, my @array1;
			push @matriz2, my @array2;
			push @matriz3, my @array3;
		}

		print "\nIngrese su primera matriz\n";
		for($i=0;$i<$filas;$i++) {
			for($j=0;$j<$columnas;$j++) {
				print "\nElemento ", "(", $i, " ,", $j, "): ";
				$matriz1[$i][$j] = <STDIN>;
			}
		}
		print "\nIngrese su segunda matriz\n";
		for($i=0;$i<$filas;$i++) {
			for($j=0;$j<$columnas;$j++) {
				print "\nElemento ", "(", $i, " ,", $j, "): ";
				$matriz2[$i][$j] = <STDIN>;
			}
		}

		for($i=0;$i<$filas;$i++) {
			for($j=0;$j<$columnas;$j++) {
				$matriz3[$i][$j] = $matriz3[$i][$j] + $matriz1[$i][$j] + $matriz2[$i][$j];
			}
		}

		print "\nSu matriz resultante es: \n\n";
		for($i=0;$i<$filas;$i++) {
			for($j=0;$j<$columnas;$j++) {
				print $matriz3[$i][$j]," ";
			}
			print "\n";
		}
		print "\nFin del programa. . . presione enter para salir.\n";
		<STDIN>;
	}
	elsif($n eq "m\n") {
		#Multiplicacion de matrices. . .
		print "\nIngresa el orden de las matrices: ";
		my $m = <STDIN>;

		my @matrizA;
		my @matrizB;
		my @matrizC;

		for($i=0;$i<$m;$i++) {
			push @matrizA, my @arrayA;
			push @matrizB, my @arrayB;
			push @matrizC, my @arrayC;
		}

		print "\nIngrese su primera matriz\n";
		for($i=0;$i<$m;$i++) {
			for($j=0;$j<$m;$j++) {
				print "\nElemento ", "(", $i, " ,", $j, "): ";
				$matrizA[$i][$j] = <STDIN>;
			}
		}

		print "\nIngrese su segunda matriz\n";
		for($i=0;$i<$m;$i++) {
			for($j=0;$j<$m;$j++) {
				print "\nElemento ", "(", $i, " ,", $j, "): ";
				$matrizB[$i][$j] = <STDIN>;
			}
		}

		for($i=0;$i<$m;$i++) {
			for($j=0;$j<$m;$j++) {
				for(my $k=0;$k<$m;$k++) {
					$matrizC[$i][$j] = $matrizC[$i][$j] + $matrizA[$i][$k] * $matrizB[$k][$j];
				}
			}
		}

		print "\nSu matriz resultante es: \n\n";
		for($i=0;$i<$m;$i++) {
			for($j=0;$j<$m;$j++) {
				print $matrizC[$i][$j]," ";
			}
			print "\n";
		}
		print "\nFin del programa. . . presione enter para salir.\n";
		<STDIN>;
	}
	else {
		print "\nIngrese las opciones validas.\n";
		main();
	}
}

main();
