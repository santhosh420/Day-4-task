// Use the same rest countries and print all the ountries names, region, sub region and populations. 

var a = new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload = function(){
    var data = a.response
    var result = JSON.parse(data);

    for(var i=0; i<result.length;i++){
        console.log("Name"+" : "+result[i].name.common," Region"+" : "+result[i].region," Subregion"+" : "+result[i].subregion," Population"+" : "+ result[i].population);
}
}