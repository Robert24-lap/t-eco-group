import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Cpu, Zap } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-navy-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-eco-green-500" />
              <h1 className="text-2xl font-bold text-navy-900">T-ECO Group</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/quienes-somos" className="text-navy-700 hover:text-navy-900 transition-colors">
                Quiénes Somos
              </Link>
              <Link href="/que-hacemos" className="text-navy-700 hover:text-navy-900 transition-colors">
                Qué Hacemos
              </Link>
              <Link href="/nuestra-historia" className="text-navy-700 hover:text-navy-900 transition-colors">
                Nuestra Historia
              </Link>
              <Link href="/cursos" className="text-navy-700 hover:text-navy-900 transition-colors">
                Nuestro Programa
              </Link>
              <Link href="/nuestra-vision" className="text-navy-700 hover:text-navy-900 transition-colors">
                Nuestra Visión
              </Link>
              <a href="/alianzas.html" className="text-navy-700 hover:text-navy-900 transition-colors">
                Alianzas
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - agregar imagen real después del texto */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6">
            Líderes en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-500 to-eco-yellow-400">
              {" "}
              Transformación Técnico Digital
            </span>
          </h2>
          <p className="text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Más de 4 años transformando el panorama tecnológico dominicano. 502+ graduados certificados con 48% de
            inserción laboral.
          </p>

          {/* Imagen real del aula */}
          <div className="mb-8">
            <img
              src="/images/classroom1.png"
              alt="Estudiantes de T-ECO Group en clase presencial"
              className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800">
              <Link href="/cursos" className="flex items-center">
                Conocer Nuestro Programa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-navy-300 text-navy-900 hover:bg-navy-50 bg-white">
              <Link href="/quienes-somos">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Nuestro Ecosistema</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <Cpu className="h-12 w-12 text-eco-green-500 mb-4" />
                <CardTitle className="text-navy-900">T-ECO Academy</CardTitle>
                <CardDescription className="text-navy-700">
                  Brazo de formación y desarrollo de talento especializado en tecnologías emergentes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <Code className="h-12 w-12 text-navy-600 mb-4" />
                <CardTitle className="text-navy-900">T-ECO Lab</CardTitle>
                <CardDescription className="text-navy-700">
                  Brazo de desarrollo de soluciones profesionales y consultoría tecnológica
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-navy-900 mb-2">502+</h3>
              <p className="text-navy-700">Graduados Certificados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-navy-900 mb-2">48%</h3>
              <p className="text-navy-700">Inserción Laboral</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-navy-900 mb-2">4+</h3>
              <p className="text-navy-700">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">¿Listo para transformar tu futuro?</h3>
          <p className="text-navy-700 mb-8">
            Únete a los más de 502 graduados que ya están transformando República Dominicana
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-navy-900 to-eco-green-600 hover:from-navy-800 hover:to-eco-green-700"
          >
            <Link href="/cursos">Comenzar Ahora</Link>
          </Button>
        </div>
      </section>

      <ChatBot />
    </div>
  )
}
