"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  bind: function bind(el, binding) {
    el.src = binding.value ? binding.value : "/verifyCode.api";
    el.addEventListener("click", function (event) {
      el.src = el.src + "?t=" + new Date().getTime();
    });
  }
};
exports["default"] = _default;