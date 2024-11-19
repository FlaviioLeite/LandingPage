import Star from "../assets/Star.svg";
import StarOuter from "../assets/StarOuter.svg";

interface ITestimonialsProps {
  img: string; 
  nome: string; 
  rating: number; 
}

export default function TestimonialsCard(props: ITestimonialsProps) {
  return (
    <div className="carousel-card">
      <img src={props.img} alt="Imagem perfil cliente" />
      <span className="testimony">
        <p>Uma otima profisional, qualidade muito boa </p>
      </span>

      <span className="rating">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src={index < props.rating ? Star : StarOuter}
              alt={index < props.rating ? "ícone estrela preenchida" : "ícone estrela vazia"}
              width={22}
              height={20}
            />
          ))}
      </span>

      <span className="names">
        <p>{props.nome}</p>
        <p>SAAREO - GESTÃO DE MIDIAS</p>
      </span>
    </div>
  );
}
