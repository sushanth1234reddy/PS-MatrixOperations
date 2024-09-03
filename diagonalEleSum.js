let rows=+prompt("enter no.of rows:");
let cols=+prompt("enter no of cols:");
let MatrixA=[];
let Tmat=[];
for(i=1;i<=rows;i++){
    x=[];
    for(j=1;j<=cols;j++){
        console.log("Enter"+i+" "+j+ "vales:");
        el=+prompt();
        x.push(el);
    }
    MatrixA.push(x)
}
for(i of MatrixA){
    console.log(i.join(" "));
}
let sum=0;
for(i=0;i<rows;i++){
    for(j=0;j<cols;j++){
        if(i==j || (i+j==rows-1) ){ // if i==j or if sum of i+j should be equal to rows length-1. 
            
        
        sum=sum+MatrixA[i][j];
        }
    }
}
console.log("Sum of Diagonal Elements is:"+sum);