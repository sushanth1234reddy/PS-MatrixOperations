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
console.log("Transpose of Matrix")
for(i=0;i<rows;i++){
    let str="";
    for(j=0;j<cols;j++){
        str=str+MatrixA[j][i]+" ";
    }
    console.log(str);
}