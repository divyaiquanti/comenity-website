function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); 
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
}
vwo_cookie = getCookie('_vis_opt_exp_1014_combi');
console.log(vwo_cookie);
var top_applynowlink = jQuery('section.hero-banner').find('a.btn-primary').attr('href');
var sticky_applynowlink = jQuery('.fixright-div').find('a.btn-primary').attr('href');

if(vwo_cookie === '1'){
	top_applynowlink += "&referrerid=c";sticky_applynowlink += "&referrerid=c";
}else if(vwo_cookie === '2'){
	top_applynowlink += "&referrerid=v1";sticky_applynowlink += "&referrerid=v1";
}else if(vwo_cookie === '3'){
	top_applynowlink += "&referrerid=v2";sticky_applynowlink += "&referrerid=v2";
}else{}

console.log(top_applynowlink);
jQuery('section.hero-banner').find('a.btn-primary').attr('href',top_applynowlink);