import { Search, Filter, Star, Briefcase, GraduationCap, Users } from "lucide-react"

import { Button } from "@/componentsForV0/ui/Button"
import { Input } from "@/componentsForV0/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentsForV0/ui/tabs"
import { Badge } from "@/componentsForV0/ui/badge"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function MentoresPage() {
  // Sample mentors data
  const mentors = [
    {
      id: 1,
      name: "Wilmer Medrano",
      position: "Docente Tiempo completo, emprendedor, experto en comercio internacional",
      image: "/images/MentorWilmerMedrano.jpeg",
      expertise: ["Importacion", "Exportacion", "Gestion de Emprendimientos"],
      rating: 0.5,
      sessions: 10,
      category: "Negocios Internacionales",
      bio: "Mentor de emprendimiento y empresas a nivel nacional. Emprendedor internacional.",
    },
    {
      id: 2,
      name: "Jorge Andrew",
      position: "Docente Tiempo completo Univalle",
      image: "/images/MentorJorgeAndrew.jpg",
      expertise: ["Innovacion", "Investigacion", "Liderazgo"],
      rating: 0.5,
      sessions: 5,
      category: "Negocios",
      bio: "Emprendedor proactivo, profesor e investigador, con la firme convicción de que el progreso requiere compromiso y perseverancia. Mi formación está relacionada con la industria, las ciencias empresariales y la innovación.",
    },
    {
      id: 3,
      name: "Jorge Schmidt",
      position: "Lider EnAktion Enterprises",
      image: "/images/MentorJorgeSchmidt.png",
      expertise: ["Liderazgo", "Innovacion y desarrollo", "Marketing", "Planificacion estrategica"],
      rating: 0.5,
      sessions: 8,
      category: "Estrategia",
      bio: "Especialista en Evolución Empresarial a través de las personas. Mas de 20 años de experiencia en la implantación de prácticas centradas en el cliente, la transformación continua y la incorporación de estrategias de innovación & desarrollo.",
    },
    {
      id: 4,
      name: "Anna Vargas",
      position: "Marketing y Planificacion estrategica",
      image: "/images/MentoraAnnaVargas.jpg",
      expertise: ["Marketing de Servicios", "Marketing", "Ventas"],
      rating: 0.5,
      sessions: 6,
      category: "Marketing",
      bio: "Docente tiempo completo Especialista en Marketing y Ventas",
    },
    //{
    //  id: 5,
    //  name: "Javier Torres",
    //  position: "CTO, Software Solutions",
    //  image: "/placeholder.svg?height=300&width=300&text=JT",
    //  expertise: ["Desarrollo de Software", "IA", "Blockchain"],
    //  rating: 4.8,
    //  sessions: 110,
    //  category: "tecnologia",
    //  bio: "Ingeniero de software con especialización en inteligencia artificial y blockchain. Ha liderado equipos de desarrollo en empresas tecnológicas de primer nivel.",
    //},
    //{
    //  id: 6,
    //  name: "Ana Flores",
    //  position: "Consultora de Negocios",
    //  image: "/placeholder.svg?height=300&width=300&text=AF",
    //  expertise: ["Estrategia", "Operaciones", "Escalabilidad"],
    //  rating: 4.7,
    //  sessions: 95,
    //  category: "estrategia",
    //  bio: "Consultora de negocios con experiencia en optimización de procesos y escalabilidad. Ha trabajado con más de 100 empresas en diferentes industrias.",
    //},
    //{
    //  id: 7,
    //  name: "Daniel Vargas",
    //  position: "Director Legal, Lex Consultores",
    //  image: "/placeholder.svg?height=300&width=300&text=DV",
    //  expertise: ["Derecho Empresarial", "Propiedad Intelectual", "Contratos"],
    //  rating: 4.6,
    //  sessions: 65,
    //  category: "legal",
    //  bio: "Abogado especializado en derecho empresarial y propiedad intelectual. Asesora a emprendedores en la protección de sus activos intangibles.",
    //},
    //{
    //  id: 8,
    //  name: "Patricia Morales",
    //  position: "Directora de Innovación, InnovaTech",
    //  image: "/placeholder.svg?height=300&width=300&text=PM",
    //  expertise: ["Innovación", "Design Thinking", "Transformación Digital"],
    //  rating: 4.9,
    //  sessions: 88,
    //  category: "innovacion",
    //  bio: "Experta en metodologías de innovación y transformación digital. Ha facilitado procesos de innovación en empresas de diversos sectores.",
    //},
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
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Mentores</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Conecta con expertos de diversas industrias que te guiarán en tu camino emprendedor.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mentors Listing */}
        <section className="py-12 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <Tabs defaultValue="todos" className="mb-12">
              <TabsList className="flex flex-wrap justify-center mb-8">
                <TabsTrigger value="todos" className="text-base px-6 py-3">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="tecnologia" className="text-base px-6 py-3">
                  Tecnología
                </TabsTrigger>
                <TabsTrigger value="marketing" className="text-base px-6 py-3">
                  Marketing
                </TabsTrigger>
                <TabsTrigger value="finanzas" className="text-base px-6 py-3">
                  Finanzas
                </TabsTrigger>
                <TabsTrigger value="estrategia" className="text-base px-6 py-3">
                  Estrategia
                </TabsTrigger>
                <TabsTrigger value="innovacion" className="text-base px-6 py-3">
                  Innovación
                </TabsTrigger>
              </TabsList>

              <TabsContent value="todos" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {mentors.map((mentor) => (
                    <MentorCard key={mentor.id} mentor={mentor} />
                  ))}
                </div>
              </TabsContent>

              {["tecnologia", "marketing", "finanzas", "estrategia", "innovacion"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mentors
                      .filter((mentor) => mentor.category === category)
                      .map((mentor) => (
                        <MentorCard key={mentor.id} mentor={mentor} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Mentor Spotlight */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Mentores Destacados</h2>
              <p className="text-lg text-gray-700">
                Conoce a algunos de nuestros mentores más solicitados y su impacto en la comunidad emprendedora.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {mentors.slice(0, 2).map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 relative">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium">
                        <Star className="h-4 w-4 mr-1 fill-yellow-500 text-yellow-500" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="ml-3 text-sm text-gray-500">{mentor.sessions} sesiones</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{mentor.name}</h3>
                    <p className="text-[#66b5cb] font-medium mb-4">{mentor.position}</p>
                    <p className="text-gray-700 mb-6">{mentor.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button className="bg-[#880043] text-white hover:bg-[#880043]/90">Agendar Sesión</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Mentor */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#880043]">¿Quieres ser Mentor?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Si eres un profesional con experiencia y te apasiona compartir tus conocimientos para impulsar a
                  nuevos emprendedores, te invitamos a formar parte de nuestra red de mentores.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#880043]/10 p-2 rounded-full mr-4">
                      <Briefcase className="h-6 w-6 text-[#880043]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Comparte tu Experiencia</h3>
                      <p className="text-gray-700">
                        Ayuda a emprendedores a evitar errores comunes y acelerar su crecimiento.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#66b5cb]/10 p-2 rounded-full mr-4">
                      <Users className="h-6 w-6 text-[#66b5cb]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Amplía tu Red</h3>
                      <p className="text-gray-700">Conecta con otros profesionales y expande tu red de contactos.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#8d8d8d]/10 p-2 rounded-full mr-4">
                      <GraduationCap className="h-6 w-6 text-[#8d8d8d]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Aprende Constantemente</h3>
                      <p className="text-gray-700">La mentoría es un proceso de aprendizaje bidireccional.</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#880043] text-white hover:bg-[#880043]/90 h-12 px-8">Postular como Mentor</Button>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#880043]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#66b5cb]/10 rounded-full"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/BOOTCAMP INNOVACIÓN.jpeg"
                    alt="Mentores IncuvaLab"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#880043]">Lo que dicen nuestros emprendedores</h2>
              <p className="text-lg text-gray-700">
                Experiencias de emprendedores que han participado en nuestro programa de mentoría.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Que no se desanimen que cada esfuerzo que pongan en su emprendimiento al final de todo va a valer la pena, que si tu no crees en ti mismo y en las capacidades que tienes no lo lograras.",
                  author: "Nicole Domitila Luján",
                  company: "Ing. en Comercio Int, 7mo Semestre.",
                  image: "/images/YuukiOsito.png",
                },
                {
                  quote:
                    "Les diría que emprender es una experiencia transformadora. Si tienen una idea que puede aportar algo positivo, háganlo realidad. El camino puede ser difícil.",
                  author: "Ariel Torrez Jimenez",
                  company: "Ing. en Comercio Int, 7mo semestre",
                  image: "/images/KaoMiel.png",
                },
                {
                  quote:
                    "Gracias al apoyo y el direccionamiento de Incuva Lab, HUK Kallpalla ha logrado crecer y prosperar, convirtiéndose en referencia indiscutible en la industria del compostaje.",
                  author: "Sebastian Canedo",
                  company: "Estudiante Univalle",
                  image: "/images/HuKallpala.png",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
                  <div className="absolute top-4 right-4 text-6xl text-[#880043]/10 font-serif">"</div>
                  <p className="text-gray-700 mb-8 relative z-10">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#880043]">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
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
              <h2 className="text-3xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Conecta con nuestros mentores y acelera el crecimiento de tu emprendimiento con orientación experta.
              </p>
              <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90 h-12 px-8">
                Solicitar Mentoría
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Mentor Card Component
function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="object-cover w-full h-full" />
        <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 text-sm font-medium flex items-center">
          <Star className="h-4 w-4 mr-1 fill-yellow-500 text-yellow-500" />
          <span>{mentor.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
        <p className="text-[#66b5cb] text-sm mb-3">{mentor.position}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.slice(0, 2).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {skill}
            </Badge>
          ))}
          {mentor.expertise.length > 2 && (
            <Badge variant="outline" className="bg-gray-100">
              +{mentor.expertise.length - 2}
            </Badge>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{mentor.sessions} sesiones</span>
          <Button variant="outline" className="text-[#880043] border-[#880043] hover:bg-[#880043]/10">
            Ver Perfil
          </Button>
        </div>
      </div>
    </div>
  )
}