import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-academy.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="مبنى أكاديمية الزهور التعليمية الخاصة" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo and Main heading */}
          <div className="space-y-6">
            <div className="mx-auto w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold/30">
              <GraduationCap className="h-12 w-12 text-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight">
              أكاديمية الزهور
            </h1>
            <p className="text-2xl md:text-3xl text-gold font-semibold">
              التعليمية الخاصة
            </p>
          </div>

          {/* Welcome message */}
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="text-xl md:text-2xl text-primary-foreground leading-relaxed font-medium">
              مرحبًا بكم في أكاديمية الزهور التعليمية الخاصة
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/90 mt-2">
              من الصف الأول ابتدائي وحتى الصف الثالث ثانوي
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-primary font-bold shadow-gold transition-educational text-lg px-8 py-4"
            >
              تعرف على المزيد
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-educational text-lg px-8 py-4 backdrop-blur-sm"
            >
              تواصل معنا
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 border border-gold/30">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">950</div>
              <div className="text-primary-foreground/90 font-semibold text-lg">طالب</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 border border-gold/30">
                <GraduationCap className="h-8 w-8 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">65</div>
              <div className="text-primary-foreground/90 font-semibold text-lg">معلم</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 border border-gold/30">
                <BookOpen className="h-8 w-8 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">32</div>
              <div className="text-primary-foreground/90 font-semibold text-lg">فصل</div>
            </div>
            
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 border border-gold/30">
                <Calendar className="h-8 w-8 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">2008</div>
              <div className="text-primary-foreground/90 font-semibold text-lg">سنة التأسيس</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;