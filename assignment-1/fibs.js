function fibs(n) {

    let arr = [0,1];
    
    if (n <= 0) {
        return "must be greater then 0"
    }
    
    else if (n === 1){
        return [0]
    }
    else {
        for(let i = 2; n > i; n--) {
    
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        }
    }
        return arr
    }