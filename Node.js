class Node{
    data;
    nextnode;
    constructor(value) {
        this.data = value;
    }
}

class LinkedList{

    rootnode = null;
    count = 0;
    addElement(value)
    {
        if(this.rootnode == null)
        {
            this.rootnode = new Node (value)
            this.count++;
        }
        else{
            let temp = this.rootnode;
            while(temp.nextnode != null)
            {
                temp = temp.nextnode;
            }
            temp.nextnode = new Node(value);
            this.count++;
        }
    }
   addElements(index,value)
    {
        let a;
        a = new Node(value);
        if (index == 0) {
            a.nextnode= this.rootnode;
            this.rootnode= a;
            this.count++;
        }
        else{
            let prev;
            let b = new Node(value);
            let curr = this.rootnode;
            for(let i=0;i< index;i++)
            {
                prev = curr;
                curr = curr.nextnode;
            }
            b.nextnode = curr;
            prev.nextnode = b;
            this.count++;

        }
    }
    counts()
    {
        return this.count;
    }
    removeElement(index)
    {
        let prev;
        let curr = this.rootnode;
        for(let i=0;i<index;i++)
        {
            prev = curr;
            curr = curr.nextnode;
        }
        prev.nextnode = curr.nextnode;
        this.count--;
    }
    printElement()
    {
        let temp = this.rootnode;
        if(temp == null)
        {
            console.log("Is empty")
        }
        else{
            while(temp != null)
            {
                console.log(temp.data)
                temp = temp.nextnode;
            }
        }
    }
}
let list = new LinkedList();
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElements(0,4);
list.addElements(3,4);
list.removeElement(2)


list.printElement();
console.log(list.counts());
