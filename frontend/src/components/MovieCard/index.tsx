
import { Link } from "react-router-dom";
import { Product } from "types/product";

type Props = {
  movie: Product;
}

function ProductCard( { movie } : Props ) {
 
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Vizualizar</div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
