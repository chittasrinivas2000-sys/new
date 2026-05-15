import { Button } from "@/components/ui/button"

const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
]

export default function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-2xl">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[120px] w-[120px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[10%] top-0 h-[120px] w-[120px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection("home")}
          className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-3xl font-black tracking-tight text-transparent"
        >
          NovaTech
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
        <Button
          onClick={() =>
            scrollToSection("contact")
          }
          className="h-11 rounded-full bg-blue-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30"
        >
          Get Started
        </Button>
      </div>
    </header>
  )
}