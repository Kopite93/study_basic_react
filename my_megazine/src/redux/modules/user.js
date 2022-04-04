import { createAction, handleActions } from "redux-actions";
// 리덕스 사용 시, 좀더 편한 액션 관리
import { produce } from "immer";
// 불변성 관리를 도와준다
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/Firebase";
import firebase from "firebase/compat/app";

// 액션 타입
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 생성 함수
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState 생성
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const logInFB = (id, pw) => {
  return function (dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return auth
        .signInWithEmailAndPassword(id, pw)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          dispatch(
            setUser({
              nickName: user.displayName,
              id: id,
              user_profile: "",
              uid: user.uid,
            })
          );
          console.log(user);
          history.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  };
};

const singUpFB = (id, pw, nickName) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pw)
      .then((userCredential) => {
        let user = userCredential.user;
        // Signed in
        // ...
        auth.currentUser
          .updateProfile({
            displayName: nickName,
            photoURL: "",
          })
          .then(() => {
            dispatch(
              setUser({
                nickName: nickName,
                id: id,
                user_profile: "",
                uid: user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, gatState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            nickName: user.displayName,
            id: user.email,
            user_profile: "",
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      dispatch(logOut());
      history.replace("/");
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        console.log(draft.user.id);
        setCookie("user_id", draft.user.id);
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("user_id");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  getUser,
  logOut,
  singUpFB,
  logInFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
