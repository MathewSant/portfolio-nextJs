
import { Card } from "@/components/ui/card";

export const Education = () => {
  const educationData = [
    {
      degree: "Superior Tecnológico em Sistemas para Internet",
      institution: "Universidade Católica de Pernambuco (UNICAP)",
      period: "2024 - 2026",
      description: "Foco em desenvolvimento de software, banco de dados e metodologias ágeis."
    },
    {
      degree: "Programa de Formação de Desenvolvedores",
      institution: "IFPE",
      period: "2022 - 2023",
      description: "Curso intensivo de programação com ênfase em desenvolvimento web e mobile."
    },
    {
      degree: "Curso Profissionalizante de Front-end",
      institution: "Senai São Paulo",
      period: "2022 - 2023",
      description: "Curso abrangente sobre JavaScript moderno, DOM, APIs e programação assíncrona."
    },
    {
      degree: "Técnico em Mecatrônica",
      institution: "Escola Técnica Estadual Professor Agamemnon Magalhães (ETEPAM)",
      period: "2018 - 2020",
      description: "Formação técnica com ênfase em automação industrial, controle de sistemas e programação de PLCs."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Formação <span className="text-blue-600">Acadêmica</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {education.institution}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {education.period}
                  </p>
                  <p className="text-gray-600">
                    {education.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
