"use client"

import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Logo */}
          <div className="relative flex justify-center items-center">
            <div className="relative overflow-hidden rounded-2xl p-8 bg-zinc-800/50 border border-zinc-700/50 shadow-2xl flex justify-center items-center">
              <Image
                src="/Logo_branco.png"
                alt="Vertical Tecnologia Logo"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                <span className="bg-gradient-to-r from-[#2f80c3] to-[#1e5a8f] bg-clip-text text-transparent">
                  Parceiros
                </span>{" "}
                na sua evolução tecnológica
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#2f80c3] to-[#1e5a8f] rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
              <p>
                A Vertical Tecnologia nasceu para descomplicar a tecnologia para o pequeno e médio empresário. Sabemos
                que você precisa de soluções que funcionem, um preço que caiba no seu orçamento e, acima de tudo, um
                parceiro em quem possa confiar.
              </p>

              <p>
                Mais do que fornecedores, somos especialistas dedicados a entender seu negócio e oferecer as ferramentas
                certas para o seu crescimento, com um atendimento próximo e personalizado que faz toda a diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
