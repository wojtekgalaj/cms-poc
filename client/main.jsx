import {initContext} from './configs/context'
import {inintRoutes} from './configs/routes'
import actions from './actions'

console.log('here');
const context = initContext()
inintRoutes(context, actions)
