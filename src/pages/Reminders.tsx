import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Target, Salad } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const challenges = [
  {
    title: "Camina 10,000 Pasos",
    description: "Meta diaria de actividad física",
    difficulty: "Moderado",
    points: 50
  },
  {
    title: "Bebe 2 Litros de Agua",
    description: "Mantén una hidratación óptima",
    difficulty: "Fácil",
    points: 30
  },
  {
    title: "Ejercicios de Estiramiento",
    description: "15 minutos de estiramientos por día",
    difficulty: "Fácil",
    points: 20
  },
  {
    title: "Semana Sin Alcohol",
    description: "Desafío de 7 días",
    difficulty: "Difícil",
    points: 100
  }
];

const recipes = [
  {
    title: "Smoothie Antiinflamatorio",
    description: "Arándanos, espinaca, jengibre y agua de coco",
    category: "Bebidas",
    benefits: "Rico en antioxidantes"
  },
  {
    title: "Ensalada de Salmón",
    description: "Salmón a la plancha con vegetales verdes y aguacate",
    category: "Plato Principal",
    benefits: "Alto en Omega-3"
  },
  {
    title: "Bowl de Avena",
    description: "Avena con frutos rojos, nueces y semillas de chía",
    category: "Desayuno",
    benefits: "Fibra y proteínas"
  },
  {
    title: "Té Verde con Limón",
    description: "Infusión de té verde natural con jugo de limón",
    category: "Bebidas",
    benefits: "Antioxidantes naturales"
  }
];

const dailyReminders = [
  { time: "08:00", action: "Tomar medicación matutina" },
  { time: "10:00", action: "Ejercicios de movilidad" },
  { time: "12:00", action: "Hidratación - beber agua" },
  { time: "15:00", action: "Caminata corta" },
  { time: "18:00", action: "Ejercicios de estiramiento" },
  { time: "21:00", action: "Medicación nocturna" }
];

export default function Reminders() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Recordatorios y Retos</h1>
          <p className="text-muted-foreground">
            Mantén una vida saludable con nuestros retos y recetas
          </p>
        </div>

        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="challenges" className="gap-2">
              <Target className="w-4 h-4" />
              Retos
            </TabsTrigger>
            <TabsTrigger value="recipes" className="gap-2">
              <Salad className="w-4 h-4" />
              Recetas
            </TabsTrigger>
            <TabsTrigger value="reminders" className="gap-2">
              <Bell className="w-4 h-4" />
              Recordatorios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="challenges" className="space-y-4 mt-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Retos Saludables</CardTitle>
                <CardDescription>
                  Completa retos para mantener hábitos saludables y ganar puntos
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {challenges.map((challenge, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{challenge.points} pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge 
                      variant={challenge.difficulty === "Fácil" ? "default" : challenge.difficulty === "Moderado" ? "secondary" : "destructive"}
                    >
                      {challenge.difficulty}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipes" className="space-y-4 mt-6">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Recetas Saludables</CardTitle>
                <CardDescription>
                  Alimentación equilibrada para una mejor circulación
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {recipes.map((recipe, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{recipe.title}</CardTitle>
                        <Badge variant="outline">{recipe.category}</Badge>
                      </div>
                      <CardDescription>{recipe.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Salad className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{recipe.benefits}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Consejos Nutricionales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Incluye alimentos ricos en Omega-3 (pescado, nueces)</p>
                <p>• Aumenta el consumo de frutas y vegetales</p>
                <p>• Reduce la sal y alimentos procesados</p>
                <p>• Mantén un horario regular de comidas</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reminders" className="space-y-4 mt-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Recordatorios Diarios</CardTitle>
                <CardDescription>
                  Mantén tu rutina saludable con recordatorios programados
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-3">
              {dailyReminders.map((reminder, index) => (
                <Card key={index} className="hover:shadow-sm transition-all">
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <Bell className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{reminder.action}</p>
                      <p className="text-sm text-muted-foreground">{reminder.time}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Configuración de Notificaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Las notificaciones te ayudarán a mantener tu rutina. Asegúrate de tener las notificaciones habilitadas en tu dispositivo.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
