import './style.scss'
import { Button } from '../../../Dashboard/components/Button'
import { useEagerConnect, useWeb3 } from '../../../../main/index'

export function StartConnection() {
  useEagerConnect()
  const { connected } = useWeb3()
  return (
    <div id="connect-area">
      <p>Conecte sua carteira para começar</p>
      <Button text={connected ? 'Desconectar' : 'Conectar'} />
    </div>
  )
}
