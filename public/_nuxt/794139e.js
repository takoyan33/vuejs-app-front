(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{447:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(82),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.prev=1,e.next=4,r.dispatch("todos/fetchTodos");case 4:return e.abrupt("return",{todos:r.state.todos.todos||null});case 7:return e.prev=7,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",{todos:[]});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}),c=r(105),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Todoリスト")]),t._v(" "),t.todos?e("ul",t._l(t.todos,(function(r){return e("li",{key:r.id},[t._v("\n      "+t._s(r.title)+"\n    ")])})),0):e("p",[t._v("データを取得できませんでした。")])])}),[],!1,null,null,null);e.default=component.exports}}]);