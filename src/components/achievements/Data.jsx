import Image1 from "../../assets/achievements/pic1.jpg";
import Image2 from "../../assets/achievements/pic2.jpg";
import Image3 from "../../assets/achievements/pic3.jpeg";
import Image4 from "../../assets/achievements/pic4.jpeg";
import Image5 from "../../assets/achievements/eyantra.jpg";
import Video1 from "../../assets/achievements/eyantra_video_3.mp4";
import Video2 from "../../assets/achievements/eyantra_video_2.mp4";

export const Data = [
  {
    id: 1,
    media: [
      { src: Image3, type: "image" },
      { src: Image4, type: "image" },
    ],
    title: "Smart India Hackthon",
    date: "December 2023",
    award: "1st Prize",
    description:
      "Developed a platform using Django that converts text into captivating videos using genAI.",
  },
  {
    id: 2,
    media: [
      { src: Image1, type: "image" },
      { src: Image2, type: "image" },
    ],
    title: "DD National Robocon 2023",
    date: "June 2023",
    award: "AIR 5",
    description:
      "In this robotics competition, we developed two robots, ER and RR, which perform various tasks like ring tossing and step climbing. We implemented parallel processing, WebSockets, and a computer vision system to improve precision and accuracy without any latency.",
  },
  {
    id: 3,
    media: [
      { src: Image5, type: "image" },
      { src: Video1, type: "video" },
      { src: Video2, type: "video" },
    ],
    title: "Eyantra 2024",
    date: "Feb 2024",
    award: "Stage 1",
    description:
      "Participated in the Lunar Scout theme, which required building a self-balancing bike and implementing a control system.",
  },
];
