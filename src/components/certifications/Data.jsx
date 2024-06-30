// Data.jsx
import java from "../../assets/certifications/Data Structure And Algorithms Using Java_page-0001.jpg";
import flutter from "../../assets/certifications/flutter.jpg";
import keras from "../../assets/certifications/keras.jpg";
import modern from "../../assets/certifications/Programming In Modern C++_page-0001.jpg";
import python from "../../assets/certifications/python.jpg";
import web from "../../assets/certifications/web.jpg";

const certifications = [
  {
    id: 1,
    img: modern,
    title: "Programming in modern C++",
    date: "October, 2023",
    author: "NPTEL",
  },
  {
    id: 2,
    img: java,
    title: "Data Structure and Algorithms in Java",
    date: "October, 2023",
    author: "NPTEL",
  },

  {
    id: 3,
    img: flutter,
    title: "Flutter and Dart - The Complete Guide",
    date: "Feb, 2024",
    author: "Udemy",
  },
  {
    id: 4,
    img: python,
    title: "The Complete Python Bootcamp for Zero to Hero",
    date: "March, 2024",
    author: "Udemy",
  },
  {
    id: 5,
    img: keras,
    title: "Complete Tensorflow 2 and Keras Deep Learning Bootcamp",
    date: "June, 2024",
    author: "Udemy",
  },
  {
    id: 6,
    img: web,
    title: "The Web Developer Bootcamp 2024",
    date: "June, 2024",
    author: "Udemy",
  }
];

export default certifications;
