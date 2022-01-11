import styles from './styles.module.scss'
import { Container, Row } from 'react-bootstrap'
export function Title() {
  return (
    <Container>
      <Row>
        <h2 className={styles.title}>Visão realista, recursos emocionantes</h2>
      </Row>
    </Container>
  )
}
