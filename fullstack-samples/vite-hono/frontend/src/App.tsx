import { useState, useEffect } from 'react'
import './App.css'

interface Todo {
  id: number
  title: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos')
      const data = await res.json()
      setTodos(data.todos)
    } catch (error) {
      console.error('Failed to fetch todos:', error)
    }
  }

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    
    setLoading(true)
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodo }),
      })
      const data = await res.json()
      setTodos([...todos, data.todo])
      setNewTodo('')
    } catch (error) {
      console.error('Failed to add todo:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleTodo = async (id: number) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'PATCH',
      })
      const data = await res.json()
      setTodos(todos.map(t => t.id === id ? data.todo : t))
    } catch (error) {
      console.error('Failed to toggle todo:', error)
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      })
      setTodos(todos.filter(t => t.id !== id))
    } catch (error) {
      console.error('Failed to delete todo:', error)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🔥 Vite + React + Hono</h1>
        <p className="subtitle">Node.js (Hono) バックエンドとの連携サンプル</p>
        
        <form onSubmit={addTodo} className="add-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="新しいタスクを入力..."
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? '追加中...' : '追加'}
          </button>
        </form>

        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.title}</span>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                削除
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
