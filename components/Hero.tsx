"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wifi,
  Settings,
  MessageSquare,
  ShoppingCart,
  Truck,
  Server,
  CreditCard,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const serviceCards = [
  {
    icon: ShoppingCart,
    title: "Shopping Virtual",
    description: "Vitrine online para toda região",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Truck,
    title: "Logística",
    description: "Gestão completa de entregas",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Automação de vendas 24/7",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Settings,
    title: "Gestão",
    description: "Sistema integrado completo",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Wifi,
    title: "Internet",
    description: "Conexão estável e veloz",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Hospedagem",
    description: "Servidores seguros e rápidos",
    gradient: "from-indigo-500 to-blue-600",
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232f80c3%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2f80c3]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#2f80c3]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl mt-4">
            <div className="space-y-6">
              <Badge className="bg-[#2f80c3]/20 text-[#2f80c3] border-[#2f80c3]/30 hover:bg-[#2f80c3]/30 text-sm px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
                Soluções Integradas para seu Negócio
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance">
                Tecnologia que{" "}
                <span className="bg-gradient-to-r from-[#2f80c3] via-[#4a9ad6] to-[#2f80c3] bg-clip-text text-transparent">
                  impulsiona
                </span>{" "}
                resultados
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-pretty">
                Oferecemos um ecossistema completo de tecnologia, desde infraestrutura até automação de vendas.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#2f80c3] to-[#4a9ad6] hover:from-[#2570a8] hover:to-[#2f80c3] text-white px-8 py-6 text-lg shadow-lg hover:shadow-[#2f80c3]/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                Conhecer Soluções
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-gray-400">Atendimento personalizado • Sem compromisso • Suporte local</p>
            </div>
          </div>

          <div className="relative mt-4">
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-[2fr_1fr] grid-rows-[repeat(4,minmax(120px,1fr))] gap-4 max-w-3xl">
              {/* VerticalPay Card - Spans 3 rows */}
              <div className="row-span-3 animate-fade-in-up">
                <Card className="h-full bg-gradient-to-br from-[#2f80c3] via-[#3a8bc9] to-[#2570a8] text-white shadow-2xl border-0 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[#2f80c3]/50">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <CreditCard className="w-7 h-7 text-white" />
                        </div>
                        <Badge className="bg-emerald-400 text-emerald-950 font-semibold border-0 shadow-lg">
                          Destaque
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold mb-2">VerticalPay</h3>
                        <p className="text-blue-100 font-medium">Serviço de Pagamentos</p>
                      </div>

                      <p className="text-sm text-blue-50 leading-relaxed">
                        Potencialize suas vendas com as melhores taxas e tecnologia de ponta em maquininhas.
                      </p>

                      <Button
                        variant="secondary"
                        className="bg-white text-[#2f80c3] hover:bg-gray-100 w-full font-semibold shadow-lg group"
                        onClick={() => window.open("https://verticalpay.com.br/", "_blank")}
                      >
                        Conhecer VerticalPay
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>Taxas Competitivas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>Suporte 24/7</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>Setup Rápido</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span>Sem Mensalidade</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - 3 Service Cards Stacked */}
              {serviceCards.slice(0, 3).map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="service-card group"
                    style={{
                      animationDelay: `${0.2 + index * 0.1}s`,
                    }}
                  >
                    <Card className="h-full bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2f80c3]/20 hover:scale-105 hover:z-50 cursor-pointer hover:border-[#2f80c3]/50">
                      <CardContent className="p-4 h-full flex items-center">
                        <div className="flex items-center gap-3 w-full">
                          <div
                            className={`w-11 h-11 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-white text-sm mb-0.5">{service.title}</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}

              <div className="grid grid-cols-2 gap-4">
                {/* Gestão Card */}
                <div
                  className="service-card group"
                  style={{
                    animationDelay: "0.5s",
                  }}
                >
                  <Card className="h-full bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2f80c3]/20 hover:scale-105 hover:z-50 cursor-pointer hover:border-[#2f80c3]/50">
                    <CardContent className="p-4 h-full flex items-center">
                      <div className="flex flex-col items-center gap-2 w-full text-center">
                        <div
                          className={`w-11 h-11 bg-gradient-to-br ${serviceCards[3].gradient} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Settings className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5">{serviceCards[3].title}</h4>
                          <p className="text-xs text-gray-400 leading-tight">{serviceCards[3].description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Internet Card */}
                <div
                  className="service-card group"
                  style={{
                    animationDelay: "0.6s",
                  }}
                >
                  <Card className="h-full bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2f80c3]/20 hover:scale-105 hover:z-50 cursor-pointer hover:border-[#2f80c3]/50">
                    <CardContent className="p-4 h-full flex items-center">
                      <div className="flex flex-col items-center gap-2 w-full text-center">
                        <div
                          className={`w-11 h-11 bg-gradient-to-br ${serviceCards[4].gradient} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Wifi className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-white text-xs mb-0.5">{serviceCards[4].title}</h4>
                          <p className="text-xs text-gray-400 leading-tight">{serviceCards[4].description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hospedagem Card - Right column bottom */}
              <div
                className="service-card group"
                style={{
                  animationDelay: "0.7s",
                }}
              >
                <Card className="h-full bg-slate-900/80 backdrop-blur-sm shadow-lg border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2f80c3]/20 hover:scale-105 hover:z-50 cursor-pointer hover:border-[#2f80c3]/50">
                  <CardContent className="p-4 h-full flex items-center">
                    <div className="flex items-center gap-3 w-full">
                      <div
                        className={`w-11 h-11 bg-gradient-to-br ${serviceCards[5].gradient} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Server className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-white text-sm mb-0.5">{serviceCards[5].title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{serviceCards[5].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              <div className="w-full max-w-[380px] mx-auto animate-fade-in-up">
                <Card className="bg-gradient-to-br from-[#2f80c3] via-[#3a8bc9] to-[#2570a8] text-white shadow-2xl border-0">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <CreditCard className="w-7 h-7 text-white" />
                        </div>
                        <Badge className="bg-emerald-400 text-emerald-950 font-semibold border-0 shadow-lg">
                          Destaque
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold mb-2">VerticalPay</h3>
                        <p className="text-blue-100 font-medium">Serviço de Pagamentos</p>
                      </div>

                      <p className="text-sm text-blue-50 leading-relaxed">
                        Potencialize suas vendas com as melhores taxas e tecnologia de ponta em maquininhas.
                      </p>

                      <Button
                        variant="secondary"
                        className="bg-white text-[#2f80c3] hover:bg-gray-100 w-full font-semibold shadow-lg group"
                        onClick={() => window.open("https://www.verticalpay.com.br", "_blank")}
                      >
                        Conhecer VerticalPay
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span>Taxas Competitivas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span>Suporte 24/7</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span>Setup Rápido</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span>Sem Mensalidade</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .service-card {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </section>
  )
}
