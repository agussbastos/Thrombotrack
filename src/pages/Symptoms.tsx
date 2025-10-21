import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { FileText } from "lucide-react";

const symptomTypes = [
  "Hinchazón en piernas",
  "Dolor en pantorrilla",
  "Enrojecimiento",
  "Calor en la zona",
  "Dificultad para respirar",
  "Dolor en el pecho",
  "Otro"
];

const severityLevels = [
  { value: "leve", label: "Leve" },
  { value: "moderado", label: "Moderado" },
  { value: "severo", label: "Severo" }
];

export default function Symptoms() {
  const [symptomType, setSymptomType] = useState("");
  const [severity, setSeverity] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symptomType || !severity) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Aquí se guardaría en la base de datos
    toast.success("Síntoma registrado exitosamente");
    
    // Reset form
    setSymptomType("");
    setSeverity("");
    setNotes("");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Registro de Síntomas</h1>
          <p className="text-muted-foreground">
            Registra tus síntomas para un mejor seguimiento médico
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Nuevo Síntoma</CardTitle>
              <CardDescription>
                Completa la información sobre el síntoma que estás experimentando
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="symptom-type">Tipo de Síntoma *</Label>
                  <Select value={symptomType} onValueChange={setSymptomType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un síntoma" />
                    </SelectTrigger>
                    <SelectContent>
                      {symptomTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="severity">Severidad *</Label>
                  <Select value={severity} onValueChange={setSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona la severidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {severityLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notas Adicionales</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe el síntoma con más detalle..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Registrar Síntoma
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Síntomas de Alerta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Busca atención inmediata si experimentas:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Dolor súbito en el pecho</li>
                    <li>Dificultad para respirar repentina</li>
                    <li>Tos con sangre</li>
                    <li>Hinchazón severa en una pierna</li>
                    <li>Dolor intenso en pantorrilla</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Consejos para el Registro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Registra los síntomas tan pronto como los notes</p>
                <p>• Sé específico con las descripciones</p>
                <p>• Incluye la hora y circunstancias</p>
                <p>• Comparte este registro con tu médico</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
