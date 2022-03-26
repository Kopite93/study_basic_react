//dic.js
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
  list: [
    {
      word: "apple",
      mean: "사과",
      example: "Apple is best fruits",
      trans: "사과는 최고의 과일이다",
    },
    {
      word: "banana",
      mean: "바나나",
      example: "Banana is best fruits",
      trans: "바나나는 최고의 과일이다",
    },
    {
      word: "grape",
      mean: "포도",
      example: "Grape is best fruits",
      trans: "포도는 최고의 과일이다",
    },
  ],
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

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

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
    default:
      return state;
  }
}
