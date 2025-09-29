import { ArrowLeft, LightbulbIcon, CheckCircle, Clock, Download, Book } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/componentsForV0/ui/Button"
import { Card, CardContent } from "@/componentsForV0/ui/card"
import { Badge } from "@/componentsForV0/ui/badge"
import { Progress } from "@/componentsForV0/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentsForV0/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/componentsForV0/ui/accordion"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"

export default function LearningProgramPage() {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Como prototipar tu idea",
      description: "Aprende a validar tu idea de negocio con metodologías ágiles y minimiza el riesgo de fracaso.",
      image: "/images/taller1.png",
      level: "Principiante",
      duration: "25 minutos",
      instructor: "Manuel Pincheira",
      students: 120,
      rating: 4.8,
      featured: true,
      category: "Estrategia",
    },
    {
      id: 2,
      title: "Edición de video",
      description:
        "Estrategias efectivas para adquirir clientes con presupuestos limitados y métricas para optimizar resultados.",
      image: "/images/taller2.png",
      level: "Intermedio",
      duration: "45 minutos",
      instructor: "Miguel Zurita",
      students: 95,
      rating: 4.9,
      featured: true,
      category: "Marketing",
    },
    {
      id: 3,
      title: "Del Problema a la Idea",
      description:
        "Domina los conceptos financieros clave para gestionar tu idea y prepararte para captar inversión.",
      image: "/images/taller3.png",
      level: "Intermedio",
      duration: "75 minutos",
      instructor: "Christian Herbas",
      students: 85,
      rating: 4.7,
      featured: false,
      category: "Planificación",
    },
    
  ]

  // Course curriculum sample
  const curriculum = [
    {
      week: 1,
      title: "Introducción al Lean Startup",
      topics: [
        "Orígenes y principios del Lean Startup",
        "El ciclo construir-medir-aprender",
        "Identificación del problema y segmento de clientes",
        "Ejercicio práctico: Definiendo hipótesis clave",
      ],
    },
    {
      week: 2,
      title: "Validación del Problema",
      topics: [
        "Técnicas de investigación de mercado",
        "Entrevistas con clientes potenciales",
        "Análisis de la competencia",
        "Ejercicio práctico: Diseño de entrevistas y ejecución",
      ],
    },
    {
      week: 3,
      title: "Creación y Validación del MVP",
      topics: [
        "Tipos de MVP según tu industria",
        "Herramientas para crear prototipos rápidos",
        "Métricas para validar tu MVP",
        "Ejercicio práctico: Diseño de tu MVP",
      ],
    },
    {
      week: 4,
      title: "Iteración y Pivote",
      topics: [
        "Análisis de feedback y datos",
        "Decisiones basadas en evidencia",
        "Estrategias de pivote",
        "Ejercicio práctico: Plan de iteración",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16" style={{ backgroundColor: "#88004310" }}>
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#880043]/20 p-4 rounded-full">
                <LightbulbIcon className="h-8 w-8 text-[#880043]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#880043]">Learning</h1>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl">
              Talleres y cursos especializados para desarrollar habilidades empresariales, técnicas y blandas necesarias
              para el éxito.
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
                  El programa Learning de IncuvaLab ofrece una serie de talleres, cursos y capacitaciones diseñados para
                  fortalecer las competencias de los emprendedores en diferentes áreas clave. Desde fundamentos de
                  gestión empresarial hasta habilidades técnicas específicas, nuestro programa educativo está diseñado
                  para proporcionar conocimientos prácticos y aplicables.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Las sesiones son impartidas por expertos en cada materia y combinan teoría con ejercicios prácticos,
                  estudios de caso y proyectos reales para maximizar el aprendizaje y su aplicación inmediata. Todos los
                  cursos incluyen materiales de estudio, acceso a grabaciones de las sesiones y certificación al
                  completarlos.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#880043]">Beneficios</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acceso a más de 30 cursos y talleres especializados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Certificaciones reconocidas por la industria</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Aprendizaje práctico con casos reales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Networking con otros participantes y expositores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Materiales de estudio y recursos complementarios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acceso a plataforma de aprendizaje online</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#880043]">Requisitos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Inscripción previa a los cursos de interés</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cumplir con los requisitos específicos de cada curso</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Compromiso de asistencia y participación activa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Completar las evaluaciones y proyectos asignados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#66b5cb] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Computadora con acceso a internet para sesiones virtuales</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
                  <img
                    src="/images/E-CONNECTION.jpeg"
                    alt="Programa Learning"
                    className="object-cover w-full h-full"
                  />
                </div>
                <Card className="shadow-md mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#880043]">Modalidades de Aprendizaje</h3>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Cursos Presenciales</h4>
                        <p className="text-sm text-gray-700">
                          Sesiones en vivo en nuestras instalaciones con interacción directa con el instructor y otros
                          participantes.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Cursos Virtuales</h4>
                        <p className="text-sm text-gray-700">
                          Clases en línea con interacción en tiempo real, grabaciones disponibles y materiales
                          digitales.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Cursos Híbridos</h4>
                        <p className="text-sm text-gray-700">
                          Combinación de sesiones presenciales y contenido online para mayor flexibilidad.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-bold mb-2">Talleres Intensivos</h4>
                        <p className="text-sm text-gray-700">
                          Formatos concentrados de 1-2 días para aprendizaje inmersivo en habilidades específicas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#880043]">¿Interesado en este programa?</h3>
                    <p className="text-gray-700 mb-6">
                      Explora nuestro catálogo de cursos y talleres, y regístrate en los que mejor se adapten a tus
                      necesidades.
                    </p>
                    <Button className="w-full bg-[#880043] text-white hover:bg-[#880043]/80">Ver Catálogo Completo</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Cursos Destacados</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Descubre nuestros cursos más populares, diseñados para potenciar tus habilidades emprendedoras.
            </p>

              
            <div className="grid md:grid-cols-2 gap-8">
              {courses
                .filter((course) => course.featured)
                .map((course) => (
                  <Card key={course.id} className="overflow-hidden h-full">
                    <div className="relative h-48">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />

                      
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#880043] text-white border-none">{course.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{course.title}</h3>
                        <Badge variant="outline" className="bg-gray-100">
                          {course.level}
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-1 text-[#66b5cb]" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Book className="h-4 w-4 mr-1 text-[#66b5cb]" />
                          <span>{course.students} estudiantes</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-6">
                        <div className="bg-gray-100 rounded-full overflow-hidden h-8 w-8 mr-2">
                          <img
                            src={`/placeholder.svg?height=50&width=50&text=${course.instructor[0]}`}
                            alt={course.instructor}
                            width={32}
                            height={32}
                          />
                        </div>
                        <span className="text-sm">{course.instructor}</span>
                        <div className="ml-auto flex items-center text-yellow-600 text-sm">
                          <svg
                            className="h-4 w-4 fill-yellow-500 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#880043] text-white hover:bg-[#880043]/90">Ver Detalles</Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Categorías de Cursos</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Explora nuestras diversas categorías de aprendizaje, diseñadas para cubrir todas las áreas clave del
              emprendimiento.
            </p>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex justify-center flex-wrap mb-8">
                <TabsTrigger value="all" className="text-base px-6 py-3">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="strategy" className="text-base px-6 py-3">
                  Desarrollo del Espiritu Emprendedor
                </TabsTrigger>
                <TabsTrigger value="marketing" className="text-base px-6 py-3">
                  Marketing
                </TabsTrigger>
                <TabsTrigger value="finance" className="text-base px-6 py-3">
                  Finanzas
                </TabsTrigger>
                <TabsTrigger value="product" className="text-base px-6 py-3">
                  Desarrollo de Producto
                </TabsTrigger>
                <TabsTrigger value="legal" className="text-base px-6 py-3">
                  Legal
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden h-full">
                      <div className="relative h-40">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-[#880043] text-white border-none">{course.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">{course.title}</h3>
                          <Badge variant="outline" className="bg-gray-100 text-xs">
                            {course.level}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center mt-4 text-sm">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-[#66b5cb]" />
                            <span>{course.duration}</span>
                          </div>
                          <Button variant="link" className="text-[#880043] p-0 h-auto">
                            Ver Curso
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {["strategy", "marketing", "finance", "product", "legal"].map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    {courses
                      .filter(
                        (course) =>
                          course.category.toLowerCase() ===
                          (category === "strategy" ? "estrategia" : category === "finance" ? "finanzas" : category),
                      )
                      .map((course) => (
                        <Card key={course.id} className="overflow-hidden h-full">
                          <div className="relative h-40">
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-[#880043] text-white border-none">{course.category}</Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold">{course.title}</h3>
                              <Badge variant="outline" className="bg-gray-100 text-xs">
                                {course.level}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center mt-4 text-sm">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-[#66b5cb]" />
                                <span>{course.duration}</span>
                              </div>
                              <Button variant="link" className="text-[#880043] p-0 h-auto">
                                Ver Curso
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-12">
              <Button className="bg-[#880043] text-white hover:bg-[#880043]/90">Ver Todos los Cursos</Button>
            </div>
          </div>
        </section>

        {/* Sample Curriculum */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-[#880043]">Ejemplo de Curriculum</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Te presentamos el programa del curso "Fundamentos de Lean Startup", uno de nuestros cursos más
                  populares.
                </p>

                <div className="space-y-4">
                  {curriculum.map((week, index) => (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={`week-${index + 1}`} className="border rounded-lg">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center text-left">
                            <div className="bg-[#880043] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Semana {index + 1}</p>
                              <p className="font-medium">{week.title}</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <ul className="space-y-2 pl-11">
                            {week.topics.map((topic, i) => (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-[#66b5cb] mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="bg-[#880043] text-white hover:bg-[#880043]/90 flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Programa Completo
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#880043]">Fundamentos de Lean Startup</h3>
                  <p className="text-gray-700 mb-6">
                    Aprende a validar tu idea de negocio con metodologías ágiles y minimiza el riesgo de fracaso. Este
                    curso te proporcionará las herramientas y técnicas para construir un producto que realmente resuelva
                    un problema para tus clientes.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Nivel:</span>
                      <span>Principiante</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Duración:</span>
                      <span>4 sesiones (4 horas)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Modalidad:</span>
                      <span>Presencial o Virtual</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Instructor:</span>
                      <span>Por confirmar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Próximo inicio:</span>
                      <span>Por confirmar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Inversión:</span>
                      <span>Gratuito para estudiantes Univalle</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">Plazas disponibles:</span>
                      <span className="text-[#880043]">15 a 30</span>
                    </div>
                    <Progress value={40} className="h-2 bg-gray-200" />
                  </div>

                  <Button className="w-full bg-[#880043] text-white hover:bg-[#880043]/90">Inscribirse Ahora</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Nuestros Instructores</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Aprende de la mano de profesionales con amplia experiencia en sus campos y una pasión por compartir su
              conocimiento.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Alejandro Toro",
                  position: "Centro experimenetal Bolivia ",
                  image: "/images/AlejandroToro.jpg",
                  description: "Experto en creación de ideas de negocio.",
                },
                {
                  name: "Gonzalo Castellanos",
                  position: "Asesor en gestión de inovaciones",
                  image: "/images/GonzaloCastellanos.jpg",
                  description: "Inovación, competividad y tecnología.",
                },
                {
                  name: "Ruben Pizzo",
                  position: "Especialista en planificación y gestión de proyectos",
                  image: "/images/RubenPizzo.jpg",
                  description: "Finanzas y planificación estrategica",
                },
                {
                  name: "Paola Otondo",
                  position: "Marketing Digital",
                  image: "/images/PaolaOtondo.jpg",
                  description: "Especialista en marketing digital e e-commerce",
                },
              ].map((instructor, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                    <p className="text-[#66b5cb] mb-3">{instructor.position}</p>
                    <p className="text-gray-700 text-sm mb-6">{instructor.description}</p>
                    <Button variant="outline" className="w-full border-[#880043] text-[#880043] hover:bg-[#880043]/10">
                      Ver Perfil
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#880043]">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">
                    ¿Recibiré una certificación al completar un curso?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Sí, todos nuestros cursos incluyen un certificado digital avalado por IncuvaLab y la Universidad del
                    Valle. Para recibir el certificado, debes completar al menos el 80% de asistencia y aprobar todas
                    las evaluaciones del curso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">¿Qué sucede si no puedo asistir a una sesión?</AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Todas las sesiones son grabadas y puestas a disposición de los participantes en nuestra plataforma
                    de aprendizaje. Sin embargo, recomendamos asistir en vivo para aprovechar la interacción con el
                    instructor y otros participantes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">¿Puedo pagar un curso en cuotas?</AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Los cursos son gratuitos. 
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">¿Los cursos incluyen materiales de estudio?</AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Todos nuestros cursos incluyen materiales digitales como presentaciones, guías de trabajo,
                    plantillas y recursos complementarios. Estos materiales quedan disponibles en nuestra plataforma de
                    aprendizaje incluso después de finalizado el curso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">¿Ofrecen cursos personalizados para empresas?</AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-700">
                    Sí, desarrollamos programas de formación a medida para empresas y organizaciones según sus
                    necesidades específicas. Contáctanos para discutir tus requerimientos y preparar una propuesta
                    personalizada.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-[#880043]">Otros Programas que podrían interesarte</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: "mentoring",
                  title: "Mentoring",
                  description:
                    "Conectamos emprendedores con mentores experimentados que brindan orientación personalizada para superar desafíos y potenciar el crecimiento.",
                  icon: <CheckCircle className="h-6 w-6" />,
                  color: "#66b5cb",
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
              <h2 className="text-3xl font-bold mb-6">¿Listo para potenciar tus habilidades?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Inscríbete en nuestros cursos y talleres, y adquiere las competencias necesarias para llevar tu
                emprendimiento al siguiente nivel.
              </p>
              <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90">
                Explorar Cursos
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}