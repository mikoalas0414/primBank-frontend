import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface ButtonProps{
    text: string
    icon?: boolean
}

export function Button({text, icon}:ButtonProps){
    return(
        <div id="swap-button">
            <button>{text} {icon && <FontAwesomeIcon icon={faChevronDown}/> } </button>
        </div>
    )
}