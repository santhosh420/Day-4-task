// Use the rest countries API ULR -https://restcountries.eu/rest/v2/all. 
// And display all the country flags in the console.

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);
    
    for(var i=0; i<result.length;i++){
    console.log("Name"+" : "+result[i].name.common," Flags"+" : "+result[i].flags.png);
    
    }
}