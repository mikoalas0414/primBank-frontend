import { Container, Content } from './styles'
import logo from '../../assets/logo.png'

export function Header() {
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
            <a href="#roadmap" className="navbar-text nav-link">
              Caminho da Estrada
            </a>
            <a href="#how-to-buy" className="navbar-text nav-link">
              Como comprar
            </a>
            <a href="/dashboard" className="navbar-text nav-link">
              Dashboard
            </a>
          </ul>
        </nav>
      </Content>
    </Container>
  )
}
