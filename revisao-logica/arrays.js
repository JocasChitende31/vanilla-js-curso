let arr = new Array();
arr = new Array(true, 'Jeorgel', 26, new Array(1, 2, 3, 5));
arr[2] = 25;
arr[3][0] = 10;
console.log(arr);
console.log(arr[3]);

const arr2 = ['Chitende', 29, [0,9,8,7,6], "true"];
arr2[2][1]="false";
arr2[arr2.length]= "lenght"; 
arr2.push("push");
arr2[2].push(1,2,3,4)
console.log(arr2);