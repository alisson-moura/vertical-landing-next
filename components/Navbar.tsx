"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg border-b border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/Logo_branco.png" alt="Vertical Tecnologia" width={120} height={40} className="h-8 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-300 hover:text-[#2f80c3] font-medium transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-300 hover:text-[#2f80c3] font-medium transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-300 hover:text-[#2f80c3] font-medium transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-[#2f80c3] to-[#4a9ad6] hover:from-[#2570a8] hover:to-[#2f80c3] text-white shadow-lg hover:shadow-[#2f80c3]/50 transition-all"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#2f80c3] hover:bg-slate-800 rounded-md font-medium transition-colors"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#2f80c3] hover:bg-slate-800 rounded-md font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#2f80c3] hover:bg-slate-800 rounded-md font-medium transition-colors"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full bg-gradient-to-r from-[#2f80c3] to-[#4a9ad6] hover:from-[#2570a8] hover:to-[#2f80c3] text-white shadow-lg"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
