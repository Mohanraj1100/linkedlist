class Node{
    data;
    nextnode;
    constructor(value) {
        this.data = value;
    }
}
class Queue{
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
    queue()
    {
        this.rootnode = this.rootnode.nextnode;
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
let q = new Queue();
q.addElement(1);
q.addElement(2);
q.addElement(3);
q.queue()
q.queue();
q.printElements();


