import { CheckCircle, LightbulbIcon, Trophy, Target } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/componentsForV0/ui/Button"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function QuienesSomosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#880043] to-[#4a8fa3]"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-5"></div>
          {/* Replace the curved SVG with a simple diagonal line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          ></div>

          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Quiénes Somos</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Conoce más sobre IncuvaLab, la incubadora de innovación y emprendimiento de la Universidad del Valle.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#880043]">Nuestra Historia</h2>
                <p className="text-lg text-gray-700 mb-6">
                  IncuvaLab nace en 2021 como una iniciativa de la Universidad del Valle para fomentar la cultura de
                  innovación y emprendimiento entre estudiantes, docentes y la comunidad en general. Desde entonces,
                  hemos trabajado incansablemente para convertir ideas innovadoras en proyectos de impacto real.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Bajo la guía de docentes, coordinadores y directores de la Facultad de Ciencias Empresariales, 
                  IncuvaLab se ha consolidado como un espacio de creación, experimentación y desarrollo de
                  soluciones a problemas reales de nuestra sociedad.
                </p>
                <p className="text-lg text-gray-700">
                  Hoy, IncuvaLab es reconocido como un actor clave en el ecosistema emprendedor boliviano, conectando
                  talento, conocimiento, recursos y oportunidades para potenciar el desarrollo económico y social del
                  país.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#880043]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#66b5cb]/10 rounded-full"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/IncubadoraLab.png"
                    alt="Equipo IncuvaLab"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Misión, Visión y Valores</h2>
              <p className="text-lg text-gray-700">
                Nuestro propósito es claro: transformar ideas en soluciones de impacto para Bolivia y el mundo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 rounded-full bg-[#880043]/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#880043]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#880043]">Misión</h3>
                <p className="text-gray-700">
                  Potenciar el talento innovador y emprendedor de la comunidad universitaria y la sociedad boliviana,
                  brindando herramientas, conocimientos y recursos para transformar ideas en emprendimientos sostenibles
                  y de alto impacto.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 rounded-full bg-[#66b5cb]/10 flex items-center justify-center mb-6">
                  <LightbulbIcon className="h-8 w-8 text-[#66b5cb]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#66b5cb]">Visión</h3>
                <p className="text-gray-700">
                  Ser un referente en generación de emprendimiento universitario en Bolivia,
                  generando un ecosistema dinámico que contribuya significativamente al desarrollo económico y social
                  del país.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 rounded-full bg-[#8d8d8d]/10 flex items-center justify-center mb-6">
                  <Trophy className="h-8 w-8 text-[#8d8d8d]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#8d8d8d]">Valores</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Innovación constante</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compromiso con la excelencia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Colaboración y trabajo en equipo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Responsabilidad social</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integridad y ética</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Nuestro Equipo</h2>
              <p className="text-lg text-gray-700">
                Contamos con un equipo multidisciplinario de profesionales comprometidos con la innovación y el
                emprendimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Cecilia Jacobs",
                  position: "Directora NAE",
                  image: "/images/DirectoraCeciliaJacobs.png",
                },
                {
                  name: "Alejandra Buitrago",
                  position: "Coordinadora Incuva Lab",
                  image: "/images/CoordinadoraIncuvaLab.jpg",
                },
                {
                  name: "Wilmer Medrano",
                  position: "Mentor Senior",
                  image: "/images/MentorWilmerMedrano.jpeg",
                },
                {
                  name: "Jorge Andrew",
                  position: "Mentor Senior",
                  image: "/images/MentorJorgeAndrew.jpg",
                },
               
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <img src={member.image || "/placeholder.svg"} alt={member.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-[#66b5cb] mb-4">{member.position}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-[#880043]">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#66b5cb]">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#880043]">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Nuestra Trayectoria</h2>
              <p className="text-lg text-gray-700">
                Un vistazo a los hitos más importantes en la historia de IncuvaLab.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#880043]/20"></div>

              {[
                {
                  year: "2021",
                  title: "Fundación de Incuva Lab",
                  description:
                    "Nace IncuvaLab como iniciativa de la Universidad del Valle para fomentar la innovación y el emprendimiento.",
                  align: "right",
                },
                {
                  year: "2022",
                  title: "Primer DemoDay Incuva Lab",
                  description: "Primera Presentación de proyectos de estudiantes de la primera y segunda generación de incubados.",
                  align: "left",
                },
                {
                  year: "2023",
                  title: "Primeros Ajustes a la Metodología de Incubación",
                  description: "Transformación de la metodología semestral a una metodología anual.",
                  align: "right",
                },
                {
                  year: "2023",
                  title: "Expansión de la red de mentores",
                  description: "Integración de nuevos mentores especializados en la incubadora.",
                  align: "left",
                },
                {
                  year: "2023",
                  title: "Lanzamiento del programa partners",
                  description: "Establecimiento de alianzas entre estudiantes emprendedores y tesistas.",
                  align: "right",
                },
                {
                  year: "2023",
                  title: "Lanzamiento de Incuvacast",
                  description: "Creación del podcast y canal de contenidos sobre innovación y emprendimiento.",
                  align: "left",
                },
                {
                  year: "2024",
                  title: "Reformulación y relanzamiento del Plan Incuva Lab a nivel nacional",
                  description:
                    "Integración de una metodología formal a nivel nacional con diferentes direcciones de carreras.",
                  align: "right",
                },
              ].map((item, index) => (
                <div key={index} className="relative mb-16">
                  <div
                    className={`flex items-center justify-center ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    } md:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md relative">
                      {/* Year bubble */}
                      <div className="absolute top-6 -ml-8 md:ml-0 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-full md:-left-8 bg-[#880043] text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                        {item.year}
                      </div>
                      <div className="ml-10 md:ml-0">
                        <h3 className="text-xl font-bold mb-2 text-[#880043]">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-[#880043] to-[#4a8fa3] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">¿Quieres ser parte de IncuvaLab?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Únete a nuestra comunidad de innovadores y emprendedores. Juntos podemos transformar ideas en soluciones
                de impacto.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contacts">
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-12 px-8"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}