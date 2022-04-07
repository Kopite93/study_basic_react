import { createAction, handleActions } from "redux-actions";
// 리덕스 사용 시, 좀더 편한 액션 관리
import { produce } from "immer";
// 불변성 관리를 도와준다
import { firestore, storage } from "../../shared/Firebase";
import moment from "moment";
import { actionCreators as imageActions } from "./image";

// 액션 타입
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// 액션 생성함수
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "world",
  //   user_profile:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  // },
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

//middlewares
//이 부분 자세히 볼 것
export const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    const _user = getState().user.user;
    console.log(_user);
    const user_info = {
      nickname: _user.nickName,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;
    console.log(_image);
    console.log(typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace("/");

              dispatch(imageActions.setPreview(null));
            })
            .catch((error) => {
              window.alert("에러남");
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        })
        .catch((error) => {
          window.alert("에러남");
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  };
};

export const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    postDB
      .get()
      .then((docs) => {
        let post_list = [];
        docs.forEach((doc) => {
          let _post = doc.data();
          let post = {
            id: doc.id,
            user_info: {
              nickname: _post.nickname,
              user_profile: _post.user_profile,
              user_id: _post.user_id,
            },
            contents: _post.contents,
            image_url: _post.image_url,
            comment_cnt: _post.comment_cnt,
            insert_dt: _post.insert_dt,
          };
          post_list.push(post);
        });
        dispatch(setPost(post_list));
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
