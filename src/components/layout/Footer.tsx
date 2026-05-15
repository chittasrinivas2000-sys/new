
const menuItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
]

export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] px-6 py-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[200px] w-[200px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-[10%] bottom-0 h-[200px] w-[200px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-2xl font-black text-transparent">
            NovaTech
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            © 2026 NovaTech. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium text-slate-400 transition-all duration-300 hover:text-cyan-300"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}