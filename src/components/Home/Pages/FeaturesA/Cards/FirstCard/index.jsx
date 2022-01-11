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
            <h2 className={styles.titleCard} style={{ color: 'black' }}>
              10% BNB refletidos são depositado no Primbank Vault.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              style={{ color: 'black' }}
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              10% de cada compra/venda é depositado no Primbank Vault pronto
              para ser redistribuído e reivindicado pelos titulares do Primbank
              que ganham e reivindicar BNB.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
