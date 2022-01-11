import styles from './styles.module.scss'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import PrimBank from '../../assets/logo.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Logo = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100% auto;
`
export function Footer() {
  const { register, handleSubmit } = useForm()
  const [result, setResult] = useState('')
  const onSubmit = (data) => setResult(JSON.stringify(data))

  return (
    <div className={styles.bg + ' container-fluid'}>
      <footer className="container">
        <Row>
          <Col md={2}>
            <Logo src={PrimBank} alt="PrimBank logo" />
          </Col>
          <Col md={2}>
            <h5 className={styles.title}>Contato</h5>
            <p className={styles.parag}>Ferneberga House</p>
            <p className={styles.parag}>Alexandra Road</p>
            <p className={styles.parag}>Farnborough </p>
            <p className={styles.parag}>GU14 6DQ</p>
          </Col>
          <Col md={2}>
            <h5 className={styles.title}>Conectar</h5>
            <p className={styles.parag}>hello@PrimBank </p>
            <p className={styles.parag}>+44 (0)330 133 0770</p>
          </Col>
          <Col md={3}>
            <h5 className={styles.title}>Serviços</h5>
            <p className={styles.parag}>Política de Privacidade</p>
            <p className={styles.parag}>termos e Condições</p>
            <p className={styles.parag}>Termos e condições de hospedagem</p>
            <p className={styles.parag}>Termos e condições do site</p>
            <p className={styles.parag}>Gerenciar cookies</p>
          </Col>
          <Col md={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5 className={styles.formTitle}>Assine a nossa newsletter</h5>
              <input className={styles.inputbutton} {...register('you mail')} />

              <p>{result}</p>
              <button type="submit">
                <span style={{ color: 'black' }}>SE INSCREVER</span>
              </button>
            </form>
          </Col>
        </Row>
      </footer>
    </div>
  )
}
