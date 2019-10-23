program variables
  
  implicit none

  integer :: i
  
  type :: atom
     character(len = 2) :: L
     real :: x, y, z
  end type atom

  type(atom), dimension(3) :: molecula

  do i = 1, 3
     write(*, 4)
     4 format("Ingrese un atomo: ", $)
     read *, molecula(i)%L
     write(*, 5)
     5 format("Ingrese su numero atomico: ", $)
     read *, molecula(i)%x
     write(*, *) " "
  end do
  
  
  !molecula(1)%L = "H"
  !molecula(1)%x = 1

  !molecula(2)%L = "Na"
  !molecula(2)%x = 2

  !Loop para imprimir
  
  do i = 1, 3
    write(*, 2)
    2 format("Atomo: ", $)
    write(*, *) molecula(i)%L
    write(*, 3)
    3 format("Numero atomico: ", $)
    write(*, *) molecula(i)%x
    write(*, *) " "
  end do
  
  end program variables
