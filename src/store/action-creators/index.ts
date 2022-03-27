/* eslint-disable import/no-anonymous-default-export */
import * as CartActionCreators from './cart.actionCreators'
import * as ProductActionCreators from './product.actionCreators'

export default {
	...CartActionCreators,
	...ProductActionCreators,
}
