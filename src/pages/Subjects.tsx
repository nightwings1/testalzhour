import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  BookOpen, 
  Languages, 
  Calculator, 
  Atom, 
  FlaskConical, 
  Microscope, 
  Monitor, 
  Heart, 
  MapPin, 
  Trophy, 
  Palette 
} from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      name: "اللغة العربية",
      icon: BookOpen,
      color: "from-primary to-primary-light",
      description: "تعلم قواعد اللغة والأدب والتعبير"
    },
    {
      name: "اللغة الإنجليزية", 
      icon: Languages,
      color: "from-blue-500 to-blue-600",
      description: "إتقان المهارات اللغوية الأساسية"
    },
    {
      name: "الرياضيات",
      icon: Calculator,
      color: "from-purple-500 to-purple-600", 
      description: "الحساب والهندسة والإحصاء"
    },
    {
      name: "الفيزياء",
      icon: Atom,
      color: "from-orange-500 to-orange-600",
      description: "فهم قوانين الطبيعة والكون"
    },
    {
      name: "الكيمياء",
      icon: FlaskConical,
      color: "from-green-500 to-green-600",
      description: "استكشاف المواد والتفاعلات"
    },
    {
      name: "الأحياء",
      icon: Microscope,
      color: "from-teal-500 to-teal-600",
      description: "دراسة الكائنات الحية"
    },
    {
      name: "علوم الحاسوب",
      icon: Monitor,
      color: "from-indigo-500 to-indigo-600",
      description: "البرمجة والتكنولوجيا الحديثة"
    },
    {
      name: "التربية الإسلامية",
      icon: Heart,
      color: "from-gold to-gold-light",
      description: "تعزيز القيم الإسلامية والأخلاق"
    },
    {
      name: "الدراسات الاجتماعية",
      icon: MapPin,
      color: "from-red-500 to-red-600",
      description: "التاريخ والجغرافيا والمجتمع"
    },
    {
      name: "التربية الرياضية",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
      description: "تنمية اللياقة البدنية والروح الرياضية"
    },
    {
      name: "الفنون والموسيقى",
      icon: Palette,
      color: "from-pink-500 to-pink-600",
      description: "تطوير المواهب الفنية والإبداعية"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            المواد الدراسية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            منهج شامل ومتكامل يغطي جميع جوانب التعليم الحديث
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">11</div>
                <div className="text-lg font-semibold">مادة دراسية</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-gold mb-2">65</div>
                <div className="text-lg font-semibold">معلم متخصص</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">32</div>
                <div className="text-lg font-semibold">فصل دراسي</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-gold mb-2">3</div>
                <div className="text-lg font-semibold">مراحل تعليمية</div>
              </CardContent>
            </Card>
          </div>

          {/* Subjects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="group hover:shadow-educational-lg transition-educational duration-300 cursor-pointer overflow-hidden">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${subject.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-educational`}>
                    <subject.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-primary-light transition-educational">
                    {subject.name}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Educational Approach */}
          <div className="mt-16 bg-gradient-section rounded-2xl p-8 md:p-12 shadow-educational-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">منهجيتنا التعليمية</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نتبع أحدث الطرق التعليمية المتقدمة لضمان فهم عميق وتطبيق عملي للمواد الدراسية
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">التعلم التفاعلي</h3>
                <p className="text-muted-foreground">
                  استخدام أحدث التقنيات التعليمية لجعل التعلم ممتعًا وفعالًا
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="text-xl font-semibold text-primary">التكنولوجيا المتقدمة</h3>
                <p className="text-muted-foreground">
                  دمج التكنولوجيا في العملية التعليمية لمواكبة العصر الرقمي
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">التقييم الشامل</h3>
                <p className="text-muted-foreground">
                  تقييم مستمر يركز على الفهم والتطبيق وليس الحفظ فقط
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subjects;