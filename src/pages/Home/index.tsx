import { Container } from "./style";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { PokemonCard } from "../../components/PokemonCard";

export function Home() {
  const { data } = useQueryPokemonPage();

  return (
    <Container>
      <h1>{"Bem vindo(a) à Pokédex do Reprograma Jucás"}</h1>
      
      <div className="gridCards">
        {data?.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </div>
    </Container>
  );
}
