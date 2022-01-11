import './style.scss'
import { StartConnection } from './components/StartConnection'
import { SwapArea } from './components/SwapArea'
import { useEagerConnect, useWeb3 } from '../../main/index'

export function Swap() {
  useEagerConnect()
  const { connected } = useWeb3()

  return (
    <>
      <span>
        {connected ? (
          <div id="swap-page">
            <div className="container">
              <h1>
                PrimBank<span>Swap</span>
              </h1>
              <p>
                <span>by</span>PrimBank.
              </p>
              <SwapArea />
            </div>
          </div>
        ) : (
          <div id="swap-page">
            <div className="container">
              <h1>
                PrimBank<span>Swap</span>
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
