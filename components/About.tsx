"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Logo */}
          <div className="relative flex justify-center items-center"> {/* Adicionado flexbox para centralizar */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-white shadow-2xl flex justify-center items-center"> {/* Adicionado padding e fundo branco para a logo se destacar */}
              <Image
                src="/Logo_oficial.png" // Certifique-se de que este é o caminho correto para a sua logo
                alt="Vertical Tecnologia Logo"
                width={600} // Ajuste o tamanho da largura conforme necessário
                height={400} // Ajuste o tamanho da altura conforme necessário (mantendo proporção)
                className="object-contain" // Garante que a imagem se ajuste sem cortar
              />
              {/* Removido o overlay de gradiente, pois não é mais necessário para a logo */}
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Parceiros
                </span>{" "}
                na sua evolução tecnológica
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                A Vertical Tecnologia nasceu para descomplicar a tecnologia para
                o pequeno e médio empresário. Sabemos que você precisa de
                soluções que funcionem, um preço que caiba no seu orçamento e,
                acima de tudo, um parceiro em quem possa confiar.
              </p>

              <p>
                Mais do que fornecedores, somos especialistas dedicados a
                entender seu negócio e oferecer as ferramentas certas para o seu
                crescimento, com um atendimento próximo e personalizado que faz
                toda a diferença.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}