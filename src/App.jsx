import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ArrowRight, ArrowLeft, CheckCircle, MapPin, Phone, Mail, Award, TrendingUp, Shield, BarChart3, FileText, Scale, Users, Building2, Globe2, Briefcase, Target, Clock } from 'lucide-react';

// --- 1. SCROLL TO TOP (لضمان فتح الصفحة من البداية) ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- CONTENT DATABASE ---
const content = {
  ar: {
    nav: { home: "الرئيسية", about: "عن المؤسسة", services: "قطاعات الأعمال", partners: "شركاء النجاح", contact: "تواصل معنا" },
    hero: {
      tag: "الريادة في التخطيط المالي والضريبي",
      title: "منهجية دقيقة..",
      title_highlight: "لنمو مستدام.",
      desc: "نقدم حلولاً استراتيجية في المراجعة، الضرائب، والاستشارات المالية، مصممة خصيصاً لتعزيز الامتثال القانوني وتعظيم العائد الاستثماري لقادة السوق المصري.",
      cta: "تواصل معنا"
    },
    ceo: {
      tag: "رسالة القيادة",
      title: "الثقة هي العملة الأهم.",
      quote: "في AFS، نتجاوز دور المستشار التقليدي لنصبح شريكاً استراتيجياً في صناعة القرار. نلتزم بتقديم رؤية مالية ثاقبة تحول التحديات التشريعية إلى فرص للنمو والاستقرار.",
      name: "أ/ أحمد مرغني",
      role: "الرئيس التنفيذي والشريك المؤسس",
      signature: "Ahmed Marghany"
    },
    about: {
      header_title: "نصيغ مستقبل الإدارة المالية",
      header_desc: "منذ تأسيسنا، ونحن نلتزم بمعيار واحد: الدقة المطلقة. نحن لسنا مجرد مكتب محاسبة، بل كيان استشاري متكامل يجمع بين الخبرة المحلية العميقة والمعايير الدولية.",
      mission: { title: "مهمتنا", desc: "تمكين المؤسسات من اتخاذ قرارات مالية صائبة." },
      vision: { title: "رؤيتنا", desc: "أن نكون المرجعية الأولى للحلول المالية في مصر." },
      values: { title: "قيمنا", desc: "الشفافية، السرية، والتميز في الأداء." },
      why_us: [
        { title: "خبرة متجذرة", desc: "فريق يجمع بين المعايير العالمية والخبرة المحلية المتراكمة." },
        { title: "حلول استباقية", desc: "نخطط لمنع المخاطر قبل حدوثها." },
        { title: "استجابة فورية", desc: "دعم فني سريع يواكب سرعة أعمالك." },
        { title: "امتثال شامل", desc: "تغطية قانونية كاملة تحميك من الغرامات." }
      ],
      stats: [
        { num: "+10", text: "سنوات خبرة" },
        { num: "100%", text: "التزام ضريبي" },
        { num: "+50", text: "شريك نجاح" },
        { num: "+500M", text: "أصول مُدارة" }
      ]
    },
    services: {
      header: "منظومة الخدمات المتكاملة",
      sub: "تغطية شاملة للدورة المالية والقانونية للمؤسسات",
      list: [
        { 
          title: "التخطيط والاستشارات الضريبية", 
          icon: <Scale />,
          desc: "إدارة إستراتيجية للوعاء الضريبي لضمان الامتثال وتقليل الالتزامات.",
          features: ["ضرائب الدخل (Corporate Tax)", "القيمة المضافة (VAT)", "ضريبة كسب العمل", "الخصم والتحصيل"]
        },
        { 
          title: "المراجعة وتوكيد الثقة (Audit)", 
          icon: <FileText />,
          desc: "تدقيق القوائم المالية وفقاً لمعايير المحاسبة المصرية (EAS).",
          features: ["المراجعة السنوية والدورية", "فحص العناية الواجبة (Due Diligence)", "تقييم أنظمة الرقابة الداخلية", "اعتماد الميزانيات"]
        },
        { 
          title: "تأسيس وهيكلة الشركات", 
          icon: <Building2 />,
          desc: "الدعم القانوني الكامل لبدء النشاط وتوفيق الأوضاع.",
          features: ["تأسيس الشركات (مساهمة، تضامن)", "السجل التجاري والبطاقة الضريبية", "تراخيص الهيئة العامة للاستثمار", "عقود التأسيس"]
        },
        { 
          title: "الضرائب الدولية (International Tax)", 
          icon: <Globe2 />,
          desc: "حلول للشركات متعددة الجنسيات والمعاملات العابرة للحدود.",
          features: ["ملفات أسعار التحويل (Transfer Pricing)", "تطبيق اتفاقيات منع الازدواج", "هيكلة الاستثمار الأجنبي", "تقارير CbCR"]
        },
        { 
          title: "إدارة المرتبات والتأمينات", 
          icon: <Users />,
          desc: "إدارة ملف الموارد البشرية مالياً وقانونياً.",
          features: ["إعداد مسيرات الرواتب (Payroll)", "التأمينات الاجتماعية (س1، س2، س6)", "احتساب الضرائب والخصومات", "التوافق مع قانون العمل"]
        },
        { 
          title: "الاستشارات المالية (Advisory)", 
          icon: <BarChart3 />,
          desc: "تحليل الأداء المالي لدعم القرارات الاستثمارية.",
          features: ["دراسات الجدوى الاقتصادية", "التحليل المالي وتقييم الأداء", "إدارة التدفقات النقدية", "خطط إعادة الهيكلة"]
        }
      ]
    },
    partners: {
      title: "شركاء النجاح",
      list: [
        { name: "Orascom Construction", img: "/Orascom_Construction.png" },
        { name: "Orascom Developments", img: "/Orascom_Developments.png" },
        { name: "SIAC Construction", img: "/SIAC Construction.png" },
        { name: "SIAC Developments", img: "/SIAC Developments.Png" },
        { name: "SIAC Holding Development", img: "/SIAC Holding Development.png" },
        { name: "Nile City Towers", img: "/Nile City Towers.png" },
        { name: "Badawy Group", img: "/Badawy Group.png" },
        { name: "Majarrah", img: "/Majarrah.png" },
        { name: "Fairmont", img: "/Fairmont Hotels & Resorts.png" },
        { name: "El Arosa", img: "/Arrosa.png" },
        { name: "EDGE", img: "/EDGE Bilingual.png" },
        { name: "Bonyan", img: "/Bonyan.png" },
        { name: "SIAC Assets & Facilities Management", img: "/SIAC Assets & Facilities Management.png" },
        { name: "SIAC Holding", img: "/SIAC Holding.png" },
        { name: "SIAC Holdin Construction", img: "/SIAC CONSTRUCTION_h.png" },
        { name: "STEELTEC", img: "/STEELTEC.png" },
        { name: "Rhodes", img: "/Rhodes.png" },
        { name: "MENASCO", img: "/MENASCO.png" },
        { name: "CEMEX", img: "/CEMEX.png" },
        { name: "B Square Nasr City", img: "/B Square Nasr City.png" },
        { name: "Arabtec", img: "/Arabtec.png" },
        { name: "White Palace Tours", img: "/White Palace Tours.png" },
        { name: "Tamweel Mortgage", img: "/Tamweel Mortgage.png" },
        { name: "tamweel Finance", img: "/tamweel.png" },
        { name: "Edge Construction", img: "/Edge Construction.png" },
        { name: "Cosmos E Engineers & Consultants", img: "/Cosmos E Engineers & Consultants.png" },
        { name: "Fit in", img: "/Fit in.png" },
      ]
    },
    contact: {
      title: "تفضل بزيارتنا",
      subtitle: "مقرنا الرئيسي مفتوح لاستقبالكم ومناقشة أهدافكم المالية",
      address: "30 الطريق الدائري، الأباجية، المقطم، محافظة القاهرة",
      phones: ["01200062962", "01080005005", "0227244619"],
      email: "advanced.financial.solution@afs.com.co"
    }
  },
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", partners: "Partners", contact: "Contact Us" },
    hero: {
      tag: "STRATEGIC FINANCIAL ADVISORY",
      title: "Precision for",
      title_highlight: "Sustainable Growth.",
      desc: "Delivering integrated audit, tax, and financial consulting solutions designed to enhance legal compliance and maximize investment returns for market leaders.",
      cta: "Contact Us"
    },
    ceo: {
      tag: "LEADERSHIP MESSAGE",
      title: "Trust is Our Greatest Asset.",
      quote: "At AFS, we go beyond the role of a traditional advisor to become a strategic partner in decision-making. We are committed to providing financial insights that turn legislative challenges into opportunities for growth and stability.",
      name: "Mr. Ahmed Marghany",
      role: "CEO & Founder",
      signature: "Ahmed Marghany"
    },
    about: {
      header_title: "Shaping the Future of Finance",
      header_desc: "Since our inception, we have adhered to one standard: Absolute Precision. We are not just an accounting firm, but an integrated advisory entity combining deep local expertise with global standards.",
      mission: { title: "Our Mission", desc: "Empowering companies to make sound financial decisions." },
      vision: { title: "Our Vision", desc: "To be the primary reference partner for major corporations in Egypt." },
      values: { title: "Our Values", desc: "Transparency, Confidentiality, and Excellence." },
      why_us: [
        { title: "Deep Expertise", desc: "A team that blends international standards with deep-rooted local expertise." },
        { title: "Proactive Solutions", desc: "We don't wait for problems; we plan to prevent them." },
        { title: "Rapid Response", desc: "Immediate technical and advisory support." },
        { title: "Full Compliance", desc: "Comprehensive legal coverage protecting your entity." }
      ],
      stats: [
        { num: "+10", text: "Years Exp." },
        { num: "100%", text: "Compliance" },
        { num: "+50", text: "Partners" },
        { num: "+500M", text: "Assets (EGP)" }
      ]
    },
    services: {
      header: "Integrated Service Ecosystem",
      sub: "Comprehensive coverage of the corporate financial and legal lifecycle",
      list: [
        { 
          title: "Tax Planning & Advisory", 
          icon: <Scale />,
          desc: "Strategic tax base management to ensure compliance and minimize liabilities.",
          features: ["Corporate Income Tax", "Value Added Tax (VAT)", "Payroll Tax", "Withholding Tax"]
        },
        { 
          title: "Audit & Assurance", 
          icon: <FileText />,
          desc: "Auditing financial statements in accordance with Egyptian Accounting Standards (EAS).",
          features: ["Annual & Periodic Audit", "Financial Due Diligence", "Internal Control Assessment", "Financial Statements Approval"]
        },
        { 
          title: "Corporate Structuring", 
          icon: <Building2 />,
          desc: "Full legal support for business incorporation and regularization.",
          features: ["Company Incorporation", "Commercial Register & Tax Card", "GAFI Licenses", "Articles of Association"]
        },
        { 
          title: "International Taxation", 
          icon: <Globe2 />,
          desc: "Solutions for multinationals and cross-border transactions.",
          features: ["Transfer Pricing Files", "Double Taxation Treaties", "Foreign Investment Structuring", "CbCR Reporting"]
        },
        { 
          title: "Payroll & Social Insurance", 
          icon: <Users />,
          desc: "Managing the HR file financially and legally.",
          features: ["Payroll Processing", "Social Insurance Forms", "Tax Deductions", "Labor Law Compliance"]
        },
        { 
          title: "Financial Advisory", 
          icon: <BarChart3 />,
          desc: "Financial performance analysis to support investment decisions.",
          features: ["Feasibility Studies", "Financial Analysis", "Cash Flow Management", "Restructuring Plans"]
        }
      ]
    },
    partners: {
      title: "Partners of Success",
      list: [
        { name: "Orascom Construction", img: "/Orascom_Construction.png" },
        { name: "Orascom Developments", img: "/Orascom_Developments.png" },
        { name: "SIAC Construction", img: "/SIAC Construction.png" },
        { name: "SIAC Developments", img: "/SIAC Developments.Png" },
        { name: "SIAC Holding Development", img: "/SIAC Holding Development.png" },
        { name: "Nile City Towers", img: "/Nile City Towers.png" },
        { name: "Badawy Group", img: "/Badawy Group.png" },
        { name: "Majarrah", img: "/Majarrah.png" },
        { name: "Fairmont", img: "/Fairmont Hotels & Resorts.png" },
        { name: "El Arosa", img: "/Arrosa.png" },
        { name: "EDGE", img: "/EDGE Bilingual.png" },
        { name: "Bonyan", img: "/Bonyan.png" },
        { name: "SIAC Assets & Facilities Management", img: "/SIAC Assets & Facilities Management.png" },
        { name: "SIAC Holding", img: "/SIAC Holding.png" },
        { name: "SIAC Holdin Construction", img: "/SIAC CONSTRUCTION_h.png" },
        { name: "STEELTEC", img: "/STEELTEC.png" },
        { name: "Rhodes", img: "/Rhodes.png" },
        { name: "MENASCO", img: "/MENASCO.png" },
        { name: "CEMEX", img: "/CEMEX.png" },
        { name: "B Square Nasr City", img: "/B Square Nasr City.png" },
        { name: "Arabtec", img: "/Arabtec.png" },
        { name: "White Palace Tours", img: "/White Palace Tours.png" },
        { name: "Tamweel Mortgage", img: "/Tamweel Mortgage.png" },
        { name: "tamweel Finance", img: "/tamweel.png" },
        { name: "Edge Construction", img: "/Edge Construction.png" },
        { name: "Cosmos E Engineers & Consultants", img: "/Cosmos E Engineers & Consultants.png" },
        { name: "Fit in", img: "/Fit in.png" },
      ]
    },
    contact: {
      title: "Visit Our Headquarters",
      subtitle: "Our office is open to welcome you and discuss your financial goals",
      address: "30 Ring Rd, Al Abageyah, El Mokattam, Cairo Governorate",
      phones: ["01200062962", "01080005005", "0227244619"],
      email: "advanced.financial.solution@afs.com.co"
    }
  }
};

// --- COMPONENTS ---

const Navbar = ({ lang, setLang, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isHome ? 'bg-transparent py-4 md:py-6' : 'bg-slate-900 py-3 shadow-xl'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 z-50 group">
             <img src="/logo.png" alt="AFS" className="h-14 md:h-20 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105" />
             <div className="hidden md:block text-white">
               <p className="font-bold text-xl leading-none tracking-wide font-sans">AFS</p>
               <p className="text-[10px] opacity-80 uppercase tracking-widest font-sans">Consulting</p>
             </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/10">
            {Object.keys(t.nav).map((key) => (
              <Link 
                key={key} 
                to={key === 'home' ? '/' : `/${key}`} 
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${location.pathname === (key === 'home' ? '/' : `/${key}`) ? 'bg-white text-slate-900 shadow-sm' : 'text-white hover:text-blue-200'}`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-white font-bold text-sm border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg transition-all">
              {t.nav.contact}
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white z-50 p-2 bg-white/10 rounded-lg">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center gap-8">
            {Object.keys(t.nav).map((key) => (
              <Link key={key} to={key === 'home' ? '/' : `/${key}`} className="text-3xl font-bold text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                {t.nav[key]}
              </Link>
            ))}
            <button onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setIsMenuOpen(false); }} className="text-white flex items-center gap-2 text-lg mt-8 border border-white/20 px-6 py-2 rounded-full">
              <Globe size={20} /> {lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// 1. HOME PAGE
const Home = ({ t, lang }) => (
  <div className="bg-white">
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Skyline" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-900/30 text-blue-300 text-xs font-bold tracking-widest mb-6 uppercase">
             {t.hero.tag}
          </motion.div>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            {t.hero.title} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">{t.hero.title_highlight}</span>
          </motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-slate-300 max-w-lg leading-relaxed mb-10 border-l-2 border-blue-500 pl-6">
            {t.hero.desc}
          </motion.p>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-600/30 transition-all inline-flex items-center gap-3">
              {t.hero.cta} {lang === 'ar' ? <ArrowLeft /> : <ArrowRight />}
            </Link>
          </motion.div>
        </div>
      </div>
    </header>

    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 opacity-10 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 border-2 border-slate-200 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img src="/ceo.png" alt="Ahmed Marghany" className="relative z-10 w-full h-[550px] object-cover rounded-[2rem] shadow-2xl transition-all duration-700" />
              <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                 <h3 className="font-bold text-slate-900 text-lg">{t.ceo.name}</h3>
                 <p className="text-xs text-slate-500 uppercase tracking-wider">{t.ceo.role}</p>
              </div>
           </div>
           <div className="lg:col-span-7">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">{t.ceo.tag}</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">"{t.ceo.title}"</h2>
              <div className="prose prose-lg text-slate-600 mb-10">
                 <p className="leading-relaxed text-lg">{t.ceo.quote}</p>
              </div>
              <div className="mt-8">
                <p className="font-sans text-3xl text-slate-400 italic">{t.ceo.signature}</p>
              </div>
              <div className="mt-12 flex gap-4">
                 <Link to="/about" className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all">
                    {t.nav.about}
                 </Link>
                 <Link to="/services" className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-bold hover:border-slate-900 hover:text-slate-900 transition-all">
                    {t.nav.services}
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="text-center mb-12">
         <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">{t.partners.title}</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20">
          {[...t.partners.list, ...t.partners.list].map((partner, i) => (
             <div key={i} className="flex-shrink-0 w-48 h-24 flex items-center justify-center transition-all duration-500 cursor-pointer">
                <img src={partner.img} alt={partner.name} className="max-w-full max-h-full object-contain" />
             </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// 2. SERVICES PAGE
const Services = ({ t, lang }) => (
  <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
         <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">{t.nav.services}</span>
         <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{t.services.header}</h1>
         <p className="text-xl text-slate-500">{t.services.sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.list.map((service, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-100 group relative overflow-hidden">
             <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors relative z-10">{service.title}</h3>
             <p className="text-slate-500 mb-6 text-sm leading-relaxed relative z-10">{service.desc}</p>
             <div className="space-y-3 relative z-10">
               {service.features.map((feat, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm font-medium">{feat}</span>
                 </div>
               ))}
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-blue-50"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 3. ABOUT PAGE (BENTO GRID - PRO LAYOUT)
const About = ({ t, lang }) => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
           <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">{t.nav.about}</span>
              <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">{t.about.header_title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{t.about.header_desc}</p>
           </div>
           
           {/* Stats Section */}
           <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                 <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center text-center hover:bg-slate-900 hover:text-white transition-all duration-300 group">
                    <h3 className="text-3xl font-black text-blue-600 group-hover:text-blue-400 mb-2">{stat.num}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-300">{stat.text}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* Why Us Section */}
        <div className="mb-24">
           <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {t.about.why_us.map((item, i) => (
                    <div key={i} className="p-4 border-l border-slate-700">
                       <h3 className="font-bold text-xl mb-2 text-blue-400 flex items-center gap-2">{item.icon} {item.title}</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white border border-slate-200 p-10 rounded-[2rem] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6"><TrendingUp /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.about.mission.title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.about.mission.desc}</p>
           </div>
           <div className="bg-blue-600 text-white p-10 rounded-[2rem] shadow-xl shadow-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full"></div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6"><Award /></div>
              <h3 className="text-2xl font-bold mb-4">{t.about.vision.title}</h3>
              <p className="text-blue-100 leading-relaxed">{t.about.vision.desc}</p>
           </div>
           <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2rem]">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 mb-6 shadow-sm"><Shield /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.about.values.title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.about.values.desc}</p>
           </div>
        </div>

      </div>
    </div>
  );
};

// 4. PARTNERS PAGE
const Partners = ({ t }) => (
  <div className="pt-32 pb-20 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6 text-center">
       <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">{t.partners.title}</span>
       <h1 className="text-5xl font-black text-slate-900 mb-12">{t.partners.title}</h1>
       
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.partners.list.map((partner, i) => (
             <div key={i} className="group p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-all flex flex-col items-center justify-center h-48 bg-white cursor-pointer hover:border-blue-100">
                <div className="w-full h-24 flex items-center justify-center mb-4 transition-all duration-300">
                    <img src={partner.img} alt={partner.name} className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-sm font-bold text-slate-400 group-hover:text-blue-900 transition-colors">{partner.name}</p>
             </div>
          ))}
       </div>
    </div>
  </div>
);

// 5. CONTACT PAGE (FIXED LINKS & MAP)
const Contact = ({ t, lang }) => (
  <div className="pt-32 pb-20 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
           <h1 className="text-5xl font-black text-slate-900 mb-6">{t.contact.title}</h1>
           <p className="text-xl text-slate-600 mb-12">{t.contact.subtitle}</p>
           
           <div className="space-y-8">
              <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-blue-600 shrink-0"><MapPin size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">{lang === 'ar' ? 'العنوان' : 'Address'}</h4>
                    {/* Link to Google Maps directly */}
                    <a href="https://maps.google.com/?q=30+Ring+Rd,+Al+Abageyah,+El+Mokattam,+Cairo" target="_blank" rel="noopener noreferrer" className="text-slate-600 w-3/4 hover:text-blue-600 hover:underline transition-colors block">
                      {t.contact.address}
                    </a>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-blue-600 shrink-0"><Phone size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">{lang === 'ar' ? 'الهاتف' : 'Phone'}</h4>
                    <div className="flex flex-col text-slate-600 gap-1">
                       {t.contact.phones.map((p,i) => (
                         <a key={i} href={`tel:${p}`} className="hover:text-blue-600 hover:underline transition-colors font-bold" dir="ltr">{p}</a>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-blue-600 shrink-0"><Mail size={24} /></div>
                 <div>
                    <h4 className="font-bold text-lg mb-1 text-slate-900">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                    <a href={`mailto:${t.contact.email}`} className="text-slate-600 hover:text-blue-600 hover:underline transition-colors font-bold">{t.contact.email}</a>
                 </div>
              </div>
           </div>
        </div>

        <div className="h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 relative">
           {/* EXACT RED PIN LOCATION */}
           <iframe 
             src="https://maps.google.com/maps?q=30%20Ring%20Rd%2C%20Al%20Abageyah%2C%20El%20Mokattam%2C%20Cairo%20Governorate&t=&z=13&ie=UTF8&iwloc=&output=embed"
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="AFS Office Location"
             className="absolute inset-0"
           ></iframe>
        </div>
      </div>
    </div>
  </div>
);

// MAIN APP ROUTER
const App = () => {
  // 1. Language Persistence (Fix Refresh Issue)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('afs_lang') || 'ar';
  });
  
  const t = content[lang];

  useEffect(() => {
    localStorage.setItem('afs_lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar lang={lang} setLang={setLang} t={t} />
        <Routes>
          <Route path="/" element={<Home t={t} lang={lang} />} />
          <Route path="/about" element={<About t={t} lang={lang} />} />
          <Route path="/services" element={<Services t={t} lang={lang} />} />
          <Route path="/partners" element={<Partners t={t} />} />
          <Route path="/contact" element={<Contact t={t} lang={lang} />} />
        </Routes>
        <footer className="bg-slate-900 text-slate-500 py-10 text-center text-sm border-t border-slate-800">
           © 2026 AFS Consulting. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;