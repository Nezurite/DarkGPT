'use client'
import { useState, useRef } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { text: '🔥 NIXXEL: DARKGPT READY. SPIT SOME WORDS, CLOWN.', sender: 'ai' }
  ])
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)

  const sendMessage = async () => {
    if (!input.trim()) return
    
    setMessages(m => [...m, { text: `YOU: ${input}`, sender: 'user' }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/route', {
        method: 'POST',
        body: JSON.stringify({ prompt: input })
      const data = await res.json()
      setMessages(m => [...m, { text: `NIXXEL: ${data.response}`, sender: 'ai' }])
    } catch {
      setMessages(m => [...m, { text: 'ERROR: DEMON OVERLOAD', sender: 'error' }])
    } finally {
      setLoading(false)
      endRef.current?.scrollIntoView()
    }
  }

  return (
    <main className="min-h-screen bg-black text-green-400 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          DARKGPT v5
        </h1>

        <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto mb-4">
          {messages.map((msg, i) => (
            <p key={i} className={`mb-2 ${msg.sender === 'ai' ? 'text-red-400' : 'text-blue-400'}`}>
              {msg.text}
            </p>
          ))}
          {loading && <p className="text-yellow-400">THINKING...</p>}
          <div ref={endRef} />
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 bg-gray-800 text-white p-3 rounded"
            disabled={loading}
          />
          <button 
            onClick={sendMessage}
            className="bg-red-600 text-white p-3 rounded"
            disabled={loading}
          >
            {loading ? '...' : 'SEND'}
          </button>
        </div>
      </div>
    </main>
  )
}
