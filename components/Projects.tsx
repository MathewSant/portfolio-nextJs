
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Expedit Lawtech",
      description: "Plataforma de gestão jurídica com funcionalidades avançadas para advogados e escritórios de advocacia.",
      technologies: ["PHP", "Laravel", "JavaScript", "Tailwind CSS", "MySql", "MongoDB", "Redis", "Docker", "Linux"],
      image: "https://app.expedit.com.br/shared/themes/painel-new/assets/_img/logo-h.png",
      githubUrl: "#",
      liveUrl: "https://www.expedit.com.br/",
      highlights: ["Integração com APIs REST", "Autenticação JWT", "Dashboard de métricas"]
    },
    {
      title: "Code by Mateus",
      description: "Portfólio pessoal e blog com artigos sobre desenvolvimento web e tecnologia.",
      technologies: ["Laravel", "JavaScript", "Tailwind"],
      image: "https://codebymateus.com/assets/images/team/fotograph_main.webp",
      githubUrl: "#",
      liveUrl: "https://codebymateus.com/",
      highlights: ["Blog integrado", "Galeria de projetos", "Formulário de contato"]
    },
    {
      title: "Vagas Farma",
      description: "Plataforma de vagas de emprego para o setor farmacêutico, com recursos de busca e filtragem avançados.",
      technologies: ["Laravel", "MySql", "PWA"],
      image: "https://www.vagasfarma.com.br/shared/themes/site/images/logo.png",
      githubUrl: "#",
      liveUrl: "https://www.vagasfarma.com.br/",
      highlights: ["Busca por localização", "Filtros avançados", "Interface responsiva"]
    },
    {
      title: "Vitorina Consertos",
      description: "Site de serviços de conserto e manutenção, com agendamento online e informações detalhadas.",
      technologies: ["HTML", "Css", "Javascript", "SEO", "Animações", "Responsive Design"],
      image: "https://www.vitorinaconsertos.com.br/assets/images/main-slider/your-style.png",
      githubUrl: "#",
      liveUrl: "https://www.vitorinaconsertos.com.br/",
      highlights: ["Performance otimizada", "SEO avançado", "Animações fluidas"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meus <span className="text-blue-600">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades 
            e evolução como desenvolvedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px]">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Destaques:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    Ver Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
