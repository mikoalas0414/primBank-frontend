import styles from './styles.module.scss'
import { Row, Col, Container } from 'react-bootstrap'

export function SubTitle() {
  return (
    <>
      <Col md={12}>
        <Container>
          <Row>
            <Col xs={12}>
              {' '}
              <p className={styles.subtitle + ' d-flex justify-content-center'}>
                O Protocolo Primbank é um o maior benefício para todos
                assinantes dos principais serviços do GP, Staage, DNAClass e
                Finclass.
              </p>
            </Col>
            <Col xs={12}>
              <p
                className={
                  styles.subtitle_02 + ' d-flex justify-content-center'
                }
              ></p>

              <p
                className={
                  styles.subtitle_mobile + ' d-flex justify-content-center'
                }
              ></p>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  )
}
