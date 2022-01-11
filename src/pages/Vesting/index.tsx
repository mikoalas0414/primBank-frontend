import './style.scss'
import { StartConnection } from './components/StartConnection'
import { useEagerConnect, useWeb3 } from '../../main/index'
import { VestingPage } from './components/index'

export function Vesting() {
  useEagerConnect()
  const { connected } = useWeb3()

  return (
    <>
      <span>
        {connected ? (
          <VestingPage />
        ) : (
          <div id="swap-page">
            <div className="container">
              <h1>
                PrimBank<span>Vesting</span>
              </h1>
              <p>
                <span>by</span>PrimBank.
              </p>
              <StartConnection />
            </div>
          </div>
        )}
      </span>
    </>
  )
}
