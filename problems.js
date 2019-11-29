/* REVERSE A STRING
word -> drow
create a empty string to contain each character
loop through the string backwards
add each value to the empty string
return the container
*/


function reverseStr1(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
// console.log(reverseStr1('HCIR'))

function reverseStr2(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseStr2('HCIR'))

function reverseStr3(str) {
    let copyStr = str.split('');
    let middle = Math.floor(copyStr.length / 2);

    for (let i = 0; i < middle; i++) {
        let firstChar = i;
        let lastChar = ((str.length - 1) - i);
        let temp = copyStr[firstChar]
        copyStr[firstChar] = copyStr[lastChar]; // makes last char = to first char
        copyStr[lastChar] = temp; // makes first char = to last char
    }

    return copyStr.join('');
}
// console.log(reverseStr3('HCIR'))




/* REVERSE A LINKED LIST 
 1 -> 2 -> 3 -> null
 3 -> 2 -> 1 -> null

 let prev = null
 let current = head
 let next = head.next

 set current.next = prev
 prev = current
 current = next
 */

function reverseLL(ll) {
    let prev = null;
    let current = ll.head
    let next = null;

    while (current) {
        next = current.next; // save next
        current.next = prev; // reverse
        prev = current; // advance prev
        current = next; // advance current
    }

    return prev
}



/*
We have a list of customer orders. Find the n customers who spent the most money. A customer may have many orders in the list.
Example:
const orders = [
  { userId: '123', amount: 150 },
  { userId: '456', amount: 200 },
  { userId: '123', amount: 75 },
  { userId: '789', amount: 500 },
]

func(orders, 2);
=> [{ userId: '789', total: 500 }, { userId: '123',  total: 225 }]

user 
find the total amount
return n number of users


1. create container called result
2. create an object {'123': 225 ,  '789': 500}
3. for in loop over the object assign {userId : '123', amount: 225}
4. push the info into result
5. .sort on result
6. slice until n
7. return result
*/

const orders = [
    { userId: '123', amount: 150 },
    { userId: '456', amount: 200 },
    { userId: '123', amount: 75 },
    { userId: '789', amount: 500 },
]

function findMostMoneySpent(orders, n) {

    let result = []
    let usersTotal = {}

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i]; // { userId: '123', amount: 150 }
        const { userId, amount } = orders[i];

        if (!usersTotal[userId]) {
            usersTotal[userId] = amount

        } else {
            usersTotal[userId] = usersTotal[userId] + amount
            // usersTotal[userId] += amount
        }
    }

    for (let user in usersTotal) {
        result.push({ userId: user, amount: usersTotal[user] })
    }

    result.sort((a, b) => (b.amount - a.amount))

    return result.slice(0, n)

}


// console.log(findMostMoneySpent(orders, 3))




/*

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
 */

var balancedStringSplit = function (s) {
    /*
    1. keep track of the R & L's
    2. If R & L is equal add 1 to splitCount
    */
    let r = 0;
    let l = 0;
    let op = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            r++
        } else if (s[i] === "L") {
            l++
        }

        if (r === l) {
            op++;
        }
    }
    return op
};


/*

Find if a sentence has a bad word in it and if it does replace it with ****
*/

const badWords = ['shoot', 'poop', 'darn', 'heck']

function replaceWord(word) {
    let stars = '';

    for (let w of word) {
        stars += '*'
    }

    return stars
}


// function findBadWords(str) {
//     let result = []
//     let strList = str.split(' ')

//     for (let i = 0; i < strList.length; i++) {
//         let word = strList[i] // each word in the sentence
//         let badword = badWords.filter((badWord) => word === badWord) // checking each word in the badwordlist
//         let index = strList.indexOf(badword[0]) // grab the indexOf the word

//         if (index === -1) { // if index === -1
//             result.push(word)
//         } else {
//             result.push(replaceWord(strList[index]))
//         }
//     }
//     return result.join(' ')
// }

function findBadWords(str) {
    let result = []
    let bad = {}
    let strList = str.split(' ');

    for (let badWord of badWords) {
        if (!bad[badWord]) {
            bad[badWord] = 1
        }
    }

    for (let i = 0; i < strList.length; i++) {
        if (!bad[strList[i]]) {
            result.push(strList[i])
        } else {
            result.push(replaceWord(strList[i]))
        }
    }
    return result.join(' ')
}

// console.log(findBadWords('what the heck'))


/*
 Sort an array of numbers between 1 - 9. Numbers can repeat.
 Ex: [2,2,3,4,5,6,7,7,7,3,2,9]
 NO SORT()
*/

function sortNums(arr) {
    let numbers = {};
    let sortedNumbers = [];

    for (let num of arr) {
        if (!numbers[num]) {
            numbers[num] = 1
        } else {
            numbers[num]++;
        }
    }

    for (let i = 0; i <= 9; i++) {
        if (numbers[i]) {
            while (numbers[i]) {
                sortedNumbers.push(i)
                numbers[i]--
            }
        }
    }
    return sortedNumbers
}

// console.log(sortNums([9, 2, 2, 3, 4, 5, 6, 7, 7, 7, 3, 2, 9]))


const removeLetter = (str) => {
    let hash = 0;
    let cpStr = str.split('')
    for (let i = 0; i < str.length; i++) {
        let l = str[i];

        if (l === '#') hash++;
        if (l === '!') {
            cpStr.splice(i + 1, 1);
            cpStr.splice(i, 1);

        }
        if (hash === 2) break;
    }
    return cpStr.join('')
}

// console.log(removeLetter('#abc!d##mwkwnj#'))

// how many steps are in a cycle

function cycle(arr, startIndex) {
    if (startIndex > arr.length) return -1
    let startOfCycle = 0;
    let steps = 0;
    let obj = {};
    let i = startIndex;

    while (true) {
        if (arr[i] > arr.length) return -1;

        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i]++;
        }

        if (obj[i] === 2) {
            startOfCycle = 1
        }

        if (obj[i] > 2) {
            break;
        }
        if (startOfCycle > 0) {
            steps++
        }

        i = arr[i]
    }

    return steps;
}

// console.log(cycle([1, 2, 3, 4, 1], 0)) --> 3


/*
Find max num in arr
*/

function arr(arr) {
    const resArr = [];
    for (let i = 0; i < arr.length; i++) {
        let check = false
        let j = i + 1
        while (arr[j]) {
            if (arr[j] > arr[i]) {
                check = true
                resArr.push(arr[j])
                break;
            }
            j++
        }
        if (!check) resArr.push(0)
    }
    return resArr;
}

console.log(arr([2, 7, 5]))

/*
Find max num in arr

SLIDING WINDOW
*/


function maxSubarraySum(arr, num) {
    let max = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i]
    }

    let temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = (temp - arr[i - num]) + arr[i]
        max = Math.max(temp, max)
    }

    return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))

/**
 Binary search tree
 */

class Node {
    constructor(value) {
        this.value = value
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let NewNode = new Node(val)
        if (!this.root) {
            this.root = NewNode
            return this.root
        } else {
            let current = this.root
            while (true) {
                if (!current.left && current.value >= NewNode.value) {
                    current.left = NewNode
                    return this.root
                } else if (!current.right && current.value < NewNode.value) {
                    current.right = NewNode
                    return this.root
                }

                if (current.value <= NewNode.value) {
                    current = current.right
                } else if (current.value >= NewNode.value) {
                    current = current.left
                }
            }
        }
    }

    find(val) {
        if (!this.root) return null;
        if (this.root.value === val) return true;
        let current = this.root;
        while (current) {
            if (current.value === val) return true;
            if (current.value > val) {
                current = current.left;
            } else if (current.value < val) {
                current = current.right;
            }

        }

        return false;
    }

    bredithFirstSearch() { // left to right
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift()
            if (node.left) data.push(node.left);
            if (node.right) data.push(node.right);
        }
        return data;
    }

    depthFirstSearch() { // preorder down to the bottom of the tree

    }
}

var tree = new BST()
tree.insert(11)
tree.insert(12)
tree.insert(1)
tree.insert(2)
tree.insert(32)
tree.insert(13)
tree.insert(-3)
tree.insert(15)
tree.insert(11.5)
console.log(tree.find(2))

// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)


/*
Trapping water
*/

function trapWater(arr) {
    let maxL = 0
    let maxR = 0
    let counter = 0


    for (let i = 1; i < arr.length - 1; i++) {

        for (let a = i; a >= 0; a--) {
            if (maxL < arr[a]) {
                maxL = arr[a]
            }
        }

        for (let b = i; b < arr.length; b++) {
            if (maxR < arr[b]) {
                maxR = arr[b]
            }
        }

        counter += Math.min(maxL, maxR) - arr[i]
    }

    return counter
}




// console.log(trapWater([0, 1, 2, 1, 0, 1, 3, 2, 1, 3]))


function trapWater(arr) {

    let maxL = [arr[0]]
    let maxR = []
    let counter = 0

    maxR[arr.length - 1] = arr[arr.length - 1]
    for (let i = 1; i < arr.length; i++) {
        maxL.push(Math.max(maxL[i - 1], arr[i]))
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i + 1], arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        counter += arr[i] - Math.min(maxR[i], maxL[i])
    }

    return Math.abs(counter)
}
//                                       
// console.log(trapWater([1, 2, 4, 7, 3, 2, 4]))



/**
 
 */
var threeSum = function (nums) {
    let res = []

    let bool = true
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            bool = false
        }
    }
    if (bool === true) return [[0, 0, 0]]

    for (let i = 0; i < nums.length - 2; i++) {

        for (let a = i + 1; a < nums.length - 1; a++) {

            for (let b = a + 1; b < nums.length; b++) {
                if (nums[i] + nums[a] + nums[b] === 0) {
                    res.push([nums[i], nums[a], nums[b]])
                }
            }
        }
    }
    return res
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))

/*
Find how many rectangles are possible
*/


