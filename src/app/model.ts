export class Model{
    user;
    items;
    constructor(){
        this.user="Burak";
        this.items=[
            new TodoItem("Kahvaltı",true),
            new TodoItem("Spor",false),
            new TodoItem("Sinema",false),
            new TodoItem("Proje",false)
        ]
    }
}

export class TodoItem{
    description;
    action;
    constructor(description,action){
        this.action=action;
        this.description=description;
    }
}