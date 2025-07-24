import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, CheckCircle, Code, Cpu } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function CursoPage() {
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
            <h1 className="text-2xl font-bold text-navy-900">T-ECO Group</h1>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section - agregar imagen real después de la descripción */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-900 mb-6">
            Programa Intensivo de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-500 to-eco-yellow-400">
              8 Meses
            </span>
          </h2>
          <p className="text-xl text-navy-700 max-w-4xl mx-auto mb-8">
            Brazo de formación y desarrollo de talento especializado en tecnologías emergentes
          </p>

          {/* Imagen real del aula */}
          <div className="mb-8">
            <img
              src="/images/classroom4.png"
              alt="Estudiantes trabajando en proyectos de modelado 3D en T-ECO Group"
              className="w-full max-w-5xl mx-auto h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center space-y-2">
              <Clock className="h-8 w-8 text-eco-green-500" />
              <span className="text-navy-900 font-semibold">8 meses intensivos</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-eco-green-500" />
              <span className="text-navy-900 font-semibold">Modalidad presencial (L-V)</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Code className="h-8 w-8 text-eco-green-500" />
              <span className="text-navy-900 font-semibold">Project Based Learning</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Cpu className="h-8 w-8 text-eco-green-500" />
              <span className="text-navy-900 font-semibold">Tecnologías emergentes</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">Horarios Disponibles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-navy-200">
                <h4 className="font-semibold text-navy-900">Horario Matutino</h4>
                <p className="text-navy-700">9:00 AM - 1:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-navy-200">
                <h4 className="font-semibold text-navy-900">Horario Vespertino</h4>
                <p className="text-navy-700">2:00 PM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <Badge className="bg-eco-green-500 text-white text-lg px-6 py-2 mb-8">Beca Completa Disponible</Badge>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Nuestros Resultados</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-navy-200 shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-navy-900 text-4xl">502+</CardTitle>
                <p className="text-navy-700">Graduados Certificados</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-600 text-sm">Profesionales formados en tecnologías emergentes desde 2021</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-navy-900 text-4xl">48%</CardTitle>
                <p className="text-navy-700">Inserción Laboral</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-600 text-sm">
                  De nuestros graduados encuentran empleo en el sector tecnológico
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg text-center">
              <CardHeader>
                <CardTitle className="text-navy-900 text-4xl">4+</CardTitle>
                <p className="text-navy-700">Años de Experiencia</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-600 text-sm">Transformando el panorama tecnológico dominicano desde 2021</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* T-ECO Lab Connection */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Conexión con T-ECO Lab</h3>
          <Card className="bg-gradient-to-r from-navy-50 to-white border-navy-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-4">Experiencia Profesional Real</h4>
                  <p className="text-navy-700 mb-6">
                    Nuestros estudiantes tienen la oportunidad de trabajar en proyectos reales a través de T-ECO Lab,
                    nuestro brazo de desarrollo de soluciones profesionales y consultoría tecnológica.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-3 h-3 bg-eco-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-navy-700">Desarrollo Web & Móvil</p>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 bg-eco-yellow-400 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-navy-700">Soluciones de IA</p>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 bg-navy-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-navy-700">VR/AR y Metaverso</p>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 bg-eco-green-600 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-navy-700">Cloud & DevOps</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="T-ECO Lab proyectos"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Requirements and Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy-900">Requisitos para la Beca</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Disponibilidad de Lunes a Viernes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Compromiso con el programa completo de 8 meses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Residir en Santiago de los Caballeros o alrededores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Motivación para aprender tecnologías emergentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy-900">Qué Incluye tu Beca</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Formación completa de 8 meses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Project Based Learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Acceso a proyectos reales en T-ECO Lab</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Certificado profesional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-eco-green-500" />
                    <span>Apoyo en inserción laboral</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Agregar nueva sección de ambiente de aprendizaje */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Nuestro Ambiente de Aprendizaje</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/classroom1.png"
                alt="Instructor explicando conceptos técnicos a estudiantes"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-navy-900 mb-2">Clases Presenciales Interactivas</h4>
              <p className="text-navy-700">
                Nuestros instructores brindan atención personalizada en aulas modernas equipadas con la última
                tecnología.
              </p>
            </div>
            <div>
              <img
                src="/images/classroom3.png"
                alt="Estudiantes recibiendo mentoría directa del instructor"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-navy-900 mb-2">Mentoría Personalizada</h4>
              <p className="text-navy-700">
                Cada estudiante recibe acompañamiento individual para maximizar su aprendizaje y desarrollo profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6">Ubicación y Contacto</h3>
          <div className="space-y-2 text-navy-700 mb-6">
            <p className="text-lg">Av. 27 de Febrero #146</p>
            <p className="text-lg">Villa Santiago de los Caballeros</p>
            <p className="text-lg">República Dominicana</p>
          </div>
          <div className="space-y-1 text-navy-900">
            <p className="font-semibold">+1 (849) 517-7567</p>
            <p className="font-semibold">tecog.academy@gmail.com</p>
            <p className="font-semibold">www.t-ecogroup.net</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-eco-green-500/10 to-eco-yellow-400/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">¿Listo para transformar tu futuro?</h3>
          <p className="text-navy-700 mb-8 text-lg">
            Únete a los más de 502 graduados que ya están transformando República Dominicana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-eco-green-500 to-eco-yellow-400 hover:from-eco-green-600 hover:to-eco-yellow-500 text-white"
            >
              Solicitar Información
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy-300 text-navy-900 hover:bg-navy-50 bg-transparent"
            >
              Llamar: (849) 517-7567
            </Button>
          </div>
        </section>
      </div>

      <ChatBot />
    </div>
  )
}
