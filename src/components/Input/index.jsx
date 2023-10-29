import { Container } from "./styles";

export function Input({icon: Icon, handleOnChange, ...rest}){
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} onChange={handleOnChange} require />

    </Container>
  )
}