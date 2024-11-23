import "../styles/utility.css";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangletwo.png";
import "../styles/hero.css";
import Button from "../components/Button";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/Solutions.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import TestimonialsCard from "../components/testimonialsCard";
import "../styles/testimonials.css";
import fotao from "../assets/images/fotao.jpeg";
import fotao2 from "../assets/images/fotao2.jpeg";
import fotao3 from "../assets/images/fotao3.jpeg";
import Check from "../assets/Check.svg";
import { useEffect, useState } from "react";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [showMobileMenu]);

  const sendEmail = async () => {
    // Declara uma função assíncrona para enviar e-mails.

    setIsSending(true);
    // Define o estado "isSending" como verdadeiro, indicando que o envio está em andamento.

    const emailData = {
      toMail: email,
      content: message,
    };
    // Cria um objeto com os dados do email  destinatário e conteúdo a serem enviados.

    try {
      const requestOptions = {
        method: "POST", // Define o método HTTP como POST.
        headers: {
          "Content-Type": "application/json", // Define o tipo de conteúdo da requisição como JSON.
          Authorization: `Bearer `, // Adiciona um cabeçalho para autenticação (deve ser preenchido com o token correto).
        },
        body: JSON.stringify(emailData),
        // Converte os dados do e-mail em uma string JSON para enviar no corpo da requisição.
      };

      const response = await fetch("/api", requestOptions);
      // Faz a requisição HTTP para a API usando o método POST com as opções configuradas.

      if (!response.ok) {
        // Verifica se a resposta da API não indica sucesso (código de status >= 200 e < 300).
        throw new Error("Erro ao enviar e-mail.");
        // Lança um erro caso a resposta não seja bem-sucedida.
      }

      alert("E-mail enviado com sucesso!");
      // Exibe uma mensagem de sucesso ao usuário.

      setEmail("");
      setMessage("");
      // Limpa os campos de e-mail e mensagem após o envio.
    } catch (error) {
      // Bloco para tratar erros que possam ocorrer durante o envio.

      console.error("Erro ao enviar e-mail:", error);
      // Exibe o erro no console para depuração.

      alert("Erro ao enviar e-mail. Tente novamente.");
      // Mostra uma mensagem de erro ao usuário.
    } finally {
      setIsSending(false);
      // Define "isSending" como falso, independente de sucesso ou falha, indicando que o processo terminou.
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Declara uma função para lidar com o envio do formulário.

    event.preventDefault();
    // Impede o comportamento padrão do formulário de recarregar a página.

    sendEmail();
    // Chama a função `sendEmail` para enviar os dados do formulário.
  };

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo SAAREO" width={220} height={80} />

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
              <Button label="Melhore sua Presença Online" />
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
              <Button label="Melhore sua Presença Online" />
            </span>
            <span className="desktop-only">
              <Button label="Descubra Nossos Serviços" variant="secondary" />
            </span>
          </div>
        </div>
      </section>

      <section id="solution">
        <div className="section-title">
          <h2>Soluções Criativas e Eficazes para Impulsionar seu Negócio</h2>
        </div>

        <div className="section-description">
          <p>
            Na SAAREO, oferecemos soluções completas em estratégia, mídia visual
            e marketing para fortalecer sua presença digital.
          </p>
        </div>

        <div className="solutions">
          <div className="solution-item">
            <h3>Estratégia Digital</h3>
            <p>
              Criamos planos de marketing digital personalizados para o seu
              negócio, com foco em resultados e conversão.
            </p>
            <ul>
              <li>Análise de mercado</li>
              <li>SEO</li>
              <li>Planejamento de mídia</li>
              <li>Estratégias de crescimento</li>
            </ul>
          </div>

          <div className="solution-item">
            <h3>Fotografia Profissional</h3>
            <p>
              Imagens que comunicam seu valor e marcam presença. Capturamos a
              essência do seu negócio.
            </p>
            <ul>
              <li>Fotografias corporativas</li>
              <li>Fotografias de produtos</li>
              <li>Fotografias de eventos</li>
              <li>Fotografias para redes sociais</li>
            </ul>
          </div>

          <div className="solution-item">
            <h3>Produção de Vídeos</h3>
            <p>
              Conte histórias visuais com vídeos que engajam seu público e
              aumentam sua visibilidade.
            </p>
            <ul>
              <li>Vídeos promocionais</li>
              <li>Vídeos institucionais</li>
              <li>Depoimentos</li>
              <li>Vídeos para redes sociais</li>
            </ul>
          </div>

          <div className="solution-item">
            <h3>Gestão de Mídias Sociais</h3>
            <p>
              Transforme suas redes sociais em verdadeiras ferramentas de venda
              e engajamento.
            </p>
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
          <a href="#" className="btn-consultancy">
            Solicite uma Consultoria
          </a>
          <a href="#" className="btn-portfolio">
            Veja Nosso Portfólio
          </a>
        </div>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>
            <h2>Todo cliente, importa!</h2>
          </span>
          <p>
            Você sabia que uma boa estratégia de mídias pode transformar os
            resultados do seu negócio? Nós entendemos as necessidades de cada
            cliente e criamos campanhas personalizadas para maximizar sua
            presença online. Veja abaixo o que nossos clientes têm a dizer sobre
            o impacto das nossas ações!
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialsCard img={fotao} nome="Flavio Leite" rating={5} />
            <TestimonialsCard img={fotao2} nome="Tauana Emanuele " rating={4} />
            <TestimonialsCard img={fotao3} nome="Andressa Rezende" rating={3} />
          </div>
        </section>
      </section>

      <section id="pricing">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos Planos</h2>
        </header>

        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Pacote Básico</h3>
              <p>Ideal para quem está começando a investir em mídia digital.</p>
            </span>
            <h2>R$ 499</h2>
            <Button variant="secondary" key="free" label="Pedir agora" />
            <span className="hr" />{" "}
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Gestão de 1 plataforma de mídia social</p>
            </span>
            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>4 postagens por semana</p>
              </li>
            </ul>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>Promoção</p>
            </span>

            <span className="plan">
              <h3>Pacote Premium</h3>
              <p>
                Perfeito para empresas que querem uma presença digital de alto
                impacto.
              </p>
            </span>

            <span className="price">
              <h2>R$ 1.499</h2>
              <p>/mês</p>
            </span>

            <Button label="Pedir agora" key="premium" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Gestão de até 5 plataformas de mídia social</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" />
              <p>12 postagens por semana</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" />
              <p>Relatório diário de desempenho</p>
            </span>
          </div>

          <div className="pricing-card">
            <span className="plan">
              <h3>Pacote Intermediário</h3>
              <p>Para negócios que buscam expandir sua presença digital.</p>
            </span>
            <h2>R$ 899</h2>
            <Button variant="secondary" label="Pedir agora" />

            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Gestão de até 3 plataformas de mídia social</p>
            </span>
            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" />
                <p>8 postagens por semana</p>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section id="contact">
        <header>
          <h2>Fale conosco</h2>
          <p className="desktop-only">Tem alguma dúvida? Envie agora!</p>
          <p>
            Seja para orçamentos, questões técnicas ou qualquer outra
            necessidade, estamos aqui para ajudar. Responderemos o mais rápido
            possível.
          </p>
        </header>

        <div className="contact-section">
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message" className="form-label">
              Mensagem:
            </label>
            <textarea
              id="message"
              placeholder="Escreva sua mensagem aqui..."
              className="form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <div className="form-actions">
              <Button
                label={isSending ? "Enviando..." : "Enviar mensagem"} 
                buttonType="submit" 
                isDisabled={isSending} 
              />
            </div>
          </form>
        </div>
      </section>

      <section id="footer">
        <div className="flex-container">
          <div>
            <h3>Empresa</h3>
            <p>Sobre nós</p>
            <p>Faça parte do time</p>
            <p>Blog</p>
          </div>
          <div>
            <h3>Funcionalidades </h3>
            <p>Analise de dados</p>
            <p>Boot discord</p>
            <p>Marketing</p>
          </div>
          <div>
            <h3>Recursos</h3>
            <p>IOS & Android</p>
            <p>Teste a Demo</p>
            <p>Clientes</p>
            <p>API</p>
          </div>
          <img src={Logo} alt="Logo SAAREO" width={110} height={40} />
        </div>
        
        <div>
          <p>Projeto realizado na aula de programção web</p>
        </div>
      </section>
    </>
  );
}
