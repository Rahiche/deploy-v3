import { Signer } from '@ethersproject/abstract-signer'
import { BigNumber } from '@ethersproject/bignumber'
import { GenericMigrationStep } from './migrate'

export interface MigrationState {
  readonly DEPLOY_EASYA_CONTRACT?: string
}

export type StepOutput = { message: string; hash?: string; address?: string }

export type MigrationConfig = {
  signer: Signer
  gasPrice: BigNumber | undefined
  weth9Address: string
  nativeCurrencyLabelBytes: string
  v2CoreFactoryAddress: string
  ownerAddress: string
}

export type MigrationStep = GenericMigrationStep<MigrationState, MigrationConfig, StepOutput[]>
