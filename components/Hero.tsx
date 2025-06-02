
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="https://codebymateus.com/assets/images/team/fotograph_main.webp"
              alt="Foto de perfil"
              className="w-48 h-48 rounded-full mx-auto shadow-xl border-4 border-white object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">Mateus</span> Santiago
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Full Stack apaixonado por tecnologia e inovação
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Conheça mais sobre mim
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Ver meus projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
