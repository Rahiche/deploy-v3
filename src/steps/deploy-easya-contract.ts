import createDeployContractStep from './meta/createDeployContractStep'
import contract from './contract.json'

export const DEPLOY_EASYA_CONTRACT = createDeployContractStep({
  key: 'DEPLOY_EASYA_CONTRACT',
  artifact: contract,
})
