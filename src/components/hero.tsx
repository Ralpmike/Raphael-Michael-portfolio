// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// // import Link from "next/link";

// export default function Hero() {
//   // Function to handle smooth scrolling
//   const handleScroll = (elementId: string) => {
//     const element = document.getElementById(elementId);
//     if (element) {
//       // Get the element's position relative to the viewport
//       const yOffset = -80; // Add some offset to account for fixed headers if needed
//       const y =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       // Scroll smoothly to the element
//       window.scrollTo({
//         top: y,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
//       </div>

//       <div className="container px-4 md:px-6 z-10">
//         <div className="flex flex-col items-center text-center space-y-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
//               <span className="text-emerald-800/90">Raphael Michael</span>
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
//               Frontend Developer specializing in building exceptional digital
//               experiences
//             </p>
//           </motion.div>

//           {/* <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="bg-emerald-800 hover:bg-emerald-700"
//             >
//               <Link href="#projects">View My Work</Link>
//             </Button>
//             <Button variant="outline" size="lg" asChild>
//               <Link href="#contact">Contact Me</Link>
//             </Button>
//           </motion.div> */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <Button
//               size="lg"
//               onClick={() => handleScroll("projects")}
//               className="bg-emerald-800 hover:bg-emerald-700"
//             >
//               View My Work
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => handleScroll("contact")}
//             >
//               Contact Me
//             </Button>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//         className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
//       >
//         <div className="animate-bounce" onClick={() => handleScroll("about")}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6 text-emrald-800"
//           >
//             <path d="M12 5v14" />
//             <path d="m19 12-7 7-7-7" />
//           </svg>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  // Function to handle smooth scrolling
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Get the element's position relative to the viewport
      const yOffset = -80; // Add some offset to account for fixed headers if needed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Scroll smoothly to the element
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex md:items-center md:justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container px-4 md:px-6 z-10 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              <span className="text-emerald-800/90">Raphael Michael</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              Frontend Developer specializing in building exceptional digital
              experiences
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => handleScroll("projects")}
                className="bg-emerald-800 hover:bg-emerald-700"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("contact")}
              >
                Contact Me
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/files/raphael-michael-cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-140 md:h-140 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image
                src="/images/profile-photo.jpeg"
                alt="Raphael Michael"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
      >
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => handleScroll("about")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
