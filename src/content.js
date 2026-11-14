// All site copy and data lives here, so updating content never means digging through JSX.

export const PROFILE = {
  name: "Prabal Singh",
  email: "prabals.0111@gmail.com",
  linkedin: { url: "https://www.linkedin.com/in/prabal-singh11/", handle: "prabal-singh11" },
  github: { url: "https://github.com/singhprabal1", handle: "singhprabal1" },
  resume: { url: "/resume.pdf", downloadName: "Prabal-Singh-Resume.pdf" },
  location: "San José, CA",
};

// Order here drives both the nav and the page.
export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  status: "SJSU senior · Accepted Amazon NDE offer",
  roles: [
    "Network engineering",
    "Cloud infrastructure",
    "Network automation",
    "AI for network operations",
    "Amazon NDE intern, 2026",
    "Cisco CCST certified",
  ],
  intro:
    "I'm a senior at San José State University studying Engineering Technology with a concentration in Computer Network System Management. I spent summer 2026 as a Network Development Engineer intern at Amazon, building an AI-powered diagnostic agent for failed network switch builds, and I've accepted an offer to return to Amazon as a Network Development Engineer.",
  chips: ["TCP/IP", "OSPF", "BGP", "Python", "Linux", "AWS", "Amazon Bedrock", "Cisco CLI"],
};

export const ABOUT = {
  paragraphs: [
    "I'm Prabal. I got into networking because I like figuring out how things connect and talk to each other, whether that's configuring a network, writing a script to automate the boring parts, or building a piece of hardware from scratch.",
    "My internship at Amazon brought two of my interests together: network infrastructure and AI. I spent the summer building an agent on Amazon Bedrock that helps investigate why a switch build failed. Now I'm finishing my degree at San José State, graduating in May 2027, and I've accepted an offer to return to Amazon as a Network Development Engineer.",
  ],
  facts: [
    ["Next", "Network Development Engineer, Amazon (offer accepted)"],
    ["Previously", "NDE Intern, Amazon · Summer 2026"],
    ["Education", "B.S. Engineering Technology, SJSU · May 2027"],
    ["Certified", "Cisco CCST — Networking"],
    ["Based in", "San José, CA"],
  ],
  interests: ["Homelab", "AI infrastructure", "Cloud networking", "Soccer", "Gaming", "Music"],
};

export const EXPERIENCE = [
  {
    role: "Network Development Engineer Intern",
    org: "Amazon",
    location: "Arlington, VA",
    dates: "May – Aug 2026",
    note: "Accepted offer: Network Development Engineer at Amazon",
    summary:
      "Top-of-rack (TOR) switches connect the servers in a rack to the rest of the data center network. When a switch build fails, someone has to work out what went wrong.",
    bullets: [
      "Built an AI-powered diagnostic agent using Amazon Bedrock to help investigate failed TOR switch builds.",
      "The agent produces evidence-backed diagnoses, with each conclusion tied to the evidence that supports it, along with routing recommendations.",
    ],
    tags: ["Amazon Bedrock", "AI agents", "Data center networking"],
  },
  {
    role: "Testing Engineer Intern",
    org: "UL Solutions",
    dates: "May – Aug 2025",
    bullets: [
      "Ran RF compliance testing on Wi-Fi, BLE, and LTE modules for 30+ products, validating power levels and communication stability against FCC/ISED standards.",
      "Automated test data collection with Python and Bash, cutting manual test time by about 40% and making results easier to reproduce.",
      "Operated SAR test systems and performed dielectric liquid verification and calibration checks to keep RF exposure measurements accurate.",
    ],
    tags: ["Python", "Bash", "RF testing"],
  },
  {
    role: "Peer Academic Success Coach",
    org: "University Housing Services, SJSU",
    dates: "Aug 2024 – Present",
    bullets: [
      "Advise and support 100+ first-year students as they find their footing in college and set academic goals.",
      "Designed engagement programs and workshops that increased residential community involvement by 30%.",
      "Earned 95% positive feedback in student surveys.",
    ],
  },
];

export const CERTS = [
  { name: "CCST — Networking", issuer: "Cisco", date: "Dec 2025" },
  { name: "CCNA coursework: Enterprise Networking, Security & Automation", issuer: "Cisco Networking Academy", date: "Aug 2025" },
  { name: "Excel Essential Training", issuer: "Microsoft Office", date: "Jan 2024" },
];

export const EDUCATION = {
  degree: "B.S. Engineering Technology",
  detail: "Concentration: Computer Network System Management · Minors: Business, Computer Science",
  school: "San José State University",
  date: "May 2027",
};

export const PROJECTS = {
  featured: [
    {
      name: "JobRadar",
      subtitle: "Automated internship scraper",
      date: "Mar 2026",
      desc: "Searches LinkedIn for internship listings across a set of keywords, filters out irrelevant results like senior roles, removes duplicates, and writes new listings straight into a Google Sheet. It runs on a schedule, so there's no manual searching.",
      tags: ["Python", "Apify", "Google Sheets API", "REST APIs"],
      links: [{ label: "View on GitHub", url: "https://github.com/singhprabal1/JobRadar" }],
    },
    {
      name: "Cloudathon @ SJSU 2026",
      subtitle: "AWS Jam · 2nd place",
      date: "2026",
      desc: "Placed 2nd in SJSU's AWS Jam with my team, solving all 14 challenges. I owned Application Load Balancer configuration, KMS encryption, serverless audit logging, and patch management across the environment.",
      highlight: "2nd place · 14/14 challenges solved",
      tags: ["AWS", "ALB", "KMS", "Lambda", "Systems Manager"],
    },
  ],
  earlier: [
    {
      name: "Hear the Light",
      subtitle: "LED sound-level meter",
      date: "May 2025",
      desc: "A real-time sound-level meter built on an Arduino Uno: a microphone sensor drives an LED array that responds to decibel thresholds.",
      tags: ["Arduino", "C++", "Embedded systems"],
    },
    {
      name: "Line Following Robot",
      subtitle: "Autonomous navigation",
      date: "Dec 2023",
      desc: "An Arduino robot that follows a line using infrared sensors, calibrated to track at over 95% accuracy across varied surfaces and speeds.",
      tags: ["Arduino", "IR sensors", "Robotics"],
    },
  ],
};

export const SKILL_GROUPS = [
  {
    label: "Networking & Security",
    tone: "green",
    skills: ["TCP/IP", "UDP", "DNS", "DHCP", "VLANs", "Subnetting", "NAT", "IPv4/IPv6", "OSPF", "BGP", "VPNs", "Firewalls"],
  },
  {
    label: "Cloud & Infrastructure",
    tone: "amber",
    skills: ["AWS EC2", "S3", "IAM", "VPC", "ALB", "KMS", "Lambda", "CloudWatch", "Systems Manager", "Amazon Bedrock", "Docker"],
  },
  {
    label: "Programming & Automation",
    tone: "blue",
    skills: ["Python", "Java", "SQL", "Bash", "REST APIs", "Pandas", "Apify", "Web scraping", "Config scripting"],
  },
  {
    label: "Systems & Tools",
    tone: "violet",
    skills: ["Linux", "Windows", "macOS", "Cisco CLI", "Git/GitHub", "Wireshark", "Packet Tracer", "Arduino", "Raspberry Pi"],
  },
];

export const CONTACT = {
  intro:
    "Email is the best way to reach me. I'm always happy to talk about networking, cloud infrastructure, or anything I've built here.",
};
