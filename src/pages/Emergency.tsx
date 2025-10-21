import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Phone, MapPin, Hospital } from "lucide-react";
import { toast } from "sonner";

const emergencyContacts = [
  {
    name: "Emergencias Médicas",
    number: "911",
    description: "Número de emergencia general"
  },
  {
    name: "SAME (Argentina)",
    number: "107",
    description: "Sistema de Atención Médica de Emergencias"
  },
  {
    name: "Cruz Roja",
    number: "0800-222-0022",
    description: "Asistencia médica de urgencia"
  }
];

export default function Emergency() {
  const handleEmergencyCall = (number: string, name: string) => {
    toast.success(`Llamando a ${name}...`);
    window.location.href = `tel:${number}`;
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast.success("Ubicación obtenida. Preparando para compartir...");
          console.log("Lat:", position.coords.latitude, "Lng:", position.coords.longitude);
        },
        (error) => {
          toast.error("No se pudo obtener la ubicación");
        }
      );
    } else {
      toast.error("Geolocalización no disponible");
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergencia</h1>
          <p className="text-muted-foreground">
            Acceso rápido a ayuda de emergencia
          </p>
        </div>

        <Card className="bg-destructive/10 border-destructive/50 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-2xl">
              <AlertCircle className="w-8 h-8" />
              ¿Necesitas ayuda inmediata?
            </CardTitle>
            <CardDescription className="text-lg">
              Si experimentas síntomas graves, no esperes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-destructive">Síntomas de emergencia:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Dolor súbito en el pecho</li>
                <li>Dificultad severa para respirar</li>
                <li>Tos con sangre</li>
                <li>Mareos o desmayos</li>
                <li>Hinchazón súbita y severa</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  {contact.name}
                </CardTitle>
                <CardDescription>{contact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handleEmergencyCall(contact.number, contact.name)}
                  className="w-full bg-destructive hover:bg-destructive/90"
                  size="lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar: {contact.number}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Compartir Ubicación
              </CardTitle>
              <CardDescription>
                Envía tu ubicación a servicios de emergencia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleShareLocation} className="w-full" variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Obtener Ubicación
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hospital className="w-5 h-5 text-primary" />
                Hospital Más Cercano
              </CardTitle>
              <CardDescription>
                Encuentra el centro médico más próximo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => window.open('https://www.google.com/maps/search/hospital', '_blank')}
                className="w-full" 
                variant="outline"
              >
                <Hospital className="w-4 h-4 mr-2" />
                Buscar en Mapa
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Información Importante</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Ten siempre a mano tu información médica</p>
            <p>• Informa sobre medicamentos que tomas</p>
            <p>• Menciona alergias conocidas</p>
            <p>• No conduzcas si tienes síntomas severos</p>
            <p>• Si estás solo, contacta a un familiar o vecino</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
