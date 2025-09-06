import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Car, Bus } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            موقعنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تعرف على موقع أكاديمية الزهور ومعلومات التواصل
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">العنوان</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground font-semibold mb-2">
                  سوريا - إدلب
                </p>
                <p className="text-muted-foreground">
                  غربي مطعم الخوابي
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-gold-dark" />
                </div>
                <CardTitle className="text-xl text-primary">الهاتف</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground font-semibold mb-2 ltr">
                  +9647844883539
                </p>
                <p className="text-muted-foreground">
                  متاح للاستفسارات
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">البريد الإلكتروني</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground font-semibold mb-2 ltr">
                  moeinqazmoz39@gmail.com
                </p>
                <p className="text-muted-foreground">
                  للاستفسارات والتواصل
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-educational-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">خريطة الموقع</CardTitle>
                <p className="text-muted-foreground">أكاديمية الزهور التعليمية الخاصة - إدلب، سوريا</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-16 w-16 text-primary mx-auto" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">موقع الأكاديمية</h3>
                      <p className="text-muted-foreground">سوريا - إدلب - غربي مطعم الخوابي</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      * سيتم إضافة خريطة تفاعلية قريبًا
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Working Hours & Transportation */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Working Hours */}
            <Card className="shadow-educational-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">أوقات العمل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-semibold text-foreground">الأحد - الخميس</span>
                  <span className="text-primary font-semibold">7:30 ص - 2:30 م</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-semibold text-foreground">الجمعة</span>
                  <span className="text-muted-foreground">مغلق</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-semibold text-foreground">السبت</span>
                  <span className="text-muted-foreground">مغلق</span>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    للاستفسارات خارج أوقات العمل، يمكنكم التواصل عبر الواتساب
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="shadow-educational-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Bus className="h-8 w-8 text-gold-dark" />
                </div>
                <CardTitle className="text-2xl text-primary">وسائل المواصلات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                    <Bus className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">باص الأكاديمية متاح</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                    <Car className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">موقف سيارات واسع</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">موقع مميز وسهل الوصول</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gold/5 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    نوفر خدمة باص المدرسة لجميع المناطق المجاورة
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 shadow-educational-md text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              هل تحتاج إلى مساعدة في الوصول؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              فريقنا جاهز لمساعدتك في إيجاد أفضل طريق للوصول إلى الأكاديمية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary hover:bg-primary-light text-primary-foreground rounded-lg font-semibold transition-educational">
                اتصل بنا الآن
              </button>
              <button className="px-6 py-3 bg-gold hover:bg-gold-dark text-primary font-semibold rounded-lg transition-educational">
                واتساب
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">وسائل التواصل الاجتماعي</p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="text-primary">facebook.com/alzohooracademy</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-primary">instagram.com/alzohooracademy</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Location;