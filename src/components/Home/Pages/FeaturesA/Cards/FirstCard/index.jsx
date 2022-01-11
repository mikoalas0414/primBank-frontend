import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'

export default function FirstCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          color: 'black',
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
            <h2 className={styles.titleCard}>
              10% BNB de reflexão é depositado no PrimBank Vault
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              10% de cada compra/venda é depositado no PrimBank Vault pronto
              para ser redistribuído e reivindicado pelos investidores do
              PrimBank que ganham e reivindicar doláres.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
