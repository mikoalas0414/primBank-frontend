import './style.scss'
import { Button } from '../Button'

export function StartConnection() {
  return (
    <div id="connect-area">
      <p>Conecte sua carteira para começar</p>
      <Button text="Conectar" />
    </div>
  )
}
