// TASK 4

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
function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
}

printList(list);     // 1 2 3 4


// using recursion
function printList(list) {
    // output the current item
    alert(list.value)     // 1 2 3 4

    if (list.next) {
        // do the same for the rest of the list
        printList(list.next);
    }
}

printList(list);


// Technically, the loop is more effective.
// These two variants do the same,
// but the loop does not spend resourses for nested function calls.

// From the other side, the recursive variant is shorter and
// sometimes easier to understand.