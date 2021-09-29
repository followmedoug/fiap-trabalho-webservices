import { call, put } from "redux-saga/effects";
import { saveToken } from "../../services/auth";
import api from "../../services/api";

import { Creators as UserActions } from "../ducks/user";

export function* getAppointments() {
  try {
    const response = yield call(api.get, "/ponto");

    console.log(response);
  } catch (error) {
    yield put(UserActions.getAppointmentsError());
  }
}
