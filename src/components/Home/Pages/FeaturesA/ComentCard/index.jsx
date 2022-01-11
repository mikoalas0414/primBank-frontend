import styles from './styles.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
export function ComentCard() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <p className={styles.comemnt}>
            Uma contribuição de transação de 1% é adicionada para promover o
            desenvolvimento e manutenção do projeto no futuro, essa colaboração
            será o fator para beneficiar assinantes da Staage, DNAClass e
            Finclass.
          </p>
          )
        </Col>
      </Row>
    </Container>
  )
}
