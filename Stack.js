class Node{
    data;
    nextnode;
    constructor(value) {
        this.data = value;
    }
}
class Stack{
    rootnode = null;
    count = 0;
    addElement(value)
    {
        if(this.rootnode == null)
        {
            this.rootnode = new Node(value);
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
    stack()
    {
        let curr = this.rootnode;
        let prev;
        for(let i=0;i<this.count -1;i++)
        {
            prev = curr;
            curr = curr.nextnode;
        }
        prev.nextnode = null;
        this.count--;
        
    }
    printElements()
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
let s = new Stack();
s.addElement(1);
s.addElement(2);
s.addElement(3);
s.stack();
s.stack();
s.printElements();
