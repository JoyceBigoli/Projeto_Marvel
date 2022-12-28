import { BsSearch } from "react-icons/bs";


export function Search() {
  return (
    <div>
        <h2>Busque seu Herói: </h2>
        <div>
            <input type='text' placeholder='Digite o nome do Herói'/>
            <button>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}
