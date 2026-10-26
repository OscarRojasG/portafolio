import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-background text-foreground">

      {/* Hero Section */}
      <section className="text-center max-w-3xl mb-24 mt-10">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Oscar Rojas
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Investigador académico y desarrollador. Especializado en Machine Learning, optimización combinatoria y tecnología educativa.
        </p>

        {/* Etiquetas actualizadas según los proyectos destacados */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">LLMs</Badge>
          <Badge variant="secondary">Optimización</Badge>
          <Badge variant="secondary">Game Dev</Badge>
          <Badge variant="secondary">EdTech</Badge>
        </div>
      </section>

      {/* Sección de Destacados */}
      <section id="destacados" className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 border-b pb-4">
          Investigación y Proyectos Destacados
        </h2>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Tarjeta 1: Investigación TSP */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2">
                  <Badge>ML</Badge>
                  <Badge variant="secondary">Optimización</Badge>
                </div>
                <span className="text-xs text-muted-foreground mt-1">Mar 2026</span>
              </div>
              <CardTitle className="text-lg leading-tight">
                What Makes a Transformer Solve the TSP? A Component-wise Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-sm text-muted-foreground mt-2">
              Un análisis exhaustivo y guía tutorial sobre el uso de modelos Transformer para resolver el Problema del Vendedor Viajero (TSP). El estudio clasifica arquitecturas, estrategias de resolución y métodos de entrenamiento, construyendo un puente fundamental entre la optimización combinatoria clásica y el estado del arte en Deep Learning.
            </CardContent>
            <CardFooter>
              <a
                href="https://www.mdpi.com/2227-7390/14/6/985"
                target="_blank"
                rel="noreferrer"
                className={`${buttonVariants({ variant: "ghost", size: "sm" })} w-full`}
              >
                Leer artículo →
              </a>
            </CardFooter>
          </Card>

          {/* Tarjeta 2: Proyecto Bio Lab */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2">
                  <Badge>Educación</Badge>
                  <Badge variant="secondary">Game Dev</Badge>
                </div>
                <span className="text-xs text-muted-foreground mt-1">Dic 2025</span>
              </div>
              <CardTitle className="text-lg leading-tight">
                Bio Lab Escape: An Educational Game for Teaching Cellular Biology
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-sm text-muted-foreground mt-2">
              Videojuego educativo diseñado para facilitar la enseñanza de biología celular. Validado empíricamente en estudiantes universitarios, el proyecto demuestra cómo la integración de mecánicas de gamificación puede mejorar la retención de conocimientos complejos, sirviendo como una herramienta de refuerzo didáctico altamente efectiva.
            </CardContent>
            <CardFooter>
              <a
                href="https://ieeexplore.ieee.org/document/11476589"
                target="_blank"
                rel="noreferrer"
                className={`${buttonVariants({ variant: "ghost", size: "sm" })} w-full`}
              >
                Leer artículo →
              </a>
            </CardFooter>
          </Card>

          {/* Tarjeta 3: Proyecto EvaluAI */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2">
                  <Badge>Educación</Badge>
                  <Badge variant="secondary">LLMs</Badge>
                </div>
                <span className="text-xs text-muted-foreground mt-1">2024</span>
              </div>
              <CardTitle className="text-lg leading-tight">
                EvaluAI: Automatic Scoring Short-Answer Constructed-Response Questions with LLMs
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-sm text-muted-foreground mt-2">
              Herramienta de calificación automática para preguntas de desarrollo en educación superior, impulsada por GPT-4o mini. Utilizando estrategias avanzadas de prompting y optimización matemática, el sistema logra evaluar cientos de respuestas estudiantiles con una precisión comparable a la de un evaluador humano experto.
            </CardContent>
            <CardFooter>
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5214449"
                target="_blank"
                rel="noreferrer"
                className={`${buttonVariants({ variant: "ghost", size: "sm" })} w-full`}
              >
                Leer artículo →
              </a>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* Sección de Contacto Rediseñada */}
      <section id="contacto" className="w-full max-w-5xl mt-24 mb-12">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ponte en contacto</h2>
          <p className="text-muted-foreground max-w-2xl">
            Siempre estoy abierto a colaborar en nuevas investigaciones, discutir sobre algoritmos de optimización o explorar proyectos de desarrollo.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md shadow-sm border-muted">
            <CardContent>
              <div className="flex flex-col gap-2">

                {/* Correo con Icono Acentuado */}
                <a href="mailto:oscar.rojas@pucv.cl" className="flex items-center group p-2 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">oscar.rojas@pucv.cl</p>
                  </div>
                </a>

                {/* Ubicación con Icono Acentuado */}
                <div className="flex items-center p-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-5 text-left">
                    <p className="text-sm font-medium">Ubicación</p>
                    <p className="text-sm text-muted-foreground">Valparaíso, Chile</p>
                  </div>
                </div>

                {/* Enlaces Profesionales en Grilla */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t mt-2">
                  <a
                    href="https://github.com/OscarRojasG"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonVariants()} w-full bg-[#24292e] hover:bg-[#24292e]/90 text-white dark:bg-[#24292e] dark:hover:bg-[#24292e]/90 dark:text-white border-none shadow-sm`}
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/oscarfranciscorojasgaete/"
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonVariants()} w-full bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white dark:bg-[#0A66C2] dark:hover:bg-[#0A66C2]/90 dark:text-white border-none shadow-sm`}
                  >
                    <LinkedinIcon className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </main>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}