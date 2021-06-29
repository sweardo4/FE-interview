"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("@/components/HelloWorld"));

var _Qh = _interopRequireDefault(require("@/components/Qh"));

var _Slot = _interopRequireDefault(require("@/components/demo1/Slot1"));

var _Slot2 = _interopRequireDefault(require("@/components/demo2/Slot2"));

var _Slot3 = _interopRequireDefault(require("@/components/demo3/Slot3"));

var _Watch = _interopRequireDefault(require("@/components/watch/Watch1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: _HelloWorld["default"],
    children: [//嵌套路由　／／使用    <router-view></router-view>
    {
      path: '/Qh',
      component: _Qh["default"]
    }]
  }, {
    path: '/slot1',
    name: 'Slot1',
    component: _Slot["default"]
  }, {
    path: '/slot2',
    name: 'Slot2',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/demo2/Slot2'));
      });
    } // 异步加载路由组件

  }, {
    path: '/slot3',
    name: 'Slot3',
    component: _Slot3["default"]
  }, {
    path: '/watch1/:id',
    name: 'Watch1',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/watch/Watch1'));
      });
    }
  }]
});
router.beforeEach(function (to, from, next) {
  console.log(to, from, next);
  next();
});
var _default = router;
exports["default"] = _default;