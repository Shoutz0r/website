$(function() {
	// Get the commit count 
	// (first request after new commit will return 202, then needs to be reloaded)
	function updateCommitCount() {
	  $.getJSON("https://api.github.com/repos/xorinzor/Shoutz0r-app/stats/contributors", function(data, statusText, jqxhr) {
	    if(jqxhr.status === 202) {
				setTimeout(updateCommitCount, 1000);
	    } 
	    else if(jqxhr.status === 200) {
	      var commitCount = 0;

	      $.each(data, function(k,v) {
	        commitCount += v.total;
	      });

	      $("#repoCommitCount").html(commitCount);
	    }
	    else {
	    	$("#repoCommitCount").html("?");
	    }
	  });
	}

	updateCommitCount();

	// Set Star and Issue count
	$.getJSON("https://api.github.com/repos/xorinzor/Shoutz0r-app", function(data) {
		$("#repoStarCount").html(data.stargazers_count);
		$("#repoIssueCount").html(data.open_issues_count);
	});
});
