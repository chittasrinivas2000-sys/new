

import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    title: "Email Address",
    value: "hello@novatech.com",
    icon: Mail,
  },
  {
    title: "Phone Number",
    value: "+91 98765 43210",
    icon: Phone,
  },
  {
    title: "Office Location",
    value: "Hyderabad, India",
    icon: MapPin,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] px-6 py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />

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
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />

              <span className="text-sm font-medium text-slate-300">
                Contact Us
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Let’s Build
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Have a project idea or want to collaborate?
              Reach out to us and let’s create modern
              digital experiences together.
            </p>
            <div className="mt-12 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                      <Icon className="h-7 w-7 text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">
                        {item.title}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {item.value}
                      </h3>
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
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-[40px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Send Message
                </p>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  Start Your Project
                </h3>
              </div>
              <form className="mt-10 space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-[#0F172A]/80 px-5 text-white outline-none transition focus:border-cyan-400/40"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-[#0F172A]/80 px-5 text-white outline-none transition focus:border-cyan-400/40"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 text-white outline-none transition focus:border-cyan-400/40"
                  />
                </div>

                <Button className="group h-14 w-full rounded-2xl bg-blue-500 text-base font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30">
                  Send Message

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}