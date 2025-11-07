import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'monospace'
    }}>
      <Head>
        <title>Hello World - Next.js</title>
        <meta name="description" content="Hello World from Next.js" />
      </Head>

      <main style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          ⚛️ Hello World from Next.js!
        </h1>
        <h2 style={{ fontSize: '2rem', color: '#0070f3' }}>
          こんにちは、世界！ (Next.js版)
        </h2>
        <p style={{ fontSize: '1.2rem', marginTop: '2rem', opacity: 0.8 }}>
          React + Server-Side Rendering
        </p>
      </main>
    </div>
  )
}