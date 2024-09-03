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
        if(i==0 || j==cols-1 || j==0 || i==rows-1 ){
            
        
        sum=sum+MatrixA[i][j];
        }
    }
}
console.log("Sum of Diagonal Elements is:"+sum);