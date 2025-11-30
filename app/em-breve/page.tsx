"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Construction } from "lucide-react"
import Link from "next/link"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Navbar />

            <main className="flex-grow flex items-center justify-center p-4 pt-24 mb-20 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232f80c3%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2f80c3]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#2f80c3]/5 rounded-full blur-3xl animate-pulse delay-700"></div>

                <Card className="max-w-md w-full bg-slate-900/80 backdrop-blur-md border-slate-800 shadow-2xl relative z-10">
                    <CardContent className="p-8 text-center space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#2f80c3] to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-[#2f80c3]/20">
                            <Construction className="w-10 h-10 text-white" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold text-white">Em Construção</h1>
                            <p className="text-gray-400 leading-relaxed">
                                Estamos trabalhando duro para trazer esta novidade para você. Em breve teremos mais informações sobre este
                                serviço.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/">
                                <Button
                                    variant="outline"
                                    className="border-[#2f80c3]/30 text-[#2f80c3] hover:bg-[#2f80c3]/10 hover:text-[#2f80c3] w-full group"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Voltar para o Início
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    )
}
