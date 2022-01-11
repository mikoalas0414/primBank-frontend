import styles from './styles.module.scss'
import { Col } from 'react-bootstrap'
import title from '../../../../assets/favicon.png'
export function Title() {
  return (
    <Col md={12}>
      <img className={styles.title} src={title} alt="" />
    </Col>
  )
}
