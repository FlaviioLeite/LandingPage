import "../styles/utility.css";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import Button from "../components/Button";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/Solutions.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import { useState } from "react";
export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <Button text="Melhore sua Presença Online" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">
            Transforme Seu Conteúdo em Lucro com a SAAREO!
          </p>

          <h1>
            Especialistas em Estratégia, Fotografia e Filmagem para Alavancar
            Sua Presença Digital.
          </h1>
          <p>
            Gestão de Mídias que Converte, Maximize o Impacto do Seu Negócio com
            Soluções Personalizadas de Conteúdo e Marketing Visual.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Melhore sua Presença Online" />
            </span>
            <span className="desktop-only">
              <Button text="Descubra Nossos Serviços" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="Solutions">
  
  <div className="section-title">
    <h2>Soluções Criativas e Eficazes para Impulsionar seu Negócio</h2>
  </div>

  
  <div className="section-description">
    <p>Na SAAREO, oferecemos soluções completas em estratégia, mídia visual e marketing para fortalecer sua presença digital.</p>
  </div>

  
  <div className="solutions">
    <div className="solution-item">
      <h3>Estratégia Digital</h3>
      <p>Criamos planos de marketing digital personalizados para o seu negócio, com foco em resultados e conversão.</p>
      <ul>
        <li>Análise de mercado</li>
        <li>SEO</li>
        <li>Planejamento de mídia</li>
        <li>Estratégias de crescimento</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Fotografia Profissional</h3>
      <p>Imagens que comunicam seu valor e marcam presença. Capturamos a essência do seu negócio.</p>
      <ul>
        <li>Fotografias corporativas</li>
        <li>Fotografias de produtos</li>
        <li>Fotografias de eventos</li>
        <li>Fotografias para redes sociais</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Produção de Vídeos</h3>
      <p>Conte histórias visuais com vídeos que engajam seu público e aumentam sua visibilidade.</p>
      <ul>
        <li>Vídeos promocionais</li>
        <li>Vídeos institucionais</li>
        <li>Depoimentos</li>
        <li>Vídeos para redes sociais</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Gestão de Mídias Sociais</h3>
      <p>Transforme suas redes sociais em verdadeiras ferramentas de venda e engajamento.</p>
      <ul>
        <li>Criação de conteúdo</li>
        <li>Gerenciamento de contas</li>
        <li>Campanhas pagas</li>
        <li>Análises de desempenho</li>
      </ul>
    </div>
  </div>


  <div className="benefits">
    <h3>Por que escolher a SAAREO?</h3>
    <ul>
      <li>Atendimento personalizado</li>
      <li>Equipe especializada</li>
      <li>Resultados comprovados</li>
      <li>Soluções sob medida</li>
    </ul>
  </div>


  <div className="cta">
    <p>Pronto para melhorar sua presença online? Fale conosco!</p>
    <a href="#" className="btn-consultancy">Solicite uma Consultoria</a>
    <a href="#" className="btn-portfolio">Veja Nosso Portfólio</a>
  </div>
</section>

    </>
  );
}
