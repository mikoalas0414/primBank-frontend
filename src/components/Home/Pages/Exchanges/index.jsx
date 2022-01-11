import './styles.modules.css'
import Logo from './Logo/index'
import { Button } from './Button/index'
import { Dexs } from './Dexs/index'

export function Exchanges() {
  return (
    <>
      <div className="index container">
        <div className="Content">
          <Logo />
          <Button />
          <Dexs />
        </div>
      </div>
    </>
  )
}
