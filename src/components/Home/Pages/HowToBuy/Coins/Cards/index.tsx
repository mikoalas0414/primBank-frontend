import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import Metamask from '../../../../../../assets/Coins/metamask.svg'
import Eth from '../../../../../../assets/Coins/ethereum.png'
import cake from '../../../../../../assets/Coins/cake.png'
import Primbank from '../../../../../../assets/Coins/PrimBank.png'
import styled from 'styled-components'

export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;

  img {
    width: 70%;
    height: 100% auto;
  }

  @media (max-width: 768px) {
    img {
      width: 15%;
    }
  }
`
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 15px;
  margin-top: 25px;
`

export const TextContent = styled.div`
  position: relative;

  p {
    margin-right: 10px;
    margin-top: 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: black;

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`

export function CardA() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#DCB315',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={Metamask} alt="Metamask" />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p style={{ fontWeight: 'bold' }}>
                  Baixe e configure MetaMask ou TrustWallet
                </p>
                <p>
                  Baixe <a href="https://metamask.io/">MetaMask</a> (uma wallet
                  na forma de uma extensão do navegador) ou TrustWallet (um
                  aplicativo para o seu telefone). Verifique se você está
                  conectado ao Ethereum MainNet.{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}

export function CardB() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#DCB315',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={Eth} alt="Eth" style={{ width: '40%' }} />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p style={{ fontWeight: 'bold' }}>
                  Compre e envie Ether para MetaMask
                </p>
                <p>
                  Compre Ether em uma exchange (ou seja, Binance, Kraken,
                  Coinbase etc.). Transfira o Ether para o endereço da sua
                  carteira MetaMask. Os endereços Ethereum começam com "0x".{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}

export function CardC() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#DCB315',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={cake} alt="Metamask" />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p style={{ fontWeight: 'bold' }}>
                  Vá para PancakeSwap e troque por $ Primbank
                </p>
                <p>
                  <a href="https://pancakeswap.finance/">Clique aqui </a> para
                  ir para PancakeSwap, copie e cole o endereço do contrato e
                  defina a tolerância de deslizamento para 12% (às vezes pode
                  ser um pouco mais, dependendo da demanda).{' '}
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}

export function CardD() {
  return (
    <Content>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 670,
            height: 240,
            backgroundColor: '#DCB315',
            borderRadius: '10px',
          },
        }}
      >
        <Paper elevation={6}>
          <Row>
            <Col xs={12} md={4}>
              <Image>
                <img src={Primbank} alt="Metamask" />
              </Image>
            </Col>
            <Col xs={12} md={8}>
              <TextContent>
                <p style={{ fontWeight: 'bold' }}>
                  Veja $Primbank e seja um investidor
                </p>
                <p>
                  Troque o Ether pelo Primbank. Agora você precisa adicionar o
                  Primbank ao seu MetaMask ou Trust Wallet para visualizar seu
                  $Primbank.
                </p>
              </TextContent>
            </Col>
          </Row>
        </Paper>
      </Box>
    </Content>
  )
}
