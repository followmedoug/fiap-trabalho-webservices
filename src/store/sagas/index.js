import { all, takeLatest } from "redux-saga/effects";
import { Types as UserTypes } from "../ducks/user";
import { getAppointments } from "./user";

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.GET_APPOINTMENTS_REQUEST, getAppointments)]);
}
