export const services = [
  {
    slug: 'regular-school-support',
    title: 'Ongoing Academic Support',
    summary: 'Consistent weekly sessions aligned with your child\'s school curriculum and learning pace.',
    detail:
      'Weekly tutoring that moves alongside your child\'s classroom learning. The tutor reviews current lessons, strengthens weak areas in each topic, and ensures deep comprehension before moving forward. Perfect for students who benefit from structured reinforcement.',
    points: [
      'Curriculum-aligned weekly sessions',
      'Topics reinforced as taught in school',
      'Homework guidance and problem-solving',
    ],
  },
  {
    slug: 'concept-recovery',
    title: 'Focused Concept Mastery',
    summary: 'Dedicated sessions to rebuild understanding of specific topics that have been unclear.',
    detail:
      'When a foundational concept has been missed or misunderstood, it creates gaps that compound. These intensive sessions rebuild that specific area with clear explanations and worked examples, then reconnect it to current classwork so the student progresses without blind spots.',
    points: [
      'Identify and address concept gaps',
      'Build understanding from fundamentals',
      'Apply concepts to current material',
    ],
  },
  {
    slug: 'examination-revision',
    title: 'Exam Preparation & Revision',
    summary: 'Targeted preparation for unit tests, board exams, and competitive entrance tests.',
    detail:
      'Structured revision sessions that combine comprehensive topic coverage with timed practice tests. The tutor helps students understand exam patterns, practice under timed conditions, and develop effective answer-writing strategies for better performance.',
    points: [
      'Comprehensive syllabus revision',
      'Timed practice and mock tests',
      'Exam strategy and answer techniques',
    ],
  },
  {
    slug: 'foundation-building',
    title: 'Transition & Foundation Strengthening',
    summary: 'Build strong fundamentals when moving to a new academic level or course stream.',
    detail:
      'Transitions to higher classes or new streams often require stronger foundational skills. These sessions consolidate essential concepts and skills that the next level assumes students already know, making the academic jump feel manageable and building confidence.',
    points: [
      'Core subject fundamentals strengthened',
      'Essential skills for the next level',
      'Confidence building for new challenges',
    ],
  },
  {
    slug: 'homework-study-planning',
    title: 'Study Skills & Academic Organization',
    summary: 'Learn effective study techniques, organization methods, and time management strategies.',
    detail:
      'Academic success depends on both understanding content and managing learning effectively. These sessions teach note-taking techniques, study scheduling, assignment completion strategies, and independent learning skills that students can apply across all subjects.',
    points: [
      'Effective note-taking and organization',
      'Time management and study planning',
      'Independent learning techniques',
    ],
  },
  {
    slug: 'senior-academic-guidance',
    title: 'Advanced Subject Coaching',
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
    title: 'Early Years',
    note: 'Foundation skills—letter recognition, number basics, early literacy and focus development.',
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
    note: 'Board exam preparation with comprehensive coverage and exam-focused practice.',
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
  { name: 'Vanasthalipuram', category: 'Closest Areas' },
  { name: 'Kamala Nagar', category: 'Closest Areas' },
  { name: 'Vaidehi Nagar', category: 'Closest Areas' },
  { name: 'Chintalakunta', category: 'Closest Areas' },
  { name: 'NGO Colony', category: 'Closest Areas' },
  { name: 'Sahebnagar Kalan', category: 'Closest Areas' },
  { name: 'Gautham Nagar', category: 'Closest Areas' },
  { name: 'Engineers Colony', category: 'Closest Areas' },
  { name: 'Hima Sai Enclave', category: 'Closest Areas' },
  { name: 'Hastinapuram', category: 'Closest Areas' },
  { name: 'Hayathnagar', category: 'Nearby Areas' },
  { name: 'B.N. Reddy Nagar', category: 'Nearby Areas' },
  { name: 'LB Nagar', category: 'Nearby Areas' },
  { name: 'Bairamalguda', category: 'Nearby Areas' },
  { name: 'Mansoorabad', category: 'Nearby Areas' },
  { name: 'Saroornagar', category: 'Nearby Areas' },
  { name: 'Nagole', category: 'Nearby Areas' },
  { name: 'Kuntloor', category: 'Nearby Areas' },
  { name: 'Turkayamjal', category: 'Extended Areas' },
  { name: 'Nadergul', category: 'Extended Areas' },
  { name: 'Badangpet', category: 'Extended Areas' },
  { name: 'Champapet', category: 'Extended Areas' },
  { name: 'Kothapet', category: 'Extended Areas' },
  { name: 'Dilsukhnagar', category: 'Extended Areas' },
]

export const zoneDisclaimer =
  "Availability in each area depends on tutor assignments, subject demand, and scheduling. We confirm feasibility after reviewing your specific requirements."

export const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We primarily serve Vanasthalipuram and surrounding neighborhoods including Kamala Nagar, Chintalakunta, Hayathnagar, LB Nagar, Nagole, and other nearby localities in south Hyderabad. If you are unsure whether your area is covered, please share your address and we will confirm availability immediately.',
  },
  {
    q: 'What grade levels and subjects do you support?',
    a: 'We provide tutoring from early childhood through undergraduate level, across mathematics, sciences, languages, social studies, and other subjects. The teaching approach adapts to each age: younger students develop learning habits and foundational skills, while older students focus on advanced concepts and exam success.',
  },
  {
    q: 'Can my child take tuition in just one subject?',
    a: 'Absolutely. Many students start with a single subject—typically mathematics or science—where they need the most support. This single-subject arrangement is flexible and can be expanded later if additional subjects need attention.',
  },
  {
    q: 'How do you match tutors to students?',
    a: 'We begin with a detailed conversation about your child\'s grade, curriculum board, specific subjects, learning challenges, schedule preferences, and goals. This information helps us identify tutors whose expertise and teaching style align with your family\'s needs.',
  },
  {
    q: 'Can I request a specific tutor profile?',
    a: 'Yes, you can specify preferences like tutor gender, preferred teaching language, subject specialization, or other factors important to you. We incorporate these preferences while matching and will clearly communicate if any request cannot be met in your area.',
  },
  {
    q: 'How flexible are the tutoring schedules?',
    a: 'Schedules are customized around your family\'s routine. Whether you prefer evening sessions after school, weekend sessions, morning appointments during holidays, or adjusted frequency during exam periods, we work to accommodate your needs within tutor availability.',
  },
  {
    q: 'How can I check if tutors are available in my area?',
    a: 'Visit our Service Zones page and use the zone explorer to search your locality. You can immediately see availability and access the enquiry form for your area. Alternatively, contact us directly with your address and we\'ll provide an instant answer.',
  },
  {
    q: 'How do I get started with a tuition request?',
    a: 'Fill out the enquiry form on our Contact page, and it will generate a WhatsApp message to send us your details. You can also call us directly at 7416597027 to discuss your requirements over the phone. Either way, we respond quickly to get the process moving.',
  },
] as const

export const matchingSteps = [
  {
    step: '01',
    title: 'Tell Us Your Needs',
    body: 'Share your child\'s grade, subjects, location, schedule, and specific learning goals.',
  },
  {
    step: '02',
    title: 'We Assess the Fit',
    body: 'Our team evaluates the request and identifies tutors with matching expertise and availability.',
  },
  {
    step: '03',
    title: 'Review Tutor Options',
    body: 'We present qualified tutor profiles and discuss which one aligns best with your requirements.',
  },
  {
    step: '04',
    title: 'Begin Sessions',
    body: 'Once matched and confirmed, tutoring begins at your preferred time and location.',
  },
] as const

export const learningModel = [
  {
    stage: 'Assess',
    body: 'Evaluate current understanding and identify specific knowledge gaps before instruction.',
  },
  {
    stage: 'Teach',
    body: 'Explain concepts clearly with relevant examples and analogies suited to the learner.',
  },
  {
    stage: 'Apply',
    body: 'Work through problems and exercises until skills become automatic, not accidental.',
  },
  {
    stage: 'Correct',
    body: 'Review errors carefully and understand why mistakes happened and how to prevent them.',
  },
  {
    stage: 'Progress',
    body: 'Move forward with solid understanding, ready to tackle more advanced material.',
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
