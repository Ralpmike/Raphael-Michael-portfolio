"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-muted/30 flex items-center justify-center"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a passionate frontend developer with expertise in modern
            JavaScript frameworks and libraries. I specialize in building
            responsive, accessible, and performant web applications using React,
            Next.js, and other cutting-edge technologies. With a keen eye for
            design and a commitment to clean, maintainable code, I strive to
            create exceptional user experiences that blend form and function
            seamlessly.
          </p>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or sharing my
            knowledge with the developer community. I&apos;m always eager to
            take on new challenges and collaborate on innovative projects.
          </p>
        </motion.div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="/files/raphael-michael-cv.pdf" download>
              <FileText className="h-4 w-4" />
              View Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
