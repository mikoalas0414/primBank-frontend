import styled from 'styled-components'

export const Container = styled.header`
  background: #000000;
`
export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;

  padding: 0 1rem 2rem;
  nav {
    position: relative;
    top: 1.1rem;
    ul {
      a {
        font-family: 'Montserrat', sans-serif;
        color: #ffffff;
        font-weight: 600;

        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.6);
          color: white;
        }
      }

      button {
        margin-left: 10px;
      }
      button:hover {
        color: black;
        font-weight: bold;
      }
    }

    @media (min-width: 481px) and (max-width: 767px) {
    }
  }
`

export const WalletBalance = styled.span`
  font-size: '14px',
   margin-left: '20px',
   font-weight: 'bold',
   
 
`
