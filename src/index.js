module.exports = function solveEquation(equation) {
    var a, c, b;
   var array = equation.split('x');
    a = +array[0].slice(0,-3);

    if(array[1][3]=='-') b = 0-array[1].slice(5,-3);
    else  b = +array[1].slice(5,-3);

   if(array[2][1]=='-') c = 0-array[2].slice(3);
   else  c = +array[2].slice(3);
    console.log(a);
    console.log(b);
    console.log(c);

   var D = Math.round(Math.sqrt(b*b-4*a*c));
   console.log(D)
   var result = [];

   var x1 = (-b+D)/(2*a);
    var x2 = (-b-D)/(2*a);
if (x1>x2) result.push(x2,x1);
else result.push(x1, x2);


   return result;
}
