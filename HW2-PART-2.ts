
class mySet{
    set: String[];
    constructor(){
        this.set = [];
    }

    add(s:string){
        //if item doesn't exist, add it
        if (!this.contains(s)){
            this.set.push(s);
        }
    }

    remove(s:string){
        //if item exists, remove it
        if (this.contains(s)){
            delete this.set[s];
        }
    }

    contains(s:String): Boolean{
        this.set.forEach(function(item, index){
            if(item = s){
                return true;
            }
        });
        return false;
    }
}

var obj: mySet = new mySet();

obj.add("test1");
obj.add("test2");
obj.add("test3");

obj.remove("test2");

console.log(obj);
