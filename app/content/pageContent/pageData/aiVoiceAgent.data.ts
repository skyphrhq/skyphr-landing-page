import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL, SKY_AI_CONSULTATION_URL } from "@/app/utils/constants/common.constant";
import { AiVoiceAgentPageDataInterface } from "@/app/utils/interface/data.interface";
import { createElement } from "react";
import {
  LuBookOpenCheck,
  LuBriefcase,
  LuCalendarCheck,
  LuCalendarDays,
  LuCheck,
  LuClock,
  LuDatabase,
  LuFileText,
  LuHouse,
  LuListChecks,
  LuMail,
  LuMessageSquareWarning,
  LuPhoneCall,
  LuPlug,
  LuScale,
  LuScissors,
  LuShieldCheck,
  LuSparkles,
  LuStethoscope,
  LuUserRound,
  LuWrench,
} from "react-icons/lu";

export const AI_VOICE_AGENT_PAGE_DATA: AiVoiceAgentPageDataInterface = {
  metadata: {
    title: "Sky – AI Voice Agent That Answers Every Call | Skyphr",
    description:
      "Sky is the AI voice agent built by Skyphr. It answers your business calls 24/7, understands what callers need, books meetings on your calendar and saves every lead and transcript.",
    openGraph: {
      title: "Sky – AI Voice Agent That Answers Every Call | Skyphr",
      description:
        "Sky is the AI voice agent built by Skyphr. It answers your business calls 24/7, understands what callers need, books meetings on your calendar and saves every lead and transcript.",
      // TODO: add a dedicated /og-image/ai-voice-agent.png and point both images at it
      images: "/og-image/ai-development-services.png",
      type: "website",
    },
    twitter: {
      title: "Sky – AI Voice Agent That Answers Every Call | Skyphr",
      description:
        "Sky is the AI voice agent built by Skyphr. It answers your business calls 24/7, understands what callers need, books meetings on your calendar and saves every lead and transcript.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/ai-development-services.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/ai-voice-agent`,
    },
  },
  hero: {
    id: "sky-voice-agent",
    chip: "Sky is live in beta",
    header: {
      title: [[{ text: "Every call answered." }], [{ text: "Even when you can't.", variant: "italic" }]],
      description: [
        [
          {
            text: "Sky is the AI voice agent built by Skyphr. It answers your business calls, understands what callers need, books the meeting and saves every lead, day or night.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free AI Consultation",
        href: SKY_AI_CONSULTATION_URL,
        variant: "CTA_PRIMARY",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    console: {
      caller: { name: "Caller", role: "Dental clinic, Manchester" },
      sky: { name: "Sky", role: "Skyphr AI agent", initial: "S" },
      statusLabels: { idle: "Connecting", live: "Live call demo", ended: "Call ended" },
      activityLabels: { speaking: "Speaking", listening: "Listening" },
      controlLabels: {
        start: "Start call",
        end: "End call",
        replay: "Replay call",
        startAria: "Start demo call",
        endAria: "End demo call",
        replayAria: "Replay demo call",
      },
      transcript: {
        title: "Transcript",
        emptyText: "The call transcript appears here as Sky talks.",
      },
      languages: {
        label: "Transcript language",
        // The selected language is kept in the URL (?lang=hi) so a reload keeps it; the default has no param
        queryParam: "lang",
        defaultCode: "en",
        // Not shown right now; kept so the count can go back into the text ("+ 30 more languages")
        moreLanguagesCount: 30,
        demoLink: {
          label: "Don't see your language? Book a call to see a live demo →",
          href: SKY_AI_CONSULTATION_URL,
          target: "_blank",
          rel: "noopener noreferrer",
        },
        // Scripted demo call, one object per language with the same lines in the same order.
        // TODO: every translation below (hi, es, fr, de) needs a native-speaker review before launch.
        // Keep each line close to the English length so the transcript doesn't jump when switching.
        options: [
          {
            code: "en",
            label: "English",
            note: "Saved automatically",
            booked: {
              title: "Consultation booked",
              detail: "Thursday, 4:30 PM, 30 minutes",
              items: [
                { label: "Lead saved", icon: createElement(LuCheck) },
                { label: "Transcript saved", icon: createElement(LuFileText) },
              ],
            },
            script: [
              {
                speaker: "caller",
                text: "Hi, I run a dental clinic in Manchester. Can you build us an online booking system?",
              },
              {
                speaker: "sky",
                text: "Absolutely. We build web apps, mobile apps and booking platforms. Is it for new patients, existing ones, or both?",
              },
              { speaker: "caller", text: "Both, ideally. Could I speak to someone this week?" },
              {
                speaker: "sky",
                text: "Of course. Thursday at 4:30 PM is free for a 30-minute call. Shall I book it?",
              },
              { speaker: "caller", text: "Yes, that works." },
              { speaker: "sky", text: "Done. The invite is on its way to your inbox." },
            ],
          },
          {
            code: "hi",
            label: "हिन्दी",
            note: "अपने आप सेव हुआ",
            booked: {
              title: "कंसल्टेशन बुक हो गया",
              detail: "गुरुवार, शाम 4:30 बजे, 30 मिनट",
              items: [
                { label: "लीड सेव हो गई", icon: createElement(LuCheck) },
                { label: "ट्रांसक्रिप्ट सेव हो गई", icon: createElement(LuFileText) },
              ],
            },
            script: [
              {
                speaker: "caller",
                text: "नमस्ते, मैं मैनचेस्टर में एक डेंटल क्लिनिक चलाता हूँ। क्या आप हमारे लिए ऑनलाइन बुकिंग सिस्टम बना सकते हैं?",
              },
              {
                speaker: "sky",
                text: "बिल्कुल। हम वेब ऐप, मोबाइल ऐप और बुकिंग प्लेटफ़ॉर्म बनाते हैं। यह नए मरीज़ों के लिए है, पुराने मरीज़ों के लिए, या दोनों के लिए?",
              },
              { speaker: "caller", text: "दोनों के लिए। क्या मैं इसी हफ़्ते किसी से बात कर सकता हूँ?" },
              {
                speaker: "sky",
                text: "ज़रूर। गुरुवार शाम 4:30 बजे 30 मिनट की कॉल के लिए समय खाली है। क्या मैं बुक कर दूँ?",
              },
              { speaker: "caller", text: "हाँ, यह ठीक रहेगा।" },
              { speaker: "sky", text: "हो गया। इनवाइट आपके इनबॉक्स में पहुँच रहा है।" },
            ],
          },
          {
            code: "es",
            label: "Español",
            note: "Guardado automático",
            booked: {
              title: "Consulta reservada",
              detail: "Jueves, 16:30, 30 minutos",
              items: [
                { label: "Lead guardado", icon: createElement(LuCheck) },
                { label: "Transcripción guardada", icon: createElement(LuFileText) },
              ],
            },
            script: [
              {
                speaker: "caller",
                text: "Hola, tengo una clínica dental en Mánchester. ¿Pueden crearnos un sistema de reservas online?",
              },
              {
                speaker: "sky",
                text: "Por supuesto. Creamos apps web, apps móviles y plataformas de reservas. ¿Es para pacientes nuevos, actuales o ambos?",
              },
              { speaker: "caller", text: "Para ambos, idealmente. ¿Podría hablar con alguien esta semana?" },
              {
                speaker: "sky",
                text: "Claro. El jueves a las 16:30 hay un hueco para una llamada de 30 minutos. ¿Se la reservo?",
              },
              { speaker: "caller", text: "Sí, me va bien." },
              { speaker: "sky", text: "Listo. La invitación ya va de camino a su correo." },
            ],
          },
          {
            code: "fr",
            label: "Français",
            note: "Enregistré automatiquement",
            booked: {
              title: "Consultation réservée",
              detail: "Jeudi, 16 h 30, 30 minutes",
              items: [
                { label: "Lead enregistré", icon: createElement(LuCheck) },
                { label: "Transcription enregistrée", icon: createElement(LuFileText) },
              ],
            },
            script: [
              {
                speaker: "caller",
                text: "Bonjour, je dirige un cabinet dentaire à Manchester. Pouvez-vous nous créer un système de réservation en ligne ?",
              },
              {
                speaker: "sky",
                text: "Bien sûr. Nous créons des applis web, mobiles et des plateformes de réservation. Pour les nouveaux patients, les actuels, ou les deux ?",
              },
              { speaker: "caller", text: "Les deux, idéalement. Puis-je parler à quelqu'un cette semaine ?" },
              {
                speaker: "sky",
                text: "Avec plaisir. Jeudi à 16 h 30, un créneau est libre pour un appel de 30 minutes. Je le réserve ?",
              },
              { speaker: "caller", text: "Oui, c'est parfait." },
              { speaker: "sky", text: "C'est fait. L'invitation arrive dans votre boîte mail." },
            ],
          },
          {
            code: "de",
            label: "Deutsch",
            note: "Automatisch gespeichert",
            booked: {
              title: "Beratung gebucht",
              detail: "Donnerstag, 16:30 Uhr, 30 Minuten",
              items: [
                { label: "Lead gespeichert", icon: createElement(LuCheck) },
                { label: "Transkript gespeichert", icon: createElement(LuFileText) },
              ],
            },
            script: [
              {
                speaker: "caller",
                text: "Hallo, ich leite eine Zahnarztpraxis in Manchester. Können Sie uns ein Online-Buchungssystem bauen?",
              },
              {
                speaker: "sky",
                text: "Auf jeden Fall. Wir entwickeln Web-Apps, mobile Apps und Buchungsplattformen. Ist es für neue Patienten, bestehende oder beide?",
              },
              { speaker: "caller", text: "Am besten beide. Könnte ich diese Woche mit jemandem sprechen?" },
              {
                speaker: "sky",
                text: "Gern. Am Donnerstag um 16:30 Uhr ist ein 30-minütiger Termin frei. Soll ich ihn buchen?",
              },
              { speaker: "caller", text: "Ja, das passt." },
              { speaker: "sky", text: "Erledigt. Die Einladung ist unterwegs in Ihr Postfach." },
            ],
          },
        ],
      },
    },
  },
  callFlow: {
    id: "how-a-call-works",
    header: {
      title: [
        [
          { text: "What happens in" },
          { text: "90 seconds", variant: "italic", classNames: "skyai-voice-headline-accent pr-[0.06em]" },
        ],
      ],
      description: [
        [{ text: "One real call, from the first ring to a meeting on your calendar and a lead in your records." }],
      ],
    },
    steps: [
      {
        time: "0:00",
        title: "The phone rings",
        description: "Sky picks up on the first ring, whether it's 3 PM or 3 AM. No hold music, no voicemail.",
      },
      {
        time: "0:03",
        title: "Greets as your business",
        description: "Your business name, your tone, your opening line. Callers hear your front desk, not a robot.",
      },
      {
        time: "0:12",
        title: "Understands what they need",
        description:
          "Sky listens, asks the follow-up questions your team would ask, and picks out the details that matter.",
      },
      {
        time: "1:10",
        title: "Books the meeting",
        description: "It checks your real availability, offers a slot, and books it only after the caller says yes.",
      },
      {
        time: "1:30",
        title: "Saves the record",
        description: "The transcript, the lead details and the booking land in your records the moment the call ends.",
      },
    ],
    stages: {
      ring: { title: "Incoming call", number: "+44 7700 900123", status: "Answered on the first ring" },
      greet: {
        message: { speaker: "sky", name: "Sky", text: "Hi, you've reached Skyphr. How can I help you today?" },
        profileTitle: "Business profile Sky is using",
        profile: [
          { label: "Business", value: "Skyphr" },
          { label: "Tone", value: "Warm and professional" },
          { label: "Services", value: "Web, mobile, SaaS and AI" },
          { label: "Books", value: "Free 30-minute consultations" },
        ],
      },
      understand: {
        message: {
          speaker: "caller",
          name: "Caller",
          text: "Hi, I run a dental clinic in Manchester. Can you build us an online booking system?",
        },
        detailsTitle: "What Sky picked up",
        details: [
          { label: "Caller", value: "Dental clinic owner" },
          { label: "Location", value: "Manchester, UK" },
          { label: "Needs", value: "Online booking system" },
          { label: "For", value: "New and existing patients" },
        ],
      },
      book: {
        calendarTitle: "Your availability this week",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        times: ["10:00", "12:30", "2:00", "4:30"],
        busySlots: [
          "Mon-10:00",
          "Mon-2:00",
          "Tue-12:30",
          "Tue-4:30",
          "Wed-10:00",
          "Wed-12:30",
          "Wed-2:00",
          "Thu-10:00",
          "Thu-2:00",
          "Fri-12:30",
          "Fri-4:30",
        ],
        bookedSlot: "Thu-4:30",
        message: {
          speaker: "sky",
          name: "Sky",
          text: "Thursday at 4:30 PM is free for a 30-minute call. Shall I book it?",
        },
        status: "Caller said yes. Booked on Cal.com",
      },
      save: {
        lead: { name: "Emma Clarke", company: "Bright Smile Dental, Manchester", tag: "New lead" },
        summary: "Wants an online booking system for new and existing patients. Consultation booked.",
        items: [
          { label: "Consultation", value: "Thu, 4:30 PM", icon: createElement(LuCalendarCheck) },
          { label: "Invite", value: "Sent to email", icon: createElement(LuMail) },
          { label: "Transcript", value: "Saved, 1:30", icon: createElement(LuFileText) },
          { label: "Follow-up", value: "Ready for your team", icon: createElement(LuClock) },
        ],
      },
    },
  },
  whoFor: {
    id: "who-its-for",
    header: {
      title: [[{ text: "Built for businesses that" }], [{ text: "can't miss a call", variant: "italic" }]],
      description: [
        [
          {
            text: "If your phone brings in customers, a missed call is a missed booking. Sky is set up around how your business works: your greeting, your services, your calendar.",
          },
        ],
      ],
    },
    labels: {
      tablist: "Industries",
      books: "Books",
      problem: "The problem",
      handles: "What Sky handles",
      answers: "How Sky answers",
      sky: "Sky",
    },
    // UK / US small businesses
    industries: [
      {
        id: "clinics",
        icon: createElement(LuStethoscope),
        name: "Clinics",
        who: "Dentists, GP practices, physios",
        problem: "Reception is busy with the patient at the desk, so the phone rings out.",
        handles: [
          "Books, moves and cancels appointments",
          "Answers opening hours, location, parking and services",
          "Takes an urgent message for staff when it can't wait",
        ],
        greeting: "Thank you for calling Bright Smile Dental. Are you booking a new appointment or changing one?",
        books: "Appointments",
      },
      {
        id: "law",
        icon: createElement(LuScale),
        name: "Law firms",
        who: "Solicitors, attorneys, legal practices",
        problem: "A new client calls once. If nobody answers, they call the next firm.",
        handles: [
          "Captures new enquiries with the details your team needs",
          "Explains practice areas and how the first consultation works",
          "Never gives legal advice. It books time with someone who can",
        ],
        greeting: "Good morning, Harper & Cole. Are you calling about a new matter?",
        books: "Initial consultations",
      },
      {
        id: "trades",
        icon: createElement(LuWrench),
        name: "Home services",
        who: "Plumbers, electricians, HVAC, cleaners",
        problem: "You're on a job with your hands full when the next job calls.",
        handles: [
          "Takes the job details, address and how urgent it is",
          "Confirms your service area and call-out information",
          "Books site visits and quotes into your calendar",
        ],
        greeting: "Hi, you've reached Northside Plumbing. What's the problem you're having?",
        books: "Site visits and quotes",
      },
      {
        id: "realty",
        icon: createElement(LuHouse),
        name: "Real estate",
        who: "Estate agents, realtors, letting agents",
        problem: "Buyers call about listings in the evening, while agents are out on viewings.",
        handles: [
          "Answers questions about listed properties",
          "Asks about budget, area and timeline before handing over",
          "Books viewings straight into the agent's diary",
        ],
        greeting: "Hello, Greenview Estates. Which property are you calling about?",
        books: "Viewings",
      },
      {
        id: "salons",
        icon: createElement(LuScissors),
        name: "Salons and spas",
        who: "Hair salons, barbers, beauty and wellness",
        problem: "Nobody can put down the scissors mid-appointment to answer the phone.",
        handles: [
          "Books and reschedules appointments",
          "Answers service and price questions",
          "Matches the caller with the right stylist's availability",
        ],
        greeting: "Hi, Glow Studio. What would you like to book in for?",
        books: "Appointments",
      },
      {
        id: "agencies",
        icon: createElement(LuBriefcase),
        name: "Agencies",
        who: "Agencies, consultancies, professional services",
        problem: "Enquiries arrive while the team is in meetings, or asleep in another time zone.",
        handles: [
          "Qualifies project enquiries with the right questions",
          "Books discovery calls with your team",
          "Saves every lead with notes, ready for follow-up",
        ],
        greeting: "Hi, you've reached Skyphr. What are you looking to build?",
        books: "Discovery calls",
        note: "This is how Skyphr uses Sky on its own phone line.",
      },
    ],
    cta: {
      title: "Your industry isn't listed?",
      description: "If your business takes calls, Sky can be set up for it. We'll map out how it would handle yours.",
      button: { label: "Talk to us about your calls", href: "/contact", variant: "CTA_PRIMARY" },
    },
  },
  afterCall: {
    id: "after-the-call",
    header: {
      title: [
        [{ text: "Every call ends with" }],
        [{ text: "something useful", variant: "italic", classNames: "skyai-voice-headline-accent pr-[0.06em]" }],
      ],
      description: [
        [
          {
            text: "When Sky hangs up, your team already has what it needs to follow up. No sticky notes, no guesswork, no calling back to ask again.",
          },
        ],
      ],
    },
    cards: [
      {
        icon: createElement(LuFileText),
        title: "The full transcript",
        description:
          "Every word of the call, saved the moment it ends. Read it in a minute instead of calling the customer back to ask again.",
        points: ["Both sides of the conversation", "Timestamped, easy to skim", "Saved automatically, every call"],
      },
      {
        icon: createElement(LuUserRound),
        title: "The lead, ready to follow up",
        description:
          "Sky captures who called and what they need, so the lead is waiting for your team, not lost in a voicemail.",
        points: ["Name and phone number", "Email, when the caller books", "What they're asking for"],
      },
      {
        icon: createElement(LuCalendarCheck),
        title: "The booking on your calendar",
        description:
          "When a caller agrees to a time, the meeting is booked on your calendar and the invite goes straight to them.",
        points: ["Booked only after the caller says yes", "Invite sent to the caller's email", "No double booking"],
      },
    ],
    integrations: {
      title: "Built on tools you can rely on",
      description: "Sky is built in-house by Skyphr on proven platforms.",
      items: [
        {
          icon: createElement(LuCalendarDays),
          name: "Cal.com",
          role: "Scheduling",
          description: "Sky checks your real availability and books meetings directly on your Cal.com calendar.",
        },
        {
          icon: createElement(LuPhoneCall),
          name: "Twilio",
          role: "Phone line",
          description: "Calls reach Sky through a phone number set up and routed for your business.",
        },
        {
          icon: createElement(LuSparkles),
          name: "Gemini",
          role: "Conversation",
          description: "Powers how Sky understands callers and replies naturally, in real time.",
        },
        {
          icon: createElement(LuPlug),
          name: "Your tools",
          description:
            "Using a different calendar or CRM? Tell us what you use and we'll look at connecting Sky to it.",
          isOpenEnded: true,
        },
      ],
    },
  },
  trust: {
    id: "trust-and-control",
    header: {
      title: [
        [{ text: "A voice agent you stay" }],
        // Extra right padding: the italic "f" overhangs the gradient text box
        [{ text: "in control of", variant: "italic", classNames: "skyai-voice-headline-accent pr-[0.14em]" }],
      ],
      description: [
        [
          {
            text: "Sky talks to your customers, so it plays by your rules. Here's how we keep every call accurate, honest and on-brand.",
          },
        ],
      ],
    },
    practiceLabel: "In practice",
    principles: [
      {
        icon: createElement(LuBookOpenCheck),
        title: "Answers only from your business profile",
        description:
          "Sky works from the services, hours, policies and answers you approve. It doesn't make things up to keep the conversation going.",
        practice: "Asked about a service you don't offer, Sky says so plainly.",
      },
      {
        icon: createElement(LuMessageSquareWarning),
        title: "Says when it doesn't know",
        description:
          "If a question falls outside what you've given it, Sky doesn't guess. It takes a message so the right person can call back.",
        practice: "“I'll pass that to the team and they'll get back to you today.”",
      },
      {
        icon: createElement(LuCalendarCheck),
        title: "Confirms before it books",
        description:
          "Sky reads the date and time back to the caller and books only after they say yes. Nothing lands on your calendar by assumption.",
        practice: "“Thursday at 4:30 PM, 30 minutes. Shall I book it?”",
      },
      {
        icon: createElement(LuShieldCheck),
        title: "Stays within the scope you set",
        description:
          "You decide what Sky can talk about. It won't give legal, medical or financial advice, or promise prices you haven't approved.",
        practice: "Pricing questions get your approved answer, or a callback.",
      },
      {
        icon: createElement(LuListChecks),
        title: "Every call is on record",
        description:
          "Each call is saved with its transcript, so you can see exactly what Sky said and adjust its profile whenever you want.",
        practice: "Spot a better answer? Update the profile and Sky uses it next call.",
      },
      {
        icon: createElement(LuDatabase),
        title: "Your call data stays yours",
        description:
          "Transcripts and lead details are saved to your records for your team to use. We don't sell or share your callers' information.",
        practice: "Your leads, your follow-ups, your data.",
      },
    ],
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
