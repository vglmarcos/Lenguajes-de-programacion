use Scalar::Util qw(looks_like_number);

print "De: Celsius= 1    Fahrenheit = 2    Kelvin = 3    Rankine= 4\n";
print "Escala ";
$E1 = <>;
print "Ingrese su temperatura: ";
$T = <>;
print "A: Celsius= 1    Fahrenheit = 2    Kelvin = 3    Rankine= 4\n";
print "Escala ";
$E2 = <>;

if($E1==1 & $E2==2)
{
	$CaF = $T * 1.8 + 32;
	print "Su temperatura es:" . $CaF . " F";
}
elsif($E1==1 & $E2==3)
{
	$CaK = $T + 273.13;
	print "Su temperatura es: " . $CaK . " K";
}
elsif($E1==1 & $E2==4)
{
	$CaR= $T * 1.8 + 491.67;
	print "Su temperatura es: " . $CaR . " Ran";
}
elsif($E1==2 & $E2==1)
{
	$FaC = (5*($T - 32))/9;
	print "Su temperatura es: " . $FaC . " C";
}
elsif($E1==2 & $E2==3)
{
	$FaK = (($T + 459.67)*5)/9;
	print "Su temperatura es: " . $FaK . " K";
}
elsif($E1==2 & $E2==4)
{
	$FaR= $T + 459.67;
	print "Su temperatura es: " . $FaR . "Ran";
}
elsif($E1==3 & $E2==1)
{
	$KaC = $T - 273.15;
	print "Su temperatura es: " + $KaC + " C";
}
elsif($E1==3 & $E2==2)
{
	$KaF = ((9*($T-273.15))/5)+32;
	print "Su temperatura es: " . $KaF . " F";
}
elsif(%E1==3 & $E2==4)
{
	$KaR=(($T-273.15)*1.8) + 491.67;
	print "Su temperatura es: " . $KaR . " Ran";
}
elsif($E1==4 & $E2==1)
{
	$RaC=(5*($T-491.67))/9;
	print "Su temperatura es: " . $RaC . " C";
}
elsif($E1==4 & $E2==2)
{
	$RaF=$T - 459.67;
	print "Su temperatura es: " . $RaF . " F";
}
elsif($E1==4 & $E2==3)
{
	$RaK=((5*($T-491.67))/9)+273.15;
	print "Su temperatura es: " . $RaK . " K";
}