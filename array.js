document.write("3rd smallest number in an array"+"<br>");
document.write("Given array:[1,4,3,-5,7,8,-1]"+"<br>");



let a=[1,4,3,-5,7,8,-1];

let b=[];
temp=0;


//ascending order
for(i=0;i<a.length;i++){
	for(j=i+1;j<a.length;j++){
		if(a[i]>a[j]){
			temp=a[j];
			a[j]=a[i];
			a[i]=temp;
		}
	}
	
	
b.push(a[i]);

}
console.log(b[2]);


document.write("Output:"+b[2]);
