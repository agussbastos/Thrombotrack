import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

interface RiskAssessmentProps {
  userId: string | null;
  onComplete: () => void;
}

const questions = [
  {
    id: "age",
    question: "1. ¿Cuál es tu edad?",
    type: "radio",
    options: ["10 a 19", "20 a 29", "30 a 39", "40 a 49", "50 a 59", "60 a 69", "70 a 79", "+80"]
  },
  {
    id: "sex",
    question: "2. ¿Cuál es tu sexo de nacimiento?",
    type: "radio",
    options: ["Femenino", "Masculino"]
  },
  {
    id: "had_thrombosis",
    question: "3. ¿Has padecido trombosis?",
    type: "radio",
    options: ["Sí", "No"]
  },
  {
    id: "family_thrombosis",
    question: "4. ¿Algún familiar o conocido tuyo padeció trombosis?",
    type: "radio",
    options: ["Familiar cercano", "Familiar lejano", "Amigo/s", "Colega/s", "Vecino/s", "Conocido/s", "Nadie que conozca"]
  },
  {
    id: "weekly_exercise",
    question: "5. ¿Cuántas horas semanales dedicas a realizar actividad física?",
    type: "radio",
    options: ["1", "2", "3", "4", "5 o más"]
  },
  {
    id: "healthy_diet",
    question: "6. ¿Tienes una alimentación saludable?",
    type: "radio",
    options: ["Sí", "No", "No estoy seguro/a"]
  },
  {
    id: "recent_surgery",
    question: "7. ¿Recientemente tuviste alguna cirugía?",
    type: "radio",
    options: ["De cadera", "De rodilla", "Por cáncer", "Otra", "Ninguna"]
  },
  {
    id: "risk_factors",
    question: "8. ¿Alguna de estas características te identifica? (Puedes seleccionar varias)",
    type: "checkbox",
    options: [
      "Hipertensión",
      "Diabetes",
      "Colesterol alto",
      "Fumar",
      "Embarazo",
      "Parto reciente",
      "Quimioterapia",
      "Uso de anticonceptivos",
      "Terapia de reemplazo hormonal",
      "Ninguna"
    ]
  }
];

export default function RiskAssessment({ userId, onComplete }: RiskAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleRadioChange = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    let newSelected = [...selectedCheckboxes];
    
    if (option === "Ninguna") {
      newSelected = checked ? ["Ninguna"] : [];
    } else {
      newSelected = newSelected.filter(item => item !== "Ninguna");
      if (checked) {
        newSelected.push(option);
      } else {
        newSelected = newSelected.filter(item => item !== option);
      }
    }
    
    setSelectedCheckboxes(newSelected);
    setAnswers({ ...answers, [questions[currentQuestion].id]: newSelected });
  };

  const handleNext = () => {
    const currentAnswer = answers[questions[currentQuestion].id];
    
    if (!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0)) {
      toast.error("Por favor responde la pregunta antes de continuar");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedCheckboxes([]);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevAnswer = answers[questions[currentQuestion - 1].id];
      if (Array.isArray(prevAnswer)) {
        setSelectedCheckboxes(prevAnswer);
      } else {
        setSelectedCheckboxes([]);
      }
    }
  };

  const handleComplete = () => {
    // Aquí podrías guardar las respuestas en la base de datos
    toast.success("Evaluación completada. ¡Bienvenido a Thrombotrack!");
    onComplete();
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center">
            <img src={logo} alt="Thrombotrack Logo" className="w-full h-full object-contain" />
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold">Evaluación de Riesgo</CardTitle>
          <CardDescription className="text-sm md:text-base">
            Responde estas preguntas para personalizar tu experiencia
          </CardDescription>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-medium text-foreground">{question.question}</h3>
            
            {question.type === "radio" ? (
              <RadioGroup 
                value={answers[question.id] as string || ""} 
                onValueChange={handleRadioChange}
                className="space-y-3"
              >
                {question.options.map((option) => (
                  <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="cursor-pointer text-sm md:text-base flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <Checkbox
                      id={option}
                      checked={selectedCheckboxes.includes(option)}
                      onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                      disabled={option !== "Ninguna" && selectedCheckboxes.includes("Ninguna")}
                    />
                    <Label htmlFor={option} className="cursor-pointer text-sm md:text-base flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            {currentQuestion > 0 && (
              <Button 
                variant="outline" 
                onClick={handleBack}
                className="flex-1"
              >
                Anterior
              </Button>
            )}
            <Button 
              onClick={handleNext}
              className="flex-1"
            >
              {currentQuestion < questions.length - 1 ? "Siguiente" : "Finalizar"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
