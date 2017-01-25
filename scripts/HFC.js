$(document).ready(function(){
	$("#sendEmailLink").click(function(){
        getExtra();
    });
    $('#navbar').followTo($(".textAreaA").offset().top - ($("#navbar").height()));

    textareas = $(".textArea")
    lastta = textareas[textareas.length-1]
    bottom_of_text = $(lastta).offset().top + $(lastta).outerHeight()

    setupCube(bottom_of_text, 1500);
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

var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};
