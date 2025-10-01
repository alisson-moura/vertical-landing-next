"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui você pode integrar com sua API de envio de email
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-[#2f80c3] to-blue-400 bg-clip-text text-transparent">
                transformar seu negócio?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Deixe-nos entender seu desafio. Preencha o formulário abaixo e um de nossos especialistas entrará em
              contato para oferecer uma solução personalizada, sem compromisso.
            </p>
          </div>

          <Card className="bg-zinc-800 backdrop-blur-sm shadow-2xl border border-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Solicite uma Consultoria Gratuita</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 font-medium">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-zinc-900 border-zinc-600 text-white placeholder:text-gray-500 focus:border-[#2f80c3] focus:ring-[#2f80c3]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300 font-medium">
                      Nome da Empresa
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                      className="bg-zinc-900 border-zinc-600 text-white placeholder:text-gray-500 focus:border-[#2f80c3] focus:ring-[#2f80c3]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-zinc-900 border-zinc-600 text-white placeholder:text-gray-500 focus:border-[#2f80c3] focus:ring-[#2f80c3]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300 font-medium">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(XX) XXXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="bg-zinc-900 border-zinc-600 text-white placeholder:text-gray-500 focus:border-[#2f80c3] focus:ring-[#2f80c3]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-300 font-medium">
                    Serviço de Interesse
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-zinc-900 border-zinc-600 text-white focus:border-[#2f80c3] focus:ring-[#2f80c3]">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                      <SelectItem value="internet">Internet Empresarial</SelectItem>
                      <SelectItem value="marketplace">Shopping Virtual Regional</SelectItem>
                      <SelectItem value="gestao">Sistemas de Gestão e Integração</SelectItem>
                      <SelectItem value="whatsapp">Automações de Vendas via WhatsApp</SelectItem>
                      <SelectItem value="logistica">Sistema de Logística e Entregas</SelectItem>
                      <SelectItem value="hospedagem">Hospedagem Profissional</SelectItem>
                      <SelectItem value="verticalpay">VerticalPay</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 font-medium">
                    Mensagem (Opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva brevemente sua necessidade"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="bg-zinc-900 border-zinc-600 text-white placeholder:text-gray-500 focus:border-[#2f80c3] focus:ring-[#2f80c3]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#2f80c3] to-blue-500 hover:from-[#2674a8] hover:to-blue-600 text-white py-6 text-lg font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
