import styled from 'styled-components'
import subl from '../../../../../assets/Ret01.png'

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
    color: #ffffff;
  }
`
export function SecondBanner() {
  return (
    <>
      <Title>
        <h2>
          Painel fácil de usar. para ver e reclamar <br />{' '}
          <span>
            USDT earnings. <img src={subl} alt="" />
          </span>
        </h2>
      </Title>
      <SubTitle>
        <p>
          Conecte sua carteira e reivindique suas recompensas sem problemas.
        </p>
      </SubTitle>
      <Button>
        <span style={{ color: 'black', fontWeight: 'bold' }}>
          Ir para DASHBOARD
        </span>
      </Button>
    </>
  )
}
