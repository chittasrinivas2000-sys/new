

import { motion } from "framer-motion"
import {
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    title: "Web Development",
    description:
      "Premium responsive websites and scalable web applications built with modern technologies.",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    description:
      "Elegant user interfaces and seamless user experiences focused on usability and design.",
    icon: Layers3,
  },
  {
    title: "Startup Solutions",
    description:
      "Helping startups launch fast with scalable architecture and modern digital products.",
    icon: Rocket,
  },
  {
    title: "Performance Optimization",
    description:
      "High-speed optimized applications delivering smooth and efficient performance.",
    icon: Sparkles,
  },
  {
    title: "Secure Architecture",
    description:
      "Modern secure systems designed with reliability and scalability in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Growth",
    description:
      "Building digital experiences that help businesses grow and scale globally.",
    icon: ArrowUpRight,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#020617] px-6 py-32"
    >

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[-10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-3xl" />


        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />

            <span className="text-sm font-medium text-slate-300">
              Our Services
            </span>
          </div>


          <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Solutions Designed
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              For Modern Businesses
            </span>
          </h2>


          <p className="mt-8 text-lg leading-8 text-slate-400">
            We deliver premium digital services combining
            innovation, performance, and modern design to
            help businesses scale in the digital world.
          </p>
        </motion.div>


        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-blue-500/10"
              >

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>


                <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                  <Icon className="h-8 w-8 text-cyan-300" />
                </div>


                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-10 flex items-center text-sm font-medium text-cyan-300">
                  Learn More

                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>


                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}