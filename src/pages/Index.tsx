import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Award, 
  Heart,
  Target,
  Eye,
  ArrowLeft
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "تعليم متميز",
      description: "منهج حديث يواكب أحدث المعايير التعليمية العالمية"
    },
    {
      icon: Users,
      title: "بيئة محفزة",
      description: "جو تعليمي إيجابي يشجع على الإبداع والتفوق"
    },
    {
      icon: GraduationCap,
      title: "معلمون مؤهلون",
      description: "طاقم تعليمي متخصص من ذوي الخبرة والكفاءة"
    },
    {
      icon: Award,
      title: "إنجازات متميزة",
      description: "معدلات نجاح عالية وقبول جامعي مرموق"
    }
  ];

  const quickStats = [
    { number: "16", label: "عامًا من التميز", description: "منذ التأسيس عام 2008" },
    { number: "950", label: "طالب وطالبة", description: "في جميع المراحل" },
    { number: "65", label: "معلم متخصص", description: "من ذوي الخبرة" },
    { number: "98.5%", label: "معدل النجاح", description: "في الثانوية العامة" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                لماذا أكاديمية الزهور؟
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                نقدم تعليمًا متميزًا يجمع بين الأصالة والمعاصرة
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-educational hover:shadow-educational-md transition-educational group">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-educational">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                أرقام تتحدث عن التميز
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <Card key={index} className="text-center shadow-educational-md">
                  <CardContent className="pt-8">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Preview */}
        <section className="py-20 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">رسالتنا</h3>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    بناء جيل واعٍ، مبدع، ومجهز لمواكبة تحديات المستقبل من خلال 
                    تقديم تعليم متميز يجمع بين المعرفة النظرية والتطبيق العملي.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6 text-gold-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">رؤيتنا</h3>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    أن نكون من أفضل المؤسسات التعليمية الخاصة في مصر والمنطقة، 
                    ونموذجًا يحتذى به في التميز التعليمي والتربوي.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Card className="shadow-educational-lg">
                  <CardContent className="p-8">
                    <div className="mx-auto w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mb-6">
                      <Heart className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">قيمنا</h3>
                    <div className="space-y-2 text-foreground">
                      <div>الالتزام • الجودة • التعاون</div>
                      <div>الإبداع • النزاهة</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-educational-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                انضم إلى عائلة أكاديمية الزهور
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                ابدأ رحلة تعليمية مميزة مع أفضل الكوادر التعليمية
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold transition-educational"
                  asChild
                >
                  <Link to="/about">
                    تعرف على المزيد
                    <ArrowLeft className="h-5 w-5 mr-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-educational"
                  asChild
                >
                  <Link to="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
