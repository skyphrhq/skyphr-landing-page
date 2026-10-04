import { AI_VOICE_AGENT_FAQ_DATA } from "@/app/content/pageContent/faq.data";
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
    title: "AI Voice Agent for Business | AI Call Automation | Skyphr",
    description:
      "Deploy an AI voice agent that answers calls 24/7, qualifies leads, books appointments, captures caller details, and automates business calls with Skyphr.",
    openGraph: {
      title: "AI Voice Agent for Business | AI Call Automation | Skyphr",
      description:
        "Deploy an AI voice agent that answers calls 24/7, qualifies leads, books appointments, captures caller details, and automates business calls with Skyphr.",
      images: "/og-image/ai-voice-agent.png",
      type: "website",
    },
    twitter: {
      title: "AI Voice Agent for Business | AI Call Automation | Skyphr",
      description:
        "Deploy an AI voice agent that answers calls 24/7, qualifies leads, books appointments, captures caller details, and automates business calls with Skyphr.",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/ai-voice-agent.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/ai-voice-agent`,
    },
  },
  hero: {
    id: "sky-voice-agent",
    chip: "Sky is live in beta",
    header: {
      title: [
        [{ text: "Every" }, { text: "Call" }, { text: "Answered." }],
        [
          { text: "Even", variant: "italic" },
          { text: "When", variant: "italic" },
          { text: "You", variant: "italic" },
          { text: "Can't.", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Sky is the AI voice agent built by Skyphr to handle business phone calls 24/7. It answers callers in real time, understands what they need, answers approved questions, qualifies leads, books appointments, and saves every important call detail for your team.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free Demo Call",
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
          label: "Don't see your language? Book a call to see a live AI voice agent demo.",
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
        [{ text: "What" }, { text: "happens" }, { text: "in" }],
        [
          { text: "90", variant: "italic", classNames: "skyai-voice-headline-accent pr-[0.06em]" },
          { text: "seconds", variant: "italic", classNames: "skyai-voice-headline-accent pr-[0.06em]" },
        ],
      ],
      description: [
        [
          {
            text: "One real conversation can go from the first ring to a qualified lead, booked appointment, and complete call record.",
          },
        ],
      ],
    },
    steps: [
      {
        time: "0:00",
        title: "The Phone Rings",
        description:
          "Sky answers incoming calls immediately, whether the call comes during business hours, after hours, weekends, or when your team is already busy.",
      },
      {
        time: "0:03",
        title: "Greets Your Customer",
        description:
          "Sky answers using your business name, approved greeting, tone, services, and communication style.",
      },
      {
        time: "0:12",
        title: "Understands What They Need",
        description:
          "Sky listens to the caller and understands the reason for the call. It can ask relevant follow-up questions, collect important details, and identify whether the caller wants an appointment, quote, consultation, information, or human follow-up.",
      },
      {
        time: "1:10",
        title: "Books the Meeting",
        description:
          "When an appointment or meeting is required, Sky checks your connected calendar, provides available options, confirms the selected time with the caller, and books the appointment.",
      },
      {
        time: "1:30",
        title: "Saves the Lead",
        description:
          "After the call, the important information is available for your team, including the caller details, conversation transcript, enquiry information, and appointment details.",
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
      title: [
        [{ text: "Built" }, { text: "for" }, { text: "Businesses" }],
        [
          { text: "That", variant: "italic" },
          { text: "Can't", variant: "italic" },
          { text: "Miss", variant: "italic" },
          { text: "a Call", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "If your phone generates customers, every unanswered call can become a missed opportunity. Sky is configured around your business including your services, opening hours, approved answers, booking process, qualification questions, and escalation rules.",
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
        who: "Dentists, GP practices, physiotherapists, healthcare clinics",
        problem: "Reception teams are often busy helping patients in person while new calls continue to come in.",
        handles: [
          "Books, reschedules, and cancels appointments",
          "Answers approved questions about services and opening hours",
          "Provides location, parking, and basic business information",
          "Collects patient enquiry details",
          "Takes messages for staff when human assistance is required",
          "Escalates questions outside its approved scope",
        ],
        greeting:
          "Thank you for calling Bright Smile Dental. Are you booking a new appointment or changing an existing one?",
        books: "Books appointments",
      },
      {
        id: "law",
        icon: createElement(LuScale),
        name: "Law firms",
        who: "Solicitors, attorneys, legal practices",
        problem: "A new client calls once. If nobody answers, they call the next firm.",
        handles: [
          "Captures new client enquiries",
          "Collects the information your team needs for follow-up",
          "Explains approved information about your practice areas",
          "Answers general business and consultation questions",
          "Books initial consultations",
          "Escalates matters that require a qualified professional",
        ],
        greeting: "Good morning, Harper & Cole. Are you calling about a new matter?",
        books: "Captures enquiries and books consultations",
        important:
          "Sky does not provide legal advice. It helps capture the enquiry and connect the caller with the right person.",
      },
      {
        id: "trades",
        icon: createElement(LuWrench),
        name: "Home services",
        who: "Plumbers, electricians, HVAC companies, cleaners",
        problem: "You're on a job with your hands full when the next job calls.",
        handles: [
          "Collects job details and customer information",
          "Captures the service address",
          "Understands the type and urgency of the request",
          "Confirms your service area",
          "Provides approved call-out information",
          "Books site visits, estimates, or consultations",
        ],
        greeting: "Hi, you've reached Northside Plumbing. What problem are you having today?",
        books: "Books site visits and quote requests",
      },
      {
        id: "realty",
        icon: createElement(LuHouse),
        name: "Real estate",
        who: "Estate agents, realtors, property agencies, letting agents",
        problem: "Property enquiries can arrive while agents are attending clients, or outside normal working hours.",
        handles: [
          "Answers approved questions about properties",
          "Captures the property the caller is interested in",
          "Asks about budget, location, requirements, and timeline",
          "Qualifies potential buyers or tenants",
          "Books property viewings",
          "Captures lead information for agent follow-up",
        ],
        important: "Sky never gives property valuations. It books the caller in with an agent who can.",
        greeting: "Hello, Greenview Estates. Which property are you calling about?",
        books: "Qualifies property enquiries and books viewings",
      },
      {
        id: "salons",
        icon: createElement(LuScissors),
        name: "Salons and spas",
        who: "Hair salons, barbers, beauty clinics, wellness businesses",
        problem:
          "Staff cannot always stop an appointment or service to answer the phone. Calls can be missed when the team is already serving customers.",
        handles: [
          "Books and reschedules appointments",
          "Answers approved service questions",
          "Provides approved pricing information",
          "Checks availability",
          "Matches customers with the right service or team member",
          "Captures customer details for follow-up",
        ],
        greeting: "Hi, Glow Studio. What would you like to book in for?",
        books: "Books and reschedules appointments",
      },
      {
        id: "agencies",
        icon: createElement(LuBriefcase),
        name: "Agencies",
        who: "Digital agencies, consultancies, professional service firms",
        problem:
          "New business enquiries can arrive while your team is in meetings, working with clients, or operating across different time zones.",
        handles: [
          "Qualifies project enquiries",
          "Asks predefined discovery questions",
          "Captures project requirements",
          "Identifies budget, timeline, and service needs when configured",
          "Books discovery calls with your team",
          "Saves lead information and call notes for follow-up",
        ],
        greeting: "Hi, you've reached Skyphr. What are you looking to build?",
        books: "Qualifies leads and books discovery calls",
        note: "This is how Skyphr uses Sky on its own phone line.",
      },
    ],
    cta: {
      title: "Your industry isn't listed?",
      description:
        "If your business receives customer calls, Sky can be configured around your workflow, services, and customer journey.",
      button: { label: "Talk to Us About Your Calls", href: "/contact", variant: "CTA_PRIMARY" },
    },
  },
  afterCall: {
    id: "after-the-call",
    header: {
      title: [
        [{ text: "Every" }, { text: "call" }, { text: "ends" }, { text: "with" }],
        [
          { text: "something", variant: "italic", classNames: "skyai-voice-headline-accent px-2" },
          { text: "useful", variant: "italic", classNames: "skyai-voice-headline-accent px-2" },
        ],
      ],
      description: [
        [
          {
            text: "When Sky finishes a call, your team has the information required to continue the customer journey. No sticky notes. No trying to remember conversations. No unnecessary callbacks just to discover what the customer wanted.",
          },
        ],
      ],
    },
    cards: [
      {
        icon: createElement(LuFileText),
        title: "The Full Call Transcript",
        description:
          "Every conversation can be captured as a structured transcript so your team can quickly understand what was discussed.",
        points: [
          "Complete conversation record",
          "Both sides of the conversation",
          "Timestamped and easy to review",
          "Automatically saved after the call",
          "Useful for follow-up and internal review",
        ],
      },
      {
        icon: createElement(LuUserRound),
        title: "The Lead, Ready to Follow Up",
        description:
          "Sky captures important caller information so potential customers do not disappear into voicemail.",
        points: [
          "Caller name and phone number",
          "Email when provided or required",
          "Reason for calling",
          "Requested service",
          "Lead requirements and relevant details",
          "Appointment or consultation information",
        ],
      },
      {
        icon: createElement(LuCalendarCheck),
        title: "The Booking on Your Calendar",
        description:
          "When a caller wants to schedule a meeting, Sky can connect with your scheduling system and book an available time after confirming it with the caller.",
        points: [
          "Booking happens only after caller confirmation",
          "Appointment details are captured",
          "Calendar availability is checked before booking",
          "Confirmation can be sent to the caller",
          "Helps reduce scheduling friction and double bookings",
        ],
      },
    ],
    integrations: {
      title: "Built on tools you can rely on",
      description:
        "Sky is built by Skyphr using proven technologies for voice communication, scheduling, and real-time AI conversations.",
      items: [
        {
          icon: createElement(LuCalendarDays),
          name: "Cal.com",
          role: "Scheduling",
          description:
            "Sky can check real calendar availability and schedule meetings through Cal.com, helping turn phone conversations into confirmed appointments.",
        },
        {
          icon: createElement(LuPhoneCall),
          name: "Twilio",
          role: "Phone Infrastructure",
          description:
            "Calls can be routed through a dedicated business phone number using Twilio's communication infrastructure.",
        },
        {
          icon: createElement(LuSparkles),
          name: "Gemini",
          role: "AI Conversation",
          description:
            "Gemini powers the conversational intelligence that helps Sky understand callers and respond naturally in real time.",
        },
        {
          icon: createElement(LuPlug),
          name: "Your Business Tools",
          description:
            "Already using another calendar, CRM, helpdesk, or business system? Tell us what your team uses and we can evaluate the right integration approach for your AI voice agent.",
          isOpenEnded: true,
        },
      ],
    },
  },
  trust: {
    id: "trust-and-control",
    header: {
      title: [
        [{ text: "A" }, { text: "Voice" }, { text: "Agent" }, { text: "You" }, { text: "Stay" }],
        // Extra right padding: the italic "f" overhangs the gradient text box
        [
          { text: "in", variant: "italic", classNames: "skyai-voice-headline-accent pr-2" },
          { text: "Control", variant: "italic", classNames: "skyai-voice-headline-accent pr-2" },
          { text: "Of", variant: "italic", classNames: "skyai-voice-headline-accent pr-4" },
        ],
      ],
      description: [
        [
          {
            text: "Sky talks to your customers on behalf of your business, so its conversations need to follow your rules. Your business controls what Sky knows, what it can say, what it can do, and when it should hand a conversation to your team.",
          },
        ],
      ],
    },
    practiceLabel: "In practice",
    principles: [
      {
        icon: createElement(LuBookOpenCheck),
        title: "Answers From Your Approved Business Information",
        description:
          "Sky works from the business information, services, hours, policies, FAQs, and responses you provide. This helps keep conversations aligned with your business instead of allowing the AI voice agent to invent unsupported information.",
        practice:
          "“If a customer asks about a service your business does not offer, Sky can clearly explain that the service is unavailable rather than making up an answer.”",
      },
      {
        icon: createElement(LuMessageSquareWarning),
        title: "Says When It Doesn't Know",
        description:
          "When a question falls outside Sky's approved information or capabilities, it can acknowledge the limitation and capture a message for your team.",
        practice: "“I'll pass that to the team and they'll get back to you today.”",
      },
      {
        icon: createElement(LuCalendarCheck),
        title: "Confirms Before It Books",
        description:
          "Sky confirms the appointment details with the caller before creating the booking. This confirmation step helps prevent accidental bookings and unnecessary calendar changes.",
        practice: "“Thursday at 4:30 PM for 30 minutes. Shall I book that for you?”",
      },
      {
        icon: createElement(LuShieldCheck),
        title: "Stays Within the Scope You Set",
        description:
          "You decide what Sky can discuss and what actions it can perform. Sky can be configured to avoid providing professional advice such as legal, medical, or financial advice and instead escalate those requests to the appropriate person.",
        practice:
          "“When a customer asks a question outside the approved scope, Sky can provide the approved response or request a human follow-up.”",
      },
      {
        icon: createElement(LuListChecks),
        title: "Every Call Is On Record",
        description:
          "Call transcripts and lead information provide visibility into customer conversations and help your team review how the AI voice agent is performing.",
        practice:
          "“If you identify a better answer or update your business information, Sky's configuration can be updated so future conversations follow the revised information.”",
      },
      {
        icon: createElement(LuDatabase),
        title: "Your Call Data Stays Yours",
        description:
          "Your customer conversations and lead information are valuable business data. Skyphr is designed so your call records and lead information can be used by your team for follow-up, operations, and customer management.",
        practice: "Your leads, your conversations, and your follow-up process remain part of your business workflow.",
      },
    ],
  },
  contactUs: {
    header: {
      title: [
        [{ text: "Let’s " }, { text: "Talk ", variant: "italic" }, { text: "About" }],
        [
          { text: "Your" },
          { text: "AI", variant: "italic", classNames: "font-semibold" },
          { text: "Voice", variant: "italic", classNames: "font-semibold" },
          { text: "Agent", variant: "italic", classNames: "font-semibold" },
        ],
      ],

      description: [
        [
          {
            text: "Have questions about AI call automation or want to see how an AI voice agent could work for your business? Share your requirements and the Skyphr team will get back to you within 24 hours.",
          },
        ],
      ],
    },
  },
  faq: {
    header: {
      title: [
        [{ text: "Got" }, { text: "Questions?", variant: "italic" }],
        [{ text: "We've Got " }, { text: "Answers", variant: "italic" }],
      ],
      description: [
        [
          { text: "Everything you need to know before starting your project with " },
          { text: "Skyphr", variant: "brand", classNames: "font-bold" },
        ],
      ],
    },
    faqsItems: AI_VOICE_AGENT_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Automate" }, { text: "Your", variant: "italic" }],
        [{ text: "Business" }, { text: "Calls" }, { text: "With" }, { text: "AI", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute consultation to discuss your business calls, customer workflow, lead capture requirements, appointment booking process, and how Sky's AI voice agent can support your team.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free Call",
        href: SKY_AI_CONSULTATION_URL,
        variant: "CTA_SECONDARY",
        external: true,
        target: "_blank",
        rel: "noopener noreferrer",
        classNames: "min-w-55",
      },
    ],
  },
};
