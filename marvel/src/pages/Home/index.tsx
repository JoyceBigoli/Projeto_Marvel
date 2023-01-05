import { Search } from "../../global/components/Search/Search";
import { useState } from "react"
import { ImageAvangers, Searchcontainer, Title } from "./styles";

export function Home() {
  const [heroes, setHeroes] = useState (null);
  return (
      <>
      <Title> <h2> Busque seu Herói: </h2> </Title>
      <Searchcontainer>
      <Search />
      </Searchcontainer>
      <ImageAvangers>
      <img src="./public/assets/avangers.png" />
    </ImageAvangers>
    </>
  )
}
