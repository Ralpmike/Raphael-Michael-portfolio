"use client";

import { motion } from "framer-motion";
import Icons from "@/components/icons";

const skills = [
  { name: "React", icon: <Icons.React size={40} />, color: "#61DAFB" },
  { name: "Next.js", icon: <Icons.NextJs size={40} />, color: "#000000" },
  {
    name: "JavaScript",
    icon: <Icons.JavaScript size={40} />,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: <Icons.TypeScript size={40} />,
    color: "#3178C6",
  },
  {
    name: "React Query",
    icon: <Icons.ReactQuery size={40} />,
    color: "#FF4154",
  },
  {
    name: "React Router",
    icon: <Icons.ReactRouter size={40} />,
    color: "#CA4245",
  },
  { name: "shadcn/ui", icon: <Icons.ShadcnUi size={40} />, color: "#000000" },
  {
    name: "Material UI",
    icon: <Icons.MaterialUi size={40} />,
    color: "#0081CB",
  },
  {
    name: "Tailwind CSS",
    icon: <Icons.TailwindCss size={40} />,
    color: "#06B6D4",
  },
  { name: "jQuery", icon: <Icons.Jquery size={40} />, color: "#0769AD" },
  { name: "AJAX", icon: <Icons.Ajax size={40} />, color: "#4285F4" },
  {
    name: "React Hook Form",
    icon: <Icons.ReactHookForm size={40} />,
    color: "#EC5990",
  },
  { name: "Bootstrap", icon: <Icons.Bootstrap size={40} />, color: "#7952B3" },
  {
    name: "Framer Motion",
    icon: <Icons.FramerMotion size={40} />,
    color: "#0055FF",
  },
  { name: "Redux", icon: <Icons.Redux size={40} />, color: "#764ABC" },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-emerald-800/5 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
          <p className="text-muted-foreground max-w-[700px]">
            A showcase of the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <div
                className="w-16 h-16 mb-3 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                {skill.icon}
              </div>
              <h3 className="font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
