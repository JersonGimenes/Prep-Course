// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  m=[]
  for (let i in objeto){
    m.push([i,objeto[i]]);
  }
  return m;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj={};
  for (var i=0;i<string.length;i++){
    if (!obj[string[i]]){
      obj[string[i]]=1;
    }
    else {
      obj[string[i]]+=1
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var s1="";
  var s2="";
  for (var i=0;i<s.length;i++){
    if (s[i]===s[i].toLowerCase()){
      s1+=s[i];
    }
    else {
      s2+=s[i];
    }
  }
  return s2+s1;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var li=str.split(" ");
  for (var i=0;i<li.length;i++){
    var ls=li[i].split("");
    ls=ls.reverse();
    li[i]=ls.join("");
  }
  return li.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var n=numero.toString();
  var s="";
  for (var i=n.length-1;i>=0;i--){
    s+=n[i];
  }
  if (n===s){return "Es capicua"}
  else {return "No es capicua"}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nc="";
  for (var i=0;i<cadena.length;i++){
    if ((cadena[i]!="a") && (cadena[i]!="b") && (cadena[i]!="c")){
      nc+=cadena[i];
    }
  }
  return nc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function men(li){
    var me=li[0];
    for (var i=1;i<li.length;i++){
      if (li[i].length<me.length){
        me=li[i];
      }
    }
    return me;
  }
  function elim(li){
    var nl=[];
    for (var i=0;i<li.length;i++){
      if (li[i]!=men(li)){
        nl.push(li[i]);
      }
    }
    return nl;
  }
  var na=[];
  while (arr.length>0){
    na.push(men(arr));
    arr=elim(arr);
  }
  return na;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var inter=[];
  for (var i=0;i<arreglo1.length;i++){
    for (var j=0;j<arreglo2.length;j++){
      if (arreglo1[i]===arreglo2[j]){
        inter.push(arreglo1[i]);
        break;
      }
    }
  } 
  return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

