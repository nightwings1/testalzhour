import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Award } from "lucide-react";

const Levels = () => {
  const levels = [
    {
      title: "المرحلة الابتدائية",
      subtitle: "الصف الأول - السادس",
      classrooms: 15,
      students: 350,
      icon: BookOpen,
      gradient: "from-primary to-primary-light",
      description: "مرحلة التأسيس والبناء الأكاديمي الأول",
      features: [
        "تعلم أساسيات القراءة والكتابة",
        "تنمية المهارات الحسابية الأساسية", 
        "اكتشاف المواهب والقدرات",
        "بناء الثقة بالنفس",
        "تعزيز القيم الأخلاقية"
      ]
    },
    {
      title: "المرحلة المتوسطة",
      subtitle: "الصف السابع - التاسع",
      classrooms: 10,
      students: 280,
      icon: Users,
      gradient: "from-gold to-gold-light",
      description: "مرحلة التطوير الأكاديمي والشخصي",
      features: [
        "تعميق المفاهيم الأكاديمية",
        "تنمية مهارات التفكير النقدي",
        "الإعداد للمرحلة الثانوية",
        "تطوير المهارات الاجتماعية",
        "اكتشاف الميول المهنية"
      ]
    },
    {
      title: "المرحلة الثانوية", 
      subtitle: "الصف العاشر - الثالث ثانوي",
      classrooms: 7,
      students: 320,
      icon: Award,
      gradient: "from-primary-light to-primary",
      description: "مرحلة الإعداد للجامعة والمستقبل المهني",
      features: [
        "التخصص الأكاديمي المتقدم",
        "الإعداد لامتحانات الثانوية العامة",
        "تطوير مهارات البحث العلمي",
        "التوجيه المهني والجامعي",
        "القيادة والمسؤولية"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            المراحل الدراسية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            رحلة تعليمية متكاملة من الابتدائية حتى الثانوية
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistics Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">32</div>
                <div className="text-lg font-semibold text-foreground">إجمالي الفصول</div>
                <div className="text-muted-foreground">في جميع المراحل</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-gold mb-2">950</div>
                <div className="text-lg font-semibold text-foreground">إجمالي الطلاب</div>
                <div className="text-muted-foreground">جميع المراحل</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-educational-md">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-lg font-semibold text-foreground">مراحل دراسية</div>
                <div className="text-muted-foreground">متكاملة</div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Levels */}
          <div className="space-y-8">
            {levels.map((level, index) => (
              <Card key={index} className="overflow-hidden shadow-educational-lg hover:shadow-educational-lg transition-educational">
                <div className={`h-2 bg-gradient-to-r ${level.gradient}`}></div>
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Level Info */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="text-center lg:text-right">
                      <div className={`mx-auto lg:mx-0 w-20 h-20 bg-gradient-to-r ${level.gradient} rounded-full flex items-center justify-center mb-4`}>
                        <level.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{level.title}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{level.subtitle}</p>
                      <p className="text-foreground leading-relaxed">{level.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center lg:justify-start gap-4">
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        <Users className="h-4 w-4 ml-1" />
                        {level.students} طالب
                      </Badge>
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        <Clock className="h-4 w-4 ml-1" />
                        {level.classrooms} فصل
                      </Badge>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-semibold text-primary mb-6 text-center lg:text-right">
                      مميزات المرحلة
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-section rounded-2xl shadow-educational-md">
            <h2 className="text-3xl font-bold text-primary mb-4">
              هل تريد معرفة المزيد؟
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              تواصل معنا للحصول على معلومات مفصلة عن أي مرحلة دراسية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary hover:bg-primary-light text-primary-foreground rounded-lg font-semibold transition-educational">
                تواصل معنا
              </button>
              <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-educational">
                زيارة الأكاديمية
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Levels;