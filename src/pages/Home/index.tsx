import { Container } from "./style";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { PokemonCard } from "../../components/PokemonCard";
import { Link } from "react-router-dom";

export function Home() {
  const { data, isLoading, error, page, totalPage, nextPage, prevPage } =
    useQueryPokemonPage();

  if (error) console.error(error);

  return (
    <Container>
      <h1>{"Bem vindo(a) à Pokédex do Reprograma Jucás"}</h1>

      {isLoading && <span className="feedbackLoading">Loading...</span>}
      {!isLoading && error && <span className="feedbackLoading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={prevPage}>&lt;Anterior</button>
        <span>
          {String(page).padStart(2, "0")} / {String(totalPage).padStart(2, "0")}
        </span>
        <button onClick={nextPage}>Próximo&gt;</button>
      </div>
    </Container>
  );
}
