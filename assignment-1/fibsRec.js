    function fibsRec(n, arr = [0, 1]) {
        if (n <= 2) return arr;

        else return fibsRec(n - 1, [...arr, arr[arr.length - 2] + arr[arr.length - 1]] )
    }

    'couldnt figure out a solution w/out plugging in an array in the declaration'