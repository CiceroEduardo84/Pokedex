import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  inputSearch: string;
};

export function Header() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onsubmit: SubmitHandler<Input> = (data) => {
    navigate(`/search?q=${data.inputSearch}`);
    reset();
  };

  return (
    <Container>
      <Link to={"/"}>
        <img src={pokemonLogo} alt="Logo com o texto pokemon" />
      </Link>

      <form onSubmit={handleSubmit(onsubmit)}>
        <section>
          <label htmlFor="inputSearch" className="srOnly">
            Pesquisar Pokémon
          </label>
          <input
            type="text"
            id="inputSearch"
            autoFocus
            placeholder="Pesquisar Pokémon"
            {...register("inputSearch", {
              required: "Preencha o nome do Pokémon",
            })}
          />
          <span className="inputError">{errors.inputSearch?.message}</span>
        </section>
        <button type="submit">Pesquisar</button>
      </form>
    </Container>
  );
}
