$(document).ready(function(){
	// function to toggle diaplay of fetch NS4 parameters
	$("#clear").click(function(){
		 $(this).siblings('input:text').val('');	
	});

	{$('#targetdate').datetimepicker();}
});

$(function () {$('#targetdate').datetimepicker();}
	);

function getTopic(){
	var data="";
	var rowstart="<div class='row'>";
	var rowend="</div>";
	var titleStr="<div class='col-md-6'><div class='form-group'><label class='control-label col-sm-2'>Title</label>"+
					"<div class='col-sm-8' style='text-align: left'>"+        
					"<input type='text' id='titleStr' class='form-control'"+
					"></div></div></div>";
	var descStr="<div class='col-md-6'><div class='form-group'><label class='control-label col-sm-2'>Description</label>"+
					"<div class='col-sm-8' style='text-align: left'>"+        
					"<input type='text' id='descStr' class='form-control'"+
					"></div></div></div>";					
	var ownerStr="<div class='col-md-6'><div class='form-group'><label class='control-label col-sm-2'>"+
					"Owner</label>"+
					"<div class='col-sm-8' style='text-align: left'>"+        
					"<input type='text' id='ownerStr' class='form-control'></div></div></div>";
	var ownerCpyStr="<div class='col-md-6'><div class='form-group'><label class='control-label col-sm-2'>"+
					"Owner Company</label>"+
					"<div class='col-sm-8' style='text-align: left'>"+        
					"<input type='text' id='ownerCpyStr' class='form-control'></div></div></div>";
	var dateStr="<div class='col-md-6'><div class='form-group'><label class='control-label col-sm-2'>"+
					"Date</label>"+
					"<div class='col-sm-6'>"+          
						"<div class='input-group date' id='targetdate'>"+
							"<input type='text' class='form-control' placeholder='Target date' />"+
							"<span class='input-group-addon'>"+
								"<span class='glyphicon glyphicon-calendar'></span>"+
							"</span>"+
						"</div>"+
					"</div></div></div>";
					// "<script >"+
					//  	"$(function () {"+
					//  		"$('#targetdate').datetimepicker();});"+
					//  "</script>";
	var statusStr="<div class='col-md-6'><div class='form-group'><label class='control-label col-sm-2'>"+
					"Status</label>"+
					"<div class='col-sm-8'>"+        
					"<select class='form-control' id='sel1'>'"+
    						"<option>PENDING</option>"+
    						"<option>IN PROGRESS</option>"+
    						"<option>COMPLETED</option>"+
  					"</select>"
					+"</div></div></div>";			

	var buttons="<div class='col-sm-offset-4 col-sm-1'>"+
							"<button class='btn btn-primary'>Add</button></div>"+
							"<div class='col-sm-1'><button type='reset' id='clear' class='btn btn-default'>Clear</button></div>"+
							"<div class='col-sm-1'><button id='clear' class='btn btn-danger'>Delete</button>"+
						"</div>";				
	data+=rowstart+titleStr+descStr+rowend+rowstart+ownerStr+ownerCpyStr+
			rowend+rowstart+dateStr+statusStr+rowend+rowstart+buttons+rowend;
	data+="<hr>";
	console.log(statusStr);
	return data;
}

function addTopic(){
	document.getElementById("topics").innerHTML+=getTopic();
	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
}