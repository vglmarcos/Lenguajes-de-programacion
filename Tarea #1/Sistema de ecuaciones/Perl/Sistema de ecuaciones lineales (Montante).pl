sub main {
	print "\n.:Solucion de sistemas de ecuaciones lineales por Montante:.\n\n";
	print "Solo se pueden ingresar de 2 a 5 ecuaciones.\n";
	print "\nIngrese el numero de ecuaciones a calcular: ";
	my $n=<STDIN>;

	if ($n < 2 or $n > 5) {
		print "\nSolo se pueden ingresar sistemas de 2 a 5 ecuaciones.\n\n";
		main();
	}
	else {

		my @matriz;

		for (my $i = 0; $i < $n; $i++) {
			push @matriz, my @array;
		}

		my $filas = $n;
		my $columnas = $n + 1;

		if($n==2) {
			for (my $i = 0; $i < $filas; $i++) {
				print "\nIngrese los elementos de la ecuacion ", $i + 1,".";
				for (my $j = 0; $j < $columnas; $j++) {
					if ($j == 0) {
						print "\n\nIngrese el coeficiente de la variable X: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 1) {
						print "\nIngrese el coeficiente de la variable Y: ";
						$matriz[$i][$j] = <STDIN>;
					}
					else {
						print "\nIgual: ";
						$matriz[$i][$j] = <STDIN>;
					}
				}
			}

			#------------------------------------------------------------------------------------

			$matriz[1][1] = ($matriz[0][0] * $matriz[1][1] - $matriz[1][0] * $matriz[0][1]) / 1;
			$matriz[1][2] = ($matriz[0][0] * $matriz[1][2] - $matriz[1][0] * $matriz[0][2]) / 1;
			$matriz[1][0] = 0;
			my $p_a = $matriz[0][0];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = ($matriz[1][1] * $matriz[0][0] - $matriz[1][0] * $matriz[0][1]) / $p_a;
			$matriz[0][2] = ($matriz[1][1] * $matriz[0][2] - $matriz[0][1] * $matriz[1][2]) / $p_a;
			$matriz[0][1] = 0;

			#------------------------------------------------------------------------------------

			my $x = $matriz[0][2] / $matriz[0][0];
			my $y = $matriz[1][2] / $matriz[1][1];

			print "\n\n";

			for (my $i = 0; $i < $filas; $i++) {
				for (my $j = 0; $j < $columnas; $j++) {
					print $matriz[$i][$j], "  ",
				}
				print "\n",
			}

			print "\n";

			print "X = ", $x, "\n";
			print "Y = ", $y, "\n";
		}
		elsif($n==3) {
			for (my $i = 0; $i < $filas; $i++) {
				print "\nIngrese los elementos de la ecuacion ", $i + 1,".";
				for (my $j = 0; $j < $columnas; $j++) {
					if ($j == 0) {
						print "\n\nIngrese el coeficiente de la variable X: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 1) {
						print "\nIngrese el coeficiente de la variable Y: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 2) {
						print "\nIngrese el coeficiente de la variable Z: ";
						$matriz[$i][$j] = <STDIN>;
					}
					else {
						print "\nIgual: ";
						$matriz[$i][$j] = <STDIN>;
					}
				}
			}

			#------------------------------------------------------------------------------------

			$matriz[1][1] = ($matriz[0][0] * $matriz[1][1] - $matriz[0][1] * $matriz[1][0]) / 1;
			$matriz[1][2] = ($matriz[0][0] * $matriz[1][2] - $matriz[0][2] * $matriz[1][0]) / 1;
			$matriz[1][3] = ($matriz[0][0] * $matriz[1][3] - $matriz[0][3] * $matriz[1][0]) / 1;
			$matriz[2][1] = ($matriz[0][0] * $matriz[2][1] - $matriz[0][1] * $matriz[2][0]) / 1;
			$matriz[2][2] = ($matriz[0][0] * $matriz[2][2] - $matriz[0][2] * $matriz[2][0]) / 1;
			$matriz[2][3] = ($matriz[0][0] * $matriz[2][3] - $matriz[0][3] * $matriz[2][0]) / 1;

			$matriz[1][0] = 0;
			$matriz[2][0] = 0;
			my $p_a = $matriz[0][0];

			#--------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[1][1];
			$matriz[0][2] = ($matriz[1][1] * $matriz[0][2] - $matriz[0][1] * $matriz[1][2]) / $p_a;
			$matriz[0][3] = ($matriz[1][1] * $matriz[0][3] - $matriz[0][1] * $matriz[1][3]) / $p_a;
			$matriz[2][2] = ($matriz[1][1] * $matriz[2][2] - $matriz[2][1] * $matriz[1][2]) / $p_a;
			$matriz[2][3] = ($matriz[1][1] * $matriz[2][3] - $matriz[2][1] * $matriz[1][3]) / $p_a;
			$matriz[0][1] = 0;
			$matriz[2][1] = 0;
			$p_a = $matriz[1][1];

			#--------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[2][2];
			$matriz[1][1] = $matriz[2][2];
			$matriz[0][3] = ($matriz[2][2] * $matriz[0][3] - $matriz[0][2] * $matriz[2][3]) / $p_a;
			$matriz[1][3] = ($matriz[2][2] * $matriz[1][3] - $matriz[1][2] * $matriz[2][3]) / $p_a;
			$matriz[0][2] = 0;
			$matriz[1][2] = 0;

			#--------------------------------------------------------------------------------------

			my $x = $matriz[0][3] / $matriz[0][0];
			my $y = $matriz[1][3] / $matriz[1][1];
			my $z = $matriz[2][3] / $matriz[2][2];

			#--------------------------------------------------------------------------------------

			print "\n\n";

			for (my $i = 0; $i < $filas; $i++) {
				for (my $j = 0; $j < $columnas; $j++) {
					print $matriz[$i][$j], "  ",
				}
				print "\n",
			}

			print "\n";

			print "X = ", $x, "\n";
			print "Y = ", $y, "\n";
			print "Z = ", $z, "\n";	
		}
		elsif($n==4) {
			for (my $i = 0; $i < $filas; $i++) {
				print "\nIngrese los elementos de la ecuacion ", $i + 1,".";
				for (my $j = 0; $j < $columnas; $j++) {
					if ($j == 0) {
						print "\n\nIngrese el coeficiente de la variable W: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 1) {
						print "\nIngrese el coeficiente de la variable X: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 2) {
						print "\nIngrese el coeficiente de la variable Y: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 3) {
						print "\nIngrese el coeficiente de la variable Z: ";
						$matriz[$i][$j] = <STDIN>;
					}
					else {
						print "\nIgual: ";
						$matriz[$i][$j] = <STDIN>;
					}
				}
			}

			#------------------------------------------------------------------------------------

			$matriz[1][1] = ($matriz[0][0] * $matriz[1][1] - $matriz[0][1] * $matriz[1][0]) / 1;
			$matriz[1][2] = ($matriz[0][0] * $matriz[1][2] - $matriz[0][2] * $matriz[1][0]) / 1;
			$matriz[1][3] = ($matriz[0][0] * $matriz[1][3] - $matriz[0][3] * $matriz[1][0]) / 1;
			$matriz[1][4] = ($matriz[0][0] * $matriz[1][4] - $matriz[0][4] * $matriz[1][0]) / 1;
			$matriz[2][1] = ($matriz[0][0] * $matriz[2][1] - $matriz[0][1] * $matriz[2][0]) / 1;
			$matriz[2][2] = ($matriz[0][0] * $matriz[2][2] - $matriz[0][2] * $matriz[2][0]) / 1;
			$matriz[2][3] = ($matriz[0][0] * $matriz[2][3] - $matriz[0][3] * $matriz[2][0]) / 1;
			$matriz[2][4] = ($matriz[0][0] * $matriz[2][4] - $matriz[0][4] * $matriz[2][0]) / 1;
			$matriz[3][1] = ($matriz[0][0] * $matriz[3][1] - $matriz[0][1] * $matriz[3][0]) / 1;
			$matriz[3][2] = ($matriz[0][0] * $matriz[3][2] - $matriz[0][2] * $matriz[3][0]) / 1;
			$matriz[3][3] = ($matriz[0][0] * $matriz[3][3] - $matriz[0][3] * $matriz[3][0]) / 1;
			$matriz[3][4] = ($matriz[0][0] * $matriz[3][4] - $matriz[0][4] * $matriz[3][0]) / 1;
			$matriz[1][0] = 0;
			$matriz[2][0] = 0;
			$matriz[3][0] = 0;
			my $p_a = $matriz[0][0];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[1][1];
			$matriz[0][2] = ($matriz[1][1] * $matriz[0][2] - $matriz[0][1] * $matriz[1][2]) / $p_a;
			$matriz[0][3] = ($matriz[1][1] * $matriz[0][3] - $matriz[0][1] * $matriz[1][3]) / $p_a;
			$matriz[0][4] = ($matriz[1][1] * $matriz[0][4] - $matriz[0][1] * $matriz[1][4]) / $p_a;
			$matriz[2][2] = ($matriz[1][1] * $matriz[2][2] - $matriz[1][2] * $matriz[2][1]) / $p_a;
			$matriz[2][3] = ($matriz[1][1] * $matriz[2][3] - $matriz[1][3] * $matriz[2][1]) / $p_a;
			$matriz[2][4] = ($matriz[1][1] * $matriz[2][4] - $matriz[1][4] * $matriz[2][1]) / $p_a;
			$matriz[3][2] = ($matriz[1][1] * $matriz[3][2] - $matriz[1][2] * $matriz[3][1]) / $p_a;
			$matriz[3][3] = ($matriz[1][1] * $matriz[3][3] - $matriz[1][3] * $matriz[3][1]) / $p_a;
			$matriz[3][4] = ($matriz[1][1] * $matriz[3][4] - $matriz[1][4] * $matriz[3][1]) / $p_a;
			$matriz[0][1] = 0;
			$matriz[2][1] = 0;
			$matriz[3][1] = 0;
			$p_a = $matriz[1][1];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[2][2];
			$matriz[1][1] = $matriz[2][2];
			$matriz[0][3] = ($matriz[2][2] * $matriz[0][3] - $matriz[0][2] * $matriz[2][3]) / $p_a;
			$matriz[0][4] = ($matriz[2][2] * $matriz[0][4] - $matriz[0][2] * $matriz[2][4]) / $p_a;
			$matriz[1][3] = ($matriz[2][2] * $matriz[1][3] - $matriz[1][2] * $matriz[2][3]) / $p_a;
			$matriz[1][4] = ($matriz[2][2] * $matriz[1][4] - $matriz[1][2] * $matriz[2][4]) / $p_a;
			$matriz[3][3] = ($matriz[2][2] * $matriz[3][3] - $matriz[3][2] * $matriz[2][3]) / $p_a;
			$matriz[3][4] = ($matriz[2][2] * $matriz[3][4] - $matriz[3][2] * $matriz[2][4]) / $p_a;
			$matriz[0][2] = 0;
			$matriz[1][2] = 0;
			$matriz[3][2] = 0;
			$p_a = $matriz[2][2];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[3][3];
			$matriz[1][1] = $matriz[3][3];
			$matriz[2][2] = $matriz[3][3];
			$matriz[0][4] = ($matriz[3][3] * $matriz[0][4] - $matriz[0][3] * $matriz[3][4]) / $p_a;
			$matriz[1][4] = ($matriz[3][3] * $matriz[1][4] - $matriz[1][3] * $matriz[3][4]) / $p_a;
			$matriz[2][4] = ($matriz[3][3] * $matriz[2][4] - $matriz[2][3] * $matriz[3][4]) / $p_a;
			$matriz[2][3] = 0;
			$matriz[1][3] = 0;
			$matriz[0][3] = 0;

			#------------------------------------------------------------------------------------

			my $w = $matriz[0][4] / $matriz[0][0];
			my $x = $matriz[1][4] / $matriz[1][1];
			my $y = $matriz[2][4] / $matriz[2][2];
			my $z = $matriz[3][4] / $matriz[3][3];

			#------------------------------------------------------------------------------------

			print "\n\n";

			for (my $i = 0; $i < $filas; $i++) {
				for (my $j = 0; $j < $columnas; $j++) {
					print $matriz[$i][$j], "  ",
				}
				print "\n",
			}

			print "\n";

			print "W = ", $w, "\n";
			print "X = ", $x, "\n";
			print "Y = ", $y, "\n";
			print "Z = ", $z, "\n";
		}
		elsif($n==5) {
			for (my $i = 0; $i < $filas; $i++) {
				print "\nIngrese los elementos de la ecuacion ", $i + 1,".";
				for (my $j = 0; $j < $columnas; $j++) {
					if ($j == 0) {
						print "\n\nIngrese el coeficiente de la variable V: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 1) {
						print "\nIngrese el coeficiente de la variable W: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 2) {
						print "\nIngrese el coeficiente de la variable X: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 3) {
						print "\nIngrese el coeficiente de la variable Y: ";
						$matriz[$i][$j] = <STDIN>;
					}
					elsif ($j == 4) {
						print "\nIngrese el coeficiente de la variable Z: ";
						$matriz[$i][$j] = <STDIN>;
					}
					else {
						print "\nIgual: ";
						$matriz[$i][$j] = <STDIN>;
					}
				}
			}

			#------------------------------------------------------------------------------------

			$matriz[1][1] = ($matriz[0][0] * $matriz[1][1] - $matriz[0][1] * $matriz[1][0]) / 1;
			$matriz[1][2] = ($matriz[0][0] * $matriz[1][2] - $matriz[0][2] * $matriz[1][0]) / 1;
			$matriz[1][3] = ($matriz[0][0] * $matriz[1][3] - $matriz[0][3] * $matriz[1][0]) / 1;
			$matriz[1][4] = ($matriz[0][0] * $matriz[1][4] - $matriz[0][4] * $matriz[1][0]) / 1;
			$matriz[1][5] = ($matriz[0][0] * $matriz[1][5] - $matriz[0][5] * $matriz[1][0]) / 1;
			$matriz[2][1] = ($matriz[0][0] * $matriz[2][1] - $matriz[0][1] * $matriz[2][0]) / 1;
			$matriz[2][2] = ($matriz[0][0] * $matriz[2][2] - $matriz[0][2] * $matriz[2][0]) / 1;
			$matriz[2][3] = ($matriz[0][0] * $matriz[2][3] - $matriz[0][3] * $matriz[2][0]) / 1;
			$matriz[2][4] = ($matriz[0][0] * $matriz[2][4] - $matriz[0][4] * $matriz[2][0]) / 1;
			$matriz[2][5] = ($matriz[0][0] * $matriz[2][5] - $matriz[0][5] * $matriz[2][0]) / 1;
			$matriz[3][1] = ($matriz[0][0] * $matriz[3][1] - $matriz[0][1] * $matriz[3][0]) / 1;
			$matriz[3][2] = ($matriz[0][0] * $matriz[3][2] - $matriz[0][2] * $matriz[3][0]) / 1;
			$matriz[3][3] = ($matriz[0][0] * $matriz[3][3] - $matriz[0][3] * $matriz[3][0]) / 1;
			$matriz[3][4] = ($matriz[0][0] * $matriz[3][4] - $matriz[0][4] * $matriz[3][0]) / 1;
			$matriz[3][5] = ($matriz[0][0] * $matriz[3][5] - $matriz[0][5] * $matriz[3][0]) / 1;
			$matriz[4][1] = ($matriz[0][0] * $matriz[4][1] - $matriz[0][1] * $matriz[4][0]) / 1;
			$matriz[4][2] = ($matriz[0][0] * $matriz[4][2] - $matriz[0][2] * $matriz[4][0]) / 1;
			$matriz[4][3] = ($matriz[0][0] * $matriz[4][3] - $matriz[0][3] * $matriz[4][0]) / 1;
			$matriz[4][4] = ($matriz[0][0] * $matriz[4][4] - $matriz[0][4] * $matriz[4][0]) / 1;
			$matriz[4][5] = ($matriz[0][0] * $matriz[4][5] - $matriz[0][5] * $matriz[4][0]) / 1;
			$matriz[1][0] = 0;
			$matriz[2][0] = 0;
			$matriz[3][0] = 0;
			$matriz[4][0] = 0;
			my $p_a = $matriz[0][0];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[1][1];
			$matriz[0][2] = ($matriz[1][1] * $matriz[0][2] - $matriz[0][1] * $matriz[1][2]) / $p_a;
			$matriz[0][3] = ($matriz[1][1] * $matriz[0][3] - $matriz[0][1] * $matriz[1][3]) / $p_a;
			$matriz[0][4] = ($matriz[1][1] * $matriz[0][4] - $matriz[0][1] * $matriz[1][4]) / $p_a;
			$matriz[0][5] = ($matriz[1][1] * $matriz[0][5] - $matriz[0][1] * $matriz[1][5]) / $p_a;
			$matriz[2][2] = ($matriz[1][1] * $matriz[2][2] - $matriz[2][1] * $matriz[1][2]) / $p_a;
			$matriz[2][3] = ($matriz[1][1] * $matriz[2][3] - $matriz[2][1] * $matriz[1][3]) / $p_a;
			$matriz[2][4] = ($matriz[1][1] * $matriz[2][4] - $matriz[2][1] * $matriz[1][4]) / $p_a;
			$matriz[2][5] = ($matriz[1][1] * $matriz[2][5] - $matriz[2][1] * $matriz[1][5]) / $p_a;
			$matriz[3][2] = ($matriz[1][1] * $matriz[3][2] - $matriz[3][1] * $matriz[1][2]) / $p_a;
			$matriz[3][3] = ($matriz[1][1] * $matriz[3][3] - $matriz[3][1] * $matriz[1][3]) / $p_a;
			$matriz[3][4] = ($matriz[1][1] * $matriz[3][4] - $matriz[3][1] * $matriz[1][4]) / $p_a;
			$matriz[3][5] = ($matriz[1][1] * $matriz[3][5] - $matriz[3][1] * $matriz[1][5]) / $p_a;
			$matriz[4][2] = ($matriz[1][1] * $matriz[4][2] - $matriz[4][1] * $matriz[1][2]) / $p_a;
			$matriz[4][3] = ($matriz[1][1] * $matriz[4][3] - $matriz[4][1] * $matriz[1][3]) / $p_a;
			$matriz[4][4] = ($matriz[1][1] * $matriz[4][4] - $matriz[4][1] * $matriz[1][4]) / $p_a;
			$matriz[4][5] = ($matriz[1][1] * $matriz[4][5] - $matriz[4][1] * $matriz[1][5]) / $p_a;
			$matriz[0][1] = 0;
			$matriz[2][1] = 0;
			$matriz[3][1] = 0;
			$matriz[4][1] = 0;
			$p_a = $matriz[1][1];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[2][2];
			$matriz[1][1] = $matriz[2][2];
			$matriz[0][3] = ($matriz[2][2] * $matriz[0][3] - $matriz[2][3] * $matriz[0][2]) / $p_a;
			$matriz[0][4] = ($matriz[2][2] * $matriz[0][4] - $matriz[2][4] * $matriz[0][2]) / $p_a;
			$matriz[0][5] = ($matriz[2][2] * $matriz[0][5] - $matriz[2][5] * $matriz[0][2]) / $p_a;
			$matriz[1][3] = ($matriz[2][2] * $matriz[1][3] - $matriz[2][3] * $matriz[1][2]) / $p_a;
			$matriz[1][4] = ($matriz[2][2] * $matriz[1][4] - $matriz[2][4] * $matriz[1][2]) / $p_a;
			$matriz[1][5] = ($matriz[2][2] * $matriz[1][5] - $matriz[2][5] * $matriz[1][2]) / $p_a;
			$matriz[3][3] = ($matriz[2][2] * $matriz[3][3] - $matriz[2][3] * $matriz[3][2]) / $p_a;
			$matriz[3][4] = ($matriz[2][2] * $matriz[3][4] - $matriz[2][4] * $matriz[3][2]) / $p_a;
			$matriz[3][5] = ($matriz[2][2] * $matriz[3][5] - $matriz[2][5] * $matriz[3][2]) / $p_a;
			$matriz[4][3] = ($matriz[2][2] * $matriz[4][3] - $matriz[2][3] * $matriz[4][2]) / $p_a;
			$matriz[4][4] = ($matriz[2][2] * $matriz[4][4] - $matriz[2][4] * $matriz[4][2]) / $p_a;
			$matriz[4][5] = ($matriz[2][2] * $matriz[4][5] - $matriz[2][5] * $matriz[4][2]) / $p_a;
			$matriz[0][2] = 0;
			$matriz[1][2] = 0;
			$matriz[3][2] = 0;
			$matriz[4][2] = 0;
			$p_a = $matriz[2][2];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[3][3];
			$matriz[1][1] = $matriz[3][3];
			$matriz[2][2] = $matriz[3][3];
			$matriz[0][4] = ($matriz[3][3] * $matriz[0][4] - $matriz[3][4] * $matriz[0][3]) / $p_a;
			$matriz[0][5] = ($matriz[3][3] * $matriz[0][5] - $matriz[3][5] * $matriz[0][3]) / $p_a;
			$matriz[1][4] = ($matriz[3][3] * $matriz[1][4] - $matriz[3][4] * $matriz[1][3]) / $p_a;
			$matriz[1][5] = ($matriz[3][3] * $matriz[1][5] - $matriz[3][5] * $matriz[1][3]) / $p_a;
			$matriz[2][4] = ($matriz[3][3] * $matriz[2][4] - $matriz[3][4] * $matriz[2][3]) / $p_a;
			$matriz[2][5] = ($matriz[3][3] * $matriz[2][5] - $matriz[3][5] * $matriz[2][3]) / $p_a;
			$matriz[4][4] = ($matriz[3][3] * $matriz[4][4] - $matriz[3][4] * $matriz[4][3]) / $p_a;
			$matriz[4][5] = ($matriz[3][3] * $matriz[4][5] - $matriz[3][5] * $matriz[4][3]) / $p_a;
			$matriz[0][3] = 0;
			$matriz[1][3] = 0;
			$matriz[2][3] = 0;
			$matriz[4][3] = 0;
			$p_a = $matriz[3][3];

			#------------------------------------------------------------------------------------

			$matriz[0][0] = $matriz[4][4];
			$matriz[1][1] = $matriz[4][4];
			$matriz[2][2] = $matriz[4][4];
			$matriz[3][3] = $matriz[4][4];
			$matriz[0][5] = ($matriz[4][4] * $matriz[0][5] - $matriz[0][4] * $matriz[4][5]) / $p_a;
			$matriz[1][5] = ($matriz[4][4] * $matriz[1][5] - $matriz[1][4] * $matriz[4][5]) / $p_a;
			$matriz[2][5] = ($matriz[4][4] * $matriz[2][5] - $matriz[2][4] * $matriz[4][5]) / $p_a;
			$matriz[3][5] = ($matriz[4][4] * $matriz[3][5] - $matriz[3][4] * $matriz[4][5]) / $p_a;
			$matriz[0][4] = 0;
			$matriz[1][4] = 0;
			$matriz[2][4] = 0;
			$matriz[3][4] = 0;

			#------------------------------------------------------------------------------------

			my $v = $matriz[0][5] / $matriz[0][0];
			my $w = $matriz[1][5] / $matriz[1][1];
			my $x = $matriz[2][5] / $matriz[2][2];
			my $y = $matriz[3][5] / $matriz[3][3];
			my $z = $matriz[4][5] / $matriz[4][4];

			#------------------------------------------------------------------------------------

			print "\n\n";

			for (my $i = 0; $i < $filas; $i++) {
				for (my $j = 0; $j < $columnas; $j++) {
					print $matriz[$i][$j], "  ",
				}
				print "\n",
			}

			print "\n";

			print "V = ", $v, "\n";
			print "W = ", $w, "\n";
			print "X = ", $x, "\n";
			print "Y = ", $y, "\n";
			print "Z = ", $z, "\n";
		}
		print "\n\nFin del programa, presione ENTER para continuar . . . \n";
		<STDIN>;
	}
}

main();