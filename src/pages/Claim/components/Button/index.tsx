import './style.scss'
import {
  useEagerConnect,
  useWalletModal,
  useClaimRewards,
} from '../../../../main/index'
interface ButtonProps {
  text: string
  buttonStyle: 'card-button' | 'full-width'
}

export function Button({ text, buttonStyle }: ButtonProps) {
  useEagerConnect()
  const { setOpen, deactivate } = useWalletModal()
  const { claim } = useClaimRewards()

  function handleOnClick() {
    if (text === 'Conectar') {
      setOpen(true)
    } else if (text === 'Claim') {
      claim()
    } else {
      deactivate()
    }
  }

  return (
    <div id="claim-button">
      <button onClick={() => handleOnClick()} className={buttonStyle}>
        {text}
      </button>
    </div>
  )
}
