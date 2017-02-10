$(document).ready(function() {
	$('#topicsList').DataTable();
} );

function sendMail(){
	console.log("send mail called");
	var payload=getPayload();
	var url="/minutes/mail";
	
	var xhr = createCORSRequest('POST', url);
	console.log("url is "+url);
	if (!xhr) {
		alert('CORS not supported');
		return;
	}	
	// Response handlers.
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onload = function(){
		var text = xhr.responseText;
		if(xhr.readyState == 4 && xhr.status == 200) {
			alert("mail is sent");
		}
		if(xhr.readyState == 4 && xhr.status == 500) {
			alert("Error in sending mail");
		}
	};
	xhr.onerror = function() {
		alert('Woops, there was an error making the request.');
		// $("#submit").prop('disabled', false);
		// $(".loader").slideToggle();

	};

	xhr.onloadstart = function() {
		// $("#submit").prop('disabled', true);
		// $(".loader").slideToggle();

	};	

	xhr.send(JSON.stringify(payload));

}

function getPayload(){
	var title = document.getElementById("mtitle").value;
	var time = 	document.getElementById("mtime").value;
	var location = document.getElementById("mlocation").value;
	var client = document.getElementById("mclient").value;
	var project = document.getElementById("mproject").value;
	var chairP = document.getElementById("mchair").value;
	var attendees = document.getElementById("mattendees").value;
	var tasks=[];

	var table = document.getElementById('topicsList');
	var size = table.rows.length;
	for (var r = 1 ; r < size ; r++) {
		var ctitle=table.rows[r].cells[0].innerHTML;
		var cdesc=table.rows[r].cells[1].innerHTML;
		var cowners=table.rows[r].cells[2].innerHTML;
		var ctarget=table.rows[r].cells[3].innerHTML;
		var e=document.getElementById("sel"+r);
		var cstatus = e.options[e.selectedIndex].text;
		var cminutes=document.getElementById("minute"+r).value;
		var topic={"title":ctitle,"description":cdesc,"target":ctarget,
				"status":cstatus,"minutes":cminutes,"owners":cowners};
		tasks.push(topic);
	}
	var payload = {"title":title,"time":time,"location":location,"client":client,
		"project":project,"chairP":chairP,"attendees":attendees,
		"topics":tasks};

	console.log(payload);
	return payload;
}

// Create the XHR object.
function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// CORS not supported.
		xhr = null;
	}
	return xhr;
}

