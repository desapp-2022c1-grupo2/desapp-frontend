import { put, call, takeLatest } from 'redux-saga/effects'
import { setJtps } from './slice'
import { IJtp } from './IJtp'

const url = import.meta.env.VITE_BACKEND_URL + '/api/jtp'

async function fetchJtp(){
  try {
        const response = await fetch(url)
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