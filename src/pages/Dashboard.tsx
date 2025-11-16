import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertCircle, Bell, Calendar, Clock, FileText, Heart, History, Info } from "lucide-react";
import type { User, Session } from '@supabase/supabase-js';

const features = [
  {
    title: "Rutinas de Movimiento",
    description: "Ejercicios e hidratación para viajes largos",
    icon: Activity,
    href: "/routines",
    color: "from-primary to-primary/80"
  },
  {
    title: "Registro de Síntomas",
    description: "Monitorea y registra tus síntomas",
    icon: FileText,
    href: "/symptoms",
    color: "from-accent to-accent/80"
  },
  {
    title: "Botón de Emergencia",
    description: "Acceso rápido a ayuda de emergencia",
    icon: AlertCircle,
    href: "/emergency",
    color: "from-destructive to-destructive/80"
  },
  {
    title: "Recordatorios",
    description: "Retos y recetas para vida saludable",
    icon: Bell,
    href: "/reminders",
    color: "from-primary to-accent"
  },
  {
    title: "Detección de Sedentarismo",
    description: "Notificaciones de actividad cada 2 horas",
    icon: Clock,
    href: "/activity-tracker",
    color: "from-accent to-primary"
  },
  {
    title: "Información sobre Trombosis",
    description: "Educación y recursos importantes",
    icon: Info,
    href: "/info",
    color: "from-primary to-primary/60"
  },
  {
    title: "Historial Médico",
    description: "Tu historial de salud completo",
    icon: History,
    href: "/history",
    color: "from-accent to-accent/60"
  },
  {
    title: "Calendario Médico",
    description: "Turnos y horarios de medicamentos",
    icon: Calendar,
    href: "/calendar",
    color: "from-primary/80 to-accent/80"
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (!user) return null;

  return (
    <Layout>
      <div className="space-y-6 md:space-y-8">
        <div className="text-center space-y-2 px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Bienvenido a Thrombotrack
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Tu plataforma integral para la prevención de trombosis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.href}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                onClick={() => navigate(feature.href)}
              >
                <CardHeader>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              Consejo del Día
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground">
              Mantente hidratado durante el día. Beber suficiente agua ayuda a mantener la sangre fluida y reduce el riesgo de coágulos.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
