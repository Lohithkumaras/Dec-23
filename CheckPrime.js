var num=prompt("Enter the number check wether it's prime or not");
var count=0;
for(var i=2;i<num;i++)
{
  if(num%i==0)
  count=1;
}

if(count==1)
alert(num +" Is not prime number");
else
alert(num +" Is  prime number");
