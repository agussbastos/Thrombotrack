import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History as HistoryIcon, FileText, Activity, Pill } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const medicalHistory = [
  {
    date: "2024-01-15",
    type: "Diagnóstico",
    description: "Trombosis venosa profunda en pierna izquierda",
    doctor: "Dr. González",
    severity: "Moderado"
  },
  {
    date: "2024-01-20",
    type: "Tratamiento",
    description: "Inicio de anticoagulantes - Warfarina 5mg",
    doctor: "Dr. González",
    severity: "Normal"
  },
  {
    date: "2024-02-05",
    type: "Control",
    description: "Control de INR - Valores normales",
    doctor: "Dr. González",
    severity: "Normal"
  }
];

const symptomsHistory = [
  {
    date: "2024-03-10",
    symptom: "Hinchazón leve",
    severity: "Leve",
    notes: "Después de viaje largo en auto"
  },
  {
    date: "2024-03-05",
    symptom: "Dolor en pantorrilla",
    severity: "Moderado",
    notes: "Persistió por 2 horas"
  }
];

const medicationHistory = [
  {
    medication: "Warfarina",
    dose: "5mg",
    frequency: "1 vez al día",
    startDate: "2024-01-20",
    status: "Activo"
  },
  {
    medication: "Aspirina",
    dose: "100mg",
    frequency: "1 vez al día",
    startDate: "2024-01-25",
    status: "Activo"
  }
];

export default function History() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Historial Médico</h1>
          <p className="text-muted-foreground">
            Tu historial completo de salud y tratamientos
          </p>
        </div>

        <Tabs defaultValue="medical" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="medical" className="gap-2">
              <HistoryIcon className="w-4 h-4" />
              Médico
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="gap-2">
              <Activity className="w-4 h-4" />
              Síntomas
            </TabsTrigger>
            <TabsTrigger value="medications" className="gap-2">
              <Pill className="w-4 h-4" />
              Medicación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="medical" className="space-y-4 mt-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Historial de Consultas y Diagnósticos</CardTitle>
                <CardDescription>
                  Registro completo de tus visitas médicas y diagnósticos
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {medicalHistory.map((record, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-lg">{record.type}</CardTitle>
                          <Badge 
                            variant={
                              record.severity === "Normal" ? "default" : 
                              record.severity === "Moderado" ? "secondary" : 
                              "destructive"
                            }
                          >
                            {record.severity}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {record.description}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {new Date(record.date).toLocaleDateString('es-AR')}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <FileText className="w-4 h-4 inline mr-1" />
                      Médico tratante: {record.doctor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="symptoms" className="space-y-4 mt-6">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Historial de Síntomas</CardTitle>
                <CardDescription>
                  Registro de síntomas reportados
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {symptomsHistory.map((record, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-lg">{record.symptom}</CardTitle>
                          <Badge 
                            variant={
                              record.severity === "Leve" ? "default" : 
                              record.severity === "Moderado" ? "secondary" : 
                              "destructive"
                            }
                          >
                            {record.severity}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {new Date(record.date).toLocaleDateString('es-AR')}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{record.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Análisis de Síntomas</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Comparte este historial con tu médico en cada consulta para un mejor seguimiento 
                  de tu condición.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-4 mt-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Medicación Actual</CardTitle>
                <CardDescription>
                  Listado de medicamentos y tratamientos activos
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {medicationHistory.map((med, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-lg">{med.medication}</CardTitle>
                          <Badge variant={med.status === "Activo" ? "default" : "secondary"}>
                            {med.status}
                          </Badge>
                        </div>
                        <CardDescription>
                          Dosis: {med.dose} - {med.frequency}
                        </CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        Desde: {new Date(med.startDate).toLocaleDateString('es-AR')}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Recordatorios Importantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Toma tus medicamentos a la misma hora todos los días</p>
                <p>• No suspendas el tratamiento sin consultar con tu médico</p>
                <p>• Informa a todos tus médicos sobre los medicamentos que tomas</p>
                <p>• Lleva contigo una lista de tus medicamentos en todo momento</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
