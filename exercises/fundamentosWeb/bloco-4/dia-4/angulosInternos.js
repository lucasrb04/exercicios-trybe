function isATriangle (angle1, angle2, angle3) {
  sumAngles = angle1 + angle2 + angle3;
  if (angle1 < 0 || angle2 < 0 || angle3 < 0){
    result = "Erro: foram digitados ângulos negativos!!";
  } else if (sumAngles == 180) {
    result = true;
  } else { 
    result = false;
  }
  return result
}
console.log(isATriangle(20,60,60));