(this["webpackJsonpcovid19-stats"]=this["webpackJsonpcovid19-stats"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a(4),l=a(3),o=a(5),s=a(0),u=a.n(s),i=a(7),m=a.n(i),d=function(){return u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Rank"),u.a.createElement("th",null,"Country"),u.a.createElement("th",null,"Cases"),u.a.createElement("th",null,"Deaths"),u.a.createElement("th",null,"Recovered"),u.a.createElement("th",null,"Serious Critial Condition")))},p=function(e){var t=e.countryData.map((function(e,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",{className:"rank"},t+1),"Canada"===e.country_name?u.a.createElement("td",{className:"canada"},e.country_name):u.a.createElement("td",null,e.country_name),u.a.createElement("td",null,e.cases),u.a.createElement("td",{className:"deaths"},e.deaths),u.a.createElement("td",{className:"recovered"},e.total_recovered),u.a.createElement("td",{className:"criticalCondition"},e.serious_critical))}));return u.a.createElement("tbody",null,t)},h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.countryData;return u.a.createElement("table",null,u.a.createElement(d,null),u.a.createElement(p,{countryData:e}))}}]),t}(s.Component),E=(a(13),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={countries:[],updateTime:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"0897a6fcd9mshc9309b55be773acp196fd4jsnb89d70783070"}}).then((function(e){return e.json()})).then((function(t){e.setState({countries:t.countries_stat,updateTime:t.statistic_taken_at})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.updateTime;return u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"App-header"},u.a.createElement("h2",null,"Covid-19 Global Stats")),u.a.createElement("div",{className:"container"},u.a.createElement("p",null,"Updated at ",u.a.createElement("strong",null,a)),u.a.createElement(h,{countryData:t})))}}]),t}(s.Component));m.a.render(u.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.84c23580.chunk.js.map