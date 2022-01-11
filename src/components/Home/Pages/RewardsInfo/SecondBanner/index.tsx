import styled from 'styled-components'
import subl from '../../../../../assets/Ret01.png'
import { Link } from 'react-router-dom'

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 59px;

    color: #ffffff;

    span {
      img {
        width: 58%;
        margin-bottom: 50px;
      }
    }
  }
`

export const SubTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: -30px;

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
`
export const Button = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 180px;
  height: 42px;
  background: #dcb315;
  border-radius: 4px;

  span {
    position: relative;
    margin-left: 22px;
    margin-top: 7px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */
    text-align: center;
    color: black;
    font-weight: bold;
  }
`
export function SecondBanner() {
  return (
    <>
      <Title>
        <h2>
          Painel fácil de usar. para ver e reclamar Ganhos em USDT. <br />{' '}
          <span>
            Ganhos em USDT. <img src={subl} alt="" />
          </span>
        </h2>
      </Title>
      <SubTitle>
        <p>
          Conecte sua carteira e reivindique suas recompensas sem problemas.
        </p>
      </SubTitle>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <Button>
          <span>ABRIR DASHBOARD</span>
        </Button>
      </Link>
    </>
  )
}
