import { Search } from "../../global/components/Search/Search";
import { useState } from "react"
import { Title } from "./styles";

export function Home() {
  const [heroes, setHeroes] = useState (null);
  return (
    <Title>
      <Search/>
    </Title>
  )
}
