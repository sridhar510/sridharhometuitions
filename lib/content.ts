export const services = [
  {
    slug: 'regular-school-support',
    title: 'Weekly Learning Companion',
    summary: 'A calm weekly rhythm for keeping up with lessons, homework, and the next small academic step.',
    detail:
      'A tutor follows the rhythm of school rather than creating a second syllabus. Each visit begins with the student’s current notebook or assignment, then turns confusion into a short, manageable practice plan for the week.',
    points: [
      'Curriculum-aligned weekly sessions',
      'Topics reinforced as taught in school',
      'Homework guidance and problem-solving',
    ],
  },
  {
    slug: 'concept-recovery',
    title: 'Untangle the Difficult Chapter',
    summary: 'Patient, topic-by-topic coaching when a chapter feels confusing or unfinished.',
    detail:
      'This is for the chapter that keeps interrupting everything after it. We isolate the missing idea, draw it out in plain language, practise it in small steps, and then return to the school exercise that first exposed the gap.',
    points: [
      'Identify and address concept gaps',
      'Reconnect the chapter to what the student already knows',
      'Apply concepts to current material',
    ],
  },
  {
    slug: 'examination-revision',
    title: 'Build a Better Exam Plan',
    summary: 'Targeted preparation for unit tests, board exams, and competitive entrance tests.',
    detail:
      'Revision is planned around the actual paper, not a vague promise to “cover everything.” Sessions sort topics by confidence, mix recall with written answers, and leave time to review the mistakes that cost marks.',
    points: [
      'Revision mapped to the student’s actual paper pattern',
      'Timed practice and mock tests',
      'Exam strategy and answer techniques',
    ],
  },
  {
    slug: 'foundation-building',
    title: 'Get Ready for the Next Level',
    summary: 'Build strong fundamentals when moving to a new academic level or course stream.',
    detail:
      'Transitions to higher classes or new streams often require stronger foundational skills. These sessions consolidate essential concepts and skills that the next level assumes students already know, making the academic jump feel manageable and building confidence.',
    points: [
      'Core subject fundamentals strengthened',
      'Bridge work for the next class or stream',
      'A steadier start when the syllabus changes',
    ],
  },
  {
    slug: 'homework-study-planning',
    title: 'Make Study Time Work Better',
    summary: 'Learn effective study techniques, organization methods, and time management strategies.',
    detail:
      'Some students know the lesson but lose time deciding where to begin. These sessions shape a usable desk routine: choosing the next task, keeping notes that can be revisited, breaking assignments into pieces, and finishing without last-minute panic.',
    points: [
      'Effective note-taking and organization',
      'Time management and study planning',
      'Independent learning techniques',
    ],
  },
  {
    slug: 'senior-academic-guidance',
    title: 'Go Deeper Into Senior Subjects',
    summary:
      'In-depth instruction for senior classes, intermediate streams, and degree-level coursework.',
    detail:
      'For advanced students tackling demanding syllabi and complex subjects. Sessions focus on analytical thinking, problem-solving approaches, rigorous methodology, and polished presentation skills needed for higher academic success.',
    points: [
      'Deep conceptual understanding',
      'Advanced problem-solving methods',
      'Professional answer presentation',
    ],
  },
] as const

export const academicLevels = [
  {
    title: 'Early Learners',
    note: 'Playful practice for language, number sense, attention, and the confidence to try independently.',
  },
  {
    title: 'Classes 1–5',
    note: 'Elementary fundamentals in mathematics, language arts, and general science.',
  },
  {
    title: 'Classes 6–8',
    note: 'Middle-school topics across mathematics, sciences, languages, and social studies.',
  },
  {
    title: 'Classes 9–10',
    note: 'Clearer concepts, regular written practice, and a steady plan for school assessments and boards.',
  },
  {
    title: 'Intermediate (11–12)',
    note: 'Stream-specific support for Science, Commerce, and Humanities with rigorous depth.',
  },
  {
    title: 'Undergraduate',
    note: 'Selective subject support for degree-level courses and semester assessments.',
  },
] as const

export const subjects = [
  'Mathematics',
  'Science',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Hindi',
  'Telugu',
  'Social Studies',
  'Computer Science',
  'Accounts',
  'Commerce',
  'Economics',
] as const

export const boards = [
  'CBSE',
  'ICSE',
  'Telangana State Board',
  'IB',
  'IGCSE',
] as const

export const classOptions = [
  'Pre-Primary',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Intermediate 1st Year',
  'Intermediate 2nd Year',
  'Degree',
] as const

export type ZoneCategory = 'Closest Areas' | 'Nearby Areas' | 'Extended Areas'

export const serviceZones: {
  name: string
  category: ZoneCategory
}[] = [
  { name: 'Renuka Colony', category: 'Closest Areas' },
  { name: 'Kamala Nagar', category: 'Closest Areas' },
  { name: 'Vaidehi Nagar', category: 'Closest Areas' },
  { name: 'Chintalakunta', category: 'Closest Areas' },
  { name: 'NGO Colony', category: 'Closest Areas' },
  { name: 'Sahebnagar Kalan', category: 'Closest Areas' },
  { name: 'Gautham Nagar', category: 'Closest Areas' },
  { name: 'Engineers Colony', category: 'Closest Areas' },
  { name: 'Hima Sai Enclave', category: 'Closest Areas' },
  { name: 'Hastinapuram', category: 'Closest Areas' },
  { name: 'Bairamalguda', category: 'Nearby Areas' },
  { name: 'LB Nagar', category: 'Nearby Areas' },
  { name: 'Mansoorabad', category: 'Nearby Areas' },
  { name: 'Saroornagar', category: 'Nearby Areas' },
  { name: 'Kothapet', category: 'Nearby Areas' },
  { name: 'Dilsukhnagar', category: 'Nearby Areas' },
  { name: 'Chaitanyapuri', category: 'Extended Areas' },
  { name: 'Karmanghat', category: 'Extended Areas' },
  { name: 'Meerpet', category: 'Extended Areas' },
  { name: 'Almasguda', category: 'Extended Areas' },
]

export const zoneDisclaimer =
  "Availability in each area depends on tutor assignments, subject demand, and scheduling. We confirm feasibility after reviewing your specific requirements."

export const faqs = [
  {
    q: 'Is my locality within your home-visit route?',
    a: 'We primarily serve the neighborhoods nearest to our Renuka Colony base at 8FQF+M8 Hyderabad, Telangana, including Kamala Nagar, Chintalakunta, NGO Colony, Bairamalguda, LB Nagar, Mansoorabad, Saroornagar, Kothapet, Dilsukhnagar, Chaitanyapuri, Karmanghat, Meerpet, and Almasguda. If you are just outside these areas, share your address and we will confirm availability before scheduling.',
  },
  {
    q: 'Which students and subjects can you help with?',
    a: 'We provide tutoring from early childhood through undergraduate level, across mathematics, sciences, languages, social studies, and other subjects. The teaching approach adapts to each age: younger students develop learning habits and foundational skills, while older students focus on advanced concepts and exam success.',
  },
  {
    q: 'Can my child take tuition in just one subject?',
    a: 'Absolutely. Many students start with a single subject—typically mathematics or science—where they need the most support. This single-subject arrangement is flexible and can be expanded later if additional subjects need attention.',
  },
  {
    q: 'How do you match tutors to students?',
    a: 'We first listen for the details that affect a real home visit: the student’s class, board, subjects, language, locality, preferred days, and the kind of help that has or has not worked before. We then check tutor subject fit, route and availability before introducing an option.',
  },
  {
    q: 'Can I request a specific tutor profile?',
    a: 'Yes, you can specify preferences like tutor gender, preferred teaching language, subject specialization, or other factors important to you. We incorporate these preferences while matching and will clearly communicate if any request cannot be met in your area.',
  },
  {
    q: 'How flexible are the tutoring schedules?',
    a: 'We plan around the household’s usable hours rather than offering a fixed batch slot. Evening, weekend and holiday options can be discussed, with the final schedule depending on the tutor’s route and the student’s subject requirement.',
  },
  {
    q: 'How can I check if tutors are available in my area?',
    a: 'Visit our Service Zones page and use the zone explorer to search your locality. You can immediately see availability and access the enquiry form for your area. Alternatively, contact us directly with your address and we\'ll provide an instant answer.',
  },
  {
    q: 'How do I get started with a tuition request?',
    a: 'Use the parent enquiry form to send the class, subjects, locality and preferred timing through WhatsApp, or call 6302267422 if you would rather explain the requirement directly. We review the details before suggesting the next step.',
  },
] as const

export const matchingSteps = [
  {
    step: '01',
    title: 'Start With the Real Situation',
    body: 'Tell us what the student is studying now, where home sessions would happen, and which part of the week feels difficult.',
  },
  {
    step: '02',
    title: 'We Check the Practical Fit',
    body: 'We compare subject experience, teaching style, travel route and available hours before recommending anyone.',
  },
  {
    step: '03',
    title: 'Meet a Suitable Option',
    body: 'You receive the relevant tutor details first, then decide whether an introductory conversation makes sense.',
  },
  {
    step: '04',
    title: 'Set a Rhythm That Holds',
    body: 'After both sides agree, sessions begin at the home address and timing confirmed together.',
  },
] as const

export const learningModel = [
  {
    stage: 'Notice',
    body: 'Begin with the student’s notebook, questions and recent work to see where the lesson is actually sticking.',
  },
  {
    stage: 'Unpack',
    body: 'Use a simpler route into the idea, with examples that belong to the student’s subject and current chapter.',
  },
  {
    stage: 'Try',
    body: 'Move from one guided example to independent attempts while the reasoning is still fresh.',
  },
  {
    stage: 'Review',
    body: 'Keep the useful mistakes visible long enough to understand the choice that caused them.',
  },
  {
    stage: 'Carry Forward',
    body: 'End with one clear next step the student can repeat before the following session.',
  },
] as const

export const preferredDays = [
  'Monday to Friday',
  'Weekends only',
  'Alternate days',
  'All days',
  'Flexible',
] as const

export const preferredTimes = [
  'Early morning (6 AM – 9 AM)',
  'Morning (9 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 7 PM)',
  'Night (7 PM – 9 PM)',
  'Flexible',
] as const
