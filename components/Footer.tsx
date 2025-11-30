"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/Logo_branco.png"
              alt="Vertical Tecnologia"
              width={150}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformando negócios através da tecnologia, com soluções personalizadas
              e atendimento de excelência.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Serviços</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Internet Empresarial</li>
              <li>Shopping Virtual Regional</li>
              <li>Sistemas de Gestão</li>
              <li>Automações WhatsApp</li>
              <li>Logística e Entregas</li>
              <li>Hospedagem Profissional</li>
            </ul>
          </div>

          {/* VerticalPay */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">VerticalPay</h3>
            <p className="text-sm text-slate-400">
              Soluções completas de pagamento para seu negócio crescer.
            </p>
            <a
              href="https://verticaltecpay.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Conhecer VerticalPay
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@verticaltecnologia.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(67) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Campo Grande, MS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2025 Vertical Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

