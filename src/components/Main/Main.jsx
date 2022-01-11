import { useEagerConnect, useWeb3 } from '../../main/index'

export function Main() {
  useEagerConnect()
  const { connected } = useWeb3()
  // const { usdBalance } = useRewardsbalance(account);
  // const { stakeBalance } = useStakeBalance(account);
  // const { setOpen, deactivate, error: walletError } = useWalletModal();

  return (
    <>
      {connected ? (
        <>{/*QHANDO CONECTADO */}</>
      ) : (
        <>{/*QHANDO NAO ESTA CONECTADO */}</>
      )}
    </>
  )
}
