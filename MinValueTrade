var userRows = {};
var $rows = $("table.cards-show tbody tr:visible");
$rows.each(function() {
	var userId = $(this).find(".member a:nth-child(3)").attr("href").substring(15);
	var rows = userRows[userId];
	if (userRows[userId] === undefined) { 
		userRows[userId] = {};
		userRows[userId]["points"] = 0;
		userRows[userId]["requested"] = 0;
		userRows[userId]["rows"] = [];
	}
	userRows[userId].rows.push($(this).attr("id"));
	userRows[userId].points = parseInt($(this).find(".points").text(), 10);
	userRows[userId].requested += parseInt($(this).find(".value").text(), 10);
});
$rows.hide();
for (var key in userRows) {
	if (userRows.hasOwnProperty(key)){
		if(userRows[key].requested > 100) {
			console.log("Id: " + key + " Points: " + userRows[key].points + " Requested: " + userRows[key].requested);
			var keyRows = userRows[key].rows;
			keyRows.forEach(function (element) {
				$("#" + element).show();
				$("#" + element).attr("data-user", key);
			});
		}
	}
}
