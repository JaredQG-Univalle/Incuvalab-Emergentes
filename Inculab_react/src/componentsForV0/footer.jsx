import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/componentsForV0/ui/Input"
import { Button } from "@/componentsForV0/ui/Button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-6">
            <img
              src="/images/incuvalab-logo.png"
              alt="Incuvalab Logo"
              className="h-20 w-auto"
            />
            <p className="font-body text-gray-400">
              Transformando ideas en soluciones de impacto para Bolivia. Potenciamos el ecosistema emprendedor con
              programas de innovación, mentoría y financiamiento.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-display text-lg font-bold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/aboutUs" className="font-body text-gray-400 hover:text-white transition-colors">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="font-body text-gray-400 hover:text-white transition-colors">
                  Mentores
                </Link>
              </li>
              <li>
                <Link to="/events" className="font-body text-gray-400 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="font-display text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#66b5cb] mr-3 mt-1 flex-shrink-0" />
                <span className="font-body text-gray-400">
                  Campus Universitario Univalle
                  <br />
                  Tiquipaya
                  <br />
                  Cochabamba, Bolivia
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#66b5cb] mr-3 flex-shrink-0" />
                <a
                  href="mailto:mbuitragos@univalle.edu"
                  className="font-body text-gray-400 hover:text-white transition-colors"
                >
                  mbuitragos@univalle.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#66b5cb] mr-3 flex-shrink-0" />
                <span className="font-body text-gray-400">Tel. 4318800 Int.1120</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social */}
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-gray-800">
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold">Suscríbete a nuestro newsletter</h3>
            <div className="flex max-w-md">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 border-gray-700 text-white rounded-l-md rounded-r-none focus-visible:ring-[#880043]"
              />
              <Button className="bg-[#880043] hover:bg-[#880043]/90 rounded-r-md rounded-l-none">Suscribirse</Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:items-end gap-4">
            <h3 className="font-display text-lg font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100086191247435"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#880043] transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/incuvalab/?__pwa=1"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#66b5cb] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#880043] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-[#66b5cb] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 IncuvaLab. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-gray-500 text-sm">Una iniciativa de</p>
            <img
              src="/images/univalle-logo-removebg-preview.png"
              alt="Univalle Logo"
              className="h-14 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}