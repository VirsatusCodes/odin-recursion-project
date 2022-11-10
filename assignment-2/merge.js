/* Version 1--------------------------------

function LR (arr,sorted = [], left = [], right = []) {
    if (arr[0] < arr[arr.length-1]) {
        return arr;
    }
    
    else if (arr.length % 2 != 0 ){
    for(let i = 0; i <= arr.length / 2 - 1.5 ; i++) {
        left.push(arr[i])
    }
    console.log(left)
    for(let i = arr.length / 2 - 0.5; i < arr.length; i++) {
        right.push(arr[i])
    }
    console.log(right)
    for(let i = 0 ; i < left.length + right.length ; i++){
        if (left[0] > right[0]) {
            sorted.push(right.shift())
        } else sorted.push(left.shift())
    }
    return LR(sorted);
} else {
    for(let i = 0; i <= arr.length / 2 - 1 ; i++) {
        left.push(arr[i])
    }
    console.log(left)
    for(let i = arr.length / 2; i < arr.length; i++) {
        right.push(arr[i])
    }
    console.log(right)
    for(let i = 0 ; i < arr.length ; i++){
        if (left.length >= 1 & left[0] < right[0]) {
            console.log(left, right, sorted)
            sorted.push(left.shift())
        } else {
            console.log(left, right, sorted)
            sorted.push(right.shift())
    }
}
    return LR(sorted);

    }
} Version 1--------------------------------
*/

/* Version 2 ------------------------------------------------

function merge(A,B,m= A.length-1,n= B.length-1){
    let i = 0, j = 0, k = 0;
    let C = []
    while(i <= m && j <= n) { 
       if (A[i] < B[j]){
       C[k++] = A[i++];   
       }else {
           C[k++]=B[j++];   
       }
   }
   for( ; i<=m;i++) {
       C[k++]=A[i];
       
   }
   for( ; j<=n; j++) {
       C[k++] = B[j];
       
   }
   return C
   }
   
   function sort (arr, left = [], right = []) {

       if (arr.length > 1) {
           {
       for(let i = 0; i <= arr.length / 2 - 1 ; i++) {
           left.push(arr[i])
       }
       for(let i = arr.length / 2; i < arr.length; i++) {
           right.push(arr[i])
   }
       }
           console.log(left, right)
           console.log(left, right);
           return merge(sort(left), sort(right))
       }
   } 
    Version 2-------------------------------- */

     /* Version 3 --------------------- 

   minorly altered from youtube example of merge algorithm */

function merge(arr1,arr2){
    let i = 0, j = 0, k = 0;
    /* these are just counters */
    let mergedList = []
    while(i <= arr1.length-1 && j <= arr2.length-1) { 

       if (arr1[i] < arr2[j]){
       mergedList[k++] = arr1[i++];  

       } else {
           mergedList[k++]=arr2[j++];   

       }
   }
   for( ; i<= arr1.length-1 ;i++) {
       mergedList[k++]=arr1[i];
       
   }
   for( ; j<=arr2.length-1; j++) {
       mergedList[k++] = arr2[j];
       
   }
   return mergedList
   }
   
   function sort (arr, left = [], right = []) {
        if (arr.length === 0) return "the array is empty"
	    if (arr.length === 1) return arr; 
           
        if (arr.length % 2 != 0 ){
            for(let i = 0; i <= arr.length / 2 - 1.5 ; i++) {
                left.push(arr[i])
            }
            for(let i = arr.length / 2 - 0.5; i < arr.length; i++) {
                right.push(arr[i])
            }   
        } else  {
            for(let i = 0; i <= arr.length / 2 - 1 ; i++) {
                left.push(arr[i])
            }
            for(let i = arr.length / 2; i < arr.length; i++) {
                right.push(arr[i])
            }
   }
           return merge(sort(left), sort(right))
   } 
/* console.log(sort([3,2,1,5,678,8343,4,7845])) should be [1,2,3,4,5,678,7845,8343] */

 
   
  /*  Version 3 --------------------------  */

/*    top provided solution -------------------------

   const mergeSortRec = (arr) => {
	if (arr.length === 0) return "Please provide a non empty array!"
	if (arr.length === 1) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid, arr.length);

	return merge(mergeSortRec(left), mergeSortRec(right));
};

const merge = (leftArr, rightArr) => {
	//To merge the both incoming arrays
	const result = [];

	let iL = 0;
	let iR = 0;

	while (iL < leftArr.length && iR < rightArr.length) {
		if (leftArr[iL] < rightArr[iR]) {
			result.push(leftArr[iL]);
			iL++;
		} else {
			result.push(rightArr[iR]);
			iR++;
		}
	}

	while (iL < leftArr.length) {
		result.push(leftArr[iL]);
		iL++;
	}

	while (iR < rightArr.length) {
		result.push(rightArr[iR]);
		iR++;
	}

	return result;
};

top provided solution ------------ */

/* provided solution uses push's to merge the arrays and i went that way
as well when i made it myself in my earlier version and would go that way 
if making it from scratch though im unsure which is more efficient
memory and speed wise. using math.floor is fairly obvious, i think i missed
that because i have taken such a break while shifting to full time work 
temporarily and now that im back need to keep in mind things like that.
arr.slice would have been a very useful method as well.  */
