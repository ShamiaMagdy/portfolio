// var x=2;
// var y=3;
// var op="/";
// if(op=="+")
// {
//     alert(x+y);
// }
// else if(op=="-")
// {
//     alert(x-y);
// }
// else if(op=="*")
// {
//     alert(x*y);
// }
// else
// {
//     alert(x/y);
// }
var title ='<h1>sec 12</h1>';
//document.getElementById('x').innerHTML=title;
document.getElementById('x').innerText=title;

for(var x=0;x<10;x++)
{
    if(x==3)
    {
        console.log("Donia");
    }
    else{
        console.log(x);
    }
}

var y=4;
for(var x=1;x<=10;x++)
{
    var mul=y*x;
    console.log(y +" * "+x+" = "+mul);
}
function multi()
{
    var y=5;
    for(var x=1;x<=10;x++)
    {
        var mul=y*x;
        console.log(y +" * "+x+" = "+mul);
    }
}
multi();

function number(n)
{
    return n;
}
console.log(number(2)); 

function operation()
{
    var x=parseInt(document.getElementById("x").value);
    var y=parseInt(document.getElementById("y").value);
    var op=document.getElementById("op").value;
    if(isNaN(x) || isNaN(y))
    {
        document.getElementById('res').innerHTML="x and y must be numbers";
    }
    else{
        if(op=='+')
        {
            // alert(x+y);
            document.getElementById('res').innerHTML=x+y;
        }
        else if(op=='-')
        {
            // alert(x-y);
            document.getElementById('res').innerHTML=x-y;
        }
        else if(op=='*')
        {
            // alert(x*y);
            document.getElementById('res').innerHTML=x*y;
        }
        else
        {
            // alert(x/y);
            document.getElementById('res').innerHTML=x/y;
        }
        
    }
    
}