import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Trophy, Users } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function NuestraHistoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-slate-800 to-navy-900">
      {/* Header - corregir colores */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6 text-eco-green-500" />
              <span className="text-white">Volver al Inicio</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Nuestra Historia</h1>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Más de 4 años{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-500 to-eco-yellow-400">
              Transformando República Dominicana
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Desde 2021, T-ECO GROUP ha sido pionero en la transformación del panorama tecnológico dominicano
          </p>
        </section>

        {/* Founding Story - usar imagen real */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/classroom3.png"
                alt="Instructor de T-ECO GROUP enseñando a estudiantes"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Fundación en 2021</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                T-ECO GROUP nació con la visión de revolucionar la educación tecnológica en República Dominicana. Desde
                nuestros inicios, nos hemos enfocado en formar el talento técnico digital necesario para impulsar la
                competitividad y el desarrollo sostenible del país.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Operamos bajo un ecosistema de dos divisiones principales: T-ECO Academy para la formación de talento y
                T-ECO Lab para el desarrollo de soluciones profesionales.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline - corregir colores */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Nuestro Crecimiento</h3>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-eco-green-600 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm flex-1">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    2021 - Fundación de T-ECO GROUP
                    <span className="text-eco-green-400 text-sm">Año 1</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">
                    Fundación de T-ECO GROUP con la visión de revolucionar la educación tecnológica en República
                    Dominicana.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
              </div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm flex-1">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    2022-2023 - Alianzas Estratégicas
                    <span className="text-navy-400 text-sm">Años 2-3</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">
                    Establecimiento de alianzas estratégicas con PROINDUSTRIA y la Embajada de Estados Unidos,
                    posicionándonos como líderes en la transformación digital del país.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-eco-yellow-600 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm flex-1">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    2024 - Más de 502 Graduados
                    <span className="text-eco-yellow-400 text-sm">Año 4</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">
                    Alcanzamos la marca de más de 502 graduados certificados con una tasa de inserción laboral del 48%,
                    consolidando nuestro impacto en el panorama tecnológico dominicano.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">T-ECO GROUP Hoy</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-3xl">502+</CardTitle>
                <p className="text-white/70">Graduados Certificados</p>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-3xl">48%</CardTitle>
                <p className="text-white/70">Inserción Laboral</p>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-3xl">4+</CardTitle>
                <p className="text-white/70">Años de Experiencia</p>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-3xl">Santiago</CardTitle>
                <p className="text-white/70">República Dominicana</p>
              </CardHeader>
            </Card>
          </div>

          <p className="text-white/80 text-lg mt-8 max-w-3xl mx-auto">
            Desde 2021, hemos mantenido nuestro compromiso de ser líderes en la transformación técnico digital de
            República Dominicana, formando el talento necesario para impulsar la competitividad y el desarrollo
            sostenible del país.
          </p>
        </section>
      </div>

      <ChatBot />
    </div>
  )
}
