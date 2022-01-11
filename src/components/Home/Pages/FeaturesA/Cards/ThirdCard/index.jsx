import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'
export default function ThirdCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 355,
          height: 400,
          backgroundColor: '#DCB315',
        },
      }}
    >
      <Paper elevation={6}>
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center"
            style={{ padding: '40px' }}
          >
            <h2 className={styles.titleCard}>Reivindicar e ou Reinvestir</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              Os investidores do PrimBank têm a oportunidade de reivindicar seus
              doláres BUSD ou reivindicar e reinvestir no PrimBank com 10% de
              desconto.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
