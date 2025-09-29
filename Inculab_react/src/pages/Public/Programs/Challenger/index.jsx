import { ArrowLeft, Trophy, CheckCircle, CalendarDays, MapPin, Users } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/componentsForV0/ui/Button"
import { Card, CardContent } from "@/componentsForV0/ui/card"
import { Badge } from "@/componentsForV0/ui/badge"
import Navbar from "@/componentsForV0/navbar"

export default function ChallengerProgramPage() {
  // Sample challenges data
  const challenges = [
    {
      id: 1,
      title: "Hackathon: Soluciones para el Agua",
      description:
        "48 horas para desarrollar soluciones tecnológicas que mejoren el acceso y la calidad del agua en Bolivia.",
      image: "/images/hackathon.jpg",
      startDate: "10 Junio, 2025",
      endDate: "12 Junio, 2025",
      location: "Campus Univalle, Santa Cruz",
      prizes: "Bs. 20,000 en premios",
      participants: 150,
      status: "upcoming",
      featured: true,
      category: "Hackathon",
    },
    {
      id: 2,
      title: "Climate Tech Challenge",
      description:
        "Competencia para startups con soluciones innovadoras que aborden el cambio climático y promuevan la sostenibilidad.",
      image: "/images/climateTech.jpg",
      startDate: "1 Julio, 2025",
      endDate: "1 Septiembre, 2025",
      location: "Virtual + Demo Day Presencial",
      prizes: "Bs. 50,000 en premios + Incubación",
      participants: 80,
      status: "upcoming",
      featured: true,
      category: "Competencia",
    },
    {
      id: 3,
      title: "Startup Weekend Bolivia",
      description:
        "54 horas para crear una startup desde cero. Forma tu equipo, valida tu idea y presenta tu proyecto ante un jurado experto.",
      image: "/placeholder.svg?height=300&width=500&text=Startup Weekend",
      startDate: "15 Agosto, 2025",
      endDate: "17 Agosto, 2025",
      location: "Campus Univalle, La Paz",
      prizes: "Bs. 15,000 en premios + Mentoría",
      participants: 120,
      status: "upcoming",
      featured: false,
      category: "Hackathon",
    },
    {
      id: 4,
      title: "HealthTech Innovation",
      description:
        "Desafío para desarrollar soluciones tecnológicas que mejoren el acceso y la calidad de los servicios de salud en Bolivia.",
      image: "/placeholder.svg?height=300&width=500&text=HealthTech",
      startDate: "1 Septiembre, 2025",
      endDate: "30 Octubre, 2025",
      location: "Virtual + Demo Day Presencial",
      prizes: "Bs. 30,000 en premios + Piloto con Hospital",
      participants: 60,
      status: "upcoming",
      featured: false,
      category: "Competencia",
    },
    {
      id: 5,
      title: "FinTech Bootcamp",
      description:
        "Bootcamp intensivo para desarrollar soluciones financieras innovadoras que promuevan la inclusión financiera.",
      image: "/placeholder.svg?height=300&width=500&text=FinTech",
      startDate: "5 Octubre, 2025",
      endDate: "10 Octubre, 2025",
      location: "Campus Univalle, Santa Cruz",
      prizes: "Bs. 25,000 en premios + Mentoría",
      participants: 40,
      status: "upcoming",
      featured: false,
      category: "Bootcamp",
    },
  ]

  // Past winners
  const pastWinners = [
    {
      id: 1,
      name: "Huk kallpalla",
      description:
        "Empresa de gestión y recolección de residuos organicos para creación de compostaje.",
      image: "/images/challenger.png",
      year: 2024,
      challenge: "Medwaves",
      prize: "Primer Lugar",
    },
    {
      id: 2,
      name: "ChocoHorny",
      description:
        "Chocolates con rellenos especiales y sabores inovadores.",
      image: "/images/chocoHorny.png",
      year: 2024,
      challenge: "Banco de Desarrollo Productivo",
      prize: "Primer Lugar ",
    },
    
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16" style={{ backgroundColor: "#8d8d8d10" }}>
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#8d8d8d]/20 p-4 rounded-full">
                <Trophy className="h-8 w-8 text-[#8d8d8d]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#8d8d8d]">Challenger</h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl">
              Competencias y desafíos que impulsan la innovación y premian las mejores soluciones a problemas reales.
            </p>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#880043]">Acerca del Programa</h2>
                <p className="text-lg text-gray-700 mb-8">
                  El programa Challenger te prepara para la participación en competencias, hackathons y desafíos de 
                  innovación que invitan a los emprendedores a desarrollar soluciones creativas para problemas reales.
                  Estos eventos no solo fomentan la innovación y el pensamiento disruptivo, sino que también ofrecen 
                  premios, reconocimiento y oportunidades de financiamiento para los proyectos más destacados.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Los participantes tendrán asesoría para diseño de pitch ganadores, practicas con el idioma inglés, 
                  gestión de sus equipos de trabajo y ajustes en sus propuestas de modelos de negocio.          
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#880043]">Beneficios</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Oportunidad de ganar premios y reconocimientos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Exposición ante potenciales inversionistas y aliados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Retroalimentación de expertos sobre tu solución</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Desarrollo de habilidades de trabajo en equipo y bajo presión</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Posibilidad de convertir tu solución en un negocio viable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acceso a mentoría especializada durante y después del desafío</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#880043]">Requisitos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Inscripción del equipo completo (según requisitos de cada desafío)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cumplimiento de los plazos y entregables establecidos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Participación en todas las etapas del desafío</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Presentación final ante el jurado (para finalistas)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Compromiso con los términos y condiciones de cada competencia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <img
                    src="/images/challenger1.jpeg"
                    alt="Programa Challenger"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Card className="shadow-md mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#880043]">Tipos de Desafíos</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Hackathons</h4>
                        <p className="text-sm text-gray-700">
                          Eventos intensivos de 24-72 horas donde equipos multidisciplinarios desarrollan soluciones
                          tecnológicas para problemas específicos.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Competencias de Startups</h4>
                        <p className="text-sm text-gray-700">
                          Concursos de mayor duración (1-3 meses) donde startups en etapa temprana compiten por premios
                          y oportunidades de inversión.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Bootcamps de Innovación</h4>
                        <p className="text-sm text-gray-700">
                          Programas intensivos de 5-10 días que combinan formación, desarrollo de producto y
                          competencia.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Desafíos Corporativos</h4>
                        <p className="text-sm text-gray-700">
                          Retos lanzados por empresas que buscan soluciones innovadoras a problemas específicos de su
                          industria.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#880043]">¿Interesado en este programa?</h3>
                    <p className="text-gray-700 mb-6">
                      Explora nuestros próximos desafíos y competencias, y registra a tu equipo para participar.
                    </p>
                    <Button className="w-full bg-[#880043] text-white hover:bg-[#880043]/80">Ver Próximos Desafíos</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Desafíos Destacados</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Explora nuestros próximos desafíos de innovación y prepárate para participar con tu equipo.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {challenges
                .filter((challenge) => challenge.featured)
                .map((challenge) => (
                  <Card key={challenge.id} className="overflow-hidden h-full">
                    <div className="relative h-64">
                      <img
                        src={challenge.image || "/placeholder.svg"}
                        alt={challenge.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#8d8d8d] text-white border-none">{challenge.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                      <p className="text-gray-700 mb-6">{challenge.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start">
                          <CalendarDays className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Fechas</p>
                            <p className="text-gray-700">
                              {challenge.startDate} - {challenge.endDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Lugar</p>
                            <p className="text-gray-700">{challenge.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Trophy className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Premios</p>
                            <p className="text-gray-700">{challenge.prizes}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Participantes</p>
                            <p className="text-gray-700">Máximo {challenge.participants}</p>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-[#880043] text-white hover:bg-[#880043]/90 w-full">Participar</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Past Winners */}
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Ganadores Anteriores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pastWinners.map((winner) => (
                <Card key={winner.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img src={winner.image || "/placeholder.svg"} alt={winner.name} className="object-cover w-full h-full" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{winner.name}</h3>
                    <p className="text-gray-700 mb-4">{winner.description}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      {winner.challenge} - {winner.year}
                    </p>
                    <Badge className="bg-[#880043] text-white border-none">{winner.prize}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}