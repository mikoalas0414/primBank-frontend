import './style.scss'
import { useState } from 'react'
import { StartConnection } from './components/StartConnection'
import { SwapArea } from './components/SwapArea'

export function Swap() {
  const [isConnected] = useState(true)

  return (
    <>
      <div id="swap-page">
        <div className="container">
          <h1>
            PrimBank<span>Swap</span>
          </h1>
          <p>
            <span>by</span>PrimBank.
          </p>

          {!isConnected && <StartConnection />}

          {isConnected && <SwapArea />}
        </div>
      </div>
    </>
  )
}
