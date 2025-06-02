
import { Card } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack Pleno",
      company: "Expedit Lawtech",
      period: "Ago 2023 - Presente",
      responsibilities: [
        "Desenvolvimento e melhoria de novas features para a plataforma de gestão jurídica",
        "Integração de APIs RESTful para serviços de terceiros",
        "Implementação de testes automatizados para garantir a qualidade do código",
        "Otimização de performance e escalabilidade",
        "Colaboração em equipe ágil utilizando metodologias Scrum"
      ]
    },
    {
      title: "Desenvolvedor Freelance",
      company: "Code by Mateus",
      period: "2023 - Presente",
      responsibilities: [
        "Desenvolvimento de aplicações web personalizadas para clientes",
        "Consultoria técnica e suporte em projetos de software",
        "Criação de sites responsivos e otimizados para SEO",
        "Gerenciamento de projetos do início ao fim, incluindo planejamento, desenvolvimento e entrega"
      ]
    },
    {
      title: "Assistente Administrativo e Suporte Técnico",
      company: "Cimento Nassau S/A",
      period: "2021 - 2022",
      responsibilities: [
        "Suporte técnico a usuários internos e manutenção de sistemas",
        "Gerenciamento de dados e relatórios administrativos",
        "Colaboração com equipes de TI para melhorias de infraestrutura",
        "Treinamento de funcionários em novas ferramentas e sistemas"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experiência <span className="text-blue-600">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-lg">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {experience.period}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
