import './style.scss'
import { StartConnection } from './components/StartConnection'
import { Claim } from '../Claim'
import { useEagerConnect, useWeb3 } from '../../main/index'

export function Dashboard() {
  useEagerConnect()
  const { connected } = useWeb3()

  return (
    <>
      <span>
        {connected ? (
          <Claim />
        ) : (
          <div id="swap-page">
            <div className="container">
              <h1>
                PrimBank<span>Dashboard</span>
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
