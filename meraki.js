document.getElementById("create_account_form").style.display = 'none';

function show_signin() {
  document.getElementById("signin_form").style.display = 'block';
  document.getElementById("create_account_form").style.display = 'none';
  do_prevent(arguments);
  return false;
}

function show_create_account() {
  document.getElementById("signin_form").style.display = 'none';
  document.getElementById("create_account_form").style.display = 'block';
  do_prevent(arguments);
  return false;
}

function do_prevent(args) {
  if(args.length &gt; 0 &amp;&amp; typeof(args[0].preventDefault) == 'function')
	args[0].preventDefault();
}

if (document.addEventListener) {
  var c_a_l = document.getElementById('create_account_link'); if (c_a_l) { c_a_l.addEventListener('click', show_create_account, true); }
  var s_l = document.getElementById('signin_link'); if (c_a_l) { s_l.addEventListener('click', show_signin, true); }
} else if (document.attachEvent) {
  var c_a_l = document.getElementById('create_account_link'); if (c_a_l) { c_a_l.attachEvent('onclick', show_create_account); }
  var s_l = document.getElementById('signin_link'); if (c_a_l) { s_l.attachEvent('onclick', show_signin); }
}

function update_form_action_from_headers(form) {
var _request = new XMLHttpRequest();
var url = 'https://n39.meraki.com/splash/login?continue_url=CONTINUE_URL_PLACEHOLDER';
_request.open('HEAD', window.location, true);
_request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
_request.onreadystatechange = function() {
  if (_request.readyState === 4) {
	var continue_url = _request.getResponseHeader('Continue-Url');
	form.action = url.replace('CONTINUE_URL_PLACEHOLDER', continue_url);
	form.submit();
  }
}
_request.send(null);
return false;
}

var link = document.getElementById('resend_email_link');
var msg = document.getElementById('resend_email_message');
link.addEventListener("click", function(e) {
  e.preventDefault();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
	  if (xmlhttp.status == 200) {
		msg.innerHTML = "Email sent successfully.";
	  } else {
		msg.innerHTML = "Your account cannot be verified by email. If you believe you are seeing this message in error, please contact the network administrator.";
	  }
	}
  };
  xmlhttp.open("GET", link.href, true);
  xmlhttp.send();
});

