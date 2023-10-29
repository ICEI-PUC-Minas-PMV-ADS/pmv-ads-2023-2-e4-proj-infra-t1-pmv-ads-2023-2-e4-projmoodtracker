import { BsArrowRepeat } from "react-icons/bs";
import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {

  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <div class='loading'>
          <BsArrowRepeat />
        </div>
      ) : (
        title
      )}
    </Container>
  )
}