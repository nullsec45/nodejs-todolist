export class TodoListService{
    todoList=["Rama","Fajar","Fadhillah"];

    getJsonTodoList(){
        return JSON.stringify({
            code:200,
            status:"OK",
            data:this.todoList.map((value, index)=>{
                return{
                    id:index,
                    value:value
                }
            })
        });
    }
    getTodoList(req,res){
        res.write(this.getJsonTodoList());
        res.end();
    }
}   