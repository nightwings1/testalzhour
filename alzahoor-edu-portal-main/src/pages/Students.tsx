import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Trophy, Star, GraduationCap, Target } from "lucide-react";

const Students = () => {
  const studentStats = [
    {
      level: "المرحلة الابتدائية",
      count: 350,
      grades: "الأول - السادس",
      color: "from-primary to-primary-light",
      icon: BookOpen
    },
    {
      level: "المرحلة المتوسطة", 
      count: 280,
      grades: "السابع - التاسع",
      color: "from-gold to-gold-light",
      icon: Users
    },
    {
      level: "المرحلة الثانوية",
      count: 320, 
      grades: "العاشر - الثالث ثانوي",
      color: "from-primary-light to-primary",
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      title: "معدل النجاح",
      value: "98.5%",
      description: "في امتحانات الثانوية العامة",
      icon: Trophy,
      color: "text-gold"
    },
    {
      title: "التقدير الممتاز",
      value: "75%",
      description: "من طلاب المرحلة الثانوية",
      icon: Star,
      color: "text-primary"
    },
    {
      title: "القبول الجامعي",
      value: "95%",
      description: "في الجامعات المرموقة",
      icon: Target,
      color: "text-gold-dark"
    },
    {
      title: "الأنشطة اللاصفية",
      value: "85%",
      description: "من الطلاب يشاركون",
      icon: Users,
      color: "text-primary-light"
    }
  ];

  const activities = [
    "النوادي العلمية والثقافية",
    "الأنشطة الرياضية المتنوعة",
    "المسابقات الأكاديمية",
    "الرحلات التعليمية",
    "ورش الإبداع والابتكار",
    "البرامج التطوعية والخيرية"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            طلابنا الأعزاء
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            950 طالبًا وطالبة يتعلمون ويبدعون في أكاديمية الزهور
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Total Students Overview */}
          <div className="text-center mb-16">
            <Card className="inline-block shadow-educational-lg">
              <CardContent className="pt-6 px-12">
                <div className="text-6xl font-bold text-primary mb-4">950</div>
                <div className="text-2xl font-semibold text-foreground mb-2">إجمالي الطلاب</div>
                <div className="text-lg text-muted-foreground">في جميع المراحل التعليمية</div>
              </CardContent>
            </Card>
          </div>

          {/* Students by Level */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {studentStats.map((level, index) => (
              <Card key={index} className="overflow-hidden shadow-educational-md hover:shadow-educational-lg transition-educational">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <CardHeader className="text-center">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mb-4`}>
                    <level.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{level.level}</CardTitle>
                  <p className="text-muted-foreground">{level.grades}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{level.count}</div>
                  <div className="text-lg text-foreground">طالب وطالبة</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              إنجازات طلابنا
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mb-4">
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                      {achievement.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Life */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Academic Excellence */}
            <Card className="shadow-educational-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  التفوق الأكاديمي
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    نفخر بالمستوى الأكاديمي المتميز لطلابنا والذي يظهر في نتائج 
                    الامتحانات الرسمية ومعدلات القبول الجامعي المرتفعة.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">98.5%</div>
                    <div className="text-sm text-muted-foreground">معدل النجاح</div>
                  </div>
                  <div className="text-center p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-gold">75%</div>
                    <div className="text-sm text-muted-foreground">تقدير ممتاز</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Extracurricular Activities */}
            <Card className="shadow-educational-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  الأنشطة اللاصفية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="h-8 w-8 text-gold-dark" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    نوفر مجموعة متنوعة من الأنشطة اللاصفية لتنمية مواهب 
                    الطلاب وقدراتهم خارج الفصل الدراسي.
                  </p>
                </div>
                <div className="space-y-2">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Student Support */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 shadow-educational-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">دعم الطلاب</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نحرص على توفير بيئة داعمة ومحفزة لجميع طلابنا
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">الإرشاد الأكاديمي</h3>
                <p className="text-muted-foreground">
                  متابعة شخصية لكل طالب وتقديم الدعم الأكاديمي المناسب
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="text-xl font-semibold text-primary">برامج التقوية</h3>
                <p className="text-muted-foreground">
                  برامج إضافية لتقوية الطلاب في المواد التي يحتاجون دعمًا فيها
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">التوجيه المهني</h3>
                <p className="text-muted-foreground">
                  مساعدة الطلاب في اختيار التخصص الجامعي والمسار المهني
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;