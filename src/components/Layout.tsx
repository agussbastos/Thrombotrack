import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Activity, 
  FileText, 
  AlertCircle, 
  Bell, 
  Info, 
  Calendar,
  History,
  Clock,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Rutinas", href: "/routines", icon: Activity },
  { name: "Síntomas", href: "/symptoms", icon: FileText },
  { name: "Emergencia", href: "/emergency", icon: AlertCircle },
  { name: "Recordatorios", href: "/reminders", icon: Bell },
  { name: "Información", href: "/info", icon: Info },
  { name: "Historial", href: "/history", icon: History },
  { name: "Calendario", href: "/calendar", icon: Calendar },
  { name: "Sedentarismo", href: "/activity-tracker", icon: Clock },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error al cerrar sesión");
    } else {
      toast.success("Sesión cerrada");
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center gap-2 md:gap-3">
              <img src={logo} alt="Thrombotrack Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <span className="text-lg md:text-xl font-bold text-foreground">Thrombotrack</span>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Salir</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-3 md:p-4 shadow-sm lg:sticky lg:top-8">
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
