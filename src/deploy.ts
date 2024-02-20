import { Signer } from '@ethersproject/abstract-signer'
import { BigNumber } from '@ethersproject/bignumber'
import { migrate } from './migrate'
import { MigrationState, MigrationStep, StepOutput } from './migrations'
import { DEPLOY_EASYA_CONTRACT } from './steps/deploy-easya-contract'

const MIGRATION_STEPS: MigrationStep[] = [
  // must come first, for address calculations
  DEPLOY_EASYA_CONTRACT,
]

export default function deploy({
  signer,
  gasPrice: numberGasPrice,
  initialState,
  onStateChange,
  weth9Address,
  nativeCurrencyLabelBytes,
  v2CoreFactoryAddress,
  ownerAddress,
}: {
  signer: Signer
  gasPrice: number | undefined
  weth9Address: string
  nativeCurrencyLabelBytes: string
  v2CoreFactoryAddress: string
  ownerAddress: string
  initialState: MigrationState
  onStateChange: (newState: MigrationState) => Promise<void>
}): AsyncGenerator<StepOutput[], void, void> {
  const gasPrice =
    typeof numberGasPrice === 'number' ? BigNumber.from(numberGasPrice).mul(BigNumber.from(10).pow(9)) : undefined // convert to wei

  return migrate({
    steps: MIGRATION_STEPS,
    config: { gasPrice, signer, weth9Address, nativeCurrencyLabelBytes, v2CoreFactoryAddress, ownerAddress },
    initialState,
    onStateChange,
  })
}
