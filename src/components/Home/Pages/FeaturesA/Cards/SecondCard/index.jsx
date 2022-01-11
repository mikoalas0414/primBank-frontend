import * as React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles.module.scss'
export default function SecondCard() {
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
            <h2 style={{ color: 'black' }} className={styles.titleCard}>
              Anti-Dump exclusivo 'Mecanismo de carteira com bloqueio de tempo'
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ padding: '40px' }}>
            <p
              style={{ color: 'black' }}
              className={styles.subTitleCard + ' d-flex justify-content-center'}
            >
              Todas as vendas estão limitadas a uma soma agregada de ≤ 0,2% do
              fornecimento total por carteira, a cada 24 horas. Isso é projetado
              para esperamos mitigar a volatilidade, limitar a negociação de
              grandes volumes e manipulação de baleias.
            </p>
          </Col>
        </Row>
      </Paper>
    </Box>
  )
}
