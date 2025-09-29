import { Calendar, MapPin, Clock, Users, Filter, Search, ChevronRight } from "lucide-react"

import { Button } from "@/componentsForV0/ui/button"
import { Input } from "@/componentsForV0/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentsForV0/ui/tabs"
import { Badge } from "@/componentsForV0/ui/badge"
import { Card, CardContent } from "@/componentsForV0/ui/card"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function EventosPage() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Demo Day 2025",
      description:
        "Presentación de startups finalistas del programa de aceleración ante inversionistas y partners estratégicos.",
      image: "/images/Lanzamiento.jpg",
      date: "15 Abril, 2025",
      time: "15:00 - 19:00",
      location: "Campus Univalle, La Paz",
      category: "Pitch",
      attendees: 120,
      featured: true,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Workshop: Finanzas para Startups",
      description:
        "Taller práctico sobre gestión financiera y captación de inversión para emprendedores en etapa temprana.",
      image: "/images/Lanzamiento.jpg",
      date: "22 Mayo, 2025",
      time: "09:00 - 13:00",
      location: "Campus Univalle, La Paz",
      category: "Workshop",
      attendees: 45,
      featured: true,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Hackathon: Soluciones para el Agua",
      description:
        "48 horas de innovación para desarrollar soluciones tecnológicas que mejoren el acceso y la calidad del agua en Bolivia.",
      image: "/images/Lanzamiento.jpg",
      date: "10-12 Junio, 2025",
      time: "Todo el día",
      location: "Campus Univalle, Santa Cruz",
      category: "Hackathon",
      attendees: 80,
      featured: false,
      status: "upcoming",
    },
    {
      id: 4,
      title: "Conferencia: Tendencias en IA",
      description:
        "Expertos internacionales presentan las últimas tendencias en inteligencia artificial y su aplicación en emprendimientos.",
      image: "/images/Lanzamiento.jpg",
      date: "5 Julio, 2025",
      time: "14:00 - 18:00",
      location: "Campus Univalle, La Paz",
      category: "Conferencia",
      attendees: 150,
      featured: false,
      status: "upcoming",
    },
    {
      id: 5,
      title: "Networking: Emprendedores e Inversionistas",
      description:
        "Espacio de conexión entre emprendedores con proyectos en etapa de crecimiento e inversionistas interesados en startups bolivianas.",
      image: "/images/Lanzamiento.jpg",
      date: "20 Julio, 2025",
      time: "18:00 - 21:00",
      location: "Hotel Los Tajibos, Santa Cruz",
      category: "Networking",
      attendees: 100,
      featured: false,
      status: "upcoming",
    },
    {
      id: 6,
      title: "Taller: Marketing Digital para Startups",
      description: "Estrategias y herramientas de marketing digital para emprendimientos con presupuestos limitados.",
      image: "/images/Lanzamiento.jpg",
      date: "8 Agosto, 2025",
      time: "09:00 - 13:00",
      location: "Campus Univalle, Cochabamba",
      category: "Workshop",
      attendees: 60,
      featured: false,
      status: "upcoming",
    },
    {
      id: 7,
      title: "Startup Weekend Bolivia",
      description:
        "54 horas para crear una startup desde cero. Forma tu equipo, valida tu idea y presenta tu proyecto ante un jurado de expertos.",
      image: "/images/Lanzamiento.jpg",
      date: "15-17 Marzo, 2025",
      time: "Todo el día",
      location: "Campus Univalle, La Paz",
      category: "Competencia",
      attendees: 120,
      featured: false,
      status: "past",
    },
    {
      id: 8,
      title: "Panel: Mujeres en Tecnología",
      description:
        "Líderes femeninas comparten sus experiencias y desafíos en el ecosistema tecnológico y emprendedor.",
      image: "/images/Lanzamiento.jpg",
      date: "8 Marzo, 2025",
      time: "16:00 - 19:00",
      location: "Campus Univalle, La Paz",
      category: "Panel",
      attendees: 90,
      featured: false,
      status: "past",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#880043] to-[#4a8fa3]"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-5"></div>
          {/* Remove the curved SVG and replace with a simple diagonal line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          ></div>

          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Eventos</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Participa en nuestros eventos de innovación y emprendimiento. Conecta, aprende y crece junto a la
                comunidad emprendedora de Bolivia.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 -mt-8 relative z-20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Buscar eventos..." className="pl-10 h-12" />
                </div>
                <div className="flex gap-2">
                  <Button className="bg-[#880043] text-white hover:bg-[#880043]/90 h-12 px-6">Buscar</Button>
                  <Button variant="outline" className="h-12 px-4">
                    <Filter className="h-5 w-5 mr-2" />
                    Filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Eventos Destacados</h2>
              <p className="text-lg text-gray-700">
                No te pierdas nuestros próximos eventos más importantes. Regístrate ahora y asegura tu lugar.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {events
                .filter((event) => event.featured && event.status === "upcoming")
                .map((event) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#880043] text-white border-none">{event.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-700 mb-6">{event.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Fecha</p>
                            <p className="text-gray-700">{event.date}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Hora</p>
                            <p className="text-gray-700">{event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Lugar</p>
                            <p className="text-gray-700">{event.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-5 w-5 mr-2 text-[#66b5cb] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Asistentes</p>
                            <p className="text-gray-700">{event.attendees} registrados</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button className="bg-[#880043] text-white hover:bg-[#880043]/90">Registrarse</Button>
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

        {/* Calendar View */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Calendario de Eventos</h2>
              <p className="text-lg text-gray-700">
                Planifica tu agenda y no te pierdas ninguno de nuestros eventos de innovación y emprendimiento.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="grid grid-cols-7 gap-4 mb-4">
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, index) => (
                  <div key={index} className="text-center font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-4">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = events.some((event) => event.date.includes(`${day} `))
                  return (
                    <div
                      key={day}
                      className={`h-24 border rounded-lg p-2 ${
                        hasEvent ? "border-[#880043] bg-[#880043]/5" : "border-gray-200"
                      } ${day === 15 || day === 22 ? "border-[#880043] bg-[#880043]/5" : ""}`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`font-medium ${hasEvent ? "text-[#880043]" : ""}`}>{day}</span>
                        {hasEvent && <div className="w-2 h-2 rounded-full bg-[#880043]"></div>}
                      </div>
                      {/*{day === 15 && <div className="mt-1 text-xs text-[#880043] font-medium">Demo Day 2025</div>}
                      {day === 22 && <div className="mt-1 text-xs text-[#880043] font-medium">Workshop: Finanzas</div>}*/}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-[#880043] text-white hover:bg-[#880043]/90">Ver Calendario Completo</Button>
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-[#880043]">Todos los Eventos</h2>

            <Tabs defaultValue="upcoming" className="mb-12">
              <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="upcoming" className="text-base px-6 py-3">
                  Próximos
                </TabsTrigger>
                <TabsTrigger value="past" className="text-base px-6 py-3">
                  Pasados
                </TabsTrigger>
                <TabsTrigger value="all" className="text-base px-6 py-3">
                  Todos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events
                    .filter((event) => event.status === "upcoming")
                    .map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events
                    .filter((event) => event.status === "past")
                    .map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Categorías de Eventos</h2>
              <p className="text-lg text-gray-700">
                Explora nuestros diferentes tipos de eventos diseñados para potenciar el ecosistema emprendedor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Workshops",
                  description:
                    "Talleres prácticos sobre habilidades específicas para emprendedores, desde marketing digital hasta finanzas.",
                  image: "/images/Lanzamiento.jpg",
                  color: "#880043",
                },
                {
                  title: "Hackathons",
                  description:
                    "Competencias intensivas de desarrollo para resolver problemas reales mediante soluciones innovadoras.",
                  image: "/images/Lanzamiento.jpg",
                  color: "#66b5cb",
                },
                {
                  title: "Networking",
                  description:
                    "Espacios para conectar con otros emprendedores, mentores, inversionistas y aliados estratégicos.",
                  image: "/images/Lanzamiento.jpg",
                  color: "#8d8d8d",
                },
                {
                  title: "Conferencias",
                  description:
                    "Charlas y paneles con expertos nacionales e internacionales sobre tendencias e innovación.",
                  image: "/images/Lanzamiento.jpg",
                  color: "#f8c630",
                },
              ].map((category, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <div className="relative h-40">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 opacity-60" style={{ backgroundColor: category.color }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <a href="#" className="text-[#880043] font-medium flex items-center hover:underline">
                      Ver eventos
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Event Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Lo Mejor de Nuestros Eventos Pasados</h2>
              <p className="text-lg text-gray-700">
                Revive los momentos más destacados de nuestros eventos anteriores y prepárate para los próximos.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/Lanzamiento.jpg"
                    alt="Startup Weekend 2024"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="bg-[#66b5cb] text-white border-none mb-3">Destacado</Badge>
                    <h3 className="text-2xl font-bold mb-2">Startup Weekend Bolivia 2024</h3>
                    <p className="mb-4">
                      54 horas de innovación, 15 equipos y proyectos increíbles que están transformando Bolivia.
                    </p>
                    <Button className="bg-white text-[#880043] hover:bg-white/90">Ver Galería</Button>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                {[
                  {
                    title: "Demo Day 2024",
                    description: "10 startups presentaron sus soluciones ante más de 50 inversionistas.",
                    image: "/images/Lanzamiento.jpg",
                  },
                  {
                    title: "Conferencia de IA",
                    description:
                      "Expertos internacionales compartieron las últimas tendencias en inteligencia artificial.",
                    image: "/images/Lanzamiento.jpg",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-700 mb-2">{event.description}</p>
                      <a href="#" className="text-[#880043] text-sm font-medium flex items-center hover:underline">
                        Ver más
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Host Your Event */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#880043]">¿Quieres Organizar un Evento?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Si tienes una idea para un evento relacionado con innovación, emprendimiento o tecnología, podemos
                  ayudarte a hacerlo realidad en nuestras instalaciones.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#880043]/10 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#880043]"></div>
                    </div>
                    <p>Espacios modernos y equipados para diferentes formatos de eventos</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#880043]/10 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#880043]"></div>
                    </div>
                    <p>Apoyo en la difusión y convocatoria a través de nuestras redes</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#880043]/10 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#880043]"></div>
                    </div>
                    <p>Asesoría en la planificación y ejecución del evento</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#880043]/10 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#880043]"></div>
                    </div>
                    <p>Conexión con nuestra comunidad de emprendedores e innovadores</p>
                  </div>
                </div>
                <Button className="bg-[#880043] text-white hover:bg-[#880043]/90 h-12 px-8">Solicitar Información</Button>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#880043]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#66b5cb]/10 rounded-full"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/Lanzamiento.jpg"
                    alt="Organiza tu Evento"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-[#880043] to-[#4a8fa3] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Mantente Informado</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe información sobre próximos eventos, convocatorias y
                oportunidades para emprendedores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                />
                <Button className="bg-white text-[#880043] hover:bg-white/90 h-12 px-8">Suscribirse</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Event Card Component
function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#880043] text-white border-none">{event.category}</Badge>
        </div>
        {event.status === "past" && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge className="bg-white/80 text-gray-800 text-lg border-none px-4 py-1">Finalizado</Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-4 w-4 mr-2 text-[#66b5cb]" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="h-4 w-4 mr-2 text-[#66b5cb]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="h-4 w-4 mr-2 text-[#66b5cb]" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-700 text-sm">
            <Users className="h-4 w-4 mr-1 text-[#66b5cb]" />
            <span>{event.attendees} asistentes</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className={
              event.status === "past"
                ? "text-gray-500 border-gray-300 hover:bg-gray-100"
                : "text-[#880043] border-[#880043] hover:bg-[#880043]/10"
            }
          >
            {event.status === "past" ? "Ver Resumen" : "Registrarse"}
          </Button>
        </div>
      </div>
    </div>
  )
}