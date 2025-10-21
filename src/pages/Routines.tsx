import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Droplet } from "lucide-react";

const movementRoutines = [
  {
    title: "Ejercicios de Tobillo",
    description: "Rota los tobillos en círculos, 10 veces en cada dirección",
    duration: "2 minutos"
  },
  {
    title: "Elevación de Piernas",
    description: "Levanta las piernas alternadamente, mantén 5 segundos",
    duration: "3 minutos"
  },
  {
    title: "Caminata en el Lugar",
    description: "Camina sin moverte del lugar durante 5 minutos",
    duration: "5 minutos"
  },
  {
    title: "Flexión de Rodillas",
    description: "Flexiona las rodillas llevándolas hacia el pecho",
    duration: "2 minutos"
  }
];

const hydrationTips = [
  {
    title: "Agua Regular",
    description: "Bebe 250ml de agua cada hora durante el viaje",
    frequency: "Cada hora"
  },
  {
    title: "Evita Alcohol",
    description: "El alcohol deshidrata y aumenta el riesgo",
    frequency: "Durante todo el viaje"
  },
  {
    title: "Infusiones",
    description: "Tés de hierbas sin cafeína son una buena opción",
    frequency: "2-3 veces al día"
  },
  {
    title: "Frutas Hidratantes",
    description: "Sandía, naranja, uvas ayudan con la hidratación",
    frequency: "Como snack"
  }
];

export default function Routines() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Rutinas para Viajes</h1>
          <p className="text-muted-foreground">
            Mantente activo e hidratado durante viajes largos
          </p>
        </div>

        <Tabs defaultValue="movement" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="movement" className="gap-2">
              <Activity className="w-4 h-4" />
              Movimiento
            </TabsTrigger>
            <TabsTrigger value="hydration" className="gap-2">
              <Droplet className="w-4 h-4" />
              Hidratación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="movement" className="space-y-4 mt-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>¿Por qué es importante?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Durante viajes largos, la inmovilidad prolongada puede aumentar el riesgo de trombosis venosa profunda (TVP). 
                  Estos ejercicios simples ayudan a mantener la circulación sanguínea activa.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {movementRoutines.map((routine, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{routine.title}</CardTitle>
                        <CardDescription className="mt-2">{routine.description}</CardDescription>
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {routine.duration}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Frecuencia Recomendada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Realiza esta rutina cada 2 horas durante viajes largos en avión, bus o auto. 
                  Combina con caminatas cortas cuando sea posible.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hydration" className="space-y-4 mt-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Importancia de la Hidratación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La deshidratación puede espesar la sangre y aumentar el riesgo de coágulos. 
                  Mantener una hidratación adecuada es fundamental para la prevención de trombosis.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {hydrationTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                        <CardDescription className="mt-2">{tip.description}</CardDescription>
                      </div>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {tip.frequency}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Meta Diaria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Objetivo: 2-3 litros de agua al día. Durante viajes, intenta beber al menos 250ml cada hora.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
