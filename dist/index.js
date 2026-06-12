"use strict";var x=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(c){throw (i=0, c)}};};var b=x(function(S,R){
var z=require('@stdlib/strided-base-reinterpret-complex64/dist'),l=require('@stdlib/complex-float32-real/dist'),g=require('@stdlib/complex-float32-imag/dist'),A=require('@stdlib/blas-ext-base-capx/dist').ndarray,B=require('@stdlib/blas-base-cscal/dist').ndarray,o=require('@stdlib/complex-float32-base-mul-add/dist').assign,m=5;function C(a,i,c,u,f,y){var e,v,n,t,q,r,d,p,s;if(a<=0)return u;if(v=l(i),n=g(i),t=l(c),q=g(c),v===1&&n===0)return A(a,c,u,f,y);if(t===0&&q===0)return B(a,i,u,f,y);if(e=z(u,0),r=y*2,d=f*2,f===1){if(p=a%m,p>0)for(s=0;s<p;s++)o(v,n,e[r],e[r+1],t,q,e,1,r),r+=d;if(a<m)return u;for(s=p;s<a;s+=m)o(v,n,e[r],e[r+1],t,q,e,1,r),o(v,n,e[r+2],e[r+3],t,q,e,1,r+2),o(v,n,e[r+4],e[r+5],t,q,e,1,r+4),o(v,n,e[r+6],e[r+7],t,q,e,1,r+6),o(v,n,e[r+8],e[r+9],t,q,e,1,r+8),r+=m*2;return u}for(s=0;s<a;s++)o(v,n,e[r],e[r+1],t,q,e,1,r),r+=d;return u}R.exports=C
});var w=x(function(T,_){
var D=require('@stdlib/strided-base-stride2offset/dist'),F=b();function G(a,i,c,u,f){return F(a,i,c,u,f,D(a,f))}_.exports=G
});var O=x(function(U,M){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=w(),I=b();H(E,"ndarray",I);M.exports=E
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),P=O(),j,k=K(J(__dirname,"./native.js"));L(k)?j=P:j=k;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
