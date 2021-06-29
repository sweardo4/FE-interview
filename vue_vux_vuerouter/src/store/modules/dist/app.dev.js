"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    count: 0
  },
  mutations: {
    ADDCOUNT: function ADDCOUNT(state) {
      state.count++;
    }
  },
  actions: {
    addCount: function addCount(_ref) {
      var commit = _ref.commit;
      commit('ADDCOUNT');
    }
  }
};
exports["default"] = _default;