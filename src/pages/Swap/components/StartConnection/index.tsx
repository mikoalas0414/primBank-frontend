import './style.scss'
import {Button} from '../Button'

export function StartConnection(){

    return(
        <div id="connect-area">
            <p>Connect Your Wallet To Get Started</p>
            <Button text="Connect"/>
        </div>
    )
}