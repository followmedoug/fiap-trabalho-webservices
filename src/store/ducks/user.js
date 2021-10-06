export const Types = {
  GET_APPOINTMENTS_REQUEST: "user/GET_APPOINTMENT_REQUEST",
  GET_APPOINTMENTS_SUCCESS: "user/GET_APPOINTMENT_SUCCESS",
  GET_APPOINTMENTS_ERROR: "user/GET_APPOINTMENT_ERROR",
  LOGIN_REQUEST: "user/LOGIN_REQUEST",
  LOGIN_SUCCESS: "user/LOGIN_SUCCESS",
  LOGIN_ERROR: "user/LOGIN_ERROR",
}

const INITIAL_STATE = {
  data: [],
  loading: false,
  hasError: false,
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_TRIAL_REQUEST:
      return { ...state, loading: true }

    case Types.GET_APPOINTMENTS_SUCCESS:
      return { ...state, loading: false, data: action.data }

    case Types.GET_APPOINTMENTS_ERROR:
      return { ...state, loading: false, hasError: true }

    case Types.LOGIN_REQUEST:
      return { ...state, loading: true }

    case Types.LOGIN_SUCCESS:
      return { ...state, loading: false }

    case Types.LOGIN_ERROR:
      return { ...state, loading: false, hasError: true }

    default:
      return state
  }
}

export const Creators = {
  getAppointmentsRequest: () => ({ type: Types.GET_APPOINTMENTS_REQUEST }),
  getAppointmentsSuccess: (data) => ({
    type: Types.GET_APPOINTMENTS_SUCCESS,
    data,
  }),
  getAppointmentsError: () => ({
    type: Types.GET_APPOINTMENTS_ERROR,
  }),
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    email,
    password,
  }),
  loginSuccess: () => ({ type: Types.LOGIN_SUCCESS }),
  loginError: () => ({ type: Types.LOGIN_ERROR }),
}
