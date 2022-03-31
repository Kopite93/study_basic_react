import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const initialState = {
  list: [],
};

// Action type
const LOAD = "my_dic/LOAD";
const CREATE = "my_dic/CREATE";
const UPDATE = "my_dic/UPDATE";
const DELETE = "my_dic/DELETE";

// Action Creators
export function loadDic(dic_list) {
  return { type: LOAD, dic_list };
}

export function createDic(dic) {
  return { type: CREATE, dic: dic };
}

export function updateDic(dic_id, data) {
  return { type: UPDATE, dic_id, data };
}

export function deleteDic(dic_id) {
  return { type: DELETE, dic_id };
}

//middlewares
export const loadDicFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, "dictionary"));

    let dic_list = [];

    dic_data.forEach((doc) => {
      dic_list.push({ id: doc.id, ...doc.data() });
    });
    console.log(dic_list);

    dispatch(loadDic(dic_list));
  };
};

export const addDicFB = (dic) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dic);
    // const _dic = await getDoc(docRef);
    const dic_data = { id: docRef.id, ...dic };
    console.log(dic_data);
    dispatch(createDic(dic_data));
  };
};

export const checkDicFB = (dic_id, checkData) => {
  return async function (dispatch) {
    const docRef = doc(db, "dictionary", dic_id);

    if (checkData === false) {
      console.log("트루가 되나?");
      await updateDoc(docRef, { check: true });
      dispatch(updateDic(dic_id, { check: true }));
    } else {
      if (checkData === true) {
        console.log("펄스가 되나?");
        await updateDoc(docRef, { check: false });
        dispatch(updateDic(dic_id, { check: false }));
      }
    }
  };
};

export const updateDicFB = (dic_id, data) => {
  return async function (dispatch) {
    const docRef = doc(db, "dictionary", dic_id);
    console.log("이게 맞나");
    await updateDoc(docRef, data);
    dispatch(updateDic(dic_id, data));
  };
};

export const deleteDicFB = (dic_id) => {
  return async function (dispatch) {
    const docRef = doc(db, "dictionary", dic_id);
    console.log(dic_id);
    await deleteDoc(docRef);
    dispatch(deleteDic(dic_id));
  };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "my_dic/LOAD": {
      return { list: action.dic_list };
    }
    case "my_dic/CREATE": {
      console.log(action);
      console.log(state);
      // const new_dic_list = [action.dic, ...state.list];
      // console.log(new_dic_list)
      return { list: [action.dic], ...state };
    }
    case "my_dic/UPDATE": {
      console.log(state);
      const new_dic_list = state.list.map((cur, idx) => {
        console.log(cur);
        if (action.dic_id === cur.id) {
          return { id: action.dic_id, ...cur, ...action.data };
        } else {
          return cur;
        }
      });
      console.log(new_dic_list);
      return { list: new_dic_list };
    }
    case "my_dic/DELETE": {
      console.log(state);
      console.log(action.dic_id);
      const after_Delete_List = state.list.filter(
        (x) => x.id !== action.dic_id
      );
      console.log(after_Delete_List);
      return { list: after_Delete_List };
    }
    default:
      return state;
  }
}
