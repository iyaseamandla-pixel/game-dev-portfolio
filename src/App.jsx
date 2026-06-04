import { useState, useEffect } from 'react'
import { Menu, X, Gamepad2, Code2, Palette, Globe, Mail, Github, Linkedin, ExternalLink, ChevronDown, Terminal, Cpu, Sparkles } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const tools = [
    { name: 'Godot', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Defold', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Solar 3D', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Panda 3D', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Stride (Xenko)', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Unity', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Unreal Engine', category: 'Engine', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Blender', category: '3D Art', icon: <Palette className="w-6 h-6" /> },
    { name: 'C# / C++', category: 'Code', icon: <Code2 className="w-6 h-6" /> },
    { name: 'GDScript', category: 'Code', icon: <Terminal className="w-6 h-6" /> },
    { name: 'GLSL / HLSL', category: 'Shaders', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Shader Graph', category: 'Shaders', icon: <Sparkles className="w-6 h-6" /> },
  ]

  const projects = [
    {
      title: 'Nebula Drift',
      description: 'A 2D space exploration roguelike built in Godot 4. Procedural galaxy generation, dynamic combat system, and shader-based nebula visuals.',
      tech: ['Godot', 'GDScript', 'GLSL'],
      status: 'Live Demo',
    },
    {
      title: 'Dungeon Protocol',
      description: 'Multiplayer dungeon crawler prototype in Defold. Real-time netcode, deterministic physics, and custom lighting engine.',
      tech: ['Defold', 'Lua', 'WebSocket'],
      status: 'Prototype',
    },
    {
      title: 'Solar Siege',
      description: '3D tower defense strategy game using Solar 3D. Modular turret building, AI pathfinding, and post-processing pipeline.',
      tech: ['Solar 3D', 'C#', 'HLSL'],
      status: 'In Development',
    },
    {
      title: 'Xenko Outpost',
      description: 'Sci-fi base builder prototype in Stride (Xenko). Voxel terrain, resource management, and day-night cycle shaders.',
      tech: ['Stride', 'C#', 'Shader Graph'],
      status: 'Prototype',
    },
    {
      title: 'Panda Quest',
      description: 'Educational 3D platformer built with Panda 3D. Physics-based puzzles, character animation system, and level editor.',
      tech: ['Panda 3D', 'Python', 'Blender'],
      status: 'Released',
    },
    {
      title: 'VoxelForge',
      description: 'Procedural voxel world generator with Unity. Infinite terrain, biomes, multiplayer support, and modding API.',
      tech: ['Unity', 'C#', 'Blender'],
      status: 'In Development',
    },
  ]

  const services = [
    {
      title: 'Game Programming',
      desc: 'Gameplay systems, AI, networking, and engine-level code in C#, C++, GDScript, and Lua.',
      icon: <Code2 className="w-8 h-8 text-glow-cyan" />,
    },
    {
      title: 'Engine Development',
      desc: 'Custom tools, editor extensions, render pipelines, and optimization for Godot, Unity, and custom engines.',
      icon: <Cpu className="w-8 h-8 text-glow-purple" />,
    },
    {
      title: 'Technical Art',
      desc: 'Shaders, VFX, procedural materials, and pipeline tools bridging art and engineering.',
      icon: <Palette className="w-8 h-8 text-glow-pink" />,
    },
    {
      title: 'Prototyping',
      desc: 'Rapid iteration on game concepts — from paper design to playable vertical slice in any engine.',
      icon: <Sparkles className="w-8 h-8 text-glow-cyan" />,
    },
  ]

  return (
    <div className="min-h-screen bg-dark-bg text-slate-200">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white tracking-tight">
            <span className="text-glow-cyan">G</span>ame<span className="text-glow-purple">D</span>ev
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-400 hover:text-glow-cyan transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 text-sm font-semibold text-dark-bg bg-glow-cyan rounded-lg hover:bg-cyan-300 transition-colors">
              Hire Me
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-card border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-slate-400 hover:text-glow-cyan" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 text-center font-semibold text-dark-bg bg-glow-cyan rounded-lg" onClick={() => setMobileMenuOpen(false)}>
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-glow-purple/10 via-dark-bg to-dark-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-glow-cyan mb-8">
            <Gamepad2 className="w-4 h-4" />
            <span>Available for freelance & contracts</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow-cyan to-glow-purple">Immersive Worlds</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Game developer specializing in gameplay programming, engine tools, and technical art.
            Experienced with Godot, Defold, Solar 3D, Panda 3D, Stride, Unity, and Unreal Engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-4 text-lg font-semibold text-dark-bg bg-gradient-to-r from-glow-cyan to-cyan-400 rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8 text-slate-500">
            <a href="#" className="hover:text-glow-cyan transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-glow-purple transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-glow-pink transition-colors"><Globe className="w-6 h-6" /></a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-glow-purple">Me</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm a passionate game developer with deep expertise across multiple engines and platforms.
                From rapid 2D prototypes in Godot and Defold to ambitious 3D projects in Unity, Unreal,
                Solar 3D, and Stride — I thrive on turning creative concepts into playable experiences.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                My background spans gameplay programming, AI systems, networked multiplayer, shader development,
                and custom engine tooling. I've worked on everything from indie roguelikes to educational platformers
                and procedural voxel worlds.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-dark-card border border-white/5">
                  <div className="text-2xl font-bold text-glow-cyan">6+</div>
                  <div className="text-xs text-slate-500 mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-card border border-white/5">
                  <div className="text-2xl font-bold text-glow-purple">15+</div>
                  <div className="text-xs text-slate-500 mt-1">Projects Shipped</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-card border border-white/5">
                  <div className="text-2xl font-bold text-glow-pink">8+</div>
                  <div className="text-xs text-slate-500 mt-1">Engines Used</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-glow-cyan/20 to-glow-purple/20 rounded-2xl blur-xl" />
              <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8 glow-border">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-glow-cyan" />
                  What I Do
                </h3>
                <div className="space-y-4">
                  {services.map((s, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-dark-surface/50 hover:bg-dark-surface transition-colors">
                      <div className="mt-1">{s.icon}</div>
                      <div>
                        <div className="font-semibold text-white text-sm">{s.title}</div>
                        <div className="text-xs text-slate-400 mt-1 leading-relaxed">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-dark-card/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tools & <span className="text-glow-cyan">Technologies</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Multi-engine expertise. I pick the right tool for each project — from lightweight 2D frameworks to full 3D pipelines.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, i) => (
              <div key={i} className="group p-5 rounded-xl bg-dark-card border border-white/5 hover:border-glow-cyan/30 card-hover">
                <div className="text-slate-500 group-hover:text-glow-cyan transition-colors mb-3">
                  {tool.icon}
                </div>
                <div className="font-semibold text-white text-sm">{tool.name}</div>
                <div className="text-xs text-slate-500 mt-1">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-glow-pink">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A selection of games and prototypes I've built across different engines and genres.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative bg-dark-card border border-white/5 rounded-2xl overflow-hidden card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.status === 'Live Demo' ? 'bg-green-500/10 text-green-400' :
                      project.status === 'Released' ? 'bg-blue-500/10 text-blue-400' :
                      project.status === 'Prototype' ? 'bg-purple-500/10 text-purple-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-glow-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-md bg-dark-surface text-slate-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-dark-card/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="text-glow-cyan">Together</span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Open for freelance contracts, full-time opportunities, and collaboration on interesting game projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:hello@gamedev.dev" className="px-8 py-4 text-lg font-semibold text-dark-bg bg-gradient-to-r from-glow-cyan to-cyan-400 rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2">
              <Mail className="w-5 h-5" />
              hello@gamedev.dev
            </a>
            <a href="#" className="px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-slate-500">
            <a href="#" className="hover:text-glow-cyan transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-glow-purple transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-glow-pink transition-colors"><Globe className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-slate-600">
        <p> Game Development Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
