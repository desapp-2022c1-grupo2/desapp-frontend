import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import { setCourses } from './slice'
import { ICourse } from '@src/models_copy'
import { getAllCourses } from '@services'

function* getCourses() {
  try {
    const response: ICourse[] = yield call(getAllCourses)
    yield put(setCourses(response))
  } catch (err){
    console.error(err)
  }
}

export function* courseWatcher(){
  yield takeLatest('courses/getCourses', getCourses)
}