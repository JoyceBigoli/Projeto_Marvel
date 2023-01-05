import { FcSearch } from "react-icons/fc";


export function Search() {
  return (
    <div>
        <div>
            <input type='text' placeholder='Digite o nome do Herói'/>
            <button>
                <FcSearch/>
            </button>
        </div>
    </div>
  )
}
