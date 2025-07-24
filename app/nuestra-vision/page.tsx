import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, Heart, Lightbulb } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function NuestraVisionPage() {
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
            <h1 className="text-2xl font-bold text-white">Nuestra Visión</h1>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Formando el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-500 to-eco-yellow-400">
              Talento Digital
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Formar el talento técnico digital necesario para impulsar la competitividad y el desarrollo sostenible de
            República Dominicana
          </p>
        </section>

        {/* Mission and Vision - usar imagen real */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/classroom2.png"
                alt="Instructor de T-ECO Academy enseñando en aula moderna"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Ser los líderes en la transformación técnico digital de la República Dominicana.
              </p>
              <h3 className="text-3xl font-bold text-white mb-6">Nuestra Visión</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Formar el talento técnico digital necesario para impulsar la competitividad y el desarrollo sostenible
                del país.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values - corregir colores */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Target className="h-12 w-12 text-eco-green-500 mb-4" />
                <CardTitle className="text-white">Liderazgo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Ser líderes en la transformación técnico digital de República Dominicana, marcando el camino hacia un
                  futuro tecnológico próspero.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-eco-yellow-400 mb-4" />
                <CardTitle className="text-white">Innovación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Formar talento especializado en tecnologías emergentes que impulse la innovación y competitividad del
                  país.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Heart className="h-12 w-12 text-navy-400 mb-4" />
                <CardTitle className="text-white">Desarrollo Sostenible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Contribuir al desarrollo sostenible de República Dominicana a través de la formación de profesionales
                  comprometidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Nuestro Impacto</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Transformación Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Graduados certificados</span>
                    <span className="text-eco-green-400 font-bold">502+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Inserción laboral</span>
                    <span className="text-eco-yellow-400 font-bold">48%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Años transformando RD</span>
                    <span className="text-navy-400 font-bold">4+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Alianzas Estratégicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-eco-green-500 rounded-full"></div>
                    <span className="text-white/70">PROINDUSTRIA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-eco-yellow-400 rounded-full"></div>
                    <span className="text-white/70">Embajada de Estados Unidos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-navy-400 rounded-full"></div>
                    <span className="text-white/70">Sector privado dominicano</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Future Vision - corregir colores */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">El Futuro de República Dominicana</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Visualizamos una República Dominicana donde el talento técnico digital sea el motor del crecimiento
                económico y la innovación. Nuestros graduados liderarán la transformación digital del país.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-eco-green-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-white font-semibold">Competitividad Global</h4>
                    <p className="text-white/70">Profesionales dominicanos compitiendo a nivel internacional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-eco-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-white font-semibold">Desarrollo Sostenible</h4>
                    <p className="text-white/70">Tecnología al servicio del desarrollo nacional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-navy-400 rounded-full mt-3"></div>
                  <div>
                    <h4 className="text-white font-semibold">Liderazgo Regional</h4>
                    <p className="text-white/70">República Dominicana como referente tecnológico del Caribe</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Futuro de República Dominicana"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Call to Action - corregir colores */}
        <section className="text-center bg-gradient-to-r from-eco-green-600/20 to-eco-yellow-600/20 rounded-2xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">Sé Parte de Esta Transformación</h3>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Únete a nosotros en esta misión de formar el talento técnico digital que República Dominicana necesita para
            su desarrollo sostenible y competitividad global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-eco-green-500 to-eco-yellow-400 hover:from-eco-green-600 hover:to-eco-yellow-500"
            >
              <Link href="/cursos">Comenzar Mi Transformación</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              <Link href="/quienes-somos">Conocer Más Sobre Nosotros</Link>
            </Button>
          </div>
        </section>
      </div>

      <ChatBot />
    </div>
  )
}
