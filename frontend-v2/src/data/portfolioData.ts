export interface TabContent {
  id: string;
  path: string;
  language: string;
  content: string;
}

export const portfolioData = {
  technical: {
    'About.tsx': {
      id: 'About.tsx',
      path: 'src > components > About.tsx',
      language: "typescript",
      content: `interface SkillsProps {
  programming_languages: string[];
  web_software_dev: string[];
  machine_learning: string[];
  research: string[];
}

interface EducationProps {
  course: string;
  uni: string;
  grade: "1st Class" | "2:1" | "2:2" | string;
  date_from: string;
  date_to: string;
}

interface FrameProps {
  name: string;
  role: string;
  company: string;
  education: EducationProps[];
  skills: SkillsProps;
  hobbies: string[];
}

const Developer: FrameProps = {
  name: "Noel Varga",
  role: "MSc Advanced Computing Student",
  company: "King's College London",  
  education: [
    {    
      course: "BSc Computer Science",
      uni: "University of Westminster",
      grade: "1st Class", // Achieved 
      date_from: "2022-09",    
      date_to: "2025-07"  
    },  
    {    
      course: "MSc Advanced Computing",
      uni: "King's College London",
      grade: "2:1 or 1st Class", // Predicted
      date_from: "2025-09",
      date_to: "2026-08"  
    }
  ],
  skills: {
    programming_languages: ["JavaScript", "TypeScript", "Python", "Java"],
    web_software_dev: [
      "React",
      "Node.js",
      "Express.js",
      "HTML/CSS",
      "MongoDB",
      "SQL",
      "Git",
      "REST APIs",
      "Agile",
      "DSDM",
      "Requirements Engineering",
      "Testing",
      "User Focused Design"
    ],
    machine_learning: [
      "Deep Learning",
      "CNNs",
      "Vision Transformer",
      "Image Classification",
      "Semantic Segmentation",
      "PyTorch"
    ],
    research: [
      "Literature Review",
      "Data Analysis",
      "Stakeholder Analysis",
      "Presentation Skills",
      "Project Planning"
    ]
  },
  hobbies: ["Cooking", "Photography", "Guitar", "Reading", "Development"]
};
`,
    },
    'Projects.json': {
      id: 'Projects.json',
      path: 'src > data > Projects.json',
      language: "json",
      content: `{ 
 "projects": [{
    "$id": 10, 
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
    "$id": 9, 
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
    "$id": 8, 
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
    "$id": 7, 
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
    "$id": 6, 
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
    "$id": 5, 
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
    "$id": 4,
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
    "$id": 3, 
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
    "$id": 2, 
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
    "$id": 1,
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
      content: `{
  "work_experience": [{
    "$id": 5,
    "title": "Freelance Web Developer",
    "company": "Landscaping & Maintenance Company",
    "date_from": "2026-08",
    "date_to": "present day",
    "description": [
      "Conducting client interviews to define scope and gather feature requirements for the custom web application",
      "Designing a responsive wireframe and prototypes using Figma to meet client needs prior to development",
      "Utilising React, TypeScript, and Tailwind CSS to ensure a scalable development approach and integrate SEO"
    ]
  },
  // ------------------------------------------------------
  {
    "$id": 4,
    "title": "Student as Researcher",
    "company": "University of Westminster",
    "date_from": "2025-05", 
    "date_to": "2025-12",
    "description": [
      "Developed a conceptual framework for an interactive platform that enables elderly people to access, understand, and interact with complicated health-related digital content",
      "Collaborated within a cross-functional team of researchers and academic stakeholders to deliver project objectives.",
      "Conducted detailed investigations across 30+ academic sources to identify solutions and evaluate competing approaches.",
      "Took initiative and ownership to produce highly detailed documentation that compared the performance of 4 different NLP tools on health-related documentation.",
      "Applied analytical and problem-solving skills to evaluate findings and communicate them with non-technical team members"
    ]
  },
  // ------------------------------------------------------  
  {
    "$id": 3,
    "title": "Students Helper for Matchmaking Program (Frontend Developer)",
    "company": "University of Westminster",
    "date_from": "2024-12",
    "date_to": "2025-03",
    "description": [
      "AIM: To develop a matchmaking algorithm that connects university students and academics with research opportunities, based on their interests",
      "Co-designed and developed a React frontend for a matchmaking platform connecting students with academic staff",
      "Supported the creation and managed a survey to collect participant profiles and research focus areas",
      "Successfully matched over 180 participants into interdisciplinary teams",
      "Demonstrated adaptability by helping redesign project delivery processes while maintaining overall objectives."
    ]
  },
  // ------------------------------------------------------
  {
    "$id": 2,
    "title": "SETS-Project Team Member",
    "company": "University of Westminster",
    "date_from": "2024-03", 
    "date_to": "2024-04",
    "description": [
      "Formulated a more nuanced and scalable evaluation of Text Summarisation techniques",
      "Collected and analysed over 300 research papers from 6 established databases"
  },
  // ------------------------------------------------------
  {
    "$id": 1,
    "title": "Student as Co-Creators Project (CODEMATICS)",
    "company": "University of Westminster",
    "date_from": "2023-02",
    "date_to": "2023-07",
    "description": [
      "Collaborated with fellow students and academic staff to bridge the gap between level 4 Mathematics and Programming",
      "Organised and oversaw a workshop for over 40 attendees, including both academics and students",
      "Gathered and analysed surveys from the workshop and designed an Ontology"
    ]
  }]
}`,
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
      path: 'src > pages > About.md',
      language: "html",
      content: `<h1 class='mainTitle'>Welcome!</h1> <hr>
      <p>My name is Noel Varga and I am an MSc Advanced Computing student at <b>King's College London</b>.</p>
      <p>I have strong foundations in software engineering, Python development, full-Stack development, and user-focused web development.<p>
      <h2>Education</h2> <hr>
      <p>MSc Advanced Computing | King’s College London (Sep 2025 - Aug 2026)<p>
      <p>BSc Computer Science | University of Westminster (Sep 2022 - Jul 2025)<p> <!-- Achieved 1st Class --> 
      <h2 id="skills">Skills</h2> <hr>
      <h3>Programming Languages:</h3>
      <ul> 
        <li>JavaScript</li> 
        <li>TypeScript</li> 
        <li>Python</li> 
        <li>Java</li>
      </ul> 
      <h3>Web & Sofware Development:</h3>
      <ul> 
        <li>React</li> 
        <li>Node.js</li> 
        <li>Express.js</li> 
        <li>HTML/CSS</li>
        <li>MongoDB</li> 
        <li>SQL</li>
        <li>Git</li>
        <li>REST APIs</li> 
        <li>Agile</li> 
        <li>DSDM</li> 
        <li>Requirements Engineering</li>
        <li>Testing</li> 
        <li>User Focused Design</li>
      </ul>
      <h3>Machine Learning:</h3> 
      <ul> 
        <li>Deep Learning</li>
        <li>CNNs</li> 
        <li>Vision Transformer</li> 
        <li>Image Classification</li>
        <li>Semantic Segmentation</li>
        <li>PyTorch</li>
      </ul> 
      <h3>Research:</h3> 
      <ul> 
        <li>Literature Review</li>
        <li>Data Analysis</li> 
        <li>Stakeholder Analysis</li> 
        <li>Presentation Skills</li> 
        <li>Project Planning</li> 
      </ul> 
      <h2>Hobbies</h2> <hr>
      <ul> 
        <li>Cooking</li> 
        <li>Photography</li> 
        <li>Guitar</li> 
        <li>Reading</li> 
        <li>Development</li> 
      </ul> `,
    },
    'Projects.json': {
      id: 'Projects.json',
      path: 'src > page > Projects.md',
      language: "html",
      content: `<h1 class='mainTitle'>Projects</h1> <hr>
      <h2>Transformer-Based Terrain Perception for Off-Road Environments</h2> <hr>
      <h3>King's College London | Dissertation</h3> (DEC 2025 - AUG 2026)
      <h3>Technologies Used</h3>
      <ul>
        <li>PyTorch</li>
        <li>MMSegmentation</li>
        <li>Python</li>
        <li>Google Colab</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>Semantic Segmentation</li>
        <li>Data Analysis</li>
        <li>Academic Research</li>
        <li>Python Programming</li>
        <li>Model Training and Evaluation</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>Project aim: To investigate the application of transformer-based methods for terrain perception in unstructured off-road environments for autonomous navigation</li>
        <li>Developed a comprehensive literature review using over 70+ papers on existing terrain perception techniques for off-road autonomous navigation, identifying key approaches, challenges and research gaps</li>
        <li>Implemented DeepLabV3+ and Swin-UPerNet architectures for semantic terrain segmentation in off-road autonomous navigation</li>
        <li>Addressed class imbalance in terrain-segmentation data through weighted learning strategies and dataset merging, investigating their impact on model performance</li>
        <li>Developed a reproducible merging strategy to combine RUGD and RELLIS-3D into a unified dataset to mitigate class imbalance</li>
        <li>Conducted comparative analysis of model performance using precision, recall, F1-score, IoU and mIoU, evaluating both overall and per-class segmentation performance.</li>
        <li>Swin-UPerNet-Weighted achieved 83.18% mIoU, marginally outperforming DeepLabV3-Weighted at 82.95%</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/Transformer-Based-Terrain-Perception-for-Off-Road-Environments' class='link'>More</a>
      </div>

      <h2>Ant Colony Optimisation Project</h2> <hr>
      <h3>King's College London | Competition</h3> (MAY 2026 - MAY 2026)
      <h3>Technologies Used</h3>
      <ul>
        <li>Python</li>
        <li>Jupyter Notebook</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>ACO</li>
        <li>Python</li>
        <li>Project Demonstration</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>This project implements a fully working Ant Colony Optimization (ACO) algorithm applied to the Travelling Salesman Problem (TSP), with visualisation.</li>
        <li>Transformed mathematical concepts, such as pheromone update and selection probability, into code</li>
        <li>Full detailed video explanation can be found through the link below</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/Ant_Colony_Optimization' class='link'>More</a>
      </div>

      <h2>Data Visualiser for Lupus Awareness</h2> <hr>
      <h3>Personal Project | Created for World Lupus Day, May 10th</h3> (MAY 2026 - MAY 2026)
      <h3>Technologies Used</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>Data Visualisation</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>This project was implemented to raise awarness about Lupus for World Lupus Day 2026.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://noelvar.github.io/LupusAwareness/' class='link'>More</a>
      </div>

      <h2>Netflix Clone</h2> <hr>
      <h3>Personal Project</h3> (FEB 2026 - FEB 2026)
      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>Frontend Development</li>
        <li>React/CSS</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>This project was developed based on Shruti Kapoor's course. The app was developed using React, Vite, TypeScript, and Tailwind.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/Netflix_Clone' class='link'>More</a>
      </div>

      <h2>Sorting Algorithm Visualiser</h2> <hr>
      <h3>Personal Project</h3> (JAN 2026 - FEB 2026)
      <h3>Technologies Used</h3>
      <ul>
        <li>Python</li>
        <li>pygame</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>Understanding of Algoritms</li>
        <li>Python Programming</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>Project is based on Tech With Tim - Python Sorting Algorithm Visualizer Tutorial. The project was developed as practice and more algorithms were added.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/Sort_Visualizer_Python' class='link'>More</a>
      </div>

      <h2>Classification of Pneumonia MNIST Using CNN</h2> <hr>
      <h3>Personal Project</h3> (FEB 2026 - FEB 2026)
      <h3>Technologies Used</h3>
      <ul>
        <li>Python</li>
        <li>Jupyter Notebook</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>Understanding of Classification</li>
        <li>CNNs</li>
        <li>Machine Learning</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>This project was developed individually to practice the building and training of a CNN.</li>
        <li>The model is trained on the pneumonia_mist dataset, and it achieves around an 80-85% accuracy on unseen data.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/pneumonia_mnist_CNN/' class='link'>More</a>
      </div>

      <h2>Real Time Colour Detector</h2> <hr>
      <h3>Personal Project</h3> (NOV 2025 - DEC 2025)
      <h3>Technologies Used</h3>
      <ul>
        <li>Python</li>
        <li>OpenCV</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>OpenCV</li>
        <li>Pixel level operations</li>
        <li>Python Programming</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>The project utilises the computers webcam, where the provided colour range is isolated and highlighted.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/Real_Time_Color_Detection' class='link'>More</a>
      </div>

      <h2>EdibleEducation</h2> <hr>
      <h3>University of Westminster | Final Year Project</h3> (SEP 2024 - MAY 2025)
      <h3>Technologies Used</h3>
      <ul>
        <li>MERN stack</li>
        <li>JavaScript</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Background Research</li>
        <li>Complete Project Development Lifecycle</li>
        <li>Agile methodological approach</li>
        <li>DSDM</li>
        <li>Stakeholder analysis</li>
        <li>Requirement engineering</li>
        <li>White- & Black-box testing</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>Designed a platform to promote home cooking, knowledge sharing and foster collaborative home cooking to promote a healthier lifestyle, sustainable habits and cross-cultural exchanges.</li>
        <li>Conducted thorough background research, utilised and improved academic writing and research skills.</li>
        <li>Created and directed project development timeline, methodological approach (Agile, DSDM) and wider societal implications.</li>
        <li>Implemented a detailed requirement gathering process, analysed stakeholders of the project, used onion diagrams, power/interest matrix, and user stories,  carried out interviews and workshops.</li>
        <li>Engineered a working prototype of the platform throughout 2 project iteration cycles.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://edibleeducation.netlify.app/' class='link'>EdibleEducation</a>
        <a href='https://github.com/NoelVar/FYP_EdibleEducation' class='link'>More</a>
      </div>

      <h2>Travel Tales</h2> <hr>
      <h3>University of Westminster | Coursework</h3> (APR 2025 - MAY 2025)
      <h3>Technologies Used</h3>
      <ul>
        <li>MERN stack</li>
        <li>Git</li>
        <li>REST APIs</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>TravelTales is a vibrant community-driven platform where wanderlust meets storytelling.</li>
        <li>The platform seamlessly integrates real-time country data with personal travel experiences, creating a unique space for travellers to share their adventures and connect with fellow explorers worldwide.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://traveltales-cw2.netlify.app/' class='link'>TravelTales</a>
        <a href='https://github.com/NoelVar/ASSWP_CW2_SOURCE' class='link'>More</a>
      </div>

      <h2>Java Shopping Manager Application</h2> <hr>
      <h3>University of Westminster | Coursework</h3> (DEC 2023)
      <h3>Technologies Used</h3>
      <ul>
        <li>Java</li>
        <li>Java Swing (GUI)</li>
      </ul>
      <h3>Skills Gained</h3>
      <ul>
        <li>Object Oriented Programming</li>
        <li>Java Programming</li>
        <li>CRUD</li>
        <li>GUI development</li>
      </ul>
      <h3>Description:</h3>
      <ul>
        <li>A Java-based Shopping Manager application developed as a coursework project for the Object-Oriented Programming module.</li>
        <li>The Westminster Shopping Manager is a dual-interface application that serves both managers and customers.</li>
        <li>It features a terminal-based menu for managers and a graphical user interface (GUI) for customers.</li>
      </ul>
      <div class='linkContainer'>
        <a href='https://github.com/NoelVar/Java_ShoppingManager/' class='link'>More</a>
      </div>
      `,
    },
    'Experience.json': {
      id: 'Experience.json',
      path: 'src > pages > Experience.md',
      language: "html",
      content: `<h1 class="mainTitle">Work Experience</h1> <hr>

      <h2>Freelance Web Developer</h2> <hr>
      <h3>Landscaping & Maintenance Company</h3> (AUG 2026 - present day)
      <h3>Description:</h3>
      <ul>
        <li>Conducting client interviews to define scope and gather feature requirements for the custom web application</li>
        <li>Designing a responsive wireframe and prototypes using Figma to meet client needs prior to development</li>
        <li>Utilising React, TypeScript, and Tailwind CSS to ensure a scalable development approach and integrate SEO</li>
      </ul>
      <div class='linkContainer'>
      </div>

      <h2>Student as Researcher</h2> <hr>
      <h3>University of Westminster</h3> (May 2025 - Dec 2025)
      <h3>Description:</h3>
      <ul>
        <li>Developed a conceptual framework for an interactive platform that enables elderly people to access, understand, and interact with complicated health-related digital content</li>
        <li>Collaborated within a cross-functional team of researchers and academic stakeholders to deliver project objectives.</li>
        <li>Conducted detailed investigations across 30+ academic sources to identify solutions and evaluate competing approaches.</li>
        <li>Took initiative and ownership to produce highly detailed documentation that compared the performance of 4 different NLP tools on health-related documentation.</li>
        <li>Applied analytical and problem-solving skills to evaluate findings and communicate them with non-technical team members</li>
      </ul>
      <div class='linkContainer'>
      </div>
      
      <h2>Students Helper for Matchmaking Program (Frontend Developer)</h2> <hr>
      <h3>University of Westminster</h3> (Dec 2024 - Mar 2025)
      <h3>Description:</h3>
      <ul>
        <li>AIM: To develop a matchmaking algorithm that connects university students and academics with research opportunities, based on their interests</li>
        <li>Co-designed and developed a React frontend for a matchmaking platform connecting students with academic staff</li>
        <li>Supported the creation and managed a survey to collect participant profiles and research focus areas</li>
        <li>Successfully matched over 180 participants into interdisciplinary teams</li>
        <li>Demonstrated adaptability by helping redesign project delivery processes while maintaining overall objectives.</li>
      </ul>
      <div class='linkContainer'>
      </div>
      
      <h2>SETS-Project Team Member</h2> <hr>
      <h3>University of Westminster</h3> (Mar 2024 - Apr 2024)
      <h3>Description:</h3>
      <ul>
        <li>Formulated a more nuanced and scalable evaluation of Text Summarisation techniques</li>
        <li>Collected and analysed over 300 research papers from 6 established databases</li>
      </ul>
      <div class='linkContainer'>
      </div>
      
      <h2>Student as Co-Creators Project (CODEMATICS)</h2> <hr>
      <h3>University of Westminster</h3> (Feb 2023 - Jul 2023)
      <h3>Description:</h3>
      <ul>
        <li>Collaborated with fellow students and academic staff to bridge the gap between level 4 Mathematics and Programming</li>
        <li>Organised and oversaw a workshop for over 40 attendees, including both academics and students</li>
        <li>Gathered and analysed surveys from the workshop and designed an Ontology</li>
      </ul>
      <div class='linkContainer'>
      </div>`,
    },
    "NoelVarga.jpg": {
      id: 'NoelVarga.jpg',
      path: 'frontend > public > NoelVarga.jpg',
      language: "image",
      content:`/me.jpg`
    }
  }
};