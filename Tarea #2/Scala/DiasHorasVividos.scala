import scala.io.StdIn._
import java.text.DateFormat._
import java.util.Calendar
import java.util.TimeZone._
import java.util.{Date, TimeZone}
import scala.collection._
import collection.JavaConversions._
import java.time._


object DiasHorasVividos extends App{
  
  
   //Hora de mi pais
  
  val actual = Calendar.getInstance()
  val Año_actual = (actual.get(Calendar.YEAR))
  val Mes_actual = (actual.get(Calendar.MONTH)) + 1
  val Dia_actual = (actual.get(Calendar.DAY_OF_MONTH))
  val Hora_actual = (actual.get(Calendar.HOUR_OF_DAY)).toInt
  val Minuto_actual = (actual.get(Calendar.MINUTE)).toInt
  
  
  println("Ingrese una opcion")
  println("1- Calcular hasta fecha actual")
  println("2- Calcular hasta fecha actual por lugar")
  val O = readInt()
  
  if(O == 1)
  {
    
    //Calculo por Fecha
    
    println("Ingrese el dia de su nacimiento: ")
    val diaN = readInt()
    print("Ingrese el mes de su nacimiento: ")
    val mesN = readInt()
    print("Ingrese el año de su nacimiento: ")
    val yearN = readInt()
    
    //Calculo
    printf("\n-------------Datos-------------")
    printf("\nFecha de nacimiento: %d-%d-%d", diaN, mesN, yearN)
    printf("\nFecha actual: %d-%d-%d", Dia_actual, Mes_actual, Año_actual)
    
     var diasy = 0 //dias de los years transcurridos.
    for (i <- 1 to (Año_actual - yearN)) {
      if(i % 4 == 0) {
        diasy += 366
      }
      else {
        diasy += 365
      }
    }
    //dias de los meses transcurridos en el ultimo year
    var diasm = 0 
    for (i <- 1 to Mes_actual) {
      if (i == 1) { //Enero
        diasm += 31
      }
      else if (i == 2) { //Febrero
        if ((Año_actual - yearN) % 4 == 0) {
          diasm += 29
        }
        else {
          diasm += 28
        }
      }
      else if (i == 3) { //Marzo
        diasm += 31
      }
      else if (i == 4) { //Abril
        diasm += 30
      }
      else if (i == 5) { //Mayo
        diasm += 31
      }
      else if (i == 6) { //Junio
        diasm += 30
      }
      else if (i == 7) { //Julio
        diasm += 31
      }
      else if (i == 8) { //Agosto
        diasm += 31
      }
      else if (i == 9) { //Septiembre
        diasm += 30
      }
      else if (i == 10) { //Octubre
        diasm += 31
      }
      else if (i == 11) { //Noviembre
        diasm += 30
      }
      else { //Diciembre
        diasm += 31
      }
    }
    //Ponemos el 1 de enero como absoluto
    var diferencia = 0
    for (i <- 1 to mesN) {
      if (i == 1) { //Enero
        diferencia += 31
      }
      else if (i == 2) { //Febrero
        if (yearN % 4 == 0) {
          diferencia += 29
        }
        else {
          diferencia += 28
        }
      }
      else if (i == 3) { //Marzo
        diferencia += 31
      }
      else if (i == 4) { //Abril
        diferencia += 30
      }
      else if (i == 5) { //Mayo
        diferencia += 31
      }
      else if (i == 6) { //Junio
        diferencia += 30
      }
      else if (i == 7) { //Julio
        diferencia += 31
      }
      else if (i == 8) { //Agosto
        diferencia += 31
      }
      else if (i == 9) { //Septiembre
        diferencia += 30
      }
      else if (i == 10) { //Octubre
        diferencia += 31
      }
      else if (i == 11) { //Noviembre
        diferencia += 30
      }
      else { //Diciembre
        diferencia += 31
      }
    }
    diferencia = diferencia + diaN - 1
    //-----------------------------------------------
    
   
    val dias_transcurridos = diasy + diasm + Dia_actual - diferencia
    val horasTranscurridas = (dias_transcurridos * 24) //- horasActuales que sacaremos con Time
    printf("\nDias transcurridos: %d", dias_transcurridos)
    printf("\nHoras Totales: %d" , horasTranscurridas)
    
    
    
    
  
 
  }
  else if(O == 2)
  {
 
////-------------------APARTADO B-------------------------///
   
  
  
  //Hora del otro pais
  
  val Hora = Calendar.getInstance(TimeZone.getTimeZone("GMT"))
  
  val TZA = TimeZone.getAvailableIDs.map(TimeZone.getTimeZone(_).toZoneId)
  val TZAlen = TZA.length
  
  for(a <- TZA) println(TZA.indexOf(a) + "-" + a)
  
  print("\n\nIndique la clave de la zona horaria donde nacio: ")
  val Clave = readInt()
  
  Hora.setTimeZone(TimeZone.getTimeZone(TZA(Clave)))
 
  val Dia_en_pais = (Hora.get(Calendar.DAY_OF_MONTH))
  val Hora_en_pais = (Hora.get(Calendar.HOUR_OF_DAY)).toInt
  val Minuto_en_pais = (Hora.get(Calendar.MINUTE)).toInt
  
    //Calculo por Lugar
    
    println("Ingrese el dia de su nacimiento: ")
    val diaN = readInt()
    print("Ingrese el mes de su nacimiento: ")
    val mesN = readInt()
    print("Ingrese el año de su nacimiento: \n")
    val yearN = readInt()
    
    println("\n-----------Datos-----------")
    
    println("\nLugar de nacimiento: " + TZA(Clave))
    printf("Fecha de nacimiento: %d-%d-%d", diaN, mesN, yearN)
    
     if(Hora_en_pais < 10 && Minuto_en_pais < 10)
    {
      println("\nHora actual del lugar de nacimiento: 0" + Hora_en_pais + ":0" + Minuto_en_pais)
    }
    else if(Minuto_en_pais < 10 && Hora_en_pais >= 10)
    {
      println("\nHora actual del lugar de nacimiento: " + Hora_en_pais + ":0" + Minuto_en_pais)
    }
    else if(Minuto_en_pais >= 10 && Hora_en_pais < 10)
    {
      println("\nHora actual del lugar de nacimiento: 0" + Hora_en_pais + ":" + Minuto_en_pais)
    }
    else
    {
      println("\nHora actual del lugar de nacimiento: " + Hora_en_pais + ":" + Minuto_en_pais)
    }
    
    
    
    if(Hora_actual < 10 && Minuto_actual < 10)
    {
      println("\nLugar y Hora actual: Mexico 0" + Hora_actual + ":0" + Minuto_actual)
    }
    else if(Hora_actual < 10 && Minuto_actual >= 10)
    {
      println("\nLugar y Hora actual: Mexico 0" + Hora_actual + ":" + Minuto_actual)
    }
    else if(Hora_actual >= 10 && Minuto_actual < 10)
    {
      println("\nLugar y Hora actual: Mexico " + Hora_actual + ":0" + Minuto_actual)
    }
    else
    {
      println("\nLugar y Hora actual: " + Hora_actual + ":" + Minuto_actual)
    }
    
    printf("Fecha actual: %d-%d-%d\n", Dia_actual, Mes_actual, Año_actual)
 
    
    var diasy = 0 //dias de los years transcurridos.
    for (i <- 1 to (Año_actual - yearN)) {
      if(i % 4 == 0) {
        diasy += 366
      }
      else {
        diasy += 365
      }
    }
    //dias de los meses transcurridos en el ultimo year
    var diasm = 0 
    for (i <- 1 to Mes_actual) {
      if (i == 1) { //Enero
        diasm += 31
      }
      else if (i == 2) { //Febrero
        if ((Año_actual - yearN) % 4 == 0) {
          diasm += 29
        }
        else {
          diasm += 28
        }
      }
      else if (i == 3) { //Marzo
        diasm += 31
      }
      else if (i == 4) { //Abril
        diasm += 30
      }
      else if (i == 5) { //Mayo
        diasm += 31
      }
      else if (i == 6) { //Junio
        diasm += 30
      }
      else if (i == 7) { //Julio
        diasm += 31
      }
      else if (i == 8) { //Agosto
        diasm += 31
      }
      else if (i == 9) { //Septiembre
        diasm += 30
      }
      else if (i == 10) { //Octubre
        diasm += 31
      }
      else if (i == 11) { //Noviembre
        diasm += 30
      }
      else { //Diciembre
        diasm += 31
      }
    }
    //Ponemos el 1 de enero como absoluto
    var diferencia = 0
    for (i <- 1 to mesN) {
      if (i == 1) { //Enero
        diferencia += 31
      }
      else if (i == 2) { //Febrero
        if (yearN % 4 == 0) {
          diferencia += 29
        }
        else {
          diferencia += 28
        }
      }
      else if (i == 3) { //Marzo
        diferencia += 31
      }
      else if (i == 4) { //Abril
        diferencia += 30
      }
      else if (i == 5) { //Mayo
        diferencia += 31
      }
      else if (i == 6) { //Junio
        diferencia += 30
      }
      else if (i == 7) { //Julio
        diferencia += 31
      }
      else if (i == 8) { //Agosto
        diferencia += 31
      }
      else if (i == 9) { //Septiembre
        diferencia += 30
      }
      else if (i == 10) { //Octubre
        diferencia += 31
      }
      else if (i == 11) { //Noviembre
        diferencia += 30
      }
      else { //Diciembre
        diferencia += 31
      }
    }
    diferencia = diferencia + diaN - 1
    //-----------------------------------------------
    
    //Diferencia Horaria
  
  val Hora1 = Hora_actual.toInt
  val Hora2 = Hora_en_pais.toInt
  
  
  
  val Dif = null
   
  if(Dia_en_pais<Dia_actual || Dia_en_pais>Dia_actual)
  {
     if(Hora2<Hora1)
  {
    val Dif = ((Hora2 + 24) - Hora1).toInt
    println("\nDiferencia de horas reales: " + Dif)
    val dias_transcurridos = diasy + diasm + Dia_actual - diferencia
    val horasTranscurridas = (dias_transcurridos * 24) - Dif //- horasActuales que sacaremos con Time
   
    printf("\nDias transcurridos: %d, horas totales: %d", dias_transcurridos, horasTranscurridas)
  }
  else if (Hora2>Hora1) {
    
    val Dif = ((Hora1 + 24) - Hora2).toInt
    println("Diferencia de horas reales: " + Dif)
    val dias_transcurridos = diasy + diasm + Dia_actual - diferencia
    val horasTranscurridas = (dias_transcurridos * 24) - Dif //- horasActuales que sacaremos con Time
    val horasTranscurridasM = (dias_transcurridos * 24)//- horasActuales que sacaremos con Time
   
   printf("\nDias transcurridos en Mexico: %d, \nHoras totales en Mexico: %d", dias_transcurridos, horasTranscurridas)
   printf("\nDias transcurridos en " + TZA(Clave) + ": %d",horasTranscurridas)
  }
    
  }
  else if(Dia_en_pais==Dia_actual) {
    
    if(Hora2<Hora1)
  {
    val Dif = (Hora1 - Hora2).toInt
    println("\nDiferencia de horas reales: " + Dif)
    val dias_transcurridos = diasy + diasm + Dia_actual - diferencia
    val horasTranscurridas = (dias_transcurridos * 24) + Dif //- horasActuales que sacaremos con Time
   
    printf("\nDias transcurridos: %d, horas totales: %d", dias_transcurridos, horasTranscurridas)
  }
  else if (Hora2>Hora1) {
    
    val Dif = (Hora2 - Hora1).toInt
    println("Diferencia de horas reales: " + Dif)
    val dias_transcurridos = diasy + diasm + Dia_actual - diferencia
    val horasTranscurridas = (dias_transcurridos * 24) + Dif //- horasActuales que sacaremos con Time
   
    printf("\nDias transcurridos: %d, horas totales: %d", dias_transcurridos, horasTranscurridas)
  }
    
    
    
    
 
    
   
    

    
    
  }
  }
  else
  {
    println("Ingrese una opcion valida")
  }
  
 
      
}