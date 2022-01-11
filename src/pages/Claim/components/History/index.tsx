import './style.scss'

interface HistoryProps {
  data: HistoryRegister[]
}

interface HistoryRegister {
  id: number
  date: string
  usdt: String
  Primbank: string
}

export function History({ data }: HistoryProps) {
  return (
    <div id="claim-history">
      <h2>Histórico de reivindicações</h2>

      <div id="custom-table">
        <div id="custom-table-header">
          <p>Data</p>
          <p>USDT</p>
          <p>Primbank</p>
        </div>

        <div id="custom-table-data">
          {data.map((history) => (
            <div id="custom-data" key={history.id}>
              <p>{history.date}</p>
              <p>${history.usdt}</p>
              <p>{history.Primbank}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
