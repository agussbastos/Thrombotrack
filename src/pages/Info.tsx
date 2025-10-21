import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info as InfoIcon, AlertTriangle, Heart, Shield } from "lucide-react";

export default function Info() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Información sobre Trombosis</h1>
          <p className="text-muted-foreground">
            Educación y recursos para la prevención
          </p>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="w-6 h-6 text-primary" />
              ¿Qué es la Trombosis?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>
              La trombosis es la formación de un coágulo sanguíneo (trombo) en las arterias o venas, 
              el cual la llegada de sangre y oxígeno a los tejidos. Es el principal factor responsable 
              de las tres causas de muerte cardiovasculares más importantes en el mundo.
            </p>
            <p>
              Cuando un trombo se forma en el cerebro, se da un Accidente Cerebrovascular (ACV). <br>
              Si el trombo se forma en el corazó, da lugar a un Infarto Agudo de Miocardio (IAM). <br>
              Y si el trombo se forma en una vena o se desplaza al pulmón, genera un Tromboembolismo venoso (TEV). 
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                Factores de Riesgo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Inmovilidad prolongada (viajes largos, reposo en cama)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Cirugías recientes (cadera, rodilla, cáncer)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Obesidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>La edad aumenta probabilidades de padecerla (aunque puede suceder a cualquier edad)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Hipertensión, diabetes, colesterol aumentado, fumar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Embarazo y postparto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Antecedentes familiares</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Cáncer o quimioterapia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Uso de anticonceptivos y terapia hormonal</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Prevención
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mantente activo físicamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bebe suficiente agua</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Evita estar sentado por períodos prolongados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Mantén un peso saludable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>No fumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Usa medias de compresión si te lo recomienda tu médico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sigue las indicaciones médicas si tienes factores de riesgo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <InfoIcon className="w-5 h-5 text-primary" />
              Preguntas Frecuentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Cuáles son los síntomas de la trombosis venosa profunda (TVP)?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Los síntomas más comunes incluyen: 
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Dolor de pantorrilla</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Inflamación del pie o tobillo</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Enrojecimiento evidente</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Calor en el área afectada</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Disnea</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Respiración rápida sin causa aparente</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Dolor en el pecho</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Frecuencia cardíaca rápida y mareos o debilidad</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Falta de aire inexplicable</span>
                </li>
                  <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Dolor o sensibilidad en la pierna al estar de pie</span>
                </li>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>¿Qué es una embolia pulmonar?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Una embolia pulmonar ocurre cuando un coágulo de sangre (generalmente de las piernas) 
                  viaja a los pulmones y bloquea una arteria pulmonar. Es una emergencia médica que puede 
                  ser mortal. Los síntomas incluyen dificultad súbita para respirar, dolor en el pecho y tos con sangre.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>¿Los viajes largos aumentan el riesgo de trombosis?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí, permanecer sentado durante más de 4 horas (en avión, auto o tren) puede aumentar 
                  el riesgo de TVP. Es importante levantarse y caminar cada 1-2 horas, hacer ejercicios 
                  de tobillo mientras está sentado, y mantenerse bien hidratado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>¿La Trombosis se relaciona con el cáncer?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sí. Mucha gente no lo sabe, pero en ocasiones, la trombosis se da como un primer síntoma de cáncer 
                  debido a la formación de los tumores; hay estudios que revelan que muchas personas que anteriormente 
                  tuvieron trombosis, luego fueron diagnosticadas de cáncer, especialmente de cerebro, páncreas, estómago 
                  o pulmón. Es importante aclarar que la trombosis es la segunda causa de muerte en personas con cáncer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>¿Qué se celebra el 13 de Octubre?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La magnitud del problema generado por la trombosis llevó a que se creara el DÍA MUNDIAL DE LA TROMBOSIS 
                  que se celebra el 13 DE OCTUBRE con el objetivo de concientizar sobre la necesidad de actuar al respecto 
                  y combatir esta enfermedad. Los colores que se utilizan en representación son el azul y rojo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>¿Cómo se diagnostica la trombosis?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  El diagnóstico se realiza mediante varios métodos: ecografía doppler (el más común), 
                  análisis de sangre (dímero D), venografía, y en algunos casos resonancia magnética o 
                  tomografía computarizada. Si sospechas de trombosis, busca atención médica inmediatamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>¿Cuál es el tratamiento para la trombosis?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  El tratamiento principal son los anticoagulantes (medicamentos que "adelgazan" la sangre) 
                  para prevenir que el coágulo crezca y reducir el riesgo de embolia pulmonar. El tratamiento 
                  puede durar varios meses. En casos graves, pueden ser necesarios procedimientos para 
                  remover el coágulo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle>Recursos Adicionales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong>Línea de Información Médica:</strong> Consulta con tu médico sobre cualquier 
              duda específica sobre tu situación personal.
            </p>
            <p>
              <strong>Grupos de Apoyo:</strong> Busca grupos de apoyo locales o en línea para personas 
              que han experimentado trombosis.
            </p>
            <p>
              <strong>Material Educativo:</strong> Tu médico puede proporcionarte folletos informativos 
              y guías específicas para tu caso.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
