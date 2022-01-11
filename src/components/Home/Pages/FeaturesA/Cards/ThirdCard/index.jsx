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
            style={{ padding: '40px', color: 'black' }}
          >
            <h2 style={{ color: 'black' }} className={styles.titleCard}>
              Reivindicar e ou Reinvestir
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              style={{ color: 'black' }}
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              Os detentores do Primbank têm a oportunidade de reivindicar sua
              Eth ou reivindicar e reinvestir no Primbank com um desconto de
              10%.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
