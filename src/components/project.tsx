"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
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
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
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

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-muted/30 flex items-center justify-center "
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
          <p className="text-muted-foreground max-w-[700px]">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-[repeat(auto-fit,_minmax(400px,1fr))]
"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="">
              <Card className="overflow-hidden h-full">
                <div className="relative h-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className=" bg-emerald-800 hover:bg-emerald-700"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
