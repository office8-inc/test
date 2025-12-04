from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# データモデル
class Todo(BaseModel):
    id: int
    title: str
    completed: bool

class TodoCreate(BaseModel):
    title: str

# サンプルデータ
todos: List[Todo] = [
    Todo(id=1, title="FastAPIを学ぶ", completed=False),
    Todo(id=2, title="Viteでフロントエンド構築", completed=False),
    Todo(id=3, title="Docker化する", completed=False),
]

@app.get("/")
def read_root():
    return {"message": "🐍 FastAPI is running!"}

@app.get("/api/todos")
def get_todos():
    return {"todos": todos}

@app.post("/api/todos", status_code=201)
def create_todo(todo: TodoCreate):
    new_id = max([t.id for t in todos], default=0) + 1
    new_todo = Todo(id=new_id, title=todo.title, completed=False)
    todos.append(new_todo)
    return {"todo": new_todo}

@app.patch("/api/todos/{todo_id}")
def toggle_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            todo.completed = not todo.completed
            return {"todo": todo}
    raise HTTPException(status_code=404, detail="Todo not found")

@app.delete("/api/todos/{todo_id}")
def delete_todo(todo_id: int):
    global todos
    for i, todo in enumerate(todos):
        if todo.id == todo_id:
            todos.pop(i)
            return {"message": "Todo deleted"}
    raise HTTPException(status_code=404, detail="Todo not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
