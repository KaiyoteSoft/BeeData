function processData(state) {
	var jdata;
	jQuery.ajax({
		url: "https://bees.apispark.net/v1/data/",
		type: "GET",
		contentType: 'application/json; charset=utf-8',
		success: function(resultData) {
			//this is where your json is processed
		jdata = resultData;
		console.log(jdata.length);

		var i = 0;
		state_name = state;
		for (i; i < jdata.length; i++){
			if (jdata[i].state == state_name) {
				var colonies = jdata[i].colonies;
				var loss = jdata[i].loss;
			}
		};

		var tabledata = "<table> <tr>" + 
		 "<th>State</th> <th>Number of bee colonies</th> <th>Percentage of colonies lost</th> </tr>" +
		 "<tr> <td>" + state +  "</td>" + 
		 "<td>" + colonies + "</td> <td>" + loss + "</td> </tr>" + 
		 " </table>";

		$('#beeTable').html(tabledata);
		}
	})
}

// function stateOutput(state) {
// 	var i = 0;
// 	// var beedata2 = processData();
// 	console.log(beedata2);
// 	state_name = state;
// 	for (i; i < beedata2.length; i++){
// 		if (beedata2[i].state == state_name) {
// 			var colonies = beedata2[i].colonies;
// 			var loss = beedata2[i].loss;
// 		}
// 	};

// 	var tabledata = "<table> <tr>" + 
// 	 "<th>State</th> <th>Number of bee colonies</th> <th>Percentage of colonies lost</th> </tr>" +
// 	 "<tr> <td>" + state +  "</td>" + 
// 	 "<td>" + colonies + "</td> <td>" + loss + "</td> </tr>" + 
// 	 " </table>";

// 	$('#beeTable').html(tabledata);
// }