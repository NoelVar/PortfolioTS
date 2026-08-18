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
      content: `const Developer = {\n  name: "Noel Varga",\n  role: "MSc Advanced Computing Student",\n  company: "King's College London",\n  education: [{\n    course: "BSc Computer Science",\n    uni: "University of Westminster",\n    grade: "1st Class", // Achieved\n    date_from: "2022-09",\n    date_to: "2025-07"\n  },\n  {\n    course: "MSc Advanced Computing",\n    uni: "King's College London",\n    grade: "2:1 or 1st Class" // Predicted\n    date_from: "2025-09",\n    date_to: "2026-08")\n  }],\n  skills: {\n    programming_languages: ["JavaScript", "TypeScript", "Python", "Java"],\n    web_software_dev: ["React", "Node.js", "Express.js", "HTML/CSS", "MongoDB", "SQL", "Git", "REST APIs", "Agile", "DSDM", "Requirements Engineering", "Testing", "User Focused Design"],\n    machine_learning: ["Deep Learning", "CNNs", "Vision Transformer", "Image Classification", "Semantic Segmentation", "PyTorch"],\n    research: ["Literature Review", "Data Analysis", "Stakeholder Analysis", "Presentation Skills", "Project Planning"]\n  },\n  hobbies: ["Cooking", "Photography", "Guitar", "Reading", "Development"] \n };`,
    },
    'Projects.json': {
      id: 'Projects.json',
      path: 'src > data > Projects.json',
      language: "json",
      content: `[\n  {\n    "title": "Terrain Perception",\n    "tech": ["PyTorch", "MMSegmentation"]\n  }\n]`,
    }
  },
  nonTechnical: {
    'About.tsx': {
      id: 'About.tsx',
      path: 'src > pages > About.html',
      language: "html",
      content: `<h1>Welcome</h1>! \n<p>My name is Noel Varga and I am an MSc Advanced Computing student at <b>King's College London</b>.</p> \n<p>I have strong foundations in software engineering, Python development, full-Stack development, and user-focused web development.<p> \n\n<h2>Education</h2> \n  <p>MSc Advanced Computing | King’s College London (Sep 2025 - Aug 2026)<p> <!-- Predicted 2:1 or 1st Class --> \n  <p>BSc Computer Science | University of Westminster (Sep 2022 - Jul 2025)<p> <!-- Achieved 1st Class --> \n\n<h2>Skills</h2> \n<h3>Programming Languages:</h3> \n<ul> \n    <li>JavaScript</li> \n    <li>TypeScript</li> \n    <li>Python</li> \n    <li>Java</li> \n</ul> \n\n<h3>Web & Sofware Development:</h3> \n<ul> \n    <li>React</li> \n    <li>Node.js</li> \n    <li>Express.js</li> \n    <li>HTML/CSS</li> \n    <li>MongoDB</li> \n    <li>SQL</li> \n    <li>Git</li> \n    <li>REST APIs</li> \n    <li>Agile</li> \n    <li>DSDM</li> \n    <li>Requirements Engineering</li> \n    <li>Testing</li> \n    <li>User Focused Design</li> \n</ul> \n\n<h3>Machine Learning:</h3> \n<ul> \n    <li>Deep Learning</li> \n    <li>CNNs</li> \n    <li>Vision Transformer</li> \n    <li>Image Classification</li> \n    <li>Semantic Segmentation</li> \n    <li>PyTorch</li> \n</ul> \n\n<h3>Research:</h3> \n<ul> \n    <li>Literature Review</li> \n    <li>Data Analysis</li> \n    <li>Stakeholder Analysis</li> \n    <li>Presentation Skills</li> \n    <li>Project Planning</li> \n</ul> \n\n<h3>Hobbies</h3> \n<ul> \n    <li>Cooking</li> \n    <li>Photography</li> \n    <li>Guitar</li> \n    <li>Reading</li> \n    <li>Development</li> \n</ul> `,
    },
    'Projects.json': {
      id: 'Projects.json',
      path: 'src > page > Projects',
      language: "txt",
      content: `1. Terrain Perception Model: An AI system designed to analyze and segment off-road environments for autonomous navigation.`,
    }
  }
};