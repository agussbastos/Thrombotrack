import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Activity, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export default function ActivityTracker() {
  const [lastActivity, setLastActivity] = useState<Date>(new Date());
  const [inactiveMinutes, setInactiveMinutes] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTracking) {
      interval = setInterval(() => {
        const now = new Date();
        const diffMinutes = Math.floor((now.getTime() - lastActivity.getTime()) / 60000);
        setInactiveMinutes(diffMinutes);

        if (diffMinutes >= 120 && diffMinutes % 120 === 0) {
          toast.warning("¡Han pasado 2 horas sin movimiento! Es hora de activarte.", {
            duration: 10000,
          });
        }
      }, 60000); // Check every minute
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTracking, lastActivity]);

  const handleActivityRegistered = () => {
    setLastActivity(new Date());
    setInactiveMinutes(0);
    toast.success("¡Actividad registrada!");
  };

  const toggleTracking = () => {
    setIsTracking(!isTracking);
    if (!isTracking) {
      setLastActivity(new Date());
      setInactiveMinutes(0);
      toast.success("Seguimiento de actividad iniciado");
    } else {
      toast.info("Seguimiento de actividad pausado");
    }
  };

  const getStatusColor = () => {
    if (inactiveMinutes < 60) return "text-green-600";
    if (inactiveMinutes < 120) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusBadge = () => {
    if (inactiveMinutes < 60) return <Badge className="bg-green-600">Activo</Badge>;
    if (inactiveMinutes < 120) return <Badge className="bg-yellow-600">Moderado</Badge>;
    return <Badge variant="destructive">¡Alerta!</Badge>;
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Detección de Sedentarismo</h1>
          <p className="text-muted-foreground">
            Monitorea tu actividad y recibe notificaciones cada 2 horas
          </p>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Estado de Actividad</CardTitle>
              {getStatusBadge()}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-8 border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className={`text-4xl font-bold ${getStatusColor()}`}>
                      {inactiveMinutes}
                    </p>
                    <p className="text-sm text-muted-foreground">minutos</p>
                    <p className="text-xs text-muted-foreground">sin actividad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={toggleTracking}
                variant={isTracking ? "destructive" : "default"}
                size="lg"
                className="w-full"
              >
                <Clock className="w-4 h-4 mr-2" />
                {isTracking ? "Pausar" : "Iniciar"} Seguimiento
              </Button>
              
              <Button 
                onClick={handleActivityRegistered}
                variant="outline"
                size="lg"
                className="w-full"
                disabled={!isTracking}
              >
                <Activity className="w-4 h-4 mr-2" />
                Registrar Actividad
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                ¿Por qué es importante?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                El sedentarismo prolongado es un factor de riesgo importante para la trombosis venosa profunda (TVP).
              </p>
              <p>
                Permanecer sentado o inmóvil por más de 2 horas puede ralentizar la circulación sanguínea en las piernas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Levántate cada 2 horas</li>
                <li>Camina al menos 5 minutos</li>
                <li>Realiza ejercicios de tobillo</li>
                <li>Estira las piernas regularmente</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Historial de Actividad</CardTitle>
            <CardDescription>
              Última actividad registrada: {lastActivity.toLocaleTimeString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm text-muted-foreground">Estado actual</span>
                <span className="font-semibold">{isTracking ? "Activo" : "Pausado"}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm text-muted-foreground">Tiempo inactivo</span>
                <span className={`font-semibold ${getStatusColor()}`}>
                  {Math.floor(inactiveMinutes / 60)}h {inactiveMinutes % 60}m
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <span className="text-sm text-muted-foreground">Próxima alerta en</span>
                <span className="font-semibold">
                  {inactiveMinutes < 120 ? `${120 - inactiveMinutes} min` : "¡Ahora!"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle>Configuración de Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              Las notificaciones te alertarán automáticamente cada 2 horas de inactividad. 
              Asegúrate de tener las notificaciones del navegador habilitadas para recibir alertas.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
