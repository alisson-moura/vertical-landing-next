"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wifi, 
  ShoppingCart, 
  Settings, 
  MessageSquare, 
  Truck, 
  Server 
} from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Infraestrutura de Internet Empresarial",
    description: "Conexão estável e de alta velocidade para sua empresa nunca parar.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    title: "Shopping Virtual Regional (Marketplace)",
    description: "Sua vitrine online para toda a região. Venda para mais clientes sem sair da sua cidade.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Settings,
    title: "Sistemas de Gestão e Integração",
    description: "Organize seu estoque, vendas e redes sociais em um só lugar. Menos trabalho manual, mais inteligência para o seu negócio.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "Automações de Vendas via WhatsApp",
    description: "Venda mais e atenda melhor, 24 horas por dia. Deixe que a tecnologia trabalhe por você.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Truck,
    title: "Sistema de Logística e Entregas",
    description: "Gerencie e otimize suas entregas com um sistema feito para a realidade da nossa região.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Server,
    title: "Hospedagem Profissional de Sistemas e Dados",
    description: "Segurança e performance para seus sistemas e informações mais importantes.",
    gradient: "from-teal-500 to-blue-500"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Soluções Integradas
            </span>{" "}
            para cada desafio do seu negócio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de tecnologia, desde infraestrutura até automação de vendas.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Exclusive Benefit Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Benefício Exclusivo</h3>
                <p className="text-xl text-blue-100">
                  Se o cliente contratar o serviço de internet ele não paga instalação
                </p>
                <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">💰 Economia Garantida</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

