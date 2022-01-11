import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {
  useEagerConnect,
  useWeb3,
  useWalletModal,
} from '../../../../main/index'

interface ButtonProps {
  text: string
  icon?: boolean
}

export function Button({ text, icon }: ButtonProps) {
  useEagerConnect()
  const { setOpen, deactivate } = useWalletModal()
  const { connected } = useWeb3()
  //use const { account } = useWeb3(); to get the account address in value
  //use Hooks account for detail address Users

  return (
    <div id="swap-button">
      <button onClick={() => (connected ? deactivate() : setOpen(true))}>
        {text} {icon && <FontAwesomeIcon icon={faChevronDown} />}
      </button>
    </div>
  )
}
