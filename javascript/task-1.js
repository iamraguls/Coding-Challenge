//Numbers from 1 to 10

for(let i =1;i<=10;i++){
  console.log(i);
}

//Even Numbers from 1 to 25

for(let i =1;i<=25;i++){
  if(i%2==0){
    console.log(i);
  }
}

//multiples of 5 in table

var n = 5
for(i=1;i<=10;i++){
  console.log("5","x",i,"=",n*i)
}

//reverse a string

var n = "Ragul"
var s = n.split("")
var r = s.reverse()
console.log(r.join(""))

//Addition of Array

a = [1,2,3,4,5]
let sum=0
for(i=0;i<a.length;i++){
    sum+=a[i]
}
console.log(sum)


