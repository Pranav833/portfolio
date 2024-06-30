import HandyHelper from "../../assets/projects/handy helper.png";
import Calculator from "../../assets/projects/Calculator.png";
import IOT from "../../assets/projects/IOT.png";
import MultiPlayer from "../../assets/projects/Multiplayer.png";
import Arm from "../../assets/projects/robotic arm.png";
import Puzzle from "../../assets/projects/puzzle.png";
import T2V from "../../assets/projects/T2V.png";

import {
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaRobot,
  FaJava,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiArduino,
  SiLinux,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiReact,
} from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai"; // General AI icon
import { FaGithub } from "react-icons/fa";
// import {  FaExternalLinkAlt } from "react-icons/fa";

export const projectsData = [
  {
    id: 3,
    image: HandyHelper, // Placeholder image, replace with actual image if available
    title: "Handy Helper - Application for Household Chores",
    category: "app",
    description:
      "Developed an app using Flutter and Firebase to connect local labor workers with users for household chores.",
    points: [
      "Connected local labor workers with users for household chores",
      "Empowered the local economy",
      "Increased labor engagement by 40%",
      "Utilized Flutter and Firebase technologies",
    ],
    icons: [SiFlutter, SiFirebase],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/HandyHelper.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#", icon: FaExternalLinkAlt },
    ],
  },
  {
    id: 4,
    image: Arm, // Placeholder image, replace with actual image if available
    title: "Automated Singulation Using Computer Vision",
    category: "robotics",
    description:
      "Created a system using ROS, Arduino, and YOLOv5 for package detection and robotic arm control.",
    points: [
      "Achieved 95% accuracy in package detection",
      "Implemented robotic arm control",
      "Improved handling efficiency by 20%",
      "Utilized ROS, Arduino, and YOLOv5 technologies",
    ],
    icons: [SiLinux, SiArduino, FaRobot],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/Automated-Singulation-using-Computer-Vision.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#" },
    ],
  },
  {
    id: 5,
    image: Puzzle, // Placeholder image, replace with actual image if available
    title: "Algorithmic Puzzle Solver",
    category: "web",
    description:
      "Developed a web-based Sudoku solver using Python and created a Dots and Square game with an AI bot using the A-Star algorithm.",
    points: [
      "Reduced solve time by 50% and provided instant solutions",
      "Achieved a 90% win rate against human players",
      "Utilized Python for Sudoku solver",
      "Implemented AI bot using the A-Star algorithm",
    ],
    icons: [FaHtml5, FaCss3, FaPython, FaJsSquare],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/Algorithmic-puzzle-solver.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#" },
    ],
  },
  {
    id: 6,
    image: T2V, // Placeholder image, replace with actual image if available
    title: "Text to Video Platform",
    category: "web",
    description:
      "The website transforms users' stories into short 1-2 minute videos and converts articles into informative videos.",
    points: [
      "Transforms users' stories into short 1-2 minute videos",
      "Converts articles into informative videos",
      "Utilizes Django, Flask, and Generative AI technologies",
      "Makes news more engaging and interesting",
    ],
    icons: [SiDjango, SiFlask, AiOutlineRobot],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/Text-To-Video.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#" },
    ],
  },
  {
    id: 7,
    image: MultiPlayer, // Placeholder image, replace with actual image if available
    title: "Multiplay Zone",
    category: "app",
    description:
      "Created a multiplayer gaming application using Flutter, Node.js, MongoDB (Atlas), and Socket.IO, achieving real-time synchronization with sub-second latency for 2-player matches.",
    points: [
      "Achieved real-time synchronization with sub-second latency for 2-player matches",
      "Included games like XO, Dot-and-Square",
      "Implemented AI bots using A-star and backtracking algorithms",
      "Utilized Flutter, Node.js, MongoDB (Atlas), and Socket.IO",
    ],
    icons: [FaNodeJs, SiFlutter, SiMongodb],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/Multiplayer_XOGame.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#" },
    ],
  },
  {
    id: 8,
    image: Calculator, // Placeholder image, replace with actual image if available
    title: "CLI Scientific Calculator",
    category: "tools",
    description:
      "Provides an interactive command line interface for calculating expressions, including trigonometry and logarithms.",
    points: [
      "Provides an interactive command line interface",
      "Calculates expressions involving trigonometry",
      "Includes logarithmic calculations",
      "Implemented the first three phases of compiler design",
    ],
    icons: [FaJava],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/CLI-Scientific-Calculator.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#" },
    ],
  },
  {
    id: 9,
    image: IOT, // Placeholder image, replace with actual image if available
    title: "IoT Attendance System",
    category: "iot",
    description:
      "Automates attendance collection using WebSocket with ESP32 for robust connection and biometric sensor for marking attendance.",
    points: [
      "Automates attendance collection",
      "Utilizes WebSocket with ESP32 for robust connection",
      "Includes biometric sensor for marking attendance",
      "Saves time and improves efficiency",
    ],
    icons: [SiReact, FaNodeJs, SiMongodb],
    links: [
      { buttonName: "Code", linkAdd: "https://github.com/Pranav833/IOT-Attendence-System.git", icon: FaGithub },
      // { buttonName: "Demo", linkAdd: "#" },
    ],
  },
  // Add more projects as needed
];

export const projectsNav = [
  { name: "all" },
  { name: "web" },
  { name: "app" },
  { name: "robotics" },
  { name: "tools" },
  { name: "iot" },
  // { name: "others" },
];
