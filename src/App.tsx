import { Sparkles, ShieldCheck, Home, Droplets, Phone, Mail, MapPin, Check, Star, ArrowRight, Building2, Trees, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-washing.jpg";
import logo from "@/assets/sm-elite-logo.png";
import imgHouse from "@/assets/service-house.jpg";
import imgDriveway from "@/assets/service-driveway.jpg";
import imgDeck from "@/assets/service-deck.jpg";
import imgCommercial from "@/assets/service-commercial.jpg";
import imgWindows from "@/assets/service-windows.jpg";
import imgJob1Before from "@/assets/job1-before.png";
import imgJob1After from "@/assets/job1-after.png";
import imgJob2Before from "@/assets/job2-before.png";
import imgJob2After from "@/assets/job2-after.png";
import { useRef, useState, useCallback, useEffect } from "react";

const PHONE = "226-724-4690";
const EMAIL = "Stefon.Morgan3021@gmail.com";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="SM Elite Window Cleaning and Power Washing – Windsor Ontario" className="h-11 w-11 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-navy-deep">SM Elite</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Window Cleaning & Power Washing</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
          <a href="#services" className="underline underline-offset-4 decoration-transparent hover:text-brand hover:decoration-brand transition-all duration-200">Services</a>
          <a href="#results" className="underline underline-offset-4 decoration-transparent hover:text-brand hover:decoration-brand transition-all duration-200">Results</a>
          <a href="#why" className="underline underline-offset-4 decoration-transparent hover:text-brand hover:decoration-brand transition-all duration-200">Why Us</a>
          <a href="#contact" className="underline underline-offset-4 decoration-transparent hover:text-brand hover:decoration-brand transition-all duration-200">Contact</a>
        </nav>
        <a href={`tel:${PHONE}`}>
          <Button className="bg-brand-gradient text-primary-foreground hover:opacity-95 shadow-glow rounded-full px-5">
            <Phone className="w-4 h-4 mr-2" /> {PHONE}
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 opacity-30">
        <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep/95" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/30 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-bright/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-brand-bright" />
            New customers get 25% off their first service
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Professional Power Washing in
            <span className="block text-gradient-brand">Windsor, Ontario</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold text-white/90 max-w-xl">
            Driveways, houses, decks & exterior cleaning – affordable and reliable local service
          </p>
          <p className="mt-3 text-base md:text-lg text-white/70 max-w-xl">
            Streak-free windows and powerful exterior cleaning that restores curb appeal instantly. Residential & commercial across Ontario.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${PHONE}`}>
              <Button size="lg" className="bg-brand-gradient text-primary-foreground hover:opacity-95 shadow-glow rounded-full px-7 h-14 text-base">
                <Phone className="w-5 h-5 mr-2" /> Call for a Free Quote
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="rounded-full px-7 h-14 text-base bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white">
                View Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-bright text-brand-bright" />
              ))}
            </div>
            <span>Satisfaction guaranteed · Fast response · Fully insured</span>
          </div>
        </div>

        <div className="md:col-span-5 relative hidden md:block">
          <div className="absolute inset-0 bg-brand/30 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10 animate-float-slow">
            <img src={imgWindows} alt="Professional window cleaning service Windsor Ontario – streak-free results" width={1024} height={1024} className="w-full h-[480px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Fully Insured" },
    { icon: Sparkles, label: "Streak-Free Guarantee" },
    { icon: Droplets, label: "Eco-Friendly Soaps" },
    { icon: Star, label: "5-Star Service" },
  ];
  return (
    <div className="border-y border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center text-navy">
            <div className="w-10 h-10 rounded-full bg-brand-gradient grid place-items-center text-white">
              <Icon className="w-5 h-5" />
            </div>
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { title: "Window Cleaning", desc: "Crystal clear, streak-free interior & exterior glass — residential and commercial.", img: imgWindows, alt: "Professional window cleaning service Windsor Ontario – streak-free glass" },
    { title: "Driveway Power Washing", desc: "Removes dirt, oil, mold & algae. Cleaner, safer, better curb appeal.", img: imgDriveway, alt: "Power washing driveway Windsor Ontario – removing dirt oil and mold" },
    { title: "House Soft Washing", desc: "Gentle, deep clean for vinyl siding, brick, and stucco — no damage, just shine.", img: imgHouse, alt: "Pressure washing house exterior Windsor Ontario – siding and brick cleaning" },
    { title: "Deck & Patio Cleaning", desc: "Restore weathered wood and stone surfaces back to life.", img: imgDeck, alt: "Deck cleaning service Windsor Ontario – restoring weathered wood and stone" },
    { title: "Commercial Cleaning", desc: "Storefronts, sidewalks, and exteriors that put your best face forward.", img: imgCommercial, alt: "Commercial pressure washing Windsor Ontario – storefront and sidewalk cleaning" },
    { title: "Full Exterior Refresh", desc: "Bundle services and save — we'll make your whole property sparkle.", img: heroImg, alt: "Full exterior cleaning service Windsor Ontario – complete property power washing" },
  ];
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">What we do</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
            Cleaner. Safer. <span className="text-gradient-brand">Better curb appeal.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From spotless windows to deep exterior cleaning, we handle the whole property — with the attention to detail your home or business deserves.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.alt} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <a href={`tel:${PHONE}`} className="mt-4 inline-flex items-center gap-2 text-brand font-semibold underline underline-offset-2 decoration-transparent hover:decoration-brand group-hover:gap-3 transition-all duration-200">
                  Get a quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
}

function ComparisonSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt, caption }: SliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging) updatePosition(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (isDragging) { e.preventDefault(); updatePosition(e.touches[0].clientX); } };
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-elegant border border-white/10 select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img src={afterSrc} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-elegant flex items-center justify-center z-20"
        style={{ left: `${position}%` }}
      >
        <GripVertical className="w-5 h-5 text-navy-deep" />
      </div>

      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-navy-deep/90 text-white backdrop-blur border border-white/10 pointer-events-none z-10">
        BEFORE
      </div>
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-gradient text-white pointer-events-none shadow-glow z-10">
        AFTER
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent pointer-events-none z-10">
        <p className="text-xs font-semibold text-white">{caption}</p>
        <p className="text-[11px] text-white/75 mt-0.5">Drag to compare · Real customer result</p>
      </div>
    </div>
  );
}

function BeforeAfter() {
  const bullets = [
    { icon: Sparkles, title: "Removes dirt, oil, mold & algae", desc: "Our high-pressure systems lift the toughest grime in one pass." },
    { icon: ShieldCheck, title: "Improves safety", desc: "Eliminates slick, slippery surfaces around your property." },
    { icon: Home, title: "Boosts curb appeal", desc: "Protect your investment and make your home look brand new." },
  ];
  return (
    <section id="results" className="relative py-24 md:py-32 bg-hero text-white overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-brand/30 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-bright">See the difference</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Professional results <br /> you can <span className="text-gradient-brand">see & trust.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80">
              These are real jobs from real customers in Ontario. Drag the sliders to see the dramatic transformation we deliver — every single time.
            </p>
            <ul className="mt-10 space-y-6">
              {bullets.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-gradient grid place-items-center shadow-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-white/70">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href={`tel:${PHONE}`} className="mt-10 inline-block">
              <Button size="lg" className="bg-brand-gradient text-primary-foreground hover:opacity-95 shadow-glow rounded-full px-7 h-14 text-base">
                <Phone className="w-4 h-4 mr-2" /> Get This Result for Your Property
              </Button>
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <ComparisonSlider
              beforeSrc={imgJob1Before}
              afterSrc={imgJob1After}
              beforeAlt="Stained concrete driveway before power washing service Windsor Ontario"
              afterAlt="Clean bright driveway after professional power washing Windsor Ontario"
              caption="Driveway Power Wash · Ontario"
            />
            <ComparisonSlider
              beforeSrc={imgJob2Before}
              afterSrc={imgJob2After}
              beforeAlt="Mold and algae covered stone pillar before soft washing Windsor Ontario"
              afterAlt="Restored clean stone pillar after professional soft washing Windsor Ontario"
              caption="Stone Pillar Soft Wash · Ontario"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    "Reliable & Professional Service",
    "Affordable Pricing",
    "Fast Response Times",
    "Attention to Detail",
    "Friendly Customer Service",
    "Satisfaction Guaranteed",
  ];
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Why SM Elite</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
            We don't just clean — we help your property <span className="text-gradient-brand">look its best.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether residential or commercial, our goal is to leave every customer impressed with crystal-clear results and a stress-free experience.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <div key={r} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-elegant transition">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-gradient grid place-items-center text-white">
                <Check className="w-5 h-5" strokeWidth={3} />
              </div>
              <span className="font-semibold text-navy-deep">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-7xl mx-auto bg-hero rounded-[2rem] p-10 md:p-16 text-white relative overflow-hidden shadow-elegant">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-bright/30 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-brand-bright" /> Limited time offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              25% OFF <br /> your first service.
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-md">
              Book now and make your home shine again. Free, no-obligation quotes by call or text.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href={`tel:${PHONE}`} className="group block">
              <div className="bg-white text-navy-deep rounded-2xl p-6 flex items-center gap-5 hover:shadow-glow transition">
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center text-white shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call or text today</div>
                  <div className="text-3xl font-extrabold">{PHONE}</div>
                </div>
                <ArrowRight className="ml-auto w-6 h-6 text-brand opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="group block">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/15 transition">
                <Mail className="w-5 h-5 text-brand-bright" />
                <span className="font-medium break-all">{EMAIL}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Service Area", value: "Ontario, Canada", href: undefined },
  ];
  return (
    <section id="contact" className="py-24 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Get in touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
            Ready for a <span className="text-gradient-brand">spotless</span> property?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Call, text, or email for a free quote. No mess, no stress — just a cleaner, brighter property.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const Inner = (
              <div className="h-full rounded-3xl bg-card border border-border p-8 hover:shadow-elegant hover:-translate-y-1 transition-all text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center text-white shadow-glow">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="mt-1 text-lg font-bold text-navy-deep break-words">{value}</div>
              </div>
            );
            return href ? <a key={label} href={href}>{Inner}</a> : <div key={label}>{Inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="SM Elite Window Cleaning and Power Washing Windsor Ontario" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-bold text-white">SM Elite</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Window Cleaning & Power Washing</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-sm">
            Spotless, streak-free results across Ontario. Residential & commercial cleaning you can trust.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-brand-bright" /> Window Cleaning</li>
            <li className="flex items-center gap-2"><Droplets className="w-4 h-4 text-brand-bright" /> Power Washing</li>
            <li className="flex items-center gap-2"><Trees className="w-4 h-4 text-brand-bright" /> Deck & Patio</li>
            <li className="flex items-center gap-2"><Building2 className="w-4 h-4 text-brand-bright" /> Commercial</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`tel:${PHONE}`} className="underline underline-offset-2 hover:text-brand-bright hover:decoration-brand-bright transition-colors duration-200">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="underline underline-offset-2 hover:text-brand-bright hover:decoration-brand-bright break-all transition-colors duration-200">{EMAIL}</a></li>
            <li>Ontario, Canada</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/70 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} SM Elite Window Cleaning & Power Washing. All rights reserved.</span>
          <span>Free quotes · 25% off your first service</span>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-3 text-center text-[11px] text-white/60">
            Website Designed &amp; Maintained by{" "}
            <a
              href="https://www.yamanaeb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-brand-bright transition-colors duration-200 hover:underline underline-offset-2"
            >
              YamaNaeb Web Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
