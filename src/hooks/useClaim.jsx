import { useERC20, useToken } from './useContract'
import { useState, useEffect } from 'react'
import { useWeb3 } from './useWeb3'
import BigNumber from 'bignumber.js'
import { ZERO_ADDRESS } from '../constants/constants'
import { STATE } from '../constants/enums'
import PRIMBANK_ABI from '../assets/abis/PrimBank.json'

export const ZERO_BALANCE = new BigNumber(0)

export const useClaimRewards = (requiredClaimedState) => {
  const BankUSDAddress = '0x0f4de3eF051AA3d982DA7975ac1Be17eC802EaBb'
  const contractBANKUSD = useToken(BankUSDAddress, PRIMBANK_ABI.abi)

  const [claimBalance, setclaimBalance] = useState(ZERO_BALANCE)
  const [claimState, setClaimState] = useState(STATE.IDLE)
  const [isClaimed, setisClaimed] = useState(false)

  const { account } = useWeb3()
  const token = useERC20(BankUSDAddress)

  const fetchClaimState = async () => {
    if (BankUSDAddress === ZERO_ADDRESS) {
      setisClaimed(true)
      return
    }
    try {
      const bal = await token.methods.balanceOf(account).call()
      const claimBal = new BigNumber(bal)
      setclaimBalance(claimBal)
      setisClaimed(
        claimBal.gte(
          new BigNumber(requiredClaimedState ? requiredClaimedState : 1),
        ),
      )
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (account && token) {
      fetchClaimState()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, token])

  const claim = async () => {
    try {
      setClaimState(STATE.BUSY)
      contractBANKUSD.options.address =
        '0x0f4de3eF051AA3d982DA7975ac1Be17eC802EaBb'

      await contractBANKUSD.methods
        .claim()
        .send({ from: account })
        .on('transactionHash', (hash) => {})

      await fetchClaimState()

      setClaimState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setClaimState(STATE.FAILED)
    }
  }

  return {
    claimBalance,
    isClaimed,
    claimState,
    claim,
  }
}
