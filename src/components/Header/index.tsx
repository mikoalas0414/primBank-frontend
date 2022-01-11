import { Container, Content } from './styles'
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
              style={{
                marginLeft: '20px',
              }}
              className="btn btn-outline-warning"
              onClick={() => (connected ? deactivate() : setOpen(true))}
            >
              {connected ? 'Disconnect' : 'Connect Wallet'}

              {connected ? (
                <span style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <img src={wallet} alt="wallet" width="20" height="20" />:{' '}
                  {_account}
                </span>
              ) : (
                ''
              )}

              {connected ? (
                <span
                  style={{
                    fontSize: '14px',
                    marginLeft: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  Balance: {displayBalance ? displayBalance : '0'}
                </span>
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
