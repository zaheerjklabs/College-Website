export interface CollegePhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Achievement' | 'Governance' | 'Innovation' | 'Hackathon';
  caption: string;
  description: string;
  eventOrPlace: string;
  prizeOrBadge?: string;
  cashPrize?: string;
  teamOrParticipants?: string[];
  imageUrl: string;
  tag: string;
}

export const COLLEGE_PHOTOS: CollegePhoto[] = [
  {
    id: 'photo-banner-circle',
    title: 'Student Innovation & Robotics Engineering Team',
    category: 'Innovation',
    tag: 'banner_circle.webp',
    caption: 'SIT engineering students proudly demonstrating their handmade robotic chassis prototype and embedded IoT module on campus.',
    description: 'Undergraduate student innovators across CSE, AI&ML, and ECE collaborating on autonomous hardware robotics, sensor integration, and real-time microcontroller programming.',
    eventOrPlace: 'SIT Innovation Hub & Central Campus Lawn',
    prizeOrBadge: 'SIT Innovation Hub Project',
    teamOrParticipants: ['CSE & ECE Project Innovators', 'Robotics Club'],
    imageUrl: '/images/student-robotics-innovation.jpg'
  },
  {
    id: 'photo-college-inside',
    title: 'Shanta Institute of Technology Campus & Courtyard',
    category: 'Campus',
    tag: 'College inside photo.webp',
    caption: 'Sprawling multi-storey collegiate building featuring open-air quadrangle stage and lush central green courtyard.',
    description: 'A 22-acre eco-friendly campus on Shahabad Highway, Kalaburagi, housing advanced computing centers, mechanical workshops, smart seminar halls, and student cultural stages.',
    eventOrPlace: 'Central Campus Quadrangle & Academic Block',
    prizeOrBadge: '22-Acre Green Campus',
    imageUrl: '/images/campus-building-lawn.jpg'
  },
  {
    id: 'photo-student-governance',
    title: 'Student Self Governance Council Executive Body',
    category: 'Governance',
    tag: 'student self governence.webp',
    caption: 'Elected student leadership council bearing ceremonial honor sashes (Student Principal, Director, Dean Academics, Toastmasters VP) in front of the college main building.',
    description: 'Student leaders including Student Principal, Student Director, Student Dean Academics, Vice President Toastmasters Club, and Club Presidents leading campus administration, technical fests, and student welfare.',
    eventOrPlace: 'SIT Leadership Forum & Council Lawn',
    prizeOrBadge: 'Student Council Body',
    teamOrParticipants: ['Pooja Patil (Student Principal)', 'Syeda Fatima (Student Director)', 'Radhika Kulkarni (Dean Academics)', 'Sneha Deshmukh (VP Toastmasters)', 'Zaheer Khan (President Coding Club)', 'Meenakshi Hiremath (President Green Energy Club)'],
    imageUrl: '/images/student-self-governance.jpg'
  },
  {
    id: 'photo-telecom-day',
    title: 'World Telecommunication & Information Society Day 2025',
    category: 'Achievement',
    tag: 'telecom-day.webp',
    caption: 'SIT Auditorium hosting Chief Guest Sri Anandkumar Rangrez (Deputy DG, Ministry of Communications, Hyderabad) and Principal Dr. Veena Soraganvi.',
    description: 'State-level symposium on "Gender Equality in Digital Transformation" jointly organized with the Institution of Engineers (India) Kalaburagi Local Centre and SIT IQAC.',
    eventOrPlace: 'Auditorium, Shanta Institute of Technology (SIT), Kalaburagi',
    prizeOrBadge: 'IEI & Ministry Keynote',
    teamOrParticipants: ['Sri Anandkumar Rangrez (ITS, Deputy DG)', 'Dr. Veena Soraganvi (Principal SIT)', 'Dr. Prashant Shahabadkar (Dean IQAC SIT)', 'Dr. Sridhar R. Pande', 'Prof. Seetharam Munnur'],
    imageUrl: '/images/world-telecommunication-day-2025.jpg'
  },
  {
    id: 'photo-comed-kares-ui',
    title: '1st Prize Winners in UI Design - COMED KARES',
    category: 'Achievement',
    tag: '1st prize in ui design at comed karees.webp',
    caption: 'Team Blue Beetles celebrating their 1st Place win and Rs. 10,000/- award in the TechX 2024 UI Design Competition.',
    description: 'Honored by COMED KARES Community Centric Education for designing an intuitive regional accessibility interface that assists rural users with multilingual healthcare teleconsultation.',
    eventOrPlace: 'TECHX 2024 - COMED KARES Center',
    prizeOrBadge: '1st Prize Winner',
    cashPrize: '₹10,000/- Cash Prize',
    teamOrParticipants: ['Team Blue Beetles', 'Abhishek Patil', 'Zaheer J.K.', 'Sanjana Rao', 'Faculty Mentor'],
    imageUrl: '/images/comed-kares-ui-design-winner.jpg'
  },
  {
    id: 'photo-rnd-discussion',
    title: 'SITK Research & Development Strategy with Dr. S. Hegde',
    category: 'Innovation',
    tag: 'rnd-discussion.webp',
    caption: 'SIT faculty researchers and R&D cell leadership in strategic consultation with Dr. S. Hegde on sponsored grants and patent publications.',
    description: 'Formulating student and faculty patent filing roadmaps, establishing interdisciplinary AI and VLSI hardware labs, and securing sponsored funding grants.',
    eventOrPlace: 'SIT Research & Development Cell, Kalaburagi',
    prizeOrBadge: 'R&D Cell Strategy',
    teamOrParticipants: ['Dr. S. Hegde', 'R&D Cell Convener', 'Department Faculty Researchers'],
    imageUrl: '/images/rnd-team-discussion-dr-hegde.jpg'
  },
  {
    id: 'photo-robo-soccer-runnerup',
    title: 'Robo Soccer Runner-Up - Science Expo EpicThon 2.0',
    category: 'Hackathon',
    tag: 'runner up in technova.webp',
    caption: 'Robotics team receiving the National Level Hackathon award cheque of Rs. 3,000/- from SGI leadership and trustees.',
    description: 'Developed an agile, Bluetooth low-latency omnidirectional football robot featuring high-torque motors and automated kicking mechanisms at EpicThon 2.0.',
    eventOrPlace: 'Science Expo 2025 - SGI National Hackathon',
    prizeOrBadge: 'Robo Soccer Runner-Up',
    cashPrize: '₹3,000/- Cash Prize',
    teamOrParticipants: ['Praveen Kumar', 'Mohd Zaid', 'Sneha Patil', 'Rohan Shinde'],
    imageUrl: '/images/student-robotics-innovation.jpg'
  },
  {
    id: 'photo-smart-classroom',
    title: 'Smart Classroom & Interactive Technical Seminar',
    category: 'Campus',
    tag: 'academic-classroom.webp',
    caption: 'Undergraduate engineering students and faculty engaged in a specialized technical seminar in the Kusnoor campus smart seminar hall.',
    description: 'Modern air-conditioned academic seminar hall equipped with high-definition projection, acoustic lecture capture, and ergonomic tiered seating on SH 51 Kusnoor campus.',
    eventOrPlace: 'Shanta Institute of Technology, Kusnoor Road, Kalaburagi',
    prizeOrBadge: 'Smart Seminar Hall',
    teamOrParticipants: ['SIT Engineering Students', 'Guest Speaker', 'Faculty Mentors'],
    imageUrl: '/images/classroom-seminar-session.jpg'
  },
  {
    id: 'photo-inex-expo',
    title: 'India International Innovation & Invention Expo (INEX)',
    category: 'Innovation',
    tag: 'about innovation center.webp',
    caption: 'SIT student innovation delegation alongside international keynote delegate at INEX Expo.',
    description: 'Showcasing patent-pending agricultural telemetry and IoT sensor hardware to international jury members, winning prestigious recognition for rural tech empowerment.',
    eventOrPlace: 'INEX India International Innovation Pavilion',
    prizeOrBadge: 'International INEX Medal',
    teamOrParticipants: ['Sagar M.', 'Pradeep K.', 'Dr. Mallikarjun S. Patil', 'International Delegate'],
    imageUrl: '/images/inex-expo-award.jpg'
  },
  {
    id: 'photo-engineers-day',
    title: 'Engineers Day & Academic Heritage Commemoration',
    category: 'Governance',
    tag: 'cultural-celebration.webp',
    caption: 'Faculty leadership and student engineers assembled for the ceremonial garlanding of Sir M. Visvesvaraya on Engineers Day.',
    description: 'Annual flagship campus ceremony honoring engineering pioneers, celebrating student technical milestones, and fostering institutional heritage.',
    eventOrPlace: 'SIT Main Academic Quadrangle',
    prizeOrBadge: 'Engineers Day Celebration',
    teamOrParticipants: ['Principal', 'Heads of Departments', 'Student Council Representatives'],
    imageUrl: '/images/engineers-day-celebration.jpg'
  },
  {
    id: 'photo-vividha-award',
    title: 'Vivibha 2024 Vision for Viksit Bharat National Award',
    category: 'Achievement',
    tag: 'student achivement.webp',
    caption: 'SIT student delegate holding golden trophy and certificate of excellence at the national symposium.',
    description: 'Recognized by Bharatiya Shikshan Mandal (Yuva Aayam) for pioneering grassroots youth literacy programs, scientific community outreach, and technical education excellence.',
    eventOrPlace: 'Vivibha 2024 National Youth Symposium',
    prizeOrBadge: 'National Trophy & Honors',
    teamOrParticipants: ['Student Delegation', 'Youth Innovation Representative'],
    imageUrl: '/images/comed-kares-ui-design-winner.jpg'
  },
  {
    id: 'photo-vtu-bootcamp',
    title: '2nd Rank in All-VTU Cybersecurity Bootcamp & CTF',
    category: 'Achievement',
    tag: '2nd rank in vtu bootamp.webp',
    caption: 'Award ceremony in Kalaburagi honoring SIT student with the State 2nd Rank certificate and floral honors.',
    description: 'Securing Rank 2 among 40+ engineering colleges in the 5-day intense penetration testing, network forensics, and Capture the Flag (CTF) security summit.',
    eventOrPlace: 'VTU Regional Centre, Kusnoor Rd, Kalaburagi',
    prizeOrBadge: 'All-VTU Rank 2',
    teamOrParticipants: ['Kiran Rathod', 'Pooja Biradar', 'Cybersecurity Mentor'],
    imageUrl: '/images/cybersecurity-bootcamp-rank.jpg'
  }
];
