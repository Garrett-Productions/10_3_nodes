// function double(arr){
//     for(let i=0; i<arr.length; i++){
//         arr[i]*=2
//     }
//     return arr
// }
// let arr=[1,2,3,4,5]
// double(arr)
// console.log(arr)
//we are not making a copy of this variable or array, we are changing within the function and returning something different 


//Building a Node-------
//comprised of 2 things. Data and a pointer to the next node. Both of these things will be represented as attributes of our Node class
class Node {
    constructor(data){ //this is like the __init__ method in Python
        this.data=data;
        this.next=null;
    }
}
//We also see that we defined the Pointer attribute to be null. Why did we do that? Well, think back to our train example. 
//When a train car is being built in the factory, do they know at that time what car will be attached to it. Of course not. 
//The order of the train cars is only established when they are brought together to form a train

//Building the List------
//The second class we will be building is the SLL class. 
// From the last lesson we know the head is a very important node to keep track of, but other than that the nodes keep track of where the next node is. 
// The SLL doesn't actually know where any other node is other than the head node. 
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val){
        //creating a new node object with the value provided
        newNode = new Node(val);
        //checking to see if the current list does not have a head node AKA checking if the list is empty.
        //if empty, place the new nodee as the head
        if(!this.head){ //if there is no head, place this as head
            this.head=newNode ;
            return this;
        }
        //if the list is not empty, assign the head to be the next node to the new node
        newNode.next=this.head;
        //then finally assign the newNode to be the new head of the list
        this.head=newNode;
        return self;
    }
}

//We could build this to take in a node and then assign that node to the head. But this also works. We see both of these objects are rather short,
//and we can't do much with them at this stage. We need to add some methods to our SLL class!

// Unlike an array, we do not need to "make room" at the front of the list to insert a new number, 
// because linked lists are connected with pointers. All we need to do is adjust those pointers to add in the new node.

class Node {
    constructor(data){ 
        this.data=data;
        this.next=null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val){
        newNode = new Node(val);
        if(!this.head){ 
            this.head=newNode ;
            return this;
        }
        newNode.next=this.head;
        this.head=newNode;
        return self;
    }
}

//----------------------------------------------
// ITERATING THROUGH LINKED LISTS BREAKDOWN

// Lets once again return to our Train analogy. Let's say the conductor of the train wanted to find out how many people were onboard. 
// How would he go about doing that? Would he leave the front of the train and start counting himself. 
// Probably not, because than who is going to be driving the train? 
// He would likely task a Train attendant with that task of going car to car and within each car counting the amount of people. 
// The same holds true if we wanted to create a method to find the sum of all of the nodes in our list. But how do we make a train attendant?

// The RUNNER acts as our train attendant and performs the same role as the 'i' in for loops, goes from iteration to iteration.
// since we don't know how many nodes are in our list, a for loop will not work here, 
// (Remember a for loop only works when we know how many iterations we want to go BEFORE starting the loop. So we'll be using a while loop. 
// train attendants are known for not being careful and walking right out of the caboose thinking there is more cars, 
// so we have to make sure to tell them when to stop walking. We can do so by checking if the node we're going to be walking to is null 
// (because remember the last node always points to null)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    findSum() {
        //We first have to tell our train attendant that we want them to start at the front of the train
        runner=self.head
        sum=0
        // Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to iterate, instead we'll use a while loop.
        // Also we need to tell them when to stop otherwise they will just run off the end of the train!
        while(runner !== null){
            //Since the runner is set to the current node, its value will be equal to the value of the node they are currently on
            sum+=runner.value
            //Tell our attendant to move to the next car
            runner=runner.next
        }
        return sum
    }
}

class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    findsun(){ //wheres my runner starting?
        runner = self.head;
        sum  = 0;
        while(runner !== null){
            sum+=runner.value //set the sum to the value of the current and as it iterates update by doing the next line of code
            runner=runner.next
        }
        return sum
    } 
}
//Maybe we should also be checking to see if there is any nodes at all in the list as well. See if you can add that to this method.