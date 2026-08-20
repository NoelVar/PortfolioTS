export interface TabContent {
  id: string;
  path: string;
  language: string;
  content: string;
  renderedComponent: string; 
}

export const portfolioData = {
  technical: {
    'About.tsx': {
      id: 'About.tsx',
      path: 'src > components > About.tsx',
      language: "javascript",
      content: `const Developer = {\n  name: "Noel Varga",\n  role: "MSc Advanced Computing Student",\n  company: "King's College London",\n  education: [\n  {\n    course: "BSc Computer Science",\n    uni: "University of Westminster",\n    grade: "1st Class", // Achieved\n    date_from: "2022-09",\n    date_to: "2025-07"\n  },\n  {\n    course: "MSc Advanced Computing",\n    uni: "King's College London",\n    grade: "2:1 or 1st Class", // Predicted\n    date_from: "2025-09",\n    date_to: "2026-08"\n  }],\n  skills: {\n    programming_languages: ["JavaScript", "TypeScript", "Python", "Java"],\n    web_software_dev: [\n      "React",\n      "Node.js",\n      "Express.js",\n      "HTML/CSS",\n      "MongoDB",\n      "SQL",\n      "Git",\n      "REST APIs",\n      "Agile",\n      "DSDM",\n      "Requirements Engineering",\n      "Testing",\n      "User Focused Design"\n    ],\n    machine_learning: [\n      "Deep Learning",\n      "CNNs",\n      "Vision Transformer",\n      "Image Classification",\n      "Semantic Segmentation",\n      "PyTorch"\n    ],\n    research: [\n      "Literature Review",\n      "Data Analysis",\n      "Stakeholder Analysis",\n      "Presentation Skills",\n      "Project Planning"\n    ]\n  },\n  hobbies: ["Cooking", "Photography", "Guitar", "Reading", "Development"] \n };`,
    },
    'Projects.json': {
      id: 'Projects.json',
      path: 'src > data > Projects.json',
      language: "json",
      content: `{ 
 "projects": [{
    "$id": 10 
    "title": "Transformer-Based Terrain Perception for Off-Road Environments",
    "association": "Dissertation @ King's College London",
    "date_from": "2025-12",
    "date_to": "2026-08",
    "technology_used": ["PyTorch", "MMSegmentation", "Python", "Google Colab",],
    "skills_gained": [
      "Semantic Segmentation",
      "Data Analysis", 
      "Academic Research", 
      "Python Programming", 
      "Model Training and Evaluation"
    ],
    "description": [
      "Project aim: To investigate the application of transformer-based methods for terrain perception in unstructured off-road environments for autonomous navigation"
      "Developed a comprehensive literature review using over 70+ papers on existing terrain perception techniques for off-road autonomous navigation, identifying key approaches, challenges and research gaps"
      "Implemented DeepLabV3+ and Swin-UPerNet architectures for semantic terrain segmentation in off-road autonomous navigation"
      "Addressed class imbalance in terrain-segmentation data through weighted learning strategies and dataset merging, investigating their impact on model performance"
      "Developed a reproducible merging strategy to combine RUGD and RELLIS-3D into a unified dataset to mitigate class imbalance"
      "Conducted comparative analysis of model performance using precision, recall, F1-score, IoU and mIoU, evaluating both overall and per-class segmentation performance."
      "Swin-UPerNet-Weighted achieved 83.18% mIoU, marginally outperforming DeepLabV3-Weighted at 82.95%"
    ],
    "link": "https://github.com/NoelVar/Transformer-Based-Terrain-Perception-for-Off-Road-Environments" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 9 
    "title": "Ant Colony Optimisation Project",
    "association": "Competition @ King's College London",
    "date_from": "2026-05",
    "date_to": "2026-05",
    "technology_used": ["Python", "Jupyter Notebook"],
    "skills_gained": ["ACO", "Python", "Project Demonstration"],
    "description": [
      "This project implements a fully working Ant Colony Optimization (ACO) algorithm applied to the Travelling Salesman Problem (TSP), with visualisation."
      "Transformed mathematical concepts, such as pheromone update and selection probability, into code"
      "Full detailed video explanation can be found through the link below"
    ],
    "link": "https://github.com/NoelVar/Ant_Colony_Optimization" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 8 
    "title": "Data Visualiser for Lupus Awareness",
    "association": "Created for World Lupus Day, May 10th - Personal Project",
    "date_from": "2026-05",
    "date_to": "2026-05",
    "technology_used": ["HTML", "JavaScript", "CSS"],
    "skills_gained": ["Data Visualisation", "HTML/CSS", "JavaScript"],
    "description": [
      "This project was implemented to raise awarness about Lupus for World Lupus Day 2026."
    ],
    "link": "https://noelvar.github.io/LupusAwareness/" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 7 
    "title": "Netflix Clone",
    "association": "Personal Project",
    "date_from": "2026-02",
    "date_to": "2026-02",
    "technology_used": ["React", "Vite", "TypeScript", "Tailwind"],
    "skills_gained": ["Frontend Development", "React", "TypeScript", "Tailwind"],
    "description": [
      "This project was developed based on Shruti Kapoor's course. The app was developed using React, Vite, TypeScript, and Tailwind."
    ],
    "link": "https://github.com/NoelVar/Netflix_Clone" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 6 
    "title": "Sorting Algorithm Visualiser",
    "association": "Personal Project",
    "date_from": "2026-01",
    "date_to": "2026-02",
    "technology_used": ["Python", "pygame"],
    "skills_gained": ["Understanding of Algoritms", "Python Programming"],
    "description": [
      "Project is based on Tech With Tim - Python Sorting Algorithm Visualizer Tutorial. The project was developed as practice and more algorithms were added"
    ],
    "link": "https://github.com/NoelVar/Sort_Visualizer_Python" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 5 
    "title": "Classification of Pneumonia MNIST Using CNN",
    "association": "Personal Project",
    "date_from": "2026-02",
    "date_to": "2026-02",
    "technology_used": ["Python", "Jupyter Notebook"],
    "skills_gained": ["Understanding of Classification", "CNNs", "Machine Learning"],
    "description": [
      "This project was developed individually to practice the building and training of a CNN."
      "The model is trained on the pneumonia_mist dataset, and it achieves around an 80-85% accuracy on unseen data."
    ],
    "link": "https://github.com/NoelVar/pneumonia_mnist_CNN/" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 4
    "title": "Real Time Colour Detector",
    "association": "Personal Project",
    "date_from": "2025-11",
    "date_to": "2025-12",
    "technology_used": ["Python", "OpenCV"],
    "skills_gained": ["OpenCV", "Pixel level operations", "Python Programming"],
    "description": [
      "The project utilises the computers webcam, where the provided colour range is isolated and highlighted."
    ],
    "link": "https://github.com/NoelVar/Real_Time_Color_Detection" // This is clickable
 },
 // ------------------------------------------------------
 {
    "$id": 3 
    "title": "EdibleEducation",
    "association": "Final Year Project @ University of Westminster",
    "date_from": "2024-09",
    "date_to": "2025-05",
    "technology_used": ["MERN stack", "JavaScript"],
    "skills_gained": [
      "React", 
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "Background Research", 
      "Complete Project Development Lifecycle",
      "Agile methodological approach",
      "DSDM",
      "Stakeholder analysis",
      "Requirement engineering",
      "White- & Black-box testing"
    ],
    "description": [
      "Designed a platform to promote home cooking, knowledge sharing and foster collaborative home cooking to promote a healthier lifestyle, sustainable habits and cross-cultural exchanges",
      "Conducted thorough background research, utilised and improved academic writing and research skills",
      "Created and directed project development timeline, methodological approach (Agile, DSDM) and wider societal implications",
      "Implemented a detailed requirement gathering process, analysed stakeholders of the project, used onion diagrams, power/interest matrix, and user stories,  carried out interviews and workshops",
      "Engineered a working prototype of the platform throughout 2 project iteration cycles"
    ],
    "link": [
      "https://edibleeducation.netlify.app/",
      "https://github.com/NoelVar/FYP_EdibleEducation"
    ] // These are clickable
 },
 // ------------------------------------------------------
 {
    "$id": 2 
    "title": "Travel Tales",
    "association": "Coursework @ University of Westminster",
    "date_from": "2025-04",
    "date_to": "2025-05",
    "technology_used": ["MERN stack", "Git", "REST APIs"],
    "skills_gained": ["React", "Node.js", "Express.js", "MongoDB"],
    "description": [
      "TravelTales is a vibrant community-driven platform where wanderlust meets storytelling."
      "The platform seamlessly integrates real-time country data with personal travel experiences, creating a unique space for travellers to share their adventures and connect with fellow explorers worldwide."
    ],
    "link": [
      "https://traveltales-cw2.netlify.app/",
      "https://github.com/NoelVar/ASSWP_CW2_SOURCE"
    ] // These are clickable
 },
// ------------------------------------------------------
 {
    "$id": 1 
    "title": "Java Shopping Manager Application",
    "association": "Coursework @ University of Westminster",
    "date": "2023-12",
    "technology_used": ["Java", "Java Swing (GUI)"],
    "skills_gained": ["Object Oriented Programming", "Java Programming", "CRUD", "GUI development"],
    "description": [
      "A Java-based Shopping Manager application developed as a coursework project for the Object-Oriented Programming module."
      "The Westminster Shopping Manager is a dual-interface application that serves both managers and customers."
      "It features a terminal-based menu for managers and a graphical user interface (GUI) for customers."
    ],
    "link": "https://github.com/NoelVar/Java_ShoppingManager/" // This is clickable
 }]
}`,
    },
    'Experience.json': {
      id: 'Experience.json',
      path: 'src > data > Experience.json',
      language: "json",
      content: `{\n "work_experience": [{\n    "$id": 4\n    "title": "Student as Researcher",\n    "company": "University of Westminster",\n    "date_from": "2025-05", \n    "date_to": "2025-12",\n    "description": [\n        "Developed a conceptual framework for an interactive platform that enables elderly people to access, understand, and interact with complicated health-related digital content",\n        "Collaborated within a cross-functional team of researchers and academic stakeholders to deliver project objectives.",\n        "Conducted detailed investigations across 30+ academic sources to identify solutions and evaluate competing approaches.",\n        "Took initiative and ownership to produce highly detailed documentation that compared the performance of 4 different NLP tools on health-related documentation.",\n        "Applied analytical and problem-solving skills to evaluate findings and communicate them with non-technical team members"\n    ] \n  },\n  // ------------------------------------------------------\n  { \n    "$id": 3 \n    "title": "Students Helper for Matchmaking Program (Frontend Developer)",\n    "company": "University of Westminster",\n    "date_from": "2024-12", \n    "date_to": "2025-03",\n    "description": [\n        "AIM: To develop a matchmaking algorithm that connects university students and academics with research opportunities, based on their interests",\n        "Co-designed and developed a React frontend for a matchmaking platform connecting students with academic staff",\n        "Supported the creation and managed a survey to collect participant profiles and research focus areas",\n        "Successfully matched over 180 participants into interdisciplinary teams",\n        "Demonstrated adaptability by helping redesign project delivery processes while maintaining overall objectives."\n    ]
  },\n  // ------------------------------------------------------\n  {\n    "$id": 2\n    "title": "SETS-Project Team Member",\n    "company": "University of Westminster",\n    "date_from": "2024-03", \n    "date_to": "2024-04",\n    "description": [\n        "Formulated a more nuanced and scalable evaluation of Text Summarisation techniques",\n        "Collected and analysed over 300 research papers from 6 established databases"
  },\n  // ------------------------------------------------------\n  {\n    "$id": 1\n    "title": "Student as Co-Creators Project (CODEMATICS)",\n    "company": "University of Westminster",\n    "date_from": "2023-02", \n    "date_to": "2023-07",\n    "description": [\n        "Collaborated with fellow students and academic staff to bridge the gap between level 4 Mathematics and Programming",\n        "Organised and oversaw a workshop for over 40 attendees, including both academics and students",\n        "Gathered and analysed surveys from the workshop and designed an Ontology"\n    ] \n  }] \n}`,
    },
    "NoelVarga.jpg": {
      id: 'NoelVarga.jpg',
      path: 'frontend > public > NoelVarga.jpg',
      language: "image",
      content:`/me.jpg`
    }
  },
  nonTechnical: {
    'About.tsx': {
      id: 'About.tsx',
      path: 'src > pages > About.html',
      language: "html",
      content: `<h1 class="main_title">Welcome</h1>! \n<p>My name is Noel Varga and I am an MSc Advanced Computing student at <b>King's College London</b>.</p> \n<p>I have strong foundations in software engineering, Python development, full-Stack development, and user-focused web development.<p> \n<!-------------------------------------------------------------->\n<h2 id="education">Education</h2> \n<p>MSc Advanced Computing | King’s College London (Sep 2025 - Aug 2026)<p> <!-- Predicted 2:1 or 1st Class --> \n<p>BSc Computer Science | University of Westminster (Sep 2022 - Jul 2025)<p> <!-- Achieved 1st Class --> \n<!-------------------------------------------------------------->\n<h2 id="skills">Skills</h2> \n<h3>Programming Languages:</h3> \n<ul> \n    <li>JavaScript</li> \n    <li>TypeScript</li> \n    <li>Python</li> \n    <li>Java</li> \n</ul> \n<!------------------------------>\n<h3 id="web_software">Web & Sofware Development:</h3> \n<ul> \n    <li>React</li> \n    <li>Node.js</li> \n    <li>Express.js</li> \n    <li>HTML/CSS</li> \n    <li>MongoDB</li> \n    <li>SQL</li> \n    <li>Git</li> \n    <li>REST APIs</li> \n    <li>Agile</li> \n    <li>DSDM</li> \n    <li>Requirements Engineering</li> \n    <li>Testing</li> \n    <li>User Focused Design</li> \n</ul> \n<!------------------------------>\n<h3 id="ml">Machine Learning:</h3> \n<ul> \n    <li>Deep Learning</li> \n    <li>CNNs</li> \n    <li>Vision Transformer</li> \n    <li>Image Classification</li> \n    <li>Semantic Segmentation</li> \n    <li>PyTorch</li> \n</ul> \n<!------------------------------>\n<h3 id="research">Research:</h3> \n<ul> \n    <li>Literature Review</li> \n    <li>Data Analysis</li> \n    <li>Stakeholder Analysis</li> \n    <li>Presentation Skills</li> \n    <li>Project Planning</li> \n</ul> \n<!-------------------------------------------------------------->\n<h3 id="hobbies">Hobbies</h3> \n<ul> \n    <li>Cooking</li> \n    <li>Photography</li> \n    <li>Guitar</li> \n    <li>Reading</li> \n    <li>Development</li> \n</ul> `,
    },
    'Projects.json': {
      id: 'Projects.json',
      path: 'src > page > Projects.json',
      language: "txt",
      content: `1. Terrain Perception Model: An AI system designed to analyze and segment off-road environments for autonomous navigation.`,
    },
    'Experience.json': {
      id: 'Experience.json',
      path: 'src > pages > Experience.html',
      language: "html",
      content: `<h1 class="main_title">Work Experience</h1>\n<!-------------------------------------------------------------->
<h2 class="experience_title">Student as Researcher | University of Westminster (May 2025 - Dec 2025)</h2>
<ul>
    <li>Developed a conceptual framework for an interactive platform that enables elderly people to access, understand, and interact with complicated health-related digital content</li>
    <li>Collaborated within a cross-functional team of researchers and academic stakeholders to deliver project objectives.</li>
    <li>Conducted detailed investigations across 30+ academic sources to identify solutions and evaluate competing approaches.</li>
    <li>Took initiative and ownership to produce highly detailed documentation that compared the performance of 4 different NLP tools on health-related documentation.</li>
    <li>Applied analytical and problem-solving skills to evaluate findings and communicate them with non-technical team members</li>
</ul>\n<!-------------------------------------------------------------->
<h2 class="experience_title">Students Helper for Matchmaking Program (Frontend Developer) | University of Westminster (Dec 2024 - Mar 2025)</h2>
<ul>
    <li>AIM: To develop a matchmaking algorithm that connects university students and academics with research opportunities, based on their interests</li>
    <li>Co-designed and developed a React frontend for a matchmaking platform connecting students with academic staff</li>
    <li>Supported the creation and managed a survey to collect participant profiles and research focus areas</li>
    <li>Successfully matched over 180 participants into interdisciplinary teams</li>
    <li>Demonstrated adaptability by helping redesign project delivery processes while maintaining overall objectives.</li>
</ul>\n<!-------------------------------------------------------------->
<h2 class="experience_title">SETS-Project Team Member | University of Westminster (Mar 2024 - Apr 2024)</h2>
<ul>
    <li>Formulated a more nuanced and scalable evaluation of Text Summarisation techniques</li>
    <li>Collected and analysed over 300 research papers from 6 established databases</li>
</ul>\n<!-------------------------------------------------------------->
<h2 class="experience_title">Student as Co-Creators Project (CODEMATICS) | University of Westminster (Feb 2023 - Jul 2023)</h2>
<ul>
    <li>Collaborated with fellow students and academic staff to bridge the gap between level 4 Mathematics and Programming</li>
    <li>Organised and oversaw a workshop for over 40 attendees, including both academics and students</li>
    <li>Gathered and analysed surveys from the workshop and designed an Ontology</li>
</ul>`,
    },
    "NoelVarga.jpg": {
      id: 'NoelVarga.jpg',
      path: 'frontend > public > NoelVarga.jpg',
      language: "image",
      content:`/me.jpg`
    }
  }
};