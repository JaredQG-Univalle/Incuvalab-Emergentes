import { ArrowRight, Users, BarChart3, TrendingUp, Award, Briefcase, DollarSign } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/componentsForV0/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/componentsForV0/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/componentsForV0/ui/tabs"

export default function RevenuePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#880043] to-[#580029] text-white">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm text-sm font-medium mb-2">
                Programa Revenue
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Desarrolla tu producto en los laboratorios de Univalle 
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                Solicita apoyo de expertos que te ayuden a desarrollar tu producto, tu marca
                o tu plataforma mediante el uso de laboratorios profesionales.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90">
                  Aplicar ahora
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Conocer más
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/K-MOTE.jpeg"
                alt="Programa Revenue"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnología de primer nivel a tu alcance</h2>
            <p className="text-lg text-gray-600">
              El programa Revenue de IncuvaLab está diseñado para ayudar a emprendedores a desarrollar los productos, servicios
              y branding a partir del uso de los centros de transferencia tecnológica de la Universidad
              Privada del Valle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <DollarSign className="h-12 w-12 text-[#880043] mb-2" />
                <CardTitle>Gestión Comercial</CardTitle>
                <CardDescription>Desarrollo de branding y packaging</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Te ayudamos a gestionar tu estrategia comercial en los laboratorios de neuromarketing
                  de ciencias empresariales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <BarChart3 className="h-12 w-12 text-[#880043] mb-2" />
                <CardTitle>Desarrollo de Productos</CardTitle>
                <CardDescription>Estudios de factibilidad industrial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Te ayudamos a desarrollar tu proceso de producción de manera más eficiente 
                  y conveniente para tu negocio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <TrendingUp className="h-12 w-12 text-[#880043] mb-2" />
                <CardTitle>Escalabilidad</CardTitle>
                <CardDescription>Desarrollo de plataformas digitales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Te ayudamos con la creación de plataformas digitales para mejorar tus sistemas comerciales
                  y de gestión.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cómo Postular</h2>
            <p className="text-lg text-gray-600">
              Buscamos proyectos de impacto que necesiten de este apoyo y que estén dispuestos 
              a trabajar en equipo con la Universidad.
            </p>
          </div>

          <Tabs defaultValue="fase1" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="fase1">Fase 1: Diagnóstico</TabsTrigger>
              <TabsTrigger value="fase2">Fase 2: Planificación</TabsTrigger>
              <TabsTrigger value="fase3">Fase 3: Implementación</TabsTrigger>
            </TabsList>
            <TabsContent value="fase1" className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pasos de la Postulación</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Análisis del estado actual del negocio.",
                  "Coordinación con los centros de transferencia tecnológica de la Universidad",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 bg-[#880043] rounded-full p-1 text-white">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="fase2" className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pasos de la planificación</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Planificación del trabajo a realizarse",
                  "Entrega de resultados y análisis finales",
                  "Planificación financiera y costos del proyecto",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 bg-[#880043] rounded-full p-1 text-white">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="fase3" className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Pasos para la implementación</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "La implementación dependerá de cada caso de investigación",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1 bg-[#880043] rounded-full p-1 text-white">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Casos de éxito</h2>
            <p className="text-lg text-gray-600">
              Conoce a los emprendedores que transformaron sus finanzas a través del programa Revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Productoras de Vinagre de Manzana",
                description:
                  '"Productoras de manzana de la comunidad de Tiquipaya"',
                subtitle: "Fruto del convenio Fundación Kallpa",
                author: "CIT Tierra",
                image: "/images/CasoExito1.jpg",
                alt: "Caso de éxito 1",
              },
            ].map(({ title, description, subtitle, author, image, alt }, i) => (
              <Card key={i} className="border-none shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img src={image} alt={alt} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{description}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">{author}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#880043] text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tus finanzas?</h2>
            <p className="text-xl mb-8">
              Únete al programa Revenue y construye un negocio financieramente sostenible con el apoyo de expertos y
              mentores especializados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#880043] hover:bg-white/90">
                Aplicar al programa
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Agendar una consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explora otros programas</h2>
            <p className="text-lg text-gray-600">
              Descubre nuestros programas complementarios para potenciar diferentes aspectos de tu emprendimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/mentoring" className="group">
              <Card className="border-none shadow-md hover:shadow-lg transition-all group-hover:border-[#880043]/20 h-full">
                <CardHeader>
                  <Users className="h-10 w-10 text-[#880043] mb-2" />
                  <CardTitle>Programa Mentoring</CardTitle>
                  <CardDescription>Mentoría personalizada para tu emprendimiento</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Conecta con mentores experimentados que te guiarán en el desarrollo de tu proyecto.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-[#880043] group-hover:translate-x-1 transition-transform">
                    Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link to="/learning" className="group">
              <Card className="border-none shadow-md hover:shadow-lg transition-all group-hover:border-[#880043]/20 h-full">
                <CardHeader>
                  <Award className="h-10 w-10 text-[#880043] mb-2" />
                  <CardTitle>Programa Learning</CardTitle>
                  <CardDescription>Formación especializada para emprendedores</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Accede a cursos y talleres diseñados para desarrollar habilidades clave en tu emprendimiento.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-[#880043] group-hover:translate-x-1 transition-transform">
                    Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link to="/inspiring" className="group">
              <Card className="border-none shadow-md hover:shadow-lg transition-all group-hover:border-[#880043]/20 h-full">
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-[#880043] mb-2" />
                  <CardTitle>Programa Inspiring</CardTitle>
                  <CardDescription>Inspiración y networking para innovadores</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Participa en eventos inspiradores y conecta con otros emprendedores para expandir tu red.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-[#880043] group-hover:translate-x-1 transition-transform">
                    Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}