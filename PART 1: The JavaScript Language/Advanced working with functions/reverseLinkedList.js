// TASK 5

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


// using a loop
function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );     // 4 3 2 1
    }
}

printReverseList(list);


// using recursion
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value)     // 4 3 2 1
}

printReverseList(list);