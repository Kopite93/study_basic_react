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

// Actions
const LOAD = "my_dic/LOAD";
const CREATE = "my_dic/CREATE";
const UPDATE = "my_dic/UPDATE";
const REMOVE = "my_dic/REMOVE";

// Action Creators
export function loadDic(dic_list) {
  return { type: LOAD, dic_list };
}

export function createDic(dic) {
  return { type: CREATE, dic: dic };
}

export function updateDic(dic_id, data) {
  return { type: UPDATE, dic_id };
}

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

//middlewares
export const loadDicFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, "dictionary"));

    let dic_list = [];

    dic_data.forEach((doc) => {
      console.log(doc.data());
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

    dispatch(createDic(dic_data));
  };
};

export const updateDicFB = (dic_id, data) => {
  return async function (dispatch, getState) {
    console.log(dic_id);
    const docRef = doc(db, "dictionary", dic_id);
    await updateDoc(docRef, data);
    console.log(getState().dic);
    dispatch(updateDic(dic_id, data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "my_dic/LOAD": {
      return { list: action.dic_list };
    }
    case "my_dic/CREATE": {
      const new_dic_list = [...state.list, action.dic];
      return { list: new_dic_list };
    }
    case "my_dic/UPDATE": {
      console.log(state, action);
      const new_bucket_list = state.list.map((cur, idx) => {
        console.log(cur);
        if (action.dic_id === cur.id) {
          return { ...cur };
        } else {
          return state;
        }
      });
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
