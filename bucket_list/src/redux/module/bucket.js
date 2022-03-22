// bucket.js
import { createWidget } from './../../widgets';
// Actions
// 프로젝트명/리듀서 또는 모듈명/action종류
const CREATE = "bucket/CREATE";

const initailState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket: bucket };
}

export function loadWidgets() {
  return { type: LOAD };
}
export function createWidget(widget) {
  return { type: CREATE, widget };
}
export function updateWidget(widget) {
  return { type: UPDATE, widget };
}
export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}