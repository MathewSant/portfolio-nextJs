
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/MathewSant", icon: "🐙" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mateus--sobral/", icon: "💼" },
    { name: "Email", url: "mailto:mateussantiagomm@gmail.com", icon: "📧" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mateus Santiago</h3>
            <p className="text-gray-400">
              Desenvolvedor apaixonado por criar soluções tecnológicas inovadoras.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Conecte-se comigo</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-2xl hover:scale-110 transition-transform duration-300"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {currentYear} Mateus Santiago
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Feito com Next & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
