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
              La trombosis es la formación de un coágulo sanguíneo (trombo) dentro de un vaso sanguíneo, 
              que obstruye el flujo de sangre a través del sistema circulatorio.
            </p>
            <p>
              Cuando un trombo se desprende y viaja por el torrente sanguíneo, se denomina embolia. 
              Esto puede causar complicaciones graves si bloquea el flujo sanguíneo en órganos vitales.
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
                  <span>Cirugías recientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Obesidad</span>
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
                  <span>Tabaquismo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Ciertos medicamentos (anticonceptivos, terapia hormonal)</span>
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
                  Los síntomas más comunes incluyen: hinchazón en una pierna (rara vez en ambas), 
                  dolor o sensibilidad en la pierna (puede sentirse al estar de pie o caminar), 
                  enrojecimiento o decoloración de la piel, y sensación de calor en la pierna afectada.
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
                <AccordionTrigger>¿Quién está en mayor riesgo?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Las personas con mayor riesgo incluyen: mayores de 60 años, personas con sobrepeso, 
                  fumadores, aquellos con antecedentes familiares, personas que han tenido cirugía reciente, 
                  embarazadas o en postparto, y quienes toman ciertos medicamentos como anticonceptivos orales.
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
