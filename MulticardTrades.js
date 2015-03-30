var userRows = {};
$("table.cards-show tbody tr").each(function() {
	var userId = $(this).find(".member a:nth-child(3)").attr("href").substring(15);
	var rows = userRows[userId];
	if (userRows[userId] === undefined) { 
		userRows[userId] = []; 
	}
	userRows[userId].push($(this).attr("id"));
});
$("table.cards-show tbody tr").hide();
for (var key in userRows) {
	console.log("Key: " + key);
	if (userRows.hasOwnProperty(key)){
		if(userRows[key].length > 1) {
			for (var row in userRows[key]) {
				console.log(row);
				$("#" + userRows[key][row]).show();
			}
		}
	}
}
