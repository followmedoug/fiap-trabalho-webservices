import { all, takeLatest } from "redux-saga/effects"
import { Types as UserTypes } from "../ducks/user"
import { getAppointments, login } from "./user"

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.GET_APPOINTMENTS_REQUEST, getAppointments),
    takeLatest(UserTypes.LOGIN_REQUEST, login),
  ])
}
