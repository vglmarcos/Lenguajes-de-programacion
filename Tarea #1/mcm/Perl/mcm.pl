print "\n           .: PROGRAMA PARA HALLAR EL M.C.M:. \n";

sub main 
{
	my $mcm=1;
	my $numero=0;
	my $e=1;

	while($e)
	{
		print "\nIntroduzca el numero de elementos que desea calcular: ";
		$numero=<STDIN>;

		if($numero>=2)
		{
			print "\nEl numero es valido.\n";
			$e=0;
		}
		elsif($numero<0)
		{
			print "\nNo se admiten numeros negativos.\n";
		}
		elsif($numero==1)
		{
			print "\nNo se puede hallar el m.c.m de un elemento.\n";
		}
		elsif($numero==0 and $numero=~ /^[0-9]+$/)
		{
			print "\nNo se puede hallar el m.c.m de cero elementos.\n";
		}
		else
		{
			print "\nSolo se permiten numeros enteros.\n";
		}

	}

	my @array, @array2;
	@array2 = guardar_elementos($numero, @array);
	
	for(my $i=0; $i<$numero; $i++)
	{
		$mcm=mcm_num($mcm,$array2[$i]);
	}

	print "\nEl m.c.m es: ", $mcm, "\n\n";
	print "Programa finalizado, presione ENTER para salir :D . . .";
	<STDIN>;
}

sub guardar_elementos
{
	my($numero, @array) = @_;
	print "\nIngresa los elementos a calcular: \n";

	my $b;
	my $valor;
	for(my $i=0; $i<$numero; $i++)
	{
		$b=$b+1;
		print("\nDato numero ", $b,": ");
		$valor=<STDIN>;
		$valor=abs($valor);
		push @array, $valor;
	}
	return @array;
}

sub mcm_num
{
	my($num1, $num2) = @_;
	my $mcd;
	$mcd = mcd_num($num1, $num2);
	return ($num1*$num2/$mcd);
}

sub mcd_num
{
	my($n1, $n2) = @_;
	my $t;

	if($n1>$n2)
	{
		$t=$n1;
		$n1=$n2;
		$n2=$t;
	}

	if($n2%$n1==0)
	{
		return $n1;
	}
	else
	{
		return mcd_num($n2%$n1, $n1)
	}
}

main();