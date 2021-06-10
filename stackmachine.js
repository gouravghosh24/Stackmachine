class Stack{
    constructor(){
        this.items=[];
        this.count=0;
    }
    push(){
        this.items[this.count]= document.getElementById("inputs1").value;
        document.getElementById("show1").innerHTML= `${this.items}`;
        document.getElementById("indx").innerHTML = `${[this.count]}`
        console.log(this.items);
        this.count += 1;
        return this.count -1;
    }
    pop(){
        if(this.count === 0) return undefined;
        let deleteitems = document.getElementById("inputs1").value;
        deleteitems = this.items[this.count -1];
        this.count -= 1;
        document.getElementById("show2").innerHTML = `${deleteitems}`;
        return deleteitems;
        }
        clearm(){
                 document.getElementById("show1").innerHTML= this.items = [];
                 
                    document.getElementById("indx").innerHTML= this.count = 0;
                 
                 
                 document.getElementById("show2").innerHTML ='';
                 document.getElementById("inputs1").innerHTML = clearInterval;
                 
                 return this.items;
        }
}
const stk = new Stack();

function opt1(){
    stk.push();
}
