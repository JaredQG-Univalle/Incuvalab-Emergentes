import { ArrowLeft, Users, CheckCircle, Calendar, Clock, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/componentsForV0/ui/Button"
import { Card, CardContent } from "@/componentsForV0/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/componentsForV0/ui/accordion"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function MentoringProgramPage() {
  // Sample mentors data for this program
  const mentors = [
    {
      name: "Wilmer Medrano",
      position: "Docente Tiempo completo, emprendedor, experto en comercio internacional",
      expertise: ["Importacion", "Exportacion", "Gestion de Emprendimientos"],
      image: "/images/MentorWilmerMedrano.jpeg",
      rating: 4.9,
    },
    {
      name: "Jorge Andrew",
      position: "Docente Tiempo completo Univalle",
      expertise: ["Innovacion", "Investigacion", "Liderazgo"],
      image: "/images/MentorJorgeAndrew.jpg",
      rating: 4.8,
    },
    {
      name: "Jorge Schmidt",
      position: "Lider EnAktion Enterprises",
      expertise: ["Liderazgo", "Innovacion y desarrollo", "Marketing", "Planificacion estrategica"],
      image: "/images/MentorJorgeSchmidt.png",
      rating: 4.7,
    },
  ]

  // Sample schedule for mentoring sessions
  const schedule = [
    {
      date: "23 de Junio, 2025",
      time: "09:00 - 12:00",
      title: "Sesión de Diagnóstico",
      description: "Evaluación inicial de tu proyecto y definición de objetivos",
      location: "Campus Univalle, Cochabamba",
    },
    {
      date: "24 de Junio, 2025",
      time: "09:00 - 12:00",
      title: "Sesiones de Autoconocimiento",
      description: "Revisión del proyecto y su relación con las metas personales",
      location: "Campus Univalle, Cochabamba",
    },
    
  ]

  // Success stories
  const successStories = [
    {
      quote:
        "Les diría que se atrevan a dar el primer paso, aunque parezca difícil o incierto. Tener una idea es el primer paso, pero lo más importante es llevarla a la acción, y la universidad ofrece muchas oportunidades para hacerlo, como la incubadora de empresas.",
      name: "Rassiel Brisa Romero Guzmán",
      company: "Ing. en Comercio Int, 7mo semestre",
      image: "/images/Puppy.png",
    },
    {
      quote:
        "Les diría que emprender un negocio propio no es un juego, es una experiencia desafiante, pero que también puede ser muy emocionante. Se requiere de mucha dedicación, esfuerzo y pasión, pero si realmente quieren hacerlo.",
      name: "Henrique Angelo Nunes Pereira",
      company: "Medicina, 8vo semestre.",
      image: "/images/MadameTestimonio.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16" style={{ backgroundColor: "#66b5cb10" }}>
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#66b5cb]/20 p-4 rounded-full">
                <Users className="h-8 w-8 text-[#66b5cb]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#66b5cb]">Mentoring</h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl">
              Conectamos emprendedores con mentores experimentados que brindan orientación personalizada para superar
              desafíos y potenciar el crecimiento.
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
                  El programa de Mentoring de IncuvaLab ofrece a los emprendedores la oportunidad de recibir orientación
                  personalizada de profesionales con amplia experiencia en diferentes industrias. Nuestros mentores
                  comparten conocimientos, contactos y experiencias para ayudar a los emprendedores a superar
                  obstáculos, identificar oportunidades y acelerar el crecimiento de sus negocios.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Las sesiones de mentoría se desarrollan en tres etapas: preincubación, incubación y lanzamiento del negocio.
                  En este proceso los estudiantes tienen un acompañamiento personalizado por un mentor elegido según su área 
                  de trabajo y la etapa de desarrollo de su idea de negocio. Al finalizar el programa, los estudaintes participan de un
                  DemoDay donde presentan su proyecto a potenciales inversionistas. Además cuentan con la posibilidad de construir 
                  una spin-off universitaria.  
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#880043]">Beneficios</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acceso a una red de más de 50 mentores especializados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sesiones personalizadas según las necesidades de tu proyecto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Seguimiento continuo y medición de resultados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Conexión con otros emprendedores y potenciales socios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acceso a recursos exclusivos y herramientas de gestión</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Participación en eventos de networking con la comunidad emprendedora</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#880043]">Requisitos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tener un proyecto o startup en fase inicial o de crecimiento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Compromiso de asistencia a las sesiones programadas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Disposición para implementar las recomendaciones recibidas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Completar el formulario de aplicación con información detallada del proyecto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Participar en una entrevista de selección con el equipo de IncuvaLab</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <img
                    src="/images/ENTREVISTA. 1era versión.jpg"
                    alt="Programa Mentoring"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Card className="shadow-md mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#880043]">Detalles del Programa</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">Duración:</div>
                        <div>3 meses</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">Frecuencia:</div>
                        <div>Sesiones semanales de 2 horas</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">Modalidad:</div>
                        <div>Presencial y/o virtual</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">Próxima cohorte:</div>
                        <div>Mayo 2025</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-medium">Inversión:</div>
                        <div>Bs. 1,500</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#880043]">¿Interesado en este programa?</h3>
                    <p className="text-gray-700 mb-6">
                      Completa el formulario de postulación y nuestro equipo se pondrá en contacto contigo para
                      brindarte más información.
                    </p>
                    <Button className="w-full text-white bg-[#880043] hover:bg-[#880043]/80">Postular al Programa</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Conoce a Nuestros Mentores</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Contamos con una red de profesionales con experiencia comprobada en diferentes industrias y áreas de
              especialización.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2 text-sm text-yellow-600">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                        <span>{mentor.rating}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-[#66b5cb] mb-2">{mentor.position}</p>
                      <p className="text-gray-700 mb-4">Especialidad: {mentor.expertise}</p>
                      <Button
                        variant="outline"
                        className="w-full border-[#66b5cb] text-[#66b5cb] hover:bg-[#66b5cb]/10"
                      >
                        Ver Perfil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/mentores">
                <Button className="bg-[#880043] text-white hover:bg-[#880043]/90">Ver Todos los Mentores</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Program Schedule */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Cronograma del Programa</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              El programa de mentoring está estructurado para guiarte paso a paso en el desarrollo de tu emprendimiento.
            </p>

            <div className="space-y-6">
              {schedule.map((session, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-[#66b5cb] mr-2" />
                          
                          <span className="font-medium">{session.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-[#66b5cb] mr-2" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-[#66b5cb] mr-2 mt-1" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                        <p className="text-gray-700">{session.description}</p>
                      </div>

                    </div>                   
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Testimonios</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Conoce las experiencias de emprendedores que han participado en nuestro programa de mentoring.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-8 relative">
                  <div className="absolute top-4 right-4 text-6xl text-[#880043]/10 font-serif">"</div>
                  <p className="text-lg text-gray-700 mb-8 relative z-10">{story.quote}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img src={story.image || "/placeholder.svg"} alt={story.name} width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-bold text-[#880043]">{story.name}</p>
                      <p className="text-sm text-gray-600">{story.company}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">
                    ¿Cómo se realiza el emparejamiento con los mentores?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    El emparejamiento se realiza considerando las necesidades específicas de tu proyecto y la
                    experiencia de nuestros mentores. Realizamos una evaluación inicial para identificar las áreas en
                    las que necesitas más apoyo y te conectamos con el mentor que mejor puede ayudarte en esos aspectos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">
                    ¿Qué sucede si no hay química con mi mentor asignado?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Entendemos que la química personal es importante para el éxito de la mentoría. Si después de la
                    primera sesión sientes que no hay una buena conexión, puedes solicitar un cambio de mentor. Nuestro
                    objetivo es que obtengas el máximo valor del programa.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">
                    ¿Puedo continuar con mi mentor después de finalizar el programa?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Sí, muchas relaciones de mentoría continúan más allá del programa formal. Al finalizar, puedes
                    acordar con tu mentor continuar las sesiones de manera independiente o a través de nuestro programa
                    de mentoría extendida.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">
                    ¿Qué nivel de compromiso se espera de los participantes?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Esperamos un alto nivel de compromiso. Esto incluye asistir a todas las sesiones programadas,
                    completar las tareas asignadas entre sesiones y estar dispuesto a implementar las recomendaciones de
                    tu mentor. El programa es intensivo y está diseñado para generar resultados tangibles.
                  </AccordionContent>
                </AccordionItem>
                
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-[#880043]">Otros Programas que podrían interesarte</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: "learning",
                  title: "Learning",
                  description:
                    "Talleres y cursos especializados para desarrollar habilidades empresariales, técnicas y blandas necesarias para el éxito.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "#880043",
                },
                {
                  id: "inspiring",
                  title: "Inspiring",
                  description:
                    "Eventos y charlas inspiradoras con emprendedores exitosos que comparten sus experiencias, desafíos y aprendizajes.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "#66b5cb",
                },
                {
                  id: "challenger",
                  title: "Challenger",
                  description:
                    "Competencias y desafíos que impulsan la innovación y premian las mejores soluciones a problemas reales.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "#8d8d8d",
                },
              ].map((program) => (
                <Card
                  key={program.id}
                  className={`border-t-4 shadow-md hover:shadow-lg transition-shadow`}
                  style={{ borderColor: program.color }}
                >
                  <CardContent className="pt-6">
                    <div className={`bg-[${program.color}]/10 p-3 rounded-full w-fit mb-4`}>{program.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Link to={`/${program.id}`}>
                      <Button variant="link" className="p-0" style={{ color: program.color }}>
                        Conocer más
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-[#880043] to-[#4a8fa3] rounded-xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">¿Listo para llevar tu idea de negocio al siguiente nivel?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Postula ahora al programa de Mentoring y recibe la guía que necesitas para hacer crecer tu
                emprendimiento.
              </p>
              <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90">
                Postular al Programa
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}