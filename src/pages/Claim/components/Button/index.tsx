import './style.scss'
import {
  useEagerConnect,
  useWalletModal,
  useWeb3,
} from '../../../../main/index'
interface ButtonProps {
  text: string
  buttonStyle: 'card-button' | 'full-width'
}

export function Button({ text, buttonStyle }: ButtonProps) {
  useEagerConnect()
  const { setOpen, deactivate } = useWalletModal()
  const { connected } = useWeb3()

  return (
    <div id="claim-button">
      <button
        onClick={() => (connected ? deactivate() : setOpen(true))}
        className={buttonStyle}
      >
        {text}
      </button>
    </div>
  )
}
