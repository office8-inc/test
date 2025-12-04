import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS設定
app.use('/*', cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))

// ルート
app.get('/', (c) => {
  return c.json({ message: '🔥 Hono API is running!' })
})

// Todoリスト（サンプルデータ）
let todos = [
  { id: 1, title: 'Honoを学ぶ', completed: false },
  { id: 2, title: 'Viteでフロントエンド構築', completed: false },
  { id: 3, title: 'Docker化する', completed: false },
]

// Todo一覧取得
app.get('/api/todos', (c) => {
  return c.json({ todos })
})

// Todo追加
app.post('/api/todos', async (c) => {
  const { title } = await c.req.json()
  const newTodo = {
    id: Math.max(...todos.map(t => t.id), 0) + 1,
    title,
    completed: false,
  }
  todos.push(newTodo)
  return c.json({ todo: newTodo }, 201)
})

// Todo完了切替
app.patch('/api/todos/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const todo = todos.find(t => t.id === id)
  if (!todo) {
    return c.json({ error: 'Todo not found' }, 404)
  }
  todo.completed = !todo.completed
  return c.json({ todo })
})

// Todo削除
app.delete('/api/todos/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const index = todos.findIndex(t => t.id === id)
  if (index === -1) {
    return c.json({ error: 'Todo not found' }, 404)
  }
  todos.splice(index, 1)
  return c.json({ message: 'Todo deleted' })
})

const port = 3001
console.log(`🚀 Hono server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
