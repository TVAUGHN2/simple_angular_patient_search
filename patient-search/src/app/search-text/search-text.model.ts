
export class SearchText{
    result = "";

    updateText(name: string){
        console.log("name.value = " + name);
        this.result = name;
        console.log("In update text. Result: " + this.result);
    }
}