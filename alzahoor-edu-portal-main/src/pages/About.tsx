import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    { icon: Heart, title: "الالتزام", description: "نلتزم بتقديم أفضل تعليم لطلابنا" },
    { icon: Award, title: "الجودة", description: "نسعى للتميز في كل ما نقدمه" },
    { icon: Users, title: "التعاون", description: "نؤمن بقوة العمل الجماعي" },
    { icon: Lightbulb, title: "الإبداع", description: "نشجع التفكير الإبداعي والابتكار" },
    { icon: Target, title: "النزاهة", description: "نتمسك بالصدق والشفافية" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            عن أكاديمية الزهور
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مؤسسة تعليمية رائدة تأسست عام 2008 لتقديم تعليم عصري ومتميز
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* About Description */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 shadow-educational-md">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">نبذة عن الأكاديمية</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  أكاديمية الزهور التعليمية الخاصة مؤسسة تعليمية رائدة تأسست عام 2008 
                  لتقديم تعليم عصري ومتميز يواكب أحدث المعايير العالمية. نفخر بكوننا 
                  من أولى المؤسسات التعليمية التي تجمع بين الأصالة والمعاصرة في التعليم.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  نخدم طلابنا من الصف الأول ابتدائي وحتى الصف الثالث ثانوي، 
                  ونوفر لهم بيئة تعليمية محفزة تساعدهم على تحقيق أقصى إمكاناتهم 
                  الأكاديمية والشخصية.
                </p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">16</div>
                  <p className="text-xl font-semibold text-foreground">عامًا من التميز</p>
                  <p className="text-muted-foreground">في خدمة التعليم</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-educational-md hover:shadow-educational-lg transition-educational">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">رسالتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed">
                  بناء جيل واعٍ، مبدع، ومجهز لمواكبة تحديات المستقبل من خلال 
                  تقديم تعليم متميز يجمع بين المعرفة النظرية والتطبيق العملي.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-educational-md hover:shadow-educational-lg transition-educational">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-gold-dark" />
                </div>
                <CardTitle className="text-2xl text-primary">رؤيتنا</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed">
                  أن نكون من أفضل المؤسسات التعليمية الخاصة في مصر والمنطقة، 
                  ونموذجًا يحتذى به في التميز التعليمي والتربوي.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-center text-primary mb-12">قيمنا</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-educational hover:shadow-educational-md transition-educational group">
                  <CardContent className="pt-6">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-educational">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;