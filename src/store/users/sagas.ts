import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import { setJtps } from './slice'
import { IJtp } from '@models'
import { API_URL } from '@const'

async function fetchJtp(){
  try {
        const response = await fetch(API_URL + '/jtp')
        return await response.json()
    } catch (err) {
        return console.error(err)
    }
}

function* getJtp() {
  try {
    const response: IJtp[] = yield call(fetchJtp)
    yield put(setJtps(response))
  } catch (err){
    console.error(err)
  }
}

export function* jtpWatcher(){
  yield takeLatest('users/getJtps', getJtp)
}