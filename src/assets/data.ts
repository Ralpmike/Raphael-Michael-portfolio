import { ProjectDTO } from "@/types/project/project";

export const projectsData: ProjectDTO[] = [
  {
    title: "Number Guessing Game",
    description:
      " A simple number guessing game built with vanilla JavaScript, HTML, and CSS.",
    image: "/images/guess-the-number.jpeg",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://ralpmike.github.io/guessing-numbers/",
    githubUrl: "https://github.com/Ralpmike/guessing-numbers",
  },
  {
    title: "Product Listing App",
    description:
      " A product listing app built with React. It allows users to add products to their cart, increase or decrease the quantity, remove products, clear the cart, and checkout.",
    image: "/images/Product-listing.png",
    tags: ["React", "Typescript", "Tailwind CSS", "Vite"],
    liveUrl: "https://product-list-with-cart-black.vercel.app/",
    githubUrl: "https://github.com/Ralpmike/product-list-with-cart.git",
  },
  {
    title: "Pig Game",
    description:
      " A simple pig game built with vanilla JavaScript, HTML, and CSS.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["HTML", "JavaScript (JS)", "CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Ralpmike/Raphael-Michael-portfolio.git",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data for any location.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
  },
];