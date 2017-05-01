//javascript
//0

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");

    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

//1


    // Declare second integer, double, and String variables.
var secInt = parseInt(readLine());
var secDouble = parseFloat(readLine());
var secString = readLine();

    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
var theIntSum = i + secInt;
console.log(theIntSum);
    // Print the sum of the double variables on a new line.
var theDoubSum = d + secDouble;
console.log(theDoubSum.toFixed(1));
    // Concatenate and print the String variables on a new line
console.log(s.concat(secString));
    // The 's' variable above should be printed first.


// 2
// has string interpolation

// Write your code here
var howMuchToTip = (mealCost * (tipPercent / 100));
var howMuchToTax = (mealCost * (taxPercent / 100));
var totalCost = mealCost + howMuchToTip + howMuchToTax;
var totalRoundedCost = Math.round(totalCost);
// Use console.log() to print to stdout
var printString = `The total meal cost is ${totalRoundedCost} dollars.`;
console.log(printString);



//3

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var N = parseInt(readLine());
    var printStatement = "";

    if (N % 2 === 0){
        if (N >= 2 && N <= 5){
            printStatement = "Not Weird";
        }
        else if (N >= 6 && N<= 20){
            printStatement = "Weird";
        }
        else if (N > 20){
            printStatement = "Not Weird";
        }
    }
    else {
        printStatement = "Weird";
    }
    console.log(printStatement);

}


//5

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());

    for (var i = 1; i <= 10; i++){
        var printString = `${n} x ${i} = ${n * i}`;
        console.log(printString);
    }
}




//6

function processData(input) {
    //Enter your code here
    theSplitStrings = input.split("\n");
    for(var i = 1; i < theSplitStrings.length; i++){
        var evenString = "";
        var oddString = "";
        for(var eachCharCounter = 0; eachCharCounter < theSplitStrings[i].length; eachCharCounter++){
            if(eachCharCounter % 2 === 0){
                evenString += theSplitStrings[i][eachCharCounter];
            }
            else{
                oddString += theSplitStrings[i][eachCharCounter];
            }
        }
        console.log(evenString + " " + oddString);
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

//7

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');

    arr = arr.map(Number);
    var theString = "";

    for(var counter = n - 1; counter >= 0; counter--){
        theString += `${arr[counter]}`;
        if(counter !== 0){
            theString += " ";
        }
    }
    console.log(theString);


}

// this would also work

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');

    arr = arr.map(Number);

    arr.reverse();
    console.log(arr.join(" "));


}




//8


function processData(input) {
    //Enter your code here
    var allThatInput = input;

    var arrayOfAll = allThatInput.split("\n");
    var howManyEntries = parseInt(arrayOfAll[0]);

    var theEntries = arrayOfAll.slice(1, howManyEntries + 1);

    var phoneBook = {};
    var whereDoEntriesEnd = theEntries.length;

    for (var counter = 1; counter < howManyEntries + 1; counter++){
        var theWholeString = arrayOfAll[counter];

        var arrayOfNameAndNum = theWholeString.split(' ');
        var theName = arrayOfNameAndNum[0];
        var theNum = arrayOfNameAndNum[1];

        phoneBook[theName] = theNum;
    }

    whereDoEntriesEnd += 1;

    var theQueries = arrayOfAll.slice(whereDoEntriesEnd)
    var howManyQueries = theQueries.length;

    for (var counter = 0; counter < howManyQueries; counter++){
        var theQuery = theQueries[counter];
        if (phoneBook[theQuery] === undefined){
            console.log("Not found");
        }
        else{
            console.log(`${theQuery}=${phoneBook[theQuery]}`)
        }

    }



}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


// somebody elses better Solution

function processData(input) {
    //Enter your code here
    var input = input.split('\n');
    var numLines = input[0];
    var phoneBook = {};

    for (var i = 1; i < numLines*2; i=i+2){
        // 1,2; 3,4; 5,6
        phoneBook[input[i]] = input[i+1];
    }

    for (var j = numLines*2 + 1; j < input.length; j++){
        if (input[j] in phoneBook) console.log(input[j] + '=' + phoneBook[input[j]]);
        else console.log('Not found');
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});



// 9

function processData(input) {
    //Enter your code here
    function Factorial(n){
        if (n == 1){
            return n;
        }
        else{
            return n * Factorial(n - 1);
        }
    }
    console.log(Factorial(input));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});




// 10

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    theBinary = n.toString(2);

    howLong = theBinary.length;
    var inARow = 0;
    var highscore = 0;
    for (var i = 0; i < howLong; i++){
        if (theBinary[i] === "1"){
            inARow++;
            if (inARow > highscore){
                highscore++;
            }
        }
        else{
            inARow = 0;
        }

    }
    console.log(highscore);

}


// better solution, that i'm not yet good enouhg to completely understand

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine()).toString(2);
    var splits = n.split('0');
    console.log(splits.map(function(elem){return elem.length;}).reduce(function(a,b){
        if (a>b) return a; else return b;}));

}


// 11

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var theSum = 0;
    var highestSum = null;

    for (var rowCounter = 0; rowCounter < arr.length; rowCounter++){
        for (var cellsInRowCounter = 0; cellsInRowCounter < arr[rowCounter].length; cellsInRowCounter++){

            if (((cellsInRowCounter + 2) < arr[rowCounter].length) && ((rowCounter + 2) < arr.length)){
                theSum = arr[rowCounter][cellsInRowCounter] + arr[rowCounter][cellsInRowCounter + 1] + arr[rowCounter][cellsInRowCounter + 2] + arr[rowCounter + 1][cellsInRowCounter + 1] + arr[rowCounter + 2][cellsInRowCounter] + arr[rowCounter + 2][cellsInRowCounter + 1] + arr[rowCounter + 2][cellsInRowCounter + 2];

                if (highestSum == null){
                    highestSum = theSum;
                }

                if (theSum > highestSum) {
                    highestSum = theSum;
                }
            }
        }
    }
    console.log(highestSum)

}


// 12 doesn't exist for javascript
//13 doesn't exist for javascript yet
//14 doesn't exist for javascript

//15



process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

this.insert=function(head,data){
      //complete this method

    if (head == null){
        head = new Node(data);
    }
    else{
        var current = head;

        while (current.next !== null){
            current = current.next;
        }
        current.next = new Node(data);

    }
    return head;
};

this.display=function(head){
    var start=head;
        while(start){
            process.stdout.write(start.data+" ");
            start=start.next;
        }
};
}
function main(){
var T=parseInt(readLine());
var head=null;
var mylist=new Solution();
for(i=0;i<T;i++){
    var data=parseInt(readLine());
    head=mylist.insert(head,data);
}
mylist.display(head);
}

//16 .  had to look up an answer to get the || syntax for errors

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var S = readLine();
    try {
        var convertedS = parseInt(S) || e;
        console.log(convertedS);
    }
    catch(e) {
        console.log("Bad String");
    }

}

// 17

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function Calculator(){

    this.power = function(theN, theP){
        if (theN < 0 || theP < 0) throw "n and p should be non-negative";
        return Math.pow(theN, theP);
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}


// 18 queues and stacks

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function Solution(){
  //Write your code here
    this.theStack = [];
    this.theQueue = [];

    this.pushCharacter=function(ch){
        this.theStack.push(ch);
    };

    this.popCharacter=function(){
        var poppedChar = this.theStack[this.theStack.length - 1];
        this.theStack.pop();
        return poppedChar;
    };



    this.enqueueCharacter=function(ch){
        this.theQueue.push(ch);
    };

    this.dequeueCharacter=function(){
        var dequeuedChar = this.theQueue[0];
        this.theQueue.shift();
        return dequeuedChar;
    };
}

function main(){
    // read the string s
    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");
    else
        console.log("The word, "+s+", is not a palindrome.");
}


// 19 doesn't exist.  interfaces

// 20

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    var totalSwapCounter = 0;
    var didItSwap = true;

    while(didItSwap == true){
        var eachSwapCounter = 0;

        for (var arrIdx = 0; arrIdx < a.length - 1; arrIdx++){
            if (a[arrIdx] > a[arrIdx + 1]){
                var tmp = a[arrIdx];
                a[arrIdx] = a[arrIdx + 1];
                a[arrIdx + 1] = tmp;

                totalSwapCounter++;
                eachSwapCounter++;
            }
        }

        if (eachSwapCounter == 0){
            didItSwap = false;
        }
    }

    console.log(`Array is sorted in ${totalSwapCounter} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);

}

// 21 not in javascript

//22 . i had to look this up

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function getHeight
    this.getHeight = function(root) {
// Add your code here
if(root == null){
    return 0;
}

if(root.left == null && root.right == null){
    return -1;
}

var left = this.getHeight(root.left);
var right = this.getHeight(root.right);

if(left > right){
    return 1 + left;
}
else{
    return 1 + right;
}
}; // End of function getHeight
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
_input += data;
});

process.stdin.on('end', function () {
var tree = new BinarySearchTree();
var root = null;

var values = _input.split('\n').map(Number);

for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}

console.log(tree.getHeight(root));
});


//23 binary tree level traversal / breadth first traversal

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    this.levelOrder = function(root) {
        // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
        theList = [root];

        current = root

        while (theList.length > 0){
            if (current.left !== null){
                theList.push(current.left);
            }
            if (current.right !== null){
                theList.push(current.right);
            }

            var stringData = String(theList[0].data);
            process.stdout.write(stringData + ' ');
            theList.shift();
            current = theList[0];

        }
    }; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = _input.split('\n').map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    tree.levelOrder(root);
});
