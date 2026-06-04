import { useState, useEffect } from 'react'
import { Menu, X, Gamepad2, Code2, Palette, Globe, Mail, Github, Linkedin, ExternalLink, ChevronDown, Terminal, Cpu, Sparkles, Play, Layers, Wrench, Calendar, ArrowUpRight } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

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
      shortDesc: 'A 2D space exploration roguelike built in Godot 4 with procedural galaxy generation and shader-based nebula visuals.',
      description: 'Nebula Drift is a roguelike space exploration game where players pilot a ship through procedurally generated galaxies. Each run is unique — star systems, enemy factions, and resource distribution are all generated from seeded noise algorithms. The game features a custom GLSL shader pipeline for real-time nebula rendering, a dynamic faction warfare system, and permadeath progression.',
      tech: ['Godot 4', 'GDScript', 'GLSL', 'Procedural Generation'],
      status: 'In Development',
      year: '2026',
      role: 'Solo Developer',
      features: ['Procedural galaxy generation using simplex noise', 'Real-time GLSL nebula & starfield shaders', 'Dynamic faction AI with territory control', 'Roguelike permadeath with meta-progression', 'Custom pixel-art space station interiors'],
      challenges: 'Building a deterministic procedural galaxy that felt organic while keeping generation fast enough for web exports. Solved by layering multiple noise octaves with domain warping.',
      gradient: 'from-purple-600/30 via-blue-600/20 to-cyan-600/30',
      accent: 'text-purple-400',
      borderAccent: 'border-purple-500/20',
      github: 'https://github.com/femivita/nebula-drift',
      demo: null,
    },
    {
      title: 'Dungeon Protocol',
      shortDesc: 'Multiplayer dungeon crawler prototype in Defold with real-time netcode and custom lighting.',
      description: 'Dungeon Protocol is a cooperative dungeon crawler supporting up to 4 players over WebSocket connections. Built in Defold, it uses a client-prediction + server-reconciliation netcode model for responsive combat. Features include deterministic physics rollback, a custom 2D lighting system with normal maps, and a roguelite meta-progression system.',
      tech: ['Defold', 'Lua', 'WebSocket', 'Custom Netcode'],
      status: 'Prototype',
      year: '2024',
      role: 'Lead Programmer',
      features: ['Client-side prediction with server reconciliation', 'Deterministic physics for rollback netcode', 'Custom 2D normal-mapped lighting engine', 'Procedural dungeon generation (BSP + cellular)', 'Web export with instant matchmaking'],
      challenges: 'Getting deterministic physics identical across clients to support rollback. Rewrote the physics integration to use fixed-point math for critical simulation steps.',
      gradient: 'from-red-600/30 via-orange-600/20 to-yellow-600/30',
      accent: 'text-red-400',
      borderAccent: 'border-red-500/20',
      github: 'https://github.com/femivita/dungeon-protocol',
      demo: null,
    },
    {
      title: 'Solar Siege',
      shortDesc: '3D tower defense strategy in Solar 3D with modular turrets and AI pathfinding.',
      description: 'Solar Siege is a 3D tower defense game set on a ringworld megastructure. Players build modular turrets from component parts (barrels, loaders, targeting systems) to defend against waves of alien machines. Uses Solar 3D\'s C# scripting with custom HLSL post-processing for the sci-fi holographic UI and energy shield effects.',
      tech: ['Solar 3D', 'C#', 'HLSL', 'Unity-like ECS'],
      status: 'In Development',
      year: '2025',
      role: 'Gameplay & Tech Lead',
      features: ['Modular turret construction system (150+ parts)', 'Wave-based enemy AI with swarm behaviors', 'HLSL post-processing pipeline (bloom, scanlines, holograms)', 'Ringworld terrain with dynamic day/night cycle', 'Resource management & supply chain logistics'],
      challenges: 'Solar 3D has a smaller community than Unity — had to write custom editor tools for the modular turret system and contribute bug fixes upstream.',
      gradient: 'from-amber-600/30 via-orange-600/20 to-red-600/30',
      accent: 'text-amber-400',
      borderAccent: 'border-amber-500/20',
      github: 'https://github.com/femivita/solar-siege',
      demo: null,
    },
    {
      title: 'Xenko Outpost',
      shortDesc: 'Sci-fi base builder in Stride (Xenko) with voxel terrain and day-night shaders.',
      description: 'Xenko Outpost is a sci-fi colony management sim built in Stride (formerly Xenko). Players establish a base on an alien world, managing power grids, life support, and research while defending against hostile fauna. The voxel terrain engine supports real-time excavation and construction, while the day-night cycle uses Shader Graph for atmospheric scattering and bioluminescent flora.',
      tech: ['Stride', 'C#', 'Shader Graph', 'Voxel Engine'],
      status: 'Prototype',
      year: '2023',
      role: 'Solo Developer',
      features: ['Real-time voxel terrain with GPU meshing', 'Power grid simulation with circuit logic', 'Shader Graph atmospheric scattering', 'Procedural alien creature AI', 'Research tech tree with 80+ unlocks'],
      challenges: 'Stride\'s documentation was limited during development. Reverse-engineered the render pipeline to inject custom voxel meshing without breaking PBR lighting.',
      gradient: 'from-emerald-600/30 via-teal-600/20 to-cyan-600/30',
      accent: 'text-emerald-400',
      borderAccent: 'border-emerald-500/20',
      github: 'https://github.com/femivita/xenko-outpost',
      demo: null,
    },
    {
      title: 'Panda Quest',
      shortDesc: 'Educational 3D platformer in Panda 3D with physics puzzles and a level editor.',
      description: 'Panda Quest is an educational 3D platformer designed for STEM outreach programs. Built with Panda 3D and Python, it teaches basic physics concepts through gameplay — players solve puzzles using gravity, momentum, and leverage. Includes a visual level editor for educators to create custom lessons, and exports to web via Emscripten.',
      tech: ['Panda 3D', 'Python', 'Blender', 'WebGL'],
      status: 'Released',
      year: '2023',
      role: 'Full Stack Developer',
      features: ['Physics-based puzzle mechanics (levers, pulleys, ramps)', 'Visual level editor with Lua scripting hooks', 'Character animation system with Blender rigs', 'Progress tracking & achievement system', 'Web export playable in browsers'],
      challenges: 'Panda 3D\'s web export pipeline was experimental. Spent significant time optimizing geometry batching and shader compatibility for WebGL targets.',
      gradient: 'from-blue-600/30 via-indigo-600/20 to-violet-600/30',
      accent: 'text-blue-400',
      borderAccent: 'border-blue-500/20',
      github: 'https://github.com/femivita/panda-quest',
      demo: null,
    },
    {
      title: 'VoxelForge',
      shortDesc: 'Procedural voxel world generator in Unity with infinite terrain and multiplayer.',
      description: 'VoxelForge is a multiplayer voxel sandbox with infinite procedural terrain. Built in Unity with a custom C# voxel engine, it features 8 biomes with unique flora and fauna, a physics-based building system, and a modding API for community content. Networking uses Unity Netcode for GameObjects with client-authoritative building and server-side terrain validation.',
      tech: ['Unity', 'C#', 'Netcode', 'Blender'],
      status: 'In Development',
      year: '2025',
      role: 'Lead Developer',
      features: ['Infinite procedural terrain with 8 biomes', 'Unity Netcode multiplayer (up to 16 players)', 'Physics-based construction with structural integrity', 'Modding API with C# scripting sandbox', 'Custom terrain shader with triplanar mapping'],
      challenges: 'Client-authoritative building in multiplayer created sync issues. Implemented a prediction + server-validation model that reconciles without visible lag.',
      gradient: 'from-green-600/30 via-lime-600/20 to-emerald-600/30',
      accent: 'text-green-400',
      borderAccent: 'border-green-500/20',
      github: 'https://github.com/femivita/voxel-forge',
      demo: null,
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
              A selection of games and prototypes I've built across different engines and genres. Click any card for full details.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-dark-card border border-white/5 rounded-2xl overflow-hidden card-hover cursor-pointer"
              >
                {/* Thumbnail */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <Gamepad2 className={`w-12 h-12 ${project.accent} opacity-60 group-hover:scale-110 transition-transform`} />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm bg-black/40 ${
                      project.status === 'Live Demo' ? 'text-green-400' :
                      project.status === 'Released' ? 'text-blue-400' :
                      project.status === 'Prototype' ? 'text-purple-400' :
                      'text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-glow-cyan transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-glow-cyan transition-colors" />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.year}</span>
                    <span className="flex items-center gap-1"><Wrench className="w-3 h-3" /> {project.role}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, j) => (
                      <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-dark-surface text-slate-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] px-2 py-1 rounded-md text-slate-500">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className={`relative bg-dark-card border ${selectedProject.borderAccent} rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
            {/* Header Image */}
            <div className={`h-48 bg-gradient-to-br ${selectedProject.gradient} relative flex items-center justify-center`}>
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <Gamepad2 className={`w-16 h-16 ${selectedProject.accent} opacity-50`} />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {/* Title & Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  selectedProject.status === 'Live Demo' ? 'bg-green-500/10 text-green-400' :
                  selectedProject.status === 'Released' ? 'bg-blue-500/10 text-blue-400' :
                  selectedProject.status === 'Prototype' ? 'bg-purple-500/10 text-purple-400' :
                  'bg-yellow-500/10 text-yellow-400'
                }`}>
                  {selectedProject.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedProject.year}</span>
                <span className="flex items-center gap-1"><Wrench className="w-4 h-4" /> {selectedProject.role}</span>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-glow-cyan" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-md bg-dark-surface text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-glow-purple" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((f, j) => (
                    <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${selectedProject.accent.replace('text-', 'bg-')} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-8 p-4 rounded-xl bg-dark-surface/50 border border-white/5">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-glow-pink" /> Biggest Challenge
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{selectedProject.challenges}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <a href="https://github.com/femivita" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-slate-500">
            <a href="https://github.com/femivita" className="hover:text-glow-cyan transition-colors"><Github className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-slate-600">
        <p>Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
