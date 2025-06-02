
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

export const About = () => {
  const [advice, setAdvice] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data: AdviceResponse = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Erro ao buscar conselho:", error);
        setAdvice("Acredite em você mesmo e tudo será possível!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdvice();
  }, []);

  const technologies = [
    "Laravel", "PHP", "Javascript", "Tailwind CSS", 
    "MySql", "Redis", "Docker", "Linux", "MongoDB", "APIs REST", "Git/GitHub"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre <span className="text-blue-600">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou um desenvolvedor full stack com vasta experiência em criar soluções robustas e eficientes para web. Minha paixão por tecnologia me leva a estar constantemente atualizado com as melhores práticas e inovações do setor. Tenho um forte compromisso com a entrega de produtos de alta qualidade, sempre colocando as necessidades do cliente em primeiro lugar.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Minhas habilidades incluem o desenvolvimento de aplicações web escaláveis, integração de plataformas, modelagem e otimização de banco de dados. Sempre busco novas maneiras de melhorar minha expertise e fornecer o melhor suporte possível para os meus projetos.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tecnologias que domino:</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  💡 Frase do Dia
                </h3>
                {isLoading ? (
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  </div>
                ) : (
                  <blockquote className="text-lg text-gray-700 italic">
                    "{advice}"
                  </blockquote>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
