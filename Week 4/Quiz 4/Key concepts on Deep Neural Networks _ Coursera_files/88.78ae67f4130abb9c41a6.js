(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"6RWv":function(module,t,e){"use strict";var a=e("wd/R"),r=e.n(a),n=e("QjkW"),i=e("sQ/U"),o="payments.cart.mostRecent",c=function get(){if(n.a&&n.a.get){var t=n.a.get(o);if(!t||r()(t.timestamp).add(15,"days").isBefore(r()())||i.a.get().id!==t.userId&&!i.a.isSuperuser())return{};return t}return{}},s=function set(t){var e=new Date;n.a.setIfEnabled(o,{id:t,userId:i.a.get().id,timestamp:e.getTime()})},u=function reset(){n.a&&n.a.remove&&n.a.remove(o)};t.a={get:c,set:s,reset:u}},KVJO:function(module,exports,t){var e=t("aC8I"),a;"string"==typeof e&&(e=[[module.i,e,""]]);var r={transform:void 0},n=t("aET+")(e,r);e.locals&&(module.exports=e.locals)},aC8I:function(module,exports,t){},phfG:function(module,t,e){"use strict";e.r(t);var a=e("MVZn"),r=e.n(a),n=e("VbXa"),i=e.n(n),o=e("BDKN"),c=e.n(o),s=e("UAeG"),u=e("17x9"),p=e.n(u),l=e("sbe7"),d=e.n(l),g=e("MnCE"),f=e("w/1P"),h=e.n(f),m=e("VYij"),C=e.n(m),v=e("NpIH"),w=e("9A5E"),b=e("/1xI"),I=e("6RWv"),S=e("GXs9"),y=e("juwT"),V=e("Akn8"),k=e("hS5U"),E=e.n(k),P=e("KVJO"),U=e.n(P),j=function(t){function ShoppingCart(){for(var e,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).onClickHandler=function(t){t.preventDefault(),y.a.setLocation(e.getCartPageUrl())},e}i()(ShoppingCart,t);var e=ShoppingCart.prototype;return e.componentDidMount=function componentDidMount(){var t=this.props.cart;this.isValidCart(t)||I.a.reset()},e.getCartPageUrl=function getCartPageUrl(){var t=I.a.get(),e=t&&t.id;return e?(new c.a).setPath(V.a.join(b.b.rootPath,b.b.cartUrl)).addQueryParam("cartId",e.toString()).toString():"/"},e.isValidCart=function isValidCart(t){return!!t&&!C()(t.cartItems).isEmpty()},e.render=function render(){var t=this.props,e=t.cart,a=t.hideAvatarBorder,r=t.className,n;if(!this.isValidCart(e))return null;var i=this.getCartPageUrl(),o=h()("rc-ShoppingCart",r,{"rc-cart-left-border":a});return d.a.createElement("li",{className:o},d.a.createElement(w.a,{trackingName:"cart",href:i,onClick:this.onClickHandler},d.a.createElement(S.a,{src:b.b.cartIcon,className:"icon",alt:E()("Shopping cart: 1 item"),height:32,width:38})))},ShoppingCart}(d.a.Component);t.default=Object(g.compose)(Object(g.getContext)({router:p.a.object.isRequired}),s.a.createContainer(function(t){var e=t.router,a=e&&e.location.query.cartId,n=I.a.get(),i=a||n&&n.id;return r()({},i?{cart:v.a.get(i)}:{})}))(j)}}]);
//# sourceMappingURL=88.78ae67f4130abb9c41a6.js.map