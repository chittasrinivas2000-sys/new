

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const scrollToServices = () => {
        const section = document.getElementById("services")

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            })
        }
    }

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#020617] pt-32"
        >

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

                <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute bottom-[-10%] left-[35%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >

                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />

                            <span className="text-sm font-medium text-slate-300">
                                Building Modern Digital Experiences
                            </span>
                        </div>


                        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                            Create
                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                Next Generation
                            </span>
                            Websites
                        </h1>


                        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
                            We craft elegant, scalable, and high-performance
                            digital products with modern UI, smooth user
                            experiences, and clean architecture.
                        </p>


                        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                            <Button
                                onClick={scrollToServices}
                                className="group h-14 rounded-full bg-blue-500 px-8 text-base font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30"
                            >
                                Explore Services

                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>

                            <Button
                                variant="outline"
                                className="h-14 rounded-full border-white/10 bg-white/5 px-8 text-base text-white backdrop-blur-xl hover:bg-white/10"
                            >
                                <Play className="mr-2 h-4 w-4" />
                                Watch Demo
                            </Button>
                        </div>


                        <div className="mt-20 grid grid-cols-3 gap-6">
                            {[
                                { value: "100+", label: "Projects" },
                                { value: "50+", label: "Clients" },
                                { value: "5+", label: "Years" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                                >
                                    <h3 className="text-3xl font-bold text-white">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-400">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >

                        <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                            </div>

                            <div className="mt-8 space-y-5">
                                <div className="h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-violet-500/20" />

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="h-40 rounded-3xl bg-white/5" />

                                    <div className="space-y-5">
                                        <div className="h-16 rounded-2xl bg-white/5" />
                                        <div className="h-16 rounded-2xl bg-white/5" />
                                    </div>
                                </div>

                                <div className="h-24 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
                            </div>


                            <div className="absolute -left-10 top-20 rounded-3xl border border-white/10 bg-[#0F172A]/80 p-5 backdrop-blur-xl">
                                <p className="text-sm text-slate-400">
                                    Performance
                                </p>

                                <h4 className="mt-2 text-3xl font-bold text-white">
                                    99%
                                </h4>
                            </div>

                            <div className="absolute -bottom-8 right-10 rounded-3xl border border-white/10 bg-[#0F172A]/80 p-5 backdrop-blur-xl">
                                <p className="text-sm text-slate-400">
                                    User Experience
                                </p>

                                <h4 className="mt-2 text-3xl font-bold text-white">
                                    A+
                                </h4>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}