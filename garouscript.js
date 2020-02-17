/*
Datos aleatorios como objetos.
Construya un algoritmo que me devuelva cada que oprima 
un botón una persona con sus datos personales construidos aleatoriamente de la forma: var person =
*/

//el cambio se da con actualizar


firstname = ["maria", "laura","brandon"];
//middlename = ["juana","carolina","stiven"];
lastname = [" valencia velez","gomez pinzon","gomez gomez"];
address = ["cra 50 #116-25", " cra 5 #34-5","calle 100 # 50-3"];
city = ["Bogota", " medellin"," santander"];
age = [44, 29, 35];
phone = ["+573202255544","+573256792230","+573225648712"];
//number = [4010860027475919];

var primernombre=Math.floor(Math.random()*3)
//var segundonombre=Math.floor(Math.random()*3)
var apellidos=Math.floor(Math.random()*3)
var direccion=Math.floor(Math.random()*3)
var ciudad=Math.floor(Math.random()*3)
var edad=Math.floor(Math.random()*3)
var telefono=Math.floor(Math.random()*3)
var numero=Math.floor(Math.random()*3)

var yearmenor = 2020
var yearmayor = 2024
var miYearRandom = Math.floor (Math.random () *( yearmayor - yearmenor )) + yearmenor ;
console.log (miYearRandom)

var monthmenor = 1
var monthmayor = 12
var miMonthRandom = Math.floor ( Math.random () * (monthmayor - monthmenor)) + monthmenor ;
console.log (miMonthRandom)

var cvcmenor = 453
var cvcmayor = 999
var miCvcRandom = Math.floor (Math.random () * (cvcmayor - cvcmenor)) + cvcmenor;
console.log(miCvcRandom)

var menor = 4342100000000000;
var mayor = 8815000000000000;
var miRandom = Math.floor(Math.random() * (mayor - menor)) + menor;
//console.log(miRandom)

document.write(firstname[primernombre] + "<br>"+ /*middlename[segundonombre]+"<br>"+*/ lastname[apellidos]+"<br>"+ address[direccion]+"<br>"+ city [ciudad] + "<br>"+ age [edad]+"<br>"+phone[telefono]+"<br>"+ "Card Number: " + miRandom + "<br>" + "CVC: " + miCvcRandom + "<br>" + "Month: " + miMonthRandom + "<br>" + "Year: " + miYearRandom)











//document.write(JSON.stringify(ccard))


/*function myFunction() {
    
var primernombre=Math.floor(Math.random()*3)
var segundonombre=Math.floor(Math.random()*3)
var apellidos=Math.floor(Math.random()*3)
var direccion=Math.floor(Math.random()*3)
var ciudad=Math.floor(Math.random()*3)
var edad=Math.floor(Math.random()*3)
var telefono=Math.floor(Math.random()*3)
var numero=Math.floor(Math.random()*3)


    document.write(number[numero] + "<br>"+ firstname[primernombre] + "<br>"+ middlename[segundonombre]+"<br>"+ lastname[apellidos]+"<br>"+ address[direccion]+"<br>"+ city [ciudad] + "<br>"+ age [edad]+"<br>"+phone[telefono] + "<br><button onclick='myFunction()'>Try it</button>")
}*/




/*
var myFunction = function (original){

    console.log(original);
    


}
myFunction("william")
*/




