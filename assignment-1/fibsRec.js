    function fibsRec(n, arr = [0, 1]) {
        if (n <= 0) return "must be greater than 0"
        if (n === 1) return [0];
        if (n===2) return arr;

        else return fibsRec(n - 1, [...arr, arr[arr.length - 2] + arr[arr.length - 1]] )
    }

    console.log(fibsRec(1)); /* should be [0,1] */
    console.log(fibsRec(5)); /* should be [0,1,1,2,3] */

    'couldnt figure out a solution w/out plugging in an array in the declaration'