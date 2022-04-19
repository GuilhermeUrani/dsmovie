import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "types/product";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./styles.css";

type Props = {
  productId: string;
};

function FormCard({ productId }: Props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BASE_URL}/produtos/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: email,
        productId: productId,
        score: score
      }
    };

    axios(config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={product?.image}
        alt={product?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{product?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Adicionar 
            </button>
          </div>
        </form>
        <Link to="/">
          
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
