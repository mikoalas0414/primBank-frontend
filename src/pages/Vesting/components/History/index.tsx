import './style.scss'

interface HistoryProps {
  data: HistoryRegister[]
}

interface HistoryRegister {
  id: number
  date: string
  usdt: String
  PrimBank: string
}

export function History({ data }: HistoryProps) {
  return (
    <div id="claim-history">
      <h2>Claim History</h2>

      <div id="custom-table">
        <div id="custom-table-header">
          <p>Date</p>
          <p>USDT</p>
          <p>PrimBank</p>
        </div>

        <div id="custom-table-data">
          {data.map((history) => (
            <div id="custom-data" key={history.id}>
              <p>{history.date}</p>
              <p>${history.usdt}</p>
              <p>{history.PrimBank}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
