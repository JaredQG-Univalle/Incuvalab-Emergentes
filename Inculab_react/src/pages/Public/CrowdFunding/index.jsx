import { Rocket, Users, Target, TrendingUp, Award, Clock, ChevronRight } from "lucide-react"

import { Button } from "@/componentsForV0/ui/Button"
import { Progress } from "@/componentsForV0/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentsForV0/ui/tabs"
import { Badge } from "@/componentsForV0/ui/badge"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function CrowdfundingPage() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "EcoAgro - Agricultura Sostenible",
      description:
        "Plataforma que conecta pequeños agricultores con tecnologías sostenibles para aumentar su productividad y reducir el impacto ambiental.",
      image: "/images/Lanzamiento.jpg",
      category: "Sostenibilidad",
      raised: 45000,
      goal: 60000,
      backers: 128,
      daysLeft: 15,
      featured: true,
      status: "active",
    },
    {
      id: 2,
      title: "MediConnect - Salud Digital",
      description:
        "Aplicación que facilita el acceso a consultas médicas remotas para comunidades rurales con conectividad limitada.",
      image: "/images/Lanzamiento.jpg",
      category: "Salud",
      raised: 32000,
      goal: 40000,
      backers: 95,
      daysLeft: 8,
      featured: true,
      status: "active",
    },
    {
      id: 3,
      title: "EduTech Bolivia",
      description:
        "Plataforma educativa que ofrece contenido adaptativo para estudiantes de primaria y secundaria en zonas rurales.",
      image: "/images/Lanzamiento.jpg",
      category: "Educación",
      raised: 28000,
      goal: 35000,
      backers: 76,
      daysLeft: 12,
      featured: false,
      status: "active",
    },
    {
      id: 4,
      title: "ReciclaApp",
      description:
        "Aplicación que incentiva el reciclaje conectando a personas con centros de reciclaje y ofreciendo recompensas.",
      image: "/images/Lanzamiento.jpg",
      category: "Medio Ambiente",
      raised: 18000,
      goal: 25000,
      backers: 64,
      daysLeft: 20,
      featured: false,
      status: "active",
    },
    {
      id: 5,
      title: "ArtesaníaViva",
      description:
        "Marketplace que conecta artesanos bolivianos con mercados internacionales, preservando técnicas tradicionales.",
      image: "/images/Lanzamiento.jpg",
      category: "Cultura",
      raised: 15000,
      goal: 20000,
      backers: 58,
      daysLeft: 18,
      featured: false,
      status: "active",
    },
    {
      id: 6,
      title: "TurismoLocal",
      description: "Plataforma que promueve el turismo comunitario sostenible en regiones poco exploradas de Bolivia.",
      image: "/images/Lanzamiento.jpg",
      category: "Turismo",
      raised: 22000,
      goal: 30000,
      backers: 72,
      daysLeft: 10,
      featured: false,
      status: "active",
    },
    {
      id: 7,
      title: "FinTech Inclusivo",
      description: "Solución financiera para microempresarios sin acceso a servicios bancarios tradicionales.",
      image: "/images/Lanzamiento.jpg",
      category: "Finanzas",
      raised: 50000,
      goal: 50000,
      backers: 142,
      daysLeft: 0,
      featured: false,
      status: "funded",
    },
    {
      id: 8,
      title: "EnergíaSolar",
      description: "Kit de energía solar asequible para hogares en zonas rurales sin acceso a la red eléctrica.",
      image: "/images/Lanzamiento.jpg",
      category: "Energía",
      raised: 40000,
      goal: 40000,
      backers: 115,
      daysLeft: 0,
      featured: false,
      status: "funded",
    },
  ]

  // Success stories
  const successStories = [
    {
      id: 1,
      title: "AgroTech Bolivia",
      description:
        "Plataforma de IoT para agricultura de precisión que logró recaudar 200% de su meta inicial y ahora opera en tres países.",
      image: "/images/Lanzamiento.jpg",
      raised: 80000,
      goal: 40000,
      year: 2022,
    },
    {
      id: 2,
      title: "Agua Pura",
      description:
        "Sistema de purificación de agua de bajo costo que ha beneficiado a más de 50 comunidades rurales tras su exitosa campaña.",
      image: "/images/Lanzamiento.jpg",
      raised: 65000,
      goal: 50000,
      year: 2021,
    },
    {
      id: 3,
      title: "Textiles Andinos",
      description: "Cooperativa de tejedoras que modernizó su producción y ahora exporta a Europa y Norteamérica.",
      image: "/images/Lanzamiento.jpg",
      raised: 45000,
      goal: 30000,
      year: 2023,
    },
  ]

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

          <div className="container relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Financiamiento Colectivo</h1>
                <p className="text-xl text-white/90 max-w-2xl mb-8">
                  Apoya proyectos innovadores con impacto social y ambiental. Juntos podemos transformar ideas en
                  soluciones para Bolivia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90 h-12 px-8">
                    Explorar Proyectos
                  </Button>
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-12 px-8"
                  >
                    Presentar Proyecto
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white/10 rounded-full"></div>
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="p-1">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <img
                        src="/images/univalleBolivia.jpg"
                        alt="Crowdfunding"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Proyectos Destacados</h2>
              <p className="text-lg text-gray-700">
                Descubre proyectos innovadores que están transformando Bolivia y necesitan tu apoyo para hacerse
                realidad.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#880043] text-white border-none">{project.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-700 mb-6">{project.description}</p>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">
                            Bs. {project.raised.toLocaleString()} recaudados de Bs. {project.goal.toLocaleString()}
                          </span>
                          <span className="text-[#880043] font-medium">
                            {Math.round((project.raised / project.goal) * 100)}%
                          </span>
                        </div>
                        <Progress value={(project.raised / project.goal) * 100} className="h-2 bg-gray-200" />
                      </div>
                      <div className="flex justify-between mb-6">
                        <div className="flex items-center text-gray-700">
                          <Users className="h-5 w-5 mr-2 text-[#66b5cb]" />
                          <span>{project.backers} patrocinadores</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="h-5 w-5 mr-2 text-[#66b5cb]" />
                          <span>{project.daysLeft} días restantes</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button className="bg-[#880043] text-white hover:bg-[#880043]/90">Apoyar Proyecto</Button>
                        <Button variant="outline" className="text-[#880043] border-[#880043] hover:bg-[#880043]/10">
                          Más Información
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-[#880043]">Todos los Proyectos</h2>
              <div className="flex gap-4">
                <Button variant="outline" className="border-[#880043] text-[#880043]">
                  Filtrar
                </Button>
                <Button variant="outline" className="border-[#880043] text-[#880043]">
                  Ordenar
                </Button>
              </div>
            </div>

            <Tabs defaultValue="active" className="mb-12">
              <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="active" className="text-base px-6 py-3">
                  Activos
                </TabsTrigger>
                <TabsTrigger value="funded" className="text-base px-6 py-3">
                  Financiados
                </TabsTrigger>
                <TabsTrigger value="all" className="text-base px-6 py-3">
                  Todos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => project.status === "active")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="funded" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => project.status === "funded")
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="outline" className="border-[#880043] text-[#880043]">
                Cargar Más Proyectos
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">¿Cómo Funciona?</h2>
              <p className="text-lg text-gray-700">
                Nuestro proceso de crowdfunding está diseñado para maximizar el éxito de los proyectos y garantizar
                transparencia para los patrocinadores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Rocket className="h-8 w-8 text-white" />,
                  title: "Presenta tu Proyecto",
                  description:
                    "Completa el formulario con los detalles de tu idea, objetivos, presupuesto y recompensas para los patrocinadores.",
                  color: "#880043",
                },
                {
                  icon: <Target className="h-8 w-8 text-white" />,
                  title: "Revisión y Aprobación",
                  description:
                    "Nuestro equipo evalúa la viabilidad y el impacto potencial del proyecto antes de su publicación.",
                  color: "#66b5cb",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-white" />,
                  title: "Campaña de Financiamiento",
                  description:
                    "Durante 30-60 días, promocionas tu proyecto y recibes apoyo de la comunidad para alcanzar tu meta.",
                  color: "#8d8d8d",
                },
                {
                  icon: <Award className="h-8 w-8 text-white" />,
                  title: "Implementación",
                  description:
                    "Una vez financiado, recibes los fondos y comienzas a implementar tu proyecto con nuestro apoyo.",
                  color: "#f8c630",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Historias de Éxito</h2>
              <p className="text-lg text-gray-700">
                Conoce proyectos que lograron su financiamiento y ahora están generando un impacto positivo en la
                sociedad.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img src={story.image || "/placeholder.svg"} alt={story.title} className="object-cover w-full h-full" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#66b5cb] text-white border-none">{story.year}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-gray-700 mb-4">{story.description}</p>
                    <div className="flex items-center text-[#880043] font-medium mb-4">
                      <span>
                        Recaudó Bs. {story.raised.toLocaleString()} ({Math.round((story.raised / story.goal) * 100)}% de
                        la meta)
                      </span>
                    </div>
                    <a href="#" className="text-[#880043] font-medium flex items-center hover:underline">
                      Leer la historia completa
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#880043]">Preguntas Frecuentes</h2>
                <div className="space-y-6">
                  {[
                    {
                      question: "¿Quién puede presentar un proyecto?",
                      answer:
                        "Cualquier emprendedor, organización o colectivo con una idea innovadora que genere impacto social, ambiental o económico en Bolivia.",
                    },
                    {
                      question: "¿Qué sucede si no alcanzo mi meta de financiamiento?",
                      answer:
                        "Trabajamos con el modelo de 'todo o nada'. Si no alcanzas tu meta, los fondos son devueltos a los patrocinadores. Esto garantiza que solo se financien proyectos viables.",
                    },
                    {
                      question: "¿Qué comisión cobra IncuvaLab?",
                      answer:
                        "IncuvaLab cobra una comisión del 7% sobre el monto recaudado solo en proyectos exitosos, para cubrir los costos operativos y de la plataforma.",
                    },
                    {
                      question: "¿Cómo se garantiza la transparencia?",
                      answer:
                        "Los proyectos deben presentar informes periódicos sobre el uso de los fondos y el avance en la implementación, que son compartidos con los patrocinadores.",
                    },
                    {
                      question: "¿Puedo apoyar proyectos desde el extranjero?",
                      answer:
                        "Sí, aceptamos contribuciones internacionales a través de diversos métodos de pago, incluyendo tarjetas de crédito y transferencias.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#880043]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#66b5cb]/10 rounded-full"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/univalleBolivia.jpg"
                    alt="Crowdfunding FAQ"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-[#880043] to-[#4a8fa3] rounded-2xl p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">¿Tienes una idea innovadora?</h2>
                  <p className="text-xl mb-8">
                    Presenta tu proyecto y obtén el financiamiento que necesitas para hacerlo realidad. Nuestro equipo
                    te guiará en cada paso del proceso.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90 h-12 px-8">
                      Presentar Proyecto
                    </Button>
                    <Button
                      size="lg"
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-12 px-8"
                    >
                      Agendar Asesoría
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img
                    src="/images/univalleBolivia.jpg"
                    alt="Presenta tu Proyecto"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover w-full h-full" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#880043] text-white border-none">{project.category}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Bs. {project.raised.toLocaleString()}</span>
            <span className="text-[#880043] font-medium">{Math.round((project.raised / project.goal) * 100)}%</span>
          </div>
          <Progress value={(project.raised / project.goal) * 100} className="h-2 bg-gray-200" />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center text-gray-700 text-sm">
            <Users className="h-4 w-4 mr-1 text-[#66b5cb]" />
            <span>{project.backers}</span>
          </div>
          <div className="flex items-center text-gray-700 text-sm">
            <Clock className="h-4 w-4 mr-1 text-[#66b5cb]" />
            <span>{project.daysLeft > 0 ? `${project.daysLeft} días` : "Financiado"}</span>
          </div>
          <Button variant="outline" size="sm" className="text-[#880043] border-[#880043] hover:bg-[#880043]/10">
            Ver
          </Button>
        </div>
      </div>
    </div>
  )
}