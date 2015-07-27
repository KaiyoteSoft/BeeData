function stateOutput(state) {
	// document.write("Hello world " + state);
	// var colonies = us_beedata[0].colonies;
	var i = 0;
	state_name = state;
	for (i; i < us_beedata.length; i++){
		if (us_beedata[i].state == state_name) {
			var colonies = us_beedata[i].colonies;
			var loss = us_beedata[i].loss;
		}
	};

	var tabledata = "<table> <tr>" + 
	 "<th>State</th> <th>Number of bee colonies</th> <th>Percentage of colonies lost</th> </tr>" +
	 "<tr> <td>" + state +  "</td>" + 
	 "<td>" + colonies + "</td> <td>" + loss + "</td> </tr>" + 
	 " </table>";

	$('#beeTable').html(tabledata);
}