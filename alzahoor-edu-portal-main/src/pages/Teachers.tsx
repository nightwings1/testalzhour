import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "أ. محمد سمير",
      subject: "رياضيات",
      experience: "12 سنة",
      education: "ماجستير الرياضيات",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "أ. فاطمة عادل", 
      subject: "لغة إنجليزية",
      experience: "8 سنوات",
      education: "بكالوريوس الألسن",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "أ. خالد محمود",
      subject: "علوم",
      experience: "15 سنة", 
      education: "ماجستير الكيمياء",
      color: "from-green-500 to-green-600"
    },
    {
      name: "أ. علاء علولو",
      subject: "لغة عربية",
      experience: "10 سنوات",
      education: "بكالوريوس الأدب العربي",
      color: "from-primary to-primary-light"
    },
    {
      name: "أ. سامي يوسف",
      subject: "حاسوب",
      experience: "6 سنوات",
      education: "بكالوريوس علوم الحاسوب", 
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "أ. علاء إبراهيم",
      subject: "فيزياء",
      experience: "14 سنة",
      education: "ماجستير الفيزياء",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "أ. مريم أحمد",
      subject: "أحياء",
      experience: "9 سنوات",
      education: "بكالوريوس العلوم البيولوجية",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "أ. يوسف كريم",
      subject: "تاريخ", 
      experience: "11 سنة",
      education: "ماجستير التاريخ",
      color: "from-red-500 to-red-600"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "65",
      label: "معلم متخصص",
      description: "من ذوي الخبرة والكفاءة"
    },
    {
      icon: GraduationCap, 
      number: "85%",
      label: "حملة شهادات عليا",
      description: "ماجستير ودكتوراه"
    },
    {
      icon: Award,
      number: "12",
      label: "سنة خبرة متوسط",
      description: "في التدريس والتربية"
    },
    {
      icon: BookOpen,
      number: "100%",
      label: "تدريب مستمر", 
      description: "تطوير مهني دائم"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            طاقمنا التعليمي
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            معلمون متميزون مؤهلون ومتخصصون في مجالاتهم
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Teachers Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              أبرز أعضاء هيئة التدريس
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="group hover:shadow-educational-lg transition-educational duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      {/* Avatar */}
                      <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${teacher.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-educational`}>
                        <GraduationCap className="h-10 w-10 text-white" />
                      </div>
                      
                      {/* Name & Subject */}
                      <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary-light transition-educational">
                          {teacher.name}
                        </h3>
                        <Badge className="mt-2 bg-gold/20 text-gold-dark hover:bg-gold/30">
                          {teacher.subject}
                        </Badge>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">الخبرة:</span>
                          <span className="font-semibold text-foreground">{teacher.experience}</span>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-muted-foreground text-xs">{teacher.education}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 shadow-educational-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">فلسفتنا التعليمية</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نؤمن بأن المعلم المتميز هو أساس التعليم الناجح
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">التأهيل المستمر</h3>
                <p className="text-muted-foreground">
                  نحرص على التطوير المهني المستمر لجميع أعضاء هيئة التدريس
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="text-xl font-semibold text-primary">التميز في التدريس</h3>
                <p className="text-muted-foreground">
                  نطبق أحدث طرق التدريس الحديثة والمبتكرة
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">بناء العلاقات</h3>
                <p className="text-muted-foreground">
                  نهتم بعلاقة إيجابية بين المعلم والطالب تحفز على التعلم
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                انضم لفريق التميز
              </h3>
              <p className="text-muted-foreground mb-6">
                نبحث دائمًا عن معلمين متميزين للانضمام لأكاديميتنا
              </p>
              <button className="px-6 py-3 bg-primary hover:bg-primary-light text-primary-foreground rounded-lg font-semibold transition-educational">
                تقدم للوظائف المتاحة
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teachers;