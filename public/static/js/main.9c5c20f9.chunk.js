(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,a,n){e.exports=n.p+"static/media/logo.50fb28de.jpg"},48:function(e,a,n){e.exports=n(64)},53:function(e,a,n){},62:function(e,a,n){},64:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(39),r=n.n(l),s=(n(53),n(17)),m=n(14),u=n(47),i=n(18),o=n(22),h=n(23),p=n(28),E=n(24),d=n(29),g=n(25),b=n(16),f=n.n(b),_=n(40),y=n.n(_),N=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:r?"text-success":"text-danger"},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(s.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))},v=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger "})," = Fail"))};function k(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return k=function(){return e},e}var w=f()(k()),j=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3 "},"Launches"),c.a.createElement(v,null),c.a.createElement(i.b,{query:w},function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading.."):(n&&console.log(n),c.a.createElement(t.Fragment,null,l.launches.map(function(e){return c.a.createElement(N,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component);function O(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return O=function(){return e},e}var x=f()(O()),L=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(i.b,{query:x,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading..");n&&console.log(n);var l=t.launch,r=l.mission_name,m=l.flight_number,u=l.launch_year,i=l.launch_success,o=l.rocket,h=o.rocket_id,p=o.rocket_name,E=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Misson: ",r)),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",u),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:i?"text-success":"text-danger"},"Launch Successfull: ",i?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",E)),c.a.createElement("hr",null),c.a.createElement(s.b,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(t.Component),D=(n(62),n(46)),Y=n.n(D),q=new u.a({uri:"/graphql"});var F=function(){return c.a.createElement(i.a,{client:q},c.a.createElement(s.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:Y.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(m.a,{exact:!0,path:"/",component:j}),c.a.createElement(m.a,{exact:!0,path:"/launch/:flight_number",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.9c5c20f9.chunk.js.map