program lel
  !Comentario
  implicit none
  integer :: n, x
  write(*, 2)
  2 format('Ingrese un numero: ', $)
  read *, n
  write(*, 20)
  20 format('El numero ingresado fue: ', $)
  x = n * 2
  !print *, "El numero ingresado fue: ", x
  write(*, *) x
end program lel
