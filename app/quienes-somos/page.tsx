import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Award, Globe } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-navy-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-eco-green-500" />
              <span className="text-navy-900">Volver al Inicio</span>
            </Link>
            <h1 className="text-2xl font-bold text-navy-900">Quiénes Somos</h1>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-900 mb-6">
            Somos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-500 to-eco-yellow-400">
              T-ECO GROUP
            </span>
          </h2>
          <p className="text-xl text-navy-900/80 max-w-3xl mx-auto">
            Líderes en la transformación técnico digital de República Dominicana
          </p>
        </section>

        {/* Image Placeholder - reemplazar con imagen real */}
        <div className="mb-16">
          <img
            src="/images/classroom2.png"
            alt="Aula moderna de T-ECO Academy"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">Nuestra Misión</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              Ser los líderes en la transformación técnico digital de la República Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">Nuestra Visión</h3>
            <p className="text-navy-700 text-lg leading-relaxed">
              Formar el talento técnico digital necesario para impulsar la competitividad y el desarrollo sostenible del
              país.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-navy-200 shadow-lg text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-eco-green-500 mx-auto mb-4" />
              <CardTitle className="text-navy-900 text-3xl">502+</CardTitle>
              <p className="text-navy-700">Graduados Certificados</p>
            </CardHeader>
          </Card>

          <Card className="bg-white border-navy-200 shadow-lg text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-eco-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-navy-900 text-3xl">48%</CardTitle>
              <p className="text-navy-700">Tasa de Inserción Laboral</p>
            </CardHeader>
          </Card>

          <Card className="bg-white border-navy-200 shadow-lg text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-navy-600 mx-auto mb-4" />
              <CardTitle className="text-navy-900 text-3xl">4+</CardTitle>
              <p className="text-navy-700">Años Transformando RD</p>
            </CardHeader>
          </Card>
        </section>

        {/* Team Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-8">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Edward Rodriguez"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-navy-900">Edward Rodriguez</CardTitle>
                <p className="text-navy-700">CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900/60 text-sm">Liderazgo visionario en transformación digital</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Orlando Vargas"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-navy-900">Orlando Vargas</CardTitle>
                <p className="text-navy-700">Data Scientist</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900/60 text-sm">Experto en análisis de datos y machine learning</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Laura Perez"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-navy-900">Laura Perez</CardTitle>
                <p className="text-navy-700">Especialista en Marketing Digital</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-900/60 text-sm">Estrategias de marketing innovadoras y efectivas</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alianzas Section */}
        <section className="text-center mt-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-8">Nuestras Alianzas Estratégicas</h3>
          <p className="text-xl text-navy-900/80 max-w-3xl mx-auto mb-8">
            Nuestras alianzas estratégicas con PROINDUSTRIA y la Embajada de Estados Unidos nos posicionan como líderes
            en la transformación digital del país.
          </p>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=80&width=150"
                alt="PROINDUSTRIA Logo"
                className="h-20 object-contain mx-auto mb-2"
              />
              <p className="text-navy-700 font-semibold">PROINDUSTRIA</p>
            </div>
            <div className="text-center">
              <img
                src="/placeholder.svg?height=80&width=150"
                alt="Embajada de Estados Unidos Logo"
                className="h-20 object-contain mx-auto mb-2"
              />
              <p className="text-navy-700 font-semibold">Embajada de Estados Unidos</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="text-center mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-navy-900 mb-6">Nuestra Ubicación</h3>
          <div className="space-y-2 text-navy-700">
            <p className="text-lg">Av. 27 de Febrero #146</p>
            <p className="text-lg">Villa Santiago de los Caballeros</p>
            <p className="text-lg">República Dominicana</p>
            <div className="mt-4 space-y-1">
              <p className="font-semibold">+1 (849) 517-7567</p>
              <p className="font-semibold">tecog.academy@gmail.com</p>
              <p className="font-semibold">www.t-ecogroup.net</p>
            </div>
          </div>
        </section>
      </div>

      <ChatBot />
    </div>
  )
}
