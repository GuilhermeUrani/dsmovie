import FormCard from "components/DetailProduct";
import { useParams } from "react-router-dom";

function Form() {

  const params = useParams();
  
  return (
    <FormCard productId={`${params.movieId}`}/>
  );
}

export default Form;
