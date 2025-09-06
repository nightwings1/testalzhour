import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-12">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتكم وتقديم المساعدة
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational group">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-educational">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">الهاتف</h3>
                <p className="text-muted-foreground text-sm ltr">+9647844883539</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational group">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-educational">
                  <Mail className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">البريد الإلكتروني</h3>
                <p className="text-muted-foreground text-sm ltr">moeinqazmoz39@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational group">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-educational">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">واتساب</h3>
                <p className="text-muted-foreground text-sm ltr">+9647844883539</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-educational-md hover:shadow-educational-lg transition-educational group">
              <CardContent className="pt-6">
                <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-educational">
                  <MapPin className="h-8 w-8 text-gold-dark" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">العنوان</h3>
                <p className="text-muted-foreground text-sm">إدلب - غربي مطعم الخوابي</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-educational-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">
                  أرسل لنا رسالة
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  سنقوم بالرد عليك في أقرب وقت ممكن
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-semibold">الاسم الكامل</Label>
                    <Input 
                      id="name" 
                      placeholder="أدخل اسمك الكامل" 
                      className="transition-educational focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold">البريد الإلكتروني</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="transition-educational focus:ring-primary focus:border-primary ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-semibold">رقم الهاتف (اختياري)</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+964xxxxxxxxx" 
                      className="transition-educational focus:ring-primary focus:border-primary ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-semibold">الموضوع</Label>
                    <Input 
                      id="subject" 
                      placeholder="موضوع الرسالة" 
                      className="transition-educational focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-semibold">الرسالة</Label>
                    <Textarea 
                      id="message" 
                      placeholder="اكتب رسالتك هنا..." 
                      className="min-h-32 transition-educational focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold py-3 transition-educational shadow-educational"
                  >
                    <Send className="h-5 w-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="shadow-educational-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">أوقات العمل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="font-semibold">الأحد - الخميس</span>
                    <span className="text-primary font-semibold">7:30 ص - 2:30 م</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="font-semibold">الجمعة والسبت</span>
                    <span className="text-muted-foreground">مغلق</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-educational-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">وسائل التواصل الاجتماعي</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-educational cursor-pointer">
                    <Facebook className="h-6 w-6 text-blue-600" />
                    <span className="text-foreground">facebook.com/alzohooracademy</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50 hover:bg-pink-100 rounded-lg transition-educational cursor-pointer">
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <span className="text-foreground">instagram.com/alzohooracademy</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-educational-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">تواصل سريع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-educational"
                  >
                    <MessageCircle className="h-5 w-5 ml-2" />
                    تواصل عبر واتساب
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-educational"
                  >
                    <Phone className="h-5 w-5 ml-2" />
                    اتصل بنا مباشرة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-gradient-section rounded-2xl p-8 md:p-12 shadow-educational-md">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              الأسئلة الشائعة
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-4 bg-card rounded-lg shadow-educational">
                  <h3 className="font-semibold text-primary mb-2">ما هي أوقات التسجيل؟</h3>
                  <p className="text-muted-foreground">التسجيل متاح طوال السنة، مع فترات مكثفة قبل بداية العام الدراسي.</p>
                </div>
                
                <div className="p-4 bg-card rounded-lg shadow-educational">
                  <h3 className="font-semibold text-primary mb-2">هل تتوفر خدمة النقل المدرسي؟</h3>
                  <p className="text-muted-foreground">نعم، نوفر خدمة باص المدرسة لجميع المناطق المجاورة.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-card rounded-lg shadow-educational">
                  <h3 className="font-semibold text-primary mb-2">ما هي المراحل التعليمية المتوفرة؟</h3>
                  <p className="text-muted-foreground">من الصف الأول ابتدائي وحتى الصف الثالث ثانوي.</p>
                </div>
                
                <div className="p-4 bg-card rounded-lg shadow-educational">
                  <h3 className="font-semibold text-primary mb-2">هل يمكن زيارة الأكاديمية؟</h3>
                  <p className="text-muted-foreground">نرحب بالزيارات في أوقات العمل الرسمية بعد تحديد موعد مسبق.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;