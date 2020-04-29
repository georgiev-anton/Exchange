import { UPDATE_TABS_LEFT_BODY, UPDATE_TABS_RIGHT_BODY } from "../../consts/tabs";

export function updateTabsRightBody(payload) {
  return {
    type: UPDATE_TABS_RIGHT_BODY,
    payload,
  };
}

export function updateTabsLeftBody(payload) {
  return {
    type: UPDATE_TABS_LEFT_BODY,
    payload,
  };
}
