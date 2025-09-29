"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/componentsForV0/ui/Button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // para un scroll suave; usa 'auto' para instantáneo
    })
  }

  // Llama a esta función cuando cambies de página
  // Por ejemplo, si usas enlaces normales:
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Quienes Somos", href: "/aboutUs" },
    { name: "Mentores", href: "/mentors" },
    {
      name: "Programas",
      href: "/programas",
      dropdown: [
        { name: "Mentoring", href: "/mentoring" },
        { name: "Learning", href: "/learning" },
        { name: "Inspiring", href: "/inspiring" },
        { name: "Challenger", href: "/challenger" },
        { name: "Partners", href: "/partners" },
        { name: "Revenue", href: "/revenue" },
      ],
    },
    { name: "CrowdFunding", href: "/crowdfunding" },
    { name: "Eventos", href: "/events" },
    { name: "Contacto", href: "/contacts" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-black/10 backdrop-blur-sm py-5",
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="relative z-50">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <img
              src="/images/incuvalab-logo.png"
              alt="IncuvaLab Logo"
              className="h-20 w-auto"  // Logo Incuva Lab
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <>
                  <button
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors",
                      isScrolled ? "text-gray-800" : "text-white",
                      activeDropdown === link.name
                        ? isScrolled
                          ? "text-[#880043]"
                          : "text-[#f8c630]"
                        : "hover:text-[#f8c630]",
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#880043]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isScrolled ? "text-gray-800" : "text-white",
                    "hover:text-[#f8c630]",
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/login">
            <Button
              className={cn(
                isScrolled
                  ? "bg-[#880043] hover:bg-[#880043]/90 text-white"
                  : "bg-white text-[#880043] hover:bg-white/90",
              )}
            >
              Iniciar Sesion
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2 rounded-full focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence initial={false} mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 text-gray-800" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-800" : "text-white")} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-20 overflow-y-auto"
          >
            <div className="container max-w-7xl mx-auto px-4 flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-4">
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-medium">{link.name}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto"
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        >
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform",
                              activeDropdown === link.name ? "transform rotate-180" : "",
                            )}
                          />
                        </Button>
                      </div>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-3"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block text-gray-700 hover:text-[#880043]"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-xl font-medium hover:text-[#880043]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#880043] hover:bg-[#880043]/90 text-white h-14">Contáctanos</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}