
class Set{
    //list implementation
/*     this.set = [];
    this.add = function(s){
        //if item doesn't exist, add it
        if (!this.contains(s)){
            this.set.push(s);
        }
    };

    this.remove = function(s){
        //if item exists, remove it
        if (this.contains(s)){
            var index = this.set.indexOf(s);
            this.set.splice(index,1);
        }
    }

    this.contains = function(s){
        var bool = false;
        this.set.forEach(function(item, index){
            if(item == s){
                bool = true;
            }
        });
        return bool;
    } */

    //map implementation
    constructor(){
        this.set = {};
    }
    
    add(s){
        if(typeof(s) != "string"){
            console.log("incorrect element type");
        }
        //if item doesn't exist, add it
        else if (!(s in this.set)){
            this.set[s] ="";
        }
    };

    remove(s){
        //if item exists, remove it
        if ((s in this.set)){
            delete this.set[s];
        }
    }

    //tried implementing this to override console's output, but did not work
    toString() {
        var str = "{ "
        var isFirst = true;
        for (var key in this.set){
            if (isFirst){
                str += key;
                isFirst = false;
            }
            else{
                str += ", " + key;
            }
            
        }
        str += " }";
       
        return `${str}`;
    }
}

