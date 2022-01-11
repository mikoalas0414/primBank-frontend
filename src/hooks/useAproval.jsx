import { useERC20, useSwap, useToken } from './useContract'
import { useState, useCallback } from 'react'
import { useWeb3 } from '../hooks/useWeb3'
import BigNumber from 'bignumber.js'
import { ZERO_ADDRESS } from '../constants/constants'
import { STATE } from '../constants/enums'
import SWAP_ABI from '../assets/abis/PrimSwap.json'
import CoinToken from '../assets/abis/PrimBank.json'

export const ZERO_BALANCE2 = new BigNumber(0)
const primAddress = '0x0f4de3eF051AA3d982DA7975ac1Be17eC802EaBb'
const swapAddress = '0xf54B5d207dBC3459B15275c8DC5D84b5acFAA607'

export const useSwapToken = (requiredApprovedBalance) => {
  const contractPrimbank = useToken(primAddress, CoinToken.abi)
  const ContractSwap = useSwap(swapAddress, SWAP_ABI.abi)

  const toApprove = swapAddress

  const [approvedBalance, setApprovedBalance] = useState(ZERO_BALANCE2)
  const [approveState, setApproveState] = useState(STATE.IDLE)
  const [isApproved, setIsApproved] = useState(false)
  //Cla
  const { account } = useWeb3()
  const token = useERC20(primAddress, CoinToken.abi)

  const fetchApprovedBalance = useCallback(async () => {
    if (primAddress === ZERO_ADDRESS) {
      setIsApproved(true)
      return
    }
    try {
      const bal = await token.methods.allowance(account, toApprove).call()
      const approveBal = new BigNumber(bal)
      setApprovedBalance(approveBal)
      setIsApproved(
        approveBal.gte(
          new BigNumber(requiredApprovedBalance ? requiredApprovedBalance : 1),
        ),
      )
    } catch (e) {
      console.log(e)
    }
  }, [account, token, toApprove, requiredApprovedBalance])

  const sellTokens = async (amount) => {
    try {
      setApproveState(STATE.BUSY)
      contractPrimbank.options.address = primAddress
      ContractSwap.options.address = swapAddress

      await contractPrimbank.methods
        .approve(swapAddress, amount)
        .send({ from: account })
        .on('transactionHash', (hash) => {})

      await ContractSwap.sellTokens()
        .send({ value: amount, from: account })
        .on('transactionHash', (hash) => {})

      await fetchApprovedBalance()

      setApproveState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setApproveState(STATE.FAILED)
    }
  }

  const buyTokens = async (amount) => {
    try {
      setApproveState(STATE.BUSY)
      contractPrimbank.options.address = primAddress
      ContractSwap.options.address = swapAddress

      await ContractSwap.buyTokens()
        .send({ value: amount, from: account })
        .on('transactionHash', (hash) => {})

      await fetchApprovedBalance()

      setApproveState(STATE.SUCCEED)
    } catch (e) {
      console.log(e)
      setApproveState(STATE.FAILED)
    }
  }

  return {
    approvedBalance,
    isApproved,
    approveState,
    sellTokens,
    buyTokens,
  }
}
