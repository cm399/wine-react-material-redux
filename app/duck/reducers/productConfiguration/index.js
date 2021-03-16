import * as t from 'duck/constants/productConfiguration'
import {initialState} from 'duck/initial'
import {Map, setIn} from 'immutable'

function setProductTypeToEdit(state, data) {
  return setIn(state, ['productType'], Map(data))
}

export default function (state = initialState.process, action) {
  switch (action.type) {
    case t.SET_PRODUCT_TYPE_TO_EDIT:
      return setProductTypeToEdit(state, action.payload)
    default:
      return state
  }
}
