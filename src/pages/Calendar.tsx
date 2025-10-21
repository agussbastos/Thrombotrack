import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Plus, Clock, Pill } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const upcomingAppointments = [
  {
    date: "2024-03-20",
    time: "10:00",
    type: "Consulta de Control",
    doctor: "Dr. González",
    location: "Hospital Central"
  },
  {
    date: "2024-03-25",
    time: "15:30",
    type: "Análisis de Sangre",
    doctor: "Laboratorio",
    location: "Lab. Médico"
  }
];

const medicationSchedule = [
  {
    medication: "Warfarina",
    dose: "5mg",
    times: ["08:00", "20:00"],
    frequency: "Diario"
  },
  {
    medication: "Aspirina",
    dose: "100mg",
    times: ["09:00"],
    frequency: "Diario"
  }
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Calendario Médico</h1>
            <p className="text-muted-foreground">
              Gestiona tus turnos y horarios de medicación
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Agregar Evento
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Próximos Turnos
                </CardTitle>
                <CardDescription>
                  Tus citas médicas programadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{appointment.type}</h4>
                      <Badge variant="outline">
                        {new Date(appointment.date).toLocaleDateString('es-AR')}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {appointment.time}
                      </p>
                      <p>👨‍⚕️ {appointment.doctor}</p>
                      <p>📍 {appointment.location}</p>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Turno
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Recordatorios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Llega 15 minutos antes de tu cita</p>
                <p>• Lleva tu orden médica y DNI</p>
                <p>• Informa sobre cualquier cambio en tu medicación</p>
                <p>• Anota preguntas para tu médico</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5 text-accent" />
                  Horarios de Medicación
                </CardTitle>
                <CardDescription>
                  Tus medicamentos y sus horarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {medicationSchedule.map((med, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{med.medication}</h4>
                        <p className="text-sm text-muted-foreground">{med.dose}</p>
                      </div>
                      <Badge variant="secondary">{med.frequency}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {med.times.map((time, idx) => (
                        <Badge key={idx} variant="outline" className="bg-background">
                          <Clock className="w-3 h-3 mr-1" />
                          {time}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Medicamento
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle>Consejos para la Medicación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Configura alarmas para cada toma</p>
                <p>• Lleva un registro de las tomas realizadas</p>
                <p>• Mantén tus medicamentos en un lugar visible</p>
                <p>• Renueva las recetas con anticipación</p>
                <p>• Consulta con tu médico ante cualquier duda</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vista de Hoy</CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString('es-AR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <Pill className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">3 medicamentos programados</p>
                      <p className="text-sm text-muted-foreground">Próxima toma: 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <CalendarIcon className="w-5 h-5 text-foreground" />
                    <div>
                      <p className="font-medium">Sin turnos programados</p>
                      <p className="text-sm text-muted-foreground">Próximo turno: 20 de marzo</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
