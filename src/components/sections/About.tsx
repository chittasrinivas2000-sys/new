

import { motion } from "framer-motion"
import { Sparkles, Layers3, Rocket } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] px-6 py-32"
    >

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[-10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <Sparkles className="mr-2 h-4 w-4 text-cyan-400" />

              <span className="text-sm font-medium text-slate-300">
                About Our Company
              </span>
            </div>


            <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Crafting Digital
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>


            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              We specialize in building premium digital
              experiences with modern technologies,
              scalable systems, and elegant interfaces.
              Our focus is delivering high-quality products
              that combine performance, design, and innovation.
            </p>


            <div className="mt-12 space-y-6">
              {[
                {
                  icon: Layers3,
                  title: "Modern Architecture",
                  description:
                    "Scalable and maintainable applications built with modern technologies.",
                },
                {
                  icon: Rocket,
                  title: "Fast Performance",
                  description:
                    "Optimized websites with smooth experiences and high-speed performance.",
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />


              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    value: "100+",
                    label: "Projects Delivered",
                  },
                  {
                    value: "50+",
                    label: "Happy Clients",
                  },
                  {
                    value: "5+",
                    label: "Years Experience",
                  },
                  {
                    value: "24/7",
                    label: "Support System",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-[#0F172A]/80 p-8"
                  >
                    <h3 className="text-4xl font-black text-white">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>


              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Our Vision
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                  Creating innovative digital experiences
                  for modern businesses worldwide.
                </h3>
              </div>
            </div>


            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}