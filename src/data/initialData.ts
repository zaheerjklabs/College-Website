import { Department, FacultyMember, CourseMaterial, Announcement, CollegeEvent, AchievementItem, StudentProfile, Facility } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortCode: 'CSE',
    description: 'Empowering future software architects, full-stack engineers, and cloud innovators through cutting-edge computing laboratories and industry-focused curriculum.',
    intake: 120,
    established: 2011,
    hodName: 'Dr. Mallikarjun S. Patil',
    hodQualification: 'Ph.D. (CSE), M.Tech (VTU), B.E.',
    hodMessage: 'Welcome to the Department of Computer Science & Engineering at SIT. Our pedagogy blends theoretical rigor with real-world project development, competitive hackathons, and certifications to equip students for global tech leadership.',
    vision: 'To be a premier center of excellence in computer engineering education, fostering innovation, ethical values, and research to solve global societal challenges.',
    mission: [
      'Provide state-of-the-art computational infrastructure and dynamic learning environments.',
      'Promote industry-academia synergy through internships, hackathons, and live capstone projects.',
      'Inculcate analytical thinking, leadership, and lifelong learning attitudes in students.'
    ],
    labs: [
      { name: 'Advanced Algorithms & Data Structures Lab', description: 'Equipped with high-performance Dell OptiPlex workstations running Linux and modern IDEs.', equipment: '60 i7 Workstations, Dual OS, Gigabit LAN' },
      { name: 'Cloud Computing & Distributed Systems Lab', description: 'Dedicated virtualization sandbox with AWS Academy and Google Cloud SDKs.', equipment: 'Server racks, Docker/K8s clusters, 100 Mbps fiber' },
      { name: 'Full-Stack Web & Mobile Dev Studio', description: 'Modern development environment for React, Node.js, Flutter, and UI/UX design tools.', equipment: 'High-res dual monitors, Figma, React toolchains' },
      { name: 'Database Management Systems Lab', description: 'Oracle, PostgreSQL, and MongoDB database query execution and normalization lab.', equipment: 'PostgreSQL, MySQL Workbench, Oracle 19c' }
    ],
    keyHighlights: [
      '100% placement assistance with top MNCs like Capgemini, Wipro, Alten CalsoftLabs, and InfoVision.',
      'Active IEEE and CSI Student Chapters hosting national hackathons like TechX and EpicThon.',
      'Mentorship by alumni working across Tier-1 tech firms in Bengaluru, Hyderabad, and abroad.'
    ],
    semesters: 8
  },
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    shortCode: 'AI & ML',
    description: 'Pioneering next-generation intelligence, deep learning architectures, computer vision, natural language processing, and autonomous robotics.',
    intake: 60,
    established: 2020,
    hodName: 'Dr. Sujata K. Biradar',
    hodQualification: 'Ph.D. (AI & Neural Networks), M.Tech, B.E.',
    hodMessage: 'AI is reshaping every sector of our world. At SITKalaburagi, we nurture innovators who build robust machine learning models, neural networks, and ethical AI solutions with hands-on GPU labs.',
    vision: 'To produce visionary AI engineers and data scientists capable of engineering intelligent systems that revolutionize industries and uplift society.',
    mission: [
      'Impart advanced theoretical and applied foundations of machine learning and deep learning.',
      'Facilitate interdisciplinary research in computer vision, generative AI, and predictive analytics.',
      'Collaborate with industry pioneers to deliver project-driven experiential learning.'
    ],
    labs: [
      { name: 'GPU Accelerated Deep Learning Lab', description: 'NVIDIA RTX-powered high-compute cluster for training PyTorch and TensorFlow models.', equipment: 'NVIDIA RTX 4090 Workstations, CUDA toolkits' },
      { name: 'Computer Vision & Robotics Lab', description: 'Equipped with OpenCV kits, LiDAR sensors, stereo cameras, and ROS robotics kits.', equipment: 'Raspberry Pi 5, Intel RealSense Cameras, ROS2' },
      { name: 'NLP & GenAI Research Studio', description: 'Development sandbox for LLM fine-tuning, retrieval-augmented generation, and tokenizers.', equipment: 'Hugging Face Transformers, Ollama instances' }
    ],
    keyHighlights: [
      'Winner of 1st Prize in UI/UX Design & AI Hackathon at COMED KARES.',
      'Joint certification tracks with Google Cloud, IBM Cognitive Class, and NPTEL.',
      'Live industrial projects in healthcare diagnostics, smart agriculture, and drone surveillance.'
    ],
    semesters: 8
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortCode: 'ECE',
    description: 'Transforming communication networks, VLSI chip design, embedded IoT architectures, and signal processing technologies.',
    intake: 60,
    established: 2011,
    hodName: 'Prof. Rajeshwari Patil',
    hodQualification: 'M.Tech (VLSI & Embedded Systems), (Ph.D.)',
    hodMessage: 'ECE at SIT stands at the intersection of hardware precision and software agility. We train students from microchip layout to 5G communications and automated IoT sensor networks.',
    vision: 'To emerge as a benchmark institution in Electronics and Communication Engineering by blending academic depth with cutting-edge electronics design.',
    mission: [
      'Provide hands-on exposure to VLSI EDA tools, DSP processors, and IoT hardware.',
      'Foster a culture of patenting, research publications, and hardware prototyping.',
      'Bridge the gap between academia and semiconductor industries.'
    ],
    labs: [
      { name: 'VLSI Design & Cadence EDA Lab', description: 'Licensed Cadence, Xilinx Vivado, and ModelSim suites for ASIC/FPGA digital design.', equipment: 'FPGA Spartan-7 Boards, Cadence Suite, Vivado' },
      { name: 'IoT, Microcontrollers & Embedded Systems Lab', description: 'ARM Cortex, STM32, Arduino, ESP32 development boards with sensor arrays.', equipment: 'STM32 Nucleo, ESP32, Logic Analyzers, Oscilloscopes' },
      { name: 'Analog & Digital Communication Lab', description: 'Spectrum analyzers, digital storage oscilloscopes, and SDR transceivers.', equipment: '100MHz DSOs, RF Signal Generators, MATLAB DSP' }
    ],
    keyHighlights: [
      'Runner-Up in National Robo Soccer (EpicThon 2.0) with custom embedded hardware.',
      'MoU with semiconductor training institutes and regional aerospace hubs.',
      'Hands-on VLSI tape-out simulations and IoT product incubations.'
    ],
    semesters: 8
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    shortCode: 'EEE',
    description: 'Powering sustainable smart grids, electric vehicle drivetrains, power electronics, and industrial automation.',
    intake: 60,
    established: 2011,
    hodName: 'Dr. Anand Kumar',
    hodQualification: 'Ph.D. (Power Systems), M.Tech, B.E.',
    hodMessage: 'The clean energy transition needs visionary electrical engineers. We focus on green microgrids, EV battery management systems, and smart automation.',
    vision: 'To cultivate competent electrical engineers dedicated to technological innovation and green energy development.',
    mission: [
      'Deliver strong foundational and applied education in electrical machinery and power systems.',
      'Drive research in renewable energy integration and EV motor control.',
      'Instill safety standards and sustainable engineering ethics.'
    ],
    labs: [
      { name: 'Electrical Machines & Drives Lab', description: 'DC/AC motors, alternators, transformers, and dynamometer test rigs.', equipment: 'Coupled Motor-Generator sets, 3-Phase Transformers' },
      { name: 'Power Electronics & EV Simulator Lab', description: 'Inverters, converters, SCR circuits, and MATLAB/Simulink EV drivetrain models.', equipment: 'Digital Power Analyzers, MATLAB Power Sim' },
      { name: 'Relay & High Voltage Protection Lab', description: 'Microprocessor-based protective relays, circuit breakers, and fault simulation panels.', equipment: 'Overcurrent/Distance Relay test benches' }
    ],
    keyHighlights: [
      'Solar power plant on campus managed and analyzed by EEE students.',
      'EV prototyping club designing electric karts and battery charging stations.',
      'Industrial visits to KPTCL substations, hydro power stations, and thermal plants.'
    ],
    semesters: 8
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortCode: 'CIVIL',
    description: 'Building resilient modern infrastructure, smart green cities, earthquake-resistant structural design, and environmental sustainability.',
    intake: 60,
    established: 2011,
    hodName: 'Prof. Basavaraj Kulkarni',
    hodQualification: 'M.Tech (Structural Engg), (Ph.D.)',
    hodMessage: 'Civil Engineering is the backbone of civilization. Our students gain rigorous field survey experience, modern CAD/BIM proficiency, and concrete technology testing.',
    vision: 'To be a center of excellence in civil engineering education by nurturing innovative builders of sustainable and smart infrastructure.',
    mission: [
      'Provide comprehensive laboratory testing and modern surveying equipment.',
      'Promote sustainable building materials and green construction technologies.',
      'Engage with municipal and highway projects for practical experiential learning.'
    ],
    labs: [
      { name: 'Material Testing & Strength of Materials Lab', description: 'Universal Testing Machine (UTM), compression testing machine, hardness testers.', equipment: '100T Computerized UTM, Torsion tester' },
      { name: 'Advanced Surveying & Total Station Lab', description: 'Modern Total Stations, Digital Theodolites, Auto Levels, and GPS receivers.', equipment: 'Leica Total Stations, GIS software' },
      { name: 'CAD & Structural Design Studio', description: 'AutoCAD, STAAD.Pro, ETABS, and Revit architectural software.', equipment: '40 CAD Workstations, Licensed STAAD.Pro' }
    ],
    keyHighlights: [
      'Field survey camps conducted in picturesque heritage regions of Karnataka.',
      'Consultancy services for soil testing and structural stability certificates.',
      'High placement in infrastructure giants, government PWD, and real estate developers.'
    ],
    semesters: 8
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    shortCode: 'MECH',
    description: 'Advancing CAD/CAM manufacturing, robotics automation, thermal sciences, CFD analysis, and additive 3D manufacturing.',
    intake: 60,
    established: 2011,
    hodName: 'Dr. Sharanabasappa H.',
    hodQualification: 'Ph.D. (Thermal Engineering), M.Tech, B.E.',
    hodMessage: 'From aerospace components to automated assembly lines, Mechanical Engineering drives the physical world. SIT offers hands-on CNC, 3D printing, and foundry facilities.',
    vision: 'To develop world-class mechanical engineers adept in modern manufacturing, thermal dynamics, and robotics.',
    mission: [
      'Provide hands-on machine shop, CNC programming, and 3D prototyping experiences.',
      'Foster innovations in electric vehicle chassis and aerodynamic designs.',
      'Encourage entrepreneurship in smart manufacturing and fabrication.'
    ],
    labs: [
      { name: 'CNC & Additive 3D Prototyping Lab', description: 'CNC Lathe, CNC Milling, and multi-material 3D printers for rapid prototyping.', equipment: 'Production-grade CNC Lathe, FDM 3D Printers' },
      { name: 'Thermal Engineering & IC Engines Lab', description: 'Computerized multi-cylinder petrol and diesel engine test rigs with data acquisition.', equipment: 'Variable Compression Engine Rigs, Gas Analyzers' },
      { name: 'CAD/CAM Simulation Lab', description: 'SolidWorks, ANSYS Mechanical, and CATIA modeling and finite element analysis.', equipment: 'ANSYS Fluent, SolidWorks 2024 Suites' }
    ],
    keyHighlights: [
      'Active SAE India Collegiate Club building All-Terrain Vehicles (ATVs).',
      'Innovation center for patent incubation and rapid fabrication.',
      'Placements in automotive, manufacturing, and defense ancillary sectors.'
    ],
    semesters: 8
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Mallikarjun S. Patil',
    departmentId: 'cse',
    designation: 'HOD & Professor',
    qualification: 'Ph.D. (CSE), M.Tech (VTU), B.E.',
    specialization: 'Cloud Computing, Distributed Systems, Network Security',
    experienceYears: 18,
    email: 'hod.cse@sitgulbarga.org',
    phone: '+91 98450 12345',
    subjectsTaught: ['Cloud Computing', 'Computer Networks', 'Operating Systems', 'Cybersecurity'],
    publicationsCount: 28,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: 'Dr. Mallikarjun has published over 28 research articles in indexed IEEE and Scopus journals. He has guided 5 Ph.D. scholars and leads the institute incubation initiatives.'
  },
  {
    id: 'fac-2',
    name: 'Dr. Sujata K. Biradar',
    departmentId: 'aiml',
    designation: 'HOD & Professor',
    qualification: 'Ph.D. (AI & Neural Networks), M.Tech, B.E.',
    specialization: 'Deep Learning, Computer Vision, Generative AI, Medical Imaging',
    experienceYears: 15,
    email: 'hod.aiml@sitgulbarga.org',
    phone: '+91 94480 67890',
    subjectsTaught: ['Deep Learning', 'Machine Learning Foundations', 'Artificial Neural Networks', 'Computer Vision'],
    publicationsCount: 22,
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Pioneer in machine learning applications for healthcare diagnostics. Mentored the winning student team in COMED KARES UI & AI Innovation Challenge.'
  },
  {
    id: 'fac-3',
    name: 'Prof. Rajeshwari Patil',
    departmentId: 'ece',
    designation: 'HOD & Professor',
    qualification: 'M.Tech (VLSI), (Ph.D.)',
    specialization: 'VLSI Design, Embedded Systems, IoT Architectures',
    experienceYears: 14,
    email: 'hod.ece@sitgulbarga.org',
    phone: '+91 98800 23456',
    subjectsTaught: ['Digital VLSI Design', 'Embedded Systems', 'Microcontrollers & ARM', 'Wireless Sensor Networks'],
    publicationsCount: 16,
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Specialist in cadence EDA suites and embedded controller design. Key mentor for the Technova Robo Soccer student finalists.'
  },
  {
    id: 'fac-4',
    name: 'Prof. Ramesh K. Rathod',
    departmentId: 'cse',
    designation: 'Associate Professor',
    qualification: 'M.Tech (CSE), (Ph.D.)',
    specialization: 'Full-Stack Web Architectures, Database Engines, Big Data',
    experienceYears: 11,
    email: 'ramesh.cse@sitgulbarga.org',
    subjectsTaught: ['Full Stack Development', 'Database Management Systems', 'Data Structures in C++', 'Web Technologies'],
    publicationsCount: 12,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Passionate coding mentor who conducts weekly competitive programming bootcamps and leads open-source developer circles.'
  },
  {
    id: 'fac-5',
    name: 'Prof. Neha Deshmukh',
    departmentId: 'aiml',
    designation: 'Assistant Professor',
    qualification: 'M.Tech (AI & Data Science), B.E.',
    specialization: 'Natural Language Processing, LLM Engineering, Data Visualization',
    experienceYears: 7,
    email: 'neha.aiml@sitgulbarga.org',
    subjectsTaught: ['Natural Language Processing', 'Python for Data Science', 'Applied Statistics', 'Reinforcement Learning'],
    publicationsCount: 8,
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    bio: 'Expert in HuggingFace frameworks and LangChain orchestrations. Coordinates student technical hackathons across Karnataka.'
  },
  {
    id: 'fac-6',
    name: 'Dr. Anand Kumar',
    departmentId: 'eee',
    designation: 'HOD & Professor',
    qualification: 'Ph.D. (Power Systems), M.Tech, B.E.',
    specialization: 'Smart Grids, EV Powertrains, Renewable Energy Storage',
    experienceYears: 16,
    email: 'hod.eee@sitgulbarga.org',
    subjectsTaught: ['Power System Analysis', 'Electric Vehicles Technology', 'Power Electronics', 'High Voltage Engineering'],
    publicationsCount: 19,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Consultant for smart grid micro-installations. Has authored 2 books on modern power system stability and renewable conversion.'
  },
  {
    id: 'fac-7',
    name: 'Prof. Basavaraj Kulkarni',
    departmentId: 'civil',
    designation: 'HOD & Professor',
    qualification: 'M.Tech (Structural Engg), (Ph.D.)',
    specialization: 'Earthquake Engineering, Structural Dynamics, Smart Concrete',
    experienceYears: 17,
    email: 'hod.civil@sitgulbarga.org',
    subjectsTaught: ['Design of Steel Structures', 'Earthquake Resistant Design', 'Strength of Materials', 'Surveying with GIS'],
    publicationsCount: 15,
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: 'Chartered structural engineer and consultant on major infrastructure works in Kalaburagi division. Directs student surveying camps.'
  },
  {
    id: 'fac-8',
    name: 'Dr. Sharanabasappa H.',
    departmentId: 'mech',
    designation: 'HOD & Professor',
    qualification: 'Ph.D. (Thermal Engineering), M.Tech, B.E.',
    specialization: 'CFD, Heat Transfer, Additive Prototyping, Robotics',
    experienceYears: 19,
    email: 'hod.mech@sitgulbarga.org',
    subjectsTaught: ['Thermodynamics', 'Fluid Mechanics & Turbomachinery', 'CNC & CAD/CAM', 'Robotics & Automation'],
    publicationsCount: 25,
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    bio: 'Recipient of Best Engineering Faculty Award. Chief coordinator for student formula racing and robotic combat fabrication.'
  }
];

export const INITIAL_COURSE_MATERIALS: CourseMaterial[] = [
  {
    id: 'mat-1',
    title: 'Cloud Computing Architecture & Virtualization Notes (Module 1-5)',
    subjectCode: '21CS71',
    subjectName: 'Cloud Computing',
    departmentId: 'cse',
    semester: 7,
    category: 'Lecture Notes',
    facultyName: 'Dr. Mallikarjun S. Patil',
    uploadedAt: '2026-08-10',
    fileSize: '4.8 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'Comprehensive VTU 2021 scheme lecture notes covering NIST cloud model, hypervisors, Docker containerization, and AWS microservices.'
  },
  {
    id: 'mat-2',
    title: 'Deep Learning & Neural Networks Lab Manual with Python Code',
    subjectCode: '21AI62',
    subjectName: 'Deep Learning Laboratory',
    departmentId: 'aiml',
    semester: 6,
    category: 'Lab Manual',
    facultyName: 'Dr. Sujata K. Biradar',
    uploadedAt: '2026-08-14',
    fileSize: '3.2 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'Step-by-step PyTorch & Keras implementations of CNN, RNN, LSTM and YOLO object detection models with sample datasets.'
  },
  {
    id: 'mat-3',
    title: 'Design and Analysis of Algorithms - Solved Question Bank (2020-2025)',
    subjectCode: '21CS42',
    subjectName: 'Design & Analysis of Algorithms',
    departmentId: 'cse',
    semester: 4,
    category: 'Question Bank',
    facultyName: 'Prof. Ramesh K. Rathod',
    uploadedAt: '2026-08-05',
    fileSize: '2.1 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'Complete VTU previous years solved question papers covering Dynamic Programming, Greedy Algorithms, Graph Traversals, and NP-Completeness.'
  },
  {
    id: 'mat-4',
    title: 'VLSI Design Flow & Verilog HDL Lecture Presentation Slides',
    subjectCode: '21EC52',
    subjectName: 'VLSI Design',
    departmentId: 'ece',
    semester: 5,
    category: 'Reference PPT',
    facultyName: 'Prof. Rajeshwari Patil',
    uploadedAt: '2026-08-12',
    fileSize: '8.4 MB',
    fileType: 'PPT',
    downloadUrl: '#',
    description: 'Interactive slide deck covering CMOS layout rules, stick diagrams, propagation delays, and Cadence ASIC design steps.'
  },
  {
    id: 'mat-5',
    title: 'Natural Language Processing with Transformers & LLMs Master Notes',
    subjectCode: '21AI73',
    subjectName: 'Natural Language Processing',
    departmentId: 'aiml',
    semester: 7,
    category: 'Lecture Notes',
    facultyName: 'Prof. Neha Deshmukh',
    uploadedAt: '2026-08-15',
    fileSize: '5.6 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'Complete modules on word embeddings, Attention mechanisms, Transformer architecture, BERT, GPT, and RAG pipelines.'
  },
  {
    id: 'mat-6',
    title: 'Electric Vehicles & Battery Management Systems Course Pack',
    subjectCode: '21EE63',
    subjectName: 'Electric Vehicle Technology',
    departmentId: 'eee',
    semester: 6,
    category: 'Lecture Notes',
    facultyName: 'Dr. Anand Kumar',
    uploadedAt: '2026-08-08',
    fileSize: '3.9 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'VTU prescribed textbook summary, EV motor sizing, regenerative braking mathematics, and BMS state-of-charge algorithms.'
  },
  {
    id: 'mat-7',
    title: 'STAAD.Pro & Structural Analysis Laboratory Practical Manual',
    subjectCode: '21CV54',
    subjectName: 'Structural Design Lab',
    departmentId: 'civil',
    semester: 5,
    category: 'Lab Manual',
    facultyName: 'Prof. Basavaraj Kulkarni',
    uploadedAt: '2026-08-01',
    fileSize: '6.1 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'Design steps for multi-storey RCC frames, steel trusses, cantilever retaining walls, and soil bearing tests.'
  },
  {
    id: 'mat-8',
    title: 'CAD/CAM SolidWorks & CNC Machining G-Code Handbook',
    subjectCode: '21ME53',
    subjectName: 'Computer Aided Manufacturing',
    departmentId: 'mech',
    semester: 5,
    category: 'Lab Manual',
    facultyName: 'Dr. Sharanabasappa H.',
    uploadedAt: '2026-08-11',
    fileSize: '4.2 MB',
    fileType: 'PDF',
    downloadUrl: '#',
    description: 'Practical guide to G-code/M-code programming for 3-axis CNC milling, lathe turning cycles, and 3D slicer settings.'
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'VTU Semester End Theory Examinations - August/September 2026 Timetable Released',
    category: 'VTU Notification',
    date: '17th August 2026',
    departmentId: 'all',
    isImportant: true,
    author: 'Office of Dean Academics',
    content: 'Visvesvaraya Technological University (VTU), Belagavi has released the revised timetable for B.E. Even Semester (2nd, 4th, 6th, 8th) Regular & Arrear examinations. Hall tickets can be downloaded from the student portal starting August 20th.',
    attachmentName: 'VTU_Timetable_Aug_2026.pdf'
  },
  {
    id: 'ann-2',
    title: 'Invision Tech-Talk & Project Competition 2026 @Auditorium',
    category: 'Hackathon & Workshop',
    date: '18th August 2026',
    departmentId: 'all',
    isImportant: true,
    author: 'SGI Innovation Cell & EDC',
    content: 'All students and faculty are invited to the Invision Tech-Talk & Project Exhibition Competition taking place in the Central Auditorium from 2:00 PM to 4:30 PM. Cash prizes and direct internship offers by industry jury.',
    attachmentName: 'Invision_Schedule_Guidelines.pdf'
  },
  {
    id: 'ann-3',
    title: 'Campus Placement Drive by Capgemini & Alten CalsoftLabs for 2027 Batch',
    category: 'Placement',
    date: '15th August 2026',
    departmentId: 'cse',
    isImportant: true,
    author: 'Career Design Center (CDC)',
    content: 'Eligible students of CSE, AI&ML, and ECE with 6.5+ CGPA and no active backlogs must register on the CDC portal before August 22nd. Online assessment will be conducted in the Central Computer Center on August 25th.',
    attachmentName: 'Placement_Drive_Eligibility_Criteria.pdf'
  },
  {
    id: 'ann-4',
    title: 'Admissions Open 2026-2027: KCET Code E227 & Direct Management Quota',
    category: 'Circular',
    date: '12th August 2026',
    departmentId: 'all',
    isImportant: false,
    author: 'Admissions Directorate',
    content: 'Admissions are open for B.E. programs in CSE, AI & ML, ECE, EEE, Civil, and Mechanical Engineering. KCET counseling code is E227. Scholarships available for meritorious students scoring >85% in PUC/12th.',
    attachmentName: 'SIT_Admission_Prospectus_2026.pdf'
  },
  {
    id: 'ann-5',
    title: 'Internal Assessment Test - 2 (IA-2) Schedule for 3rd & 5th Semester Students',
    category: 'Exam',
    date: '10th August 2026',
    departmentId: 'all',
    isImportant: false,
    author: 'Controller of Examinations',
    content: 'IA-2 for all engineering departments will commence from August 28th to August 30th. Attendance threshold of minimum 75% is strictly mandatory to appear for examinations.'
  }
];

export const COLLEGE_EVENTS: CollegeEvent[] = [
  {
    id: 'evt-1',
    title: 'Invision Tech-Talk Competation',
    description: 'Invision Tech-Talk Competation @Auditorium From 2:00 to 4:30 PM with live prototype displays and industry jury.',
    date: '18th August 2026',
    time: '2:00 PM - 4:30 PM',
    venue: 'SIT Central Auditorium',
    category: 'Technical',
    registeredCount: 140
  },
  {
    id: 'evt-2',
    title: 'National Level Hackathon "EpicThon 3.0"',
    description: '48-hour continuous coding and hardware innovation sprint in partnership with COMED KARES, IEEE, and T-Hub.',
    date: '25th - 26th September 2026',
    time: '9:00 AM onwards',
    venue: 'SIT Innovation Centre & Computer Labs',
    category: 'Technical',
    registeredCount: 320
  },
  {
    id: 'evt-3',
    title: 'SIT Utsav & Sanskriti Annual Cultural Fest',
    description: 'Annual cultural extravaganza featuring dance, drama, musical bands, fashion show, and celebrity concerts.',
    date: '10th October 2026',
    time: '10:00 AM - 9:00 PM',
    venue: 'SIT Open Air Amphitheatre',
    category: 'Cultural',
    registeredCount: 850
  },
  {
    id: 'evt-4',
    title: 'VTU Regional Inter-Collegiate Cricket & Badminton Tournament',
    description: 'Three-day athletic tournament hosting over 24 engineering colleges across Kalaburagi and Bidar divisions.',
    date: '15th November 2026',
    time: '8:00 AM - 6:00 PM',
    venue: 'SIT Sports Grounds & Indoor Complex',
    category: 'Sports',
    registeredCount: 210
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Runner-Up in Technova',
    subtitle: 'National Level Hackathon EpicThon 2.0',
    event: 'National Level Hackathon - Robo Soccer Competition',
    organizer: 'COMED KARES, IEEE NKSS, T-Hub & SGI',
    prize: 'Runner-Up Trophy + Rs. 3,000/- Cash Prize',
    date: 'Science Expo 2025',
    team: ['Praveen Kumar', 'Mohd Zaid', 'Sneha Patil', 'Rohan Shinde'],
    department: 'Electronics & Communication / CSE',
    description: 'Our student engineering team engineered an autonomous omnidirectional robotic chassis with high-torque brushless drive systems and wireless Bluetooth low-latency telemetry.',
    imageUrl: '/images/student-robotics-innovation.jpg',
    badge: 'Runner-Up - Robotics'
  },
  {
    id: 'ach-2',
    title: '1st Prize in UI Design at COMED KARES',
    subtitle: 'TechX 2024 Winners - Team Blue Beetles',
    event: 'State Level TechX 2024 Design Challenge',
    organizer: 'COMED KARES Community Centric Education',
    prize: '1st Prize Winner + Rs. 10,000/- Cash Prize',
    date: 'TechX 2024',
    team: ['Team Blue Beetles', 'Abhishek Patil', 'Zaheer J.K.', 'Sanjana Rao'],
    department: 'Artificial Intelligence & Machine Learning',
    description: 'Team Blue Beetles secured 1st place in the prestigious UI/UX design competition, developing an accessible telemedicine interface with voice navigation and localized regional dialect support.',
    imageUrl: '/images/comed-kares-ui-design-winner.jpg',
    badge: '1st UI Design'
  },
  {
    id: 'ach-3',
    title: '2nd Rank in VTU Bootcamp',
    subtitle: 'Cybersecurity Bootcamp & Capture the Flag',
    event: 'All-VTU State Level Cybersecurity Bootcamp',
    organizer: 'Visvesvaraya Technological University (VTU) Regional Centre Kalaburagi',
    prize: 'All-VTU Bootcamp Rank 2 & Excellence Certificate',
    date: 'VTU Regional Centre, Kalaburagi',
    team: ['Kiran Rathod', 'Pooja Biradar'],
    department: 'Computer Science & Engineering',
    description: 'Secured State 2nd Rank among 40+ engineering colleges in the rigorous 5-day hands-on penetration testing, reverse engineering, and threat mitigation CTF challenge.',
    imageUrl: '/images/cybersecurity-bootcamp-rank.jpg',
    badge: 'All-VTU Bootcamp Rank 2'
  },
  {
    id: 'ach-4',
    title: 'Gold Medal at INEX Innovation Expo',
    subtitle: 'India International Innovation & Invention Expo',
    event: 'International Invention & Innovation Exhibition',
    organizer: 'INEX India International Forum',
    prize: 'International Gold Medal & Patent Grant Support',
    date: 'International Innovation Summit',
    team: ['Sagar M.', 'Pradeep K.', 'Dr. Mallikarjun'],
    department: 'Multidisciplinary R&D Cell',
    description: 'Presented a solar-powered agricultural smart irrigation device utilizing soil moisture telemetry and GSM alerts for rural farmers in Hyderabad-Karnataka region.',
    imageUrl: '/images/inex-expo-award.jpg',
    badge: 'INEX Gold Medal'
  },
  {
    id: 'ach-5',
    title: 'National Sanskriti / Vivibha 2024 Award',
    subtitle: 'Vision for Viksit Bharat National Youth Award',
    event: 'Vivibha 2024 National Youth Conclave',
    organizer: 'Bharatiya Shikshan Mandal (Yuva Aayam)',
    prize: 'National Memento & Felicitations',
    date: 'Vivibha 2024',
    team: ['Student Council Delegation'],
    department: 'Student Self Governance Council',
    description: 'Honored with national recognition for outstanding community youth initiatives, student leadership empowerment, and rural science literacy camps.',
    imageUrl: '/images/student-self-governance.jpg',
    badge: 'National Yuva Award'
  },
  {
    id: 'ach-6',
    title: 'World Telecommunication & Information Society Day',
    subtitle: 'IEI & Ministry of Communications Keynote Symposium',
    event: 'State Level Technical Symposium on Gender Equality in Digital Transformation',
    organizer: 'Institution of Engineers (India) & SIT IQAC',
    prize: 'Keynote Honors & National Institutional Memento',
    date: 'SIT Auditorium 2025',
    team: ['Sri Anandkumar Rangrez (Deputy DG, Ministry of Comm.)', 'Dr. Veena Soraganvi (Principal)', 'Dr. Prashant Shahabadkar (Dean IQAC)'],
    department: 'Electronics & Communication / IQAC',
    description: 'Special symposium hosted at SIT Auditorium featuring Chief Guest Sri Anandkumar Rangrez and Keynote Speaker Dr. Veena Soraganvi, advancing digital inclusion and modern telecommunication frameworks.',
    imageUrl: '/images/world-telecommunication-day-2025.jpg',
    badge: 'Ministry Keynote 2025'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'lib',
    name: 'LIBRARY',
    tagline: 'Knowledge Hub with Digital Repositories',
    description: 'At SIT, has its own space for Library, provides an ideal environment with over 25,000+ volumes, IEEE/Springer e-journals, DELNET access, automated RFID circulation, and a dedicated 100-seat silent reading wing.',
    features: ['25,000+ Physical Volumes & 1,500+ Reference Handbooks', 'IEEE Xplore, ScienceDirect & Springer E-Journal Subscriptions', 'NPTEL Local Video Server & VTU Consortium Access', '24/7 Digital Library Terminal with High-Speed Internet'],
    icon: 'BookOpen',
    timing: '8:30 AM - 8:00 PM (Mon-Sat)',
    location: 'Central Academic Block, 1st Floor'
  },
  {
    id: 'smart-class',
    name: 'SMART CLASSROOMS',
    tagline: 'Digitally Enabled Interactive Learning',
    description: 'SIT has well planned systematically furnished classrooms with digital podiums, ultra-short-throw laser projectors, acoustic dampening, and high-fidelity lecture capture systems.',
    features: ['Interactive Smart Touch Displays & Digital Stylus Podiums', 'Acoustically Treated Lecture Halls with Collar Microphones', 'Hybrid Classroom Connectivity for Industry Guest Lectures', 'Ergonomic Tiered Seating with Power Outlets for Laptops'],
    icon: 'MonitorPlay',
    location: 'Blocks A, B & C'
  },
  {
    id: 'labs',
    name: 'LABORATORIES',
    tagline: 'World-Class Practical Engineering Labs',
    description: 'LABORATORIES At SIT, Labs are equipped with world class equipments, licensed enterprise software (Cadence, MATLAB, ANSYS, Xilinx), and dedicated high-speed server racks.',
    features: ['High-Performance Computing Clusters with NVIDIA GPUs', 'Licensed CAD/CAM, VLSI & Structural Simulation Software', 'Comprehensive Safety Gear, Exhausts & Fire Mitigation', 'Dedicated Lab Instructors & Technical Support Staff'],
    icon: 'FlaskConical',
    location: 'Engineering Department Wings'
  },
  {
    id: 'transport',
    name: 'TRANSPORTATION FACILITIES',
    tagline: 'Safe & Punctual Campus Bus Fleet',
    description: 'The SIT Campus operates its bus service to facilitate the pick and drop for students and faculty from every major node across Kalaburagi city, Shahabad, Wadi, Aland, and surrounding areas.',
    features: ['Fleet of 18+ GPS-Tracked Deluxe Buses with CCTV', 'Routes covering all major residential layouts in Kalaburagi', 'Concessional pass rates for students and staff', 'Experienced drivers with rigorous safety compliance'],
    icon: 'Bus',
    timing: '7:30 AM - 6:00 PM'
  },
  {
    id: 'auditorium',
    name: 'AUDITORIUM',
    tagline: 'Centrally Air-Conditioned Convention Center',
    description: 'A grand 800-seater auditorium equipped with professional stage lighting, line-array audio systems, green rooms, and motorized projection screens for hosting national conferences and symposiums.',
    features: ['800+ Seating Capacity with Premium Cushioning', 'Professional Stage Lighting, JBL Line-Array Sound System', 'Simultaneous Multi-Camera HD Live Streaming', 'Spacious Pre-Function Lobby & VIP Lounge'],
    icon: 'Building2',
    location: 'Central SGI Complex'
  },
  {
    id: 'sports',
    name: 'SPORTS & FITNESS COMPLEX',
    tagline: 'Nurturing Athletic Excellence & Well-being',
    description: 'Expansive 22-acre sports infrastructure featuring a full-size cricket ground, football pitch, standard basketball court, volleyball courts, and a modern indoor gymnasium.',
    features: ['Full-Size Turf Cricket Ground with Practice Nets', 'Synthetic Badminton & Basketball Courts with Floodlights', 'Indoor Table Tennis, Chess & Carrom Arena', 'Modern Multi-Gymnasium with Qualified Fitness Trainers'],
    icon: 'Trophy',
    location: 'SIT Sports Enclave'
  },
  {
    id: 'incubation',
    name: 'INCUBATION CENTRE',
    tagline: 'SGI Entrepreneurship & Innovation Hub',
    description: 'In-house startup incubator backed by COMED KARES, MSME and T-Hub offering seed funding guidance, patent filing assistance, co-working desks, and prototype fabrication tools.',
    features: ['Co-Working Space with High-Speed Gigabit WiFi', 'Prototype Fabrication Lab with 3D Printers & Laser Cutters', 'Mentorship from Venture Capitalists & Tech Founders', 'Seed Grant Assistance up to Rs. 5 Lakhs per Startup'],
    icon: 'Lightbulb',
    location: 'Innovation Hub, Ground Floor'
  }
];

export const DEMO_STUDENT: StudentProfile = {
  usn: '3SG21CS042',
  name: 'Zaheer J. Khan',
  email: 'zaheer.3sg21cs042@sitgulbarga.org',
  departmentId: 'cse',
  semester: 7,
  section: 'A',
  cgpa: 8.84,
  attendancePercentage: 88.5,
  mentorName: 'Dr. Mallikarjun S. Patil',
  subjects: [
    { code: '21CS71', name: 'Cloud Computing', faculty: 'Dr. Mallikarjun S. Patil', attendance: 92, internalMarks: 28, maxMarks: 30, grade: 'S' },
    { code: '21CS72', name: 'Parallel Architecture & Programming', faculty: 'Prof. Ramesh K. Rathod', attendance: 86, internalMarks: 26, maxMarks: 30, grade: 'A' },
    { code: '21CS73', name: 'Natural Language Processing', faculty: 'Prof. Neha Deshmukh', attendance: 90, internalMarks: 29, maxMarks: 30, grade: 'S' },
    { code: '21CS74', name: 'Information and Network Security', faculty: 'Prof. Rajeshwari Patil', attendance: 85, internalMarks: 25, maxMarks: 30, grade: 'A' },
    { code: '21CSL76', name: 'Cloud Computing & Security Lab', faculty: 'Dr. Mallikarjun S. Patil', attendance: 94, internalMarks: 20, maxMarks: 20, grade: 'S' }
  ],
  fees: {
    totalFee: 95000,
    paidFee: 95000,
    pendingFee: 0,
    dueDate: '30th Sept 2026',
    status: 'Paid'
  },
  libraryBooks: [
    { title: 'Distributed and Cloud Computing - Hwang & Fox', accessionNo: 'SIT-LIB-44912', issueDate: '2026-08-01', dueDate: '2026-08-25' },
    { title: 'Speech and Language Processing - Jurafsky & Martin', accessionNo: 'SIT-LIB-51203', issueDate: '2026-08-05', dueDate: '2026-08-30' }
  ]
};

export const SAMPLE_STUDENTS: StudentProfile[] = [
  DEMO_STUDENT,
  {
    usn: '3SG22AI018',
    name: 'Sneha R. Deshmukh',
    email: 'sneha.3sg22ai018@sitgulbarga.org',
    departmentId: 'aiml',
    semester: 5,
    section: 'A',
    cgpa: 9.12,
    attendancePercentage: 91.0,
    mentorName: 'Dr. Sujata K. Biradar',
    subjects: [
      { code: '21AI51', name: 'Deep Learning & Neural Networks', faculty: 'Dr. Sujata K. Biradar', attendance: 94, internalMarks: 29, maxMarks: 30, grade: 'S' },
      { code: '21AI52', name: 'Computer Vision', faculty: 'Prof. Priya K.', attendance: 90, internalMarks: 28, maxMarks: 30, grade: 'S' },
      { code: '21AI53', name: 'Natural Language Processing', faculty: 'Prof. Vinay Kumar', attendance: 88, internalMarks: 27, maxMarks: 30, grade: 'A' },
      { code: '21AIL56', name: 'Deep Learning Lab', faculty: 'Dr. Sujata K. Biradar', attendance: 96, internalMarks: 20, maxMarks: 20, grade: 'S' }
    ],
    fees: {
      totalFee: 95000,
      paidFee: 95000,
      pendingFee: 0,
      dueDate: 'Paid',
      status: 'Paid'
    },
    libraryBooks: [
      { title: 'Deep Learning - Ian Goodfellow', accessionNo: 'SIT-LIB-61102', issueDate: '2026-08-02', dueDate: '2026-08-28' }
    ]
  },
  {
    usn: '3SG21EC005',
    name: 'Abhishek G. Patil',
    email: 'abhishek.3sg21ec005@sitgulbarga.org',
    departmentId: 'ece',
    semester: 7,
    section: 'B',
    cgpa: 8.45,
    attendancePercentage: 84.0,
    mentorName: 'Dr. Basavaraj Patil',
    subjects: [
      { code: '21EC71', name: 'VLSI Design', faculty: 'Dr. Basavaraj Patil', attendance: 86, internalMarks: 27, maxMarks: 30, grade: 'A' },
      { code: '21EC72', name: 'Wireless Communication', faculty: 'Prof. Sharanappa T.', attendance: 82, internalMarks: 25, maxMarks: 30, grade: 'B' },
      { code: '21ECL76', name: 'VLSI Lab', faculty: 'Dr. Basavaraj Patil', attendance: 90, internalMarks: 19, maxMarks: 20, grade: 'S' }
    ],
    fees: {
      totalFee: 95000,
      paidFee: 65000,
      pendingFee: 30000,
      dueDate: '15th Oct 2026',
      status: 'Partial'
    },
    libraryBooks: []
  }
];

export const RECRUITERS = [
  { name: 'InfoVision', role: 'Full Stack & Cloud Engineers', package: '6.5 - 9.0 LPA', logoText: 'INFOVISION' },
  { name: 'Capgemini', role: 'Software Engineer & Analysts', package: '4.5 - 7.5 LPA', logoText: 'Capgemini' },
  { name: 'Alten Calsoft Labs', role: 'Embedded & VLSI Engineers', package: '5.0 - 8.2 LPA', logoText: 'ALTEN CALSOFT LABS' },
  { name: 'Wipro', role: 'Project Engineer & Turbo Roles', package: '4.0 - 6.5 LPA', logoText: 'wipro' },
  { name: 'Infosys', role: 'Systems Engineer & Specialist', package: '4.0 - 9.5 LPA', logoText: 'Infosys' },
  { name: 'TCS', role: 'Ninja & Digital Developer', package: '3.6 - 7.2 LPA', logoText: 'TATA CONSULTANCY SERVICES' },
  { name: 'Cognizant', role: 'GenC Next & Programmer Analyst', package: '4.2 - 6.8 LPA', logoText: 'Cognizant' },
  { name: 'QSpiders', role: 'Core Java & Automation Testing', package: '4.0 - 5.5 LPA', logoText: 'QSpiders' }
];

export const PARTNERS = [
  'COMED KARES',
  'Be-Practical Tech Solution',
  'QSpiders Campus Connect',
  'BKEC',
  'PES Institutions',
  'HITAM',
  'COCUBES Assessment',
  'ISIE India',
  'Re Code Learning',
  'ExcelR Solutions',
  'AWS Academy',
  'NPTEL SWAYAM'
];
