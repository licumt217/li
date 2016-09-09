/**
 * Created by liqiang on 2016/9/7.
 */
var uid = require('matthewmueller/uid');
var fmt = require('yields/fmt');

var msg = fmt('Your unique ID is %s!', uid());
window.alert(msg);