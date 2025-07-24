"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, AlertCircle } from "lucide-react"
import { useChat } from "ai/react"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "¡Hola! 👋 Soy el asistente virtual de T-ECO Group.\n\nPuedo ayudarte con información sobre:\n• Nuestro programa intensivo de 8 meses\n• Sistema de becas completas\n• Horarios disponibles (mañana 9am-1pm o tarde 2pm-6pm)\n• Proceso de admisión\n• Ubicación en Santiago de los Caballeros\n• Contacto directo\n\n¿En qué puedo ayudarte hoy?",
      },
    ],
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    handleSubmit(e)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-navy-900 hover:bg-navy-800 shadow-lg z-50 transition-all duration-200"
          size="icon"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] bg-white border-navy-200 shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-navy-200 bg-gray-50">
            <CardTitle className="text-navy-900 flex items-center space-x-2">
              <Bot className="h-5 w-5 text-eco-green-500" />
              <span className="text-sm font-semibold">Asistente T-ECO Group</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-navy-700 hover:text-navy-900 hover:bg-navy-100 h-8 w-8"
              aria-label="Cerrar chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 bg-eco-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-3 rounded-lg shadow-sm ${
                      message.role === "user"
                        ? "bg-navy-900 text-white rounded-br-sm"
                        : "bg-white text-navy-900 border border-gray-200 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-eco-green-500 rounded-full flex items-center justify-center mt-1">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white text-navy-900 border border-gray-200 p-3 rounded-lg rounded-bl-sm shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-eco-green-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-eco-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-eco-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <AlertCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-red-50 text-red-900 border border-red-200 p-3 rounded-lg rounded-bl-sm shadow-sm max-w-[85%]">
                    <p className="text-sm">
                      Lo siento, hubo un problema técnico.
                      <br />
                      <strong>Contacta directamente:</strong>
                      <br />📞 +1 (849) 517-7567
                      <br />
                      ✉️ tecog.academy@gmail.com
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <form onSubmit={onSubmit} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-white border-gray-300 text-navy-900 placeholder:text-gray-500 focus:border-eco-green-500 focus:ring-eco-green-500"
                  disabled={isLoading}
                  maxLength={500}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-eco-green-500 hover:bg-eco-green-600 disabled:bg-gray-300 transition-colors"
                  disabled={isLoading || !input.trim()}
                  aria-label="Enviar mensaje"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">Powered by T-ECO Group • Santiago, RD</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
