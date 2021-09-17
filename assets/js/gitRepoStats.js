$(function() {
	// Set Commit count
	$.getJSON("https://api.github.com/repos/xorinzor/Shoutz0r-app/stats/contributors", function(data) {
		var commitCount = 0;

		$.each(data, function(k,v) {
			commitCount += v.total;
		});

		$("#repoCommitCount").html(commitCount);
	});

	// Set Star and Issue count
	$.getJSON("https://api.github.com/repos/xorinzor/Shoutz0r-app", function(data) {
		$("#repoStarCount").html(data.stargazers_count);
		$("#repoIssueCount").html(data.open_issues_count);
	});
});