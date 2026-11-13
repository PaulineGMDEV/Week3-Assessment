console.log("Numbers from 1 o 20:");

for(let i=1<=20;i++){
    console.log(i);
}

for (let i=1;i<=20;i++) {
    if(i%2===0){
        console.log(i);
    }

}
for(let i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i)
    }
}
console.log("Sum of numbers from 1 to 20:");

let sum=0;
for (let i=1;i<=20;i++){
    sum=sum+i;
}
console.log("The total sum is:"=sum);

console.log("Numbers from 20 down to 1:");
for(let i=20;i>=1;i--){
    console.log(i)
}