export const IMAGE_ASSETS = {
  studio:
    "https://images.unsplash.com/photo-1783841193384-4269c68aa050?auto=format&fit=crop&w=2200&q=85",
  guided:
    "https://plus.unsplash.com/premium_photo-1750204583473-071e510e9081?auto=format&fit=crop&w=1800&q=85",
  postpartum:
    "https://images.unsplash.com/photo-1767776039586-9b4d08ce9f57?auto=format&fit=crop&fm=jpg&q=85&w=1800",
  woman:
    "https://fotostudiorerich.de/wp-content/uploads/2020/07/businessfotografie-natalia-vogel-02.jpg",
  man:
    "https://cdn.prod.website-files.com/66b1f954bbeeb6c3ee0454f9/6834566fa0c33e611eb535d6_W2%20D4%20-%20Ring%20Pilates%20Full%20Body%20-%20D_.png",
} as const;

export const SITE_URL = "https://shapehaus.example.com";

export const CONTACT = {
  email: "hello@shapehaus.example",
  phone: "+234 (0) 000 000 0000",
  address: "Private studio · Lagos, Nigeria",
} as const;

export const NAV_LINKS = [
  { label: "The Method", href: "#method" },
  { label: "Programs", href: "#programs" },
  { label: "Postpartum", href: "#postpartum" },
  { label: "For Men", href: "#for-men" },
  { label: "About", href: "#experience" },
] as const;

export type ProgramCategory = "Postpartum" | "Women" | "Men" | "Private";

export const PROGRAMS: ReadonlyArray<{
  title: string;
  description: string;
  audience: string;
  format: string;
  categories: ProgramCategory[];
}> = [
  {
    title: "Postpartum Reset",
    description:
      "A measured return to movement through breath, mobility, and deep-core connection. Progression follows your comfort, context, and professional clearance.",
    audience: "After birth · All experience levels",
    format: "Private · In studio or virtual",
    categories: ["Postpartum", "Women", "Private"],
  },
  {
    title: "Core Foundations",
    description:
      "Build a stronger relationship with your centre through controlled, low-impact movement. Designed to support stability in daily life and future training.",
    audience: "Women & men · All levels",
    format: "Private or small group",
    categories: ["Women", "Men"],
  },
  {
    title: "Diastasis-Aware Strength",
    description:
      "Thoughtful strength work that adapts to your current core function. We complement—not replace—assessment or care from qualified health professionals.",
    audience: "Women with appropriate clearance",
    format: "Private · Assessment-led",
    categories: ["Postpartum", "Women", "Private"],
  },
  {
    title: "Mobility & Posture",
    description:
      "Restore comfortable range and develop useful postural awareness. Sessions bring breath, mobility, and strength into one sustainable practice.",
    audience: "Women & men · Desk-based lifestyles",
    format: "Private or small group",
    categories: ["Women", "Men"],
  },
  {
    title: "Men’s Core Revitalization",
    description:
      "Precise core, mobility, and posture work for modern, demanding lives. Build steadier movement without high-impact gym pressure.",
    audience: "Men · Beginner to experienced",
    format: "Private or small group",
    categories: ["Men", "Private"],
  },
  {
    title: "Private Recovery Coaching",
    description:
      "A fully tailored pathway shaped around your history, schedule, and goals. One-to-one attention creates space for calm, considered progress.",
    audience: "Women & men · Individual needs",
    format: "Private · In studio or virtual",
    categories: ["Postpartum", "Women", "Men", "Private"],
  },
] as const;

export const FAQS = [
  {
    question: "When can I begin postpartum recovery sessions?",
    answer:
      "Timing is individual and depends on your birth experience, recovery, symptoms, and medical guidance. Begin only after appropriate clearance, and speak with your healthcare professional if you have pain, bleeding, heaviness, prolapse symptoms, or concerns about surgical recovery.",
  },
  {
    question: "Do I need medical clearance after childbirth?",
    answer:
      "Yes. We ask postpartum clients to have appropriate medical clearance before beginning. ShapeHaus movement coaching complements—but does not replace—medical or pelvic-health care.",
  },
  {
    question: "Is ShapeHaus only for women?",
    answer:
      "No. Postpartum recovery is a signature specialty, and our core restoration, mobility, posture, and private coaching pathways welcome women and men.",
  },
  {
    question: "Do I need previous fitness experience?",
    answer:
      "Not at all. Every pathway starts with your current comfort and capacity, whether you are returning after years away or building on an established practice.",
  },
  {
    question: "Can you support diastasis recti concerns?",
    answer:
      "We can provide diastasis-aware movement and strength coaching after appropriate clearance. We do not diagnose; suspected diastasis, pain, prolapse symptoms, or other concerns should be assessed by a qualified healthcare or pelvic-health professional.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "We discuss your goals, history, daily movement, current comfort, and the kind of support that feels right. From there, we recommend a pathway and explain how progression can work for you.",
  },
  {
    question: "Are sessions private or group-based?",
    answer:
      "Both are available. Some pathways begin privately, while others may suit a carefully sized group. We will help you choose based on your goals and preference for support.",
  },
  {
    question: "How quickly will I notice progress?",
    answer:
      "Progress varies with your starting point, consistency, recovery, and goals. We focus on sustainable markers such as body awareness, steadier movement, mobility, and confidence rather than promising a fixed timeline.",
  },
] as const;
