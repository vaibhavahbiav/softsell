import React, { useState } from 'react'

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setOpen(!open);

  const apikey = process.env.REACT_APP_OPENAI_API;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apikey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: newMessages,
          temperature: 0.7
        }),
      });

      const data = await res.json();

      if (data.choices && data.choices[0] && data.choices[0].message) {
        const reply = data.choices[0].message;
        setMessages([...newMessages, reply]);
      } else if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `⚠️ OpenAI Error: ${data.error.message || "Something went wrong"}`
          }
        ]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: "⚠️ Sorry, I couldn't process your request. Please try again."
          }
        ]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="fixed bottom-6 right-6 z-50">
        {!open && (
          <button onClick={toggleChat} className="bg-orange-600 dark:bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 dark:hover:bg-pink-700">
            💬
          </button>
        )}
        {open && (
          <div className="bg-white dark:bg-gray-800 border border-yellow-500 dark:border-purple-500 rounded-lg shadow-xl w-80 h-96 flex flex-col">
            <div className="p-3 flex justify-between items-center border-b border-yellow-400 dark:border-purple-400">
              <span className="font-semibold dark:text-gray-100">SoftBot</span>
              <button onClick={toggleChat} className="text-gray-500 hover:text-red-500">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`p-2 rounded ${msg.role === "user" ? "bg-yellow-100 text-gray-900 dark:bg-pink-600 self-end dark:text-gray-100 text-right" : "bg-gray-100 dark:bg-purple-300"}`}>
                  {msg.content}
                </div>
              ))}
              {loading && <div className="text-gray-500">Typing...</div>}
            </div>

            <div className="p-3 border-t border-yellow-400 dark:border-purple-400">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="w-full p-2 rounded border border-yellow-600 dark:border-pink-600 bg-yellow-300 text-gray-800 dark:text-gray-100 dark:bg-pink-900 text-sm placeholder:text-gray-800 dark:placeholder:text-gray-100"
              />
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default ChatBot
