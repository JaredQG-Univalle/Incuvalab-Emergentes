import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
 
import { Button } from "@/componentsForV0/ui/button"
import { Input } from "@/componentsForV0/ui/input"
import { Textarea } from "@/componentsForV0/ui/textarea"
import { Label } from "@/componentsForV0/ui/label"
import { RadioGroup, RadioGroupItem } from "@/componentsForV0/ui/radio-group"
import { Card, CardContent } from "@/componentsForV0/ui/card"
import Navbar from "@/componentsForV0/navbar"
import Footer from "@/componentsForV0/footer"
 
export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    motivo: 'informacion',
    mensaje: ''
  })
 
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
 
  // Validación en tiempo real
  const validateField = (field, value) => {
    let error = ''
 
    switch (field) {
      case 'nombre':
        if (!value.trim()) {
          error = 'El nombre es requerido'
        } else if (value.trim().length < 2) {
          error = 'El nombre debe tener al menos 2 caracteres'
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          error = 'El nombre solo puede contener letras'
        }
        break
 
      case 'apellido':
        if (!value.trim()) {
          error = 'El apellido es requerido'
        } else if (value.trim().length < 2) {
          error = 'El apellido debe tener al menos 2 caracteres'
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          error = 'El apellido solo puede contener letras'
        }
        break
 
      case 'email':
        if (!value.trim()) {
          error = 'El correo electrónico es requerido'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Ingresa un correo electrónico válido (ejemplo: usuario@dominio.com)'
        }
        break
 
      case 'telefono':
        if (!value.trim()) {
          error = 'El teléfono es requerido'
        } else if (!/^[0-9\s+\-()]+$/.test(value)) {
          error = 'El teléfono solo puede contener números, espacios, +, - y paréntesis'
        } else {
          const cleanPhone = value.replace(/[\s\-()]/g, '')
          if (!/^(\+591)?[67]\d{7}$/.test(cleanPhone)) {
            error = 'Formato válido: +591 70123456 o 70123456 (números bolivianos)'
          }
        }
        break
 
      case 'mensaje':
        if (!value.trim()) {
          error = 'El mensaje es requerido'
        } else if (value.trim().length < 10) {
          error = 'El mensaje debe tener al menos 10 caracteres'
        } else if (value.trim().length > 500) {
          error = 'El mensaje no puede exceder 500 caracteres'
        }
        break
 
      default:
        break
    }
 
    return error
  }
 
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
   
    // Validar en tiempo real solo si el campo ya fue tocado
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors(prev => ({ ...prev, [field]: error }))
    }
  }
 
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors(prev => ({ ...prev, [field]: error }))
  }
 
  const validateForm = () => {
    const newErrors = {}
    const fields = ['nombre', 'apellido', 'email', 'telefono', 'mensaje']
   
    fields.forEach(field => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })
 
    setErrors(newErrors)
    setTouched(Object.fromEntries(fields.map(field => [field, true])))
    return Object.keys(newErrors).length === 0
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault()
   
    if (!validateForm()) {
      return
    }
 
    setIsSubmitting(true)
   
    try {
      console.log('Datos del formulario:', formData)
      await new Promise(resolve => setTimeout(resolve, 2000))
     
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        motivo: 'informacion',
        mensaje: ''
      })
      setErrors({})
      setTouched({})
     
      alert('Mensaje enviado correctamente')
    } catch (error) {
      alert('Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }
 
  const getFieldStatus = (field) => {
    if (!touched[field]) return 'default'
    if (errors[field]) return 'error'
    if (formData[field].trim()) return 'success'
    return 'default'
  }
 
  const getInputClassName = (field) => {
    const status = getFieldStatus(field)
    const baseClass = 'h-12 transition-all duration-200'
   
    switch (status) {
      case 'error':
        return `${baseClass} border-red-500 focus:border-red-500 focus:ring-red-200`
      case 'success':
        return `${baseClass} border-green-500 focus:border-green-500 focus:ring-green-200`
      default:
        return `${baseClass} border-gray-300 focus:border-blue-500 focus:ring-blue-200`
    }
  }
 
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#880043] to-[#4a8fa3]"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-white"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          ></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Contacto</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Estamos aquí para responder tus preguntas y ayudarte a formar parte de nuestra comunidad de
                emprendedores.
              </p>
            </div>
          </div>
        </section>
 
        {/* Contact Info & Form */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold mb-8 text-[#880043]">Información de Contacto</h2>
 
                <Card className="border-none shadow-lg mb-8">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#66b5cb" }}
                        >
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                          <p className="text-gray-700">
                            Campus Universitario Univalle
                            <br />
                            Tiquipaya
                            <br />
                            Cochabamba, Bolivia
                          </p>
                        </div>
                      </div>
 
                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#880043" }}
                        >
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Correo Electrónico</h3>
                          <p className="text-gray-700">
                            <a href="mailto:mbuitragos@univalle.edu" className="hover:text-[#880043]">
                              mbuitragos@univalle.edu
                            </a>
                          </p>
                        </div>
                      </div>
 
                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#8d8d8d" }}
                        >
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                          <p className="text-gray-700">
                            Tel. 4318800 Int.1120
                          </p>
                        </div>
                      </div>
 
                      <div className="flex items-start">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                          style={{ backgroundColor: "#66b5cb" }}
                        >
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Horario de Atención</h3>
                          <p className="text-gray-700">
                            Lunes a Viernes: 8:00 AM - 5:00 PM    
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
 
                <h3 className="text-xl font-bold mb-4 text-[#880043]">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100086191247435"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#880043]/10 hover:bg-[#880043] text-[#880043] hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/incuvalab/?__pwa=1"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#66b5cb]/10 hover:bg-[#66b5cb] text-[#66b5cb] hover:text-white transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#8d8d8d]/10 hover:bg-[#8d8d8d] text-[#8d8d8d] hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#880043]/10 hover:bg-[#880043] text-[#880043] hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
 
              <div className="lg:col-span-7">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-8 text-[#880043]">Envíanos un Mensaje</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="nombre" className="text-base font-medium">
                            Nombre *
                          </Label>
                          <div className="relative">
                            <Input
                              id="nombre"
                              placeholder="Tu nombre"
                              className={getInputClassName('nombre')}
                              value={formData.nombre}
                              onChange={(e) => handleInputChange('nombre', e.target.value)}
                              onBlur={() => handleBlur('nombre')}
                            />
                            {getFieldStatus('nombre') === 'success' && (
                              <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                            )}
                            {getFieldStatus('nombre') === 'error' && (
                              <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
                            )}
                          </div>
                          {errors.nombre && (
                            <div className="flex items-center space-x-2 text-red-600 text-sm">
                              <AlertCircle className="h-4 w-4" />
                              <span>{errors.nombre}</span>
                            </div>
                          )}
                        </div>
 
                        <div className="space-y-2">
                          <Label htmlFor="apellido" className="text-base font-medium">
                            Apellido *
                          </Label>
                          <div className="relative">
                            <Input
                              id="apellido"
                              placeholder="Tu apellido"
                              className={getInputClassName('apellido')}
                              value={formData.apellido}
                              onChange={(e) => handleInputChange('apellido', e.target.value)}
                              onBlur={() => handleBlur('apellido')}
                            />
                            {getFieldStatus('apellido') === 'success' && (
                              <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                            )}
                            {getFieldStatus('apellido') === 'error' && (
                              <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
                            )}
                          </div>
                          {errors.apellido && (
                            <div className="flex items-center space-x-2 text-red-600 text-sm">
                              <AlertCircle className="h-4 w-4" />
                              <span>{errors.apellido}</span>
                            </div>
                          )}
                        </div>
                      </div>
 
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-medium">
                          Correo Electrónico *
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className={getInputClassName('email')}
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                          />
                          {getFieldStatus('email') === 'success' && (
                            <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                          )}
                          {getFieldStatus('email') === 'error' && (
                            <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
                          )}
                        </div>
                        {errors.email && (
                          <div className="flex items-center space-x-2 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
 
                      <div className="space-y-2">
                        <Label htmlFor="telefono" className="text-base font-medium">
                          Teléfono *
                        </Label>
                        <div className="relative">
                          <Input
                            id="telefono"
                            placeholder="+591 70123456"
                            className={getInputClassName('telefono')}
                            value={formData.telefono}
                            onChange={(e) => handleInputChange('telefono', e.target.value)}
                            onBlur={() => handleBlur('telefono')}
                          />
                          {getFieldStatus('telefono') === 'success' && (
                            <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                          )}
                          {getFieldStatus('telefono') === 'error' && (
                            <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
                          )}
                        </div>
                        {errors.telefono && (
                          <div className="flex items-center space-x-2 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>{errors.telefono}</span>
                          </div>
                        )}
                      </div>
 
                      <div className="space-y-3">
                        <Label className="text-base font-medium">Motivo de Contacto</Label>
                        <RadioGroup
                          value={formData.motivo}
                          onValueChange={(value) => handleInputChange('motivo', value)}
                          className="grid grid-cols-2 gap-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="informacion" id="informacion" />
                            <Label htmlFor="informacion">Información General</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="programas" id="programas" />
                            <Label htmlFor="programas">Programas</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="alianzas" id="alianzas" />
                            <Label htmlFor="alianzas">Alianzas</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="otro" id="otro" />
                            <Label htmlFor="otro">Otro</Label>
                          </div>
                        </RadioGroup>
                      </div>
 
                      <div className="space-y-2">
                        <Label htmlFor="mensaje" className="text-base font-medium">
                          Mensaje *
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="mensaje"
                            placeholder="Escribe tu mensaje aquí..."
                            rows={5}
                            className={`transition-all duration-200 ${
                              getFieldStatus('mensaje') === 'error'
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                : getFieldStatus('mensaje') === 'success'
                                ? 'border-green-500 focus:border-green-500 focus:ring-green-200'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                            }`}
                            value={formData.mensaje}
                            onChange={(e) => handleInputChange('mensaje', e.target.value)}
                            onBlur={() => handleBlur('mensaje')}
                          />
                          <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                            {formData.mensaje.length}/500
                          </div>
                        </div>
                        {errors.mensaje && (
                          <div className="flex items-center space-x-2 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>{errors.mensaje}</span>
                          </div>
                        )}
                      </div>
 
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#880043] text-white hover:bg-[#880043]/90 h-12 text-base disabled:opacity-50 transition-all duration-200"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
 
        {/* Map Section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#880043]">Nuestra Ubicación</h2>
              <p className="text-lg text-gray-700">
                Estamos ubicados en el Campus Universitario de Univalle, Tiquipaya, Cochabamba, Bolivia.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/campusAmplio.png"
                alt="Mapa de Ubicación"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}