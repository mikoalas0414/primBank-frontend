import { Container, Content, WalletBalance } from './styles'
import logo from '../../assets/logo.png'
import {
  useEagerConnect,
  useWeb3,
  useWalletModal,
  useTokenBalance,
} from '../../main/index'
import wallet from '../../assets/wallet.png'

export function Header() {
  useEagerConnect()
  const { setOpen, deactivate } = useWalletModal()
  const { connected, account } = useWeb3()
  const { displayBalance } = useTokenBalance()

  var _account = account?.toString().slice(0, 5)

  return (
    <Container className="navbar navbar-expand-lg ">
      <Content>
        <nav className="navbar  justify-content-between">
          <a className="navbar-brand" href="./">
            <img
              style={{ width: '100%', height: '80px' }}
              src={logo}
              alt="logo"
            />
          </a>

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a href="/" className="navbar-text nav-link">
              Home
            </a>
            <a href="#features" className="navbar-text nav-link">
              Conheça o projeto
            </a>
            <a href="#how-to-buy" className="navbar-text nav-link">
              Como comprar
            </a>
            <a href="/dashboard" className="navbar-text nav-link">
              Dashboard
            </a>
            <button
              className="btn btn-outline-warning"
              onClick={() => (connected ? deactivate() : setOpen(true))}
            >
              {connected ? 'Disconnect' : 'Connect Wallet'}

              {connected ? (
                <span
                  className="spanButton "
                  style={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: '#017451',
                    fontWeight: 'bold',
                  }}
                >
                  <img
                    src={wallet}
                    alt="wallet"
                    width="20"
                    height="20"
                    style={{ color: '#a70000', fontWeight: 'bold' }}
                  />
                  : {_account}
                </span>
              ) : (
                ''
              )}

              <span
                style={{
                  marginLeft: '1px',
                  color: '#ee0c0c',
                  fontWeight: 'bold',
                }}
              >
                {' '}
                |
              </span>
              {connected ? (
                <WalletBalance
                  style={{
                    color: '#017451',
                    marginLeft: '4px',
                  }}
                  className="spanButton "
                >
                  PRIMS: {displayBalance ? displayBalance : '0'}
                </WalletBalance>
              ) : (
                ''
              )}
            </button>{' '}
          </ul>
        </nav>
      </Content>
    </Container>
  )
}
