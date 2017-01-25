$(document).ready(function(){
	$("#sendEmailLink").click(function(){
		getExtra();
	});

	textareas = $(".textArea")
    lastta = textareas[textareas.length-1]
    bottom_of_text = $(lastta).offset().top + $(lastta).outerHeight()

    setupCube(bottom_of_text, 1500);

	$('#navbar').followTo($(".textAreaA").offset().top - ($("#navbar").height()));
});


function getExtra(){
	var base = "mailto:sayalvarun@gmail.com?";
	var subjectBase = "subject=";
	var bodyBase = "&body="
	var modalSubjectText = $("#modalSubject").val().split(' ').join('%20');
	var modalBodyText = $("#modalBody").val().split(' ').join('%20');
	base = base + subjectBase + modalSubjectText + bodyBase + modalBodyText;
	$("#sendEmailLink").attr('href',base);
}