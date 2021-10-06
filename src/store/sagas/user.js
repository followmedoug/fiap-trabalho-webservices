import { call, put } from "redux-saga/effects"
import { saveToken } from "../../services/auth"
import api from "../../services/api"

import { Creators as UserActions } from "../ducks/user"

export function* login(action) {
  try {
    const { email, password } = action

    const response = yield call(api.post, "/login", { email, password })

    console.log("response: ", response)
  } catch (error) {
    throw new Error(error)
  }
}

export function* getAppointments() {
  try {
    const response = yield call(api.get, "/ponto")

    console.log(response)
  } catch (error) {
    yield put(UserActions.getAppointmentsError())
  }
}
