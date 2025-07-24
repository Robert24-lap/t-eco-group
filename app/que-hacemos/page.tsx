import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code, Users, Building, Globe } from "lucide-react"
import ChatBot from "@/components/chat-bot"

export default function QueHacemosPage() {
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
            <h1 className="text-2xl font-bold text-navy-900">Qué Hacemos</h1>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-900 mb-6">
            Dos divisiones especializadas trabajando en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green-500 to-eco-yellow-400">
              Sinergia
            </span>
          </h2>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            Para transformar el futuro digital de República Dominicana
          </p>
        </section>

        {/* Main Image - reemplazar con imagen real */}
        <div className="mb-16">
          <img
            src="/images/classroom4.png"
            alt="Estudiantes de T-ECO Group trabajando en proyectos de modelado 3D"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Ecosystem Overview */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Nuestro Ecosistema</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* T-ECO Academy */}
            <Card className="bg-gradient-to-br from-eco-green-50 to-white border-navy-200 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-eco-green-500 mb-4" />
                <CardTitle className="text-navy-900 text-2xl">T-ECO Academy</CardTitle>
                <p className="text-navy-700">Brazo de formación y desarrollo de talento especializado</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eco-green-500 rounded-full"></div>
                    <span>Programa intensivo de 8 meses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eco-green-500 rounded-full"></div>
                    <span>Modalidad presencial (L-V)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eco-green-500 rounded-full"></div>
                    <span>Project Based Learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eco-green-500 rounded-full"></div>
                    <span>502+ graduados certificados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eco-green-500 rounded-full"></div>
                    <span>48% inserción laboral</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-eco-green-500 rounded-full"></div>
                    <span>Horarios: Mañana (9am-1pm) y Tarde (2pm-6pm)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* T-ECO Lab */}
            <Card className="bg-gradient-to-br from-navy-50 to-white border-navy-200 shadow-lg">
              <CardHeader>
                <Code className="h-12 w-12 text-navy-600 mb-4" />
                <CardTitle className="text-navy-900 text-2xl">T-ECO Lab</CardTitle>
                <p className="text-navy-700">Brazo de desarrollo de soluciones profesionales y consultoría</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                    <span>Desarrollo Web & Móvil</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                    <span>Soluciones de Inteligencia Artificial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                    <span>Experiencias VR/AR y Metaverso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                    <span>Cloud & DevOps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                    <span>Blockchain & Web3</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-navy-600 rounded-full"></div>
                    <span>Ciberseguridad y Auditorías</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Methodology - agregar imagen real */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-6">Nuestra Metodología</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-eco-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold mb-2">Project Based Learning</h4>
                    <p className="text-navy-700">
                      Aprendizaje basado en proyectos reales que simulan desafíos de la industria dominicana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-eco-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold mb-2">Modalidad Presencial Intensiva</h4>
                    <p className="text-navy-700">
                      Formación presencial de lunes a viernes en Santiago de los Caballeros para máximo aprovechamiento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold mb-2">Conexión con T-ECO Lab</h4>
                    <p className="text-navy-700">
                      Oportunidades de práctica profesional en proyectos reales de consultoría y desarrollo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-eco-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold mb-2">Inserción Laboral</h4>
                    <p className="text-navy-700">
                      Acompañamiento en la búsqueda de empleo y conexión con empresas del ecosistema tecnológico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/classroom2.png"
                alt="Metodología de enseñanza en T-ECO Group"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Strategic Alliances */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Alianzas Estratégicas</h3>
          <p className="text-xl text-navy-700 text-center mb-8 max-w-3xl mx-auto">
            Nuestras alianzas estratégicas con PROINDUSTRIA y la Embajada de Estados Unidos nos posicionan como líderes
            en la transformación digital del país.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <Building className="h-12 w-12 text-eco-green-500 mb-4" />
                <CardTitle className="text-navy-900">PROINDUSTRIA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-700">
                  Alianza estratégica que nos posiciona como líderes en la transformación digital del sector industrial
                  dominicano, impulsando la competitividad empresarial.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-eco-yellow-400 mb-4" />
                <CardTitle className="text-navy-900">Embajada de Estados Unidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-700">
                  Colaboración internacional que fortalece nuestros programas de formación y nos conecta con las mejores
                  prácticas tecnológicas globales.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-8">Nuestro Impacto en República Dominicana</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy-900 text-3xl">502+</CardTitle>
                <p className="text-navy-700">Graduados Certificados</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-600 text-sm">
                  Profesionales formados en tecnologías emergentes contribuyendo al desarrollo del país
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy-900 text-3xl">48%</CardTitle>
                <p className="text-navy-700">Inserción Laboral</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-600 text-sm">
                  De nuestros graduados encuentran empleo en el sector tecnológico dominicano
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-navy-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy-900 text-3xl">4+</CardTitle>
                <p className="text-navy-700">Años de Experiencia</p>
              </CardHeader>
              <CardContent>
                <p className="text-navy-600 text-sm">
                  Transformando el panorama tecnológico de República Dominicana desde 2021
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <ChatBot />
    </div>
  )
}
