$(document).ready(function(){
	$("#sendEmailLink").click(function(){
		getExtra();
	});
	$('#navbar').followTo($(".textAreaA").offset().top - ($("#navbar").height()));

    textareas = $(".textArea")
    lastta = textareas[textareas.length-1]
    bottom_of_text = $(lastta).offset().top + $(lastta).outerHeight()

    setupCube(bottom_of_text, 1500);

    $("#resume_button").click(function(){
        window.open("files/resume.pdf");
    });

    window.onresize = function(event){
        if($(window).height() >=320 && $(window).width() <= 1024){
            $("#hi").css("font-size","250px")
            $("#big_title").css("font-size","60px")
            $("#introInfoList").css("width","85%")
        }else{
            $("#hi").css("font-size","330px")
            $("#big_title").css("font-size","100px")
            $("#introInfoList").css("width","65%")
        }
    }

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


function startGrad(){
    $({countNum: $('#gradYear').text()}).animate({countNum: 2016}, {
        duration: 4000,
        easing:'swing',
        step: function() {
            $('#gradYear').text(Math.floor(this.countNum));
        },
        complete: function() {
            $('#gradYear').text(this.countNum);
        }
    });
}

function startCSGPA(){
    $({countNum: $('#csGPA').text()}).animate({countNum: 79}, {
        duration: 4000,
        easing:'swing',
        step: function() {
            $('#csGPA').text(Math.floor(this.countNum));
        },
        complete: function() {
            $('#csGPA').text(this.countNum);
        }
    });
}

function startAMSGPA(){
    $({countNum: $('#amsGPA').text()}).animate({countNum: 81}, {
        duration: 4000,
        easing:'swing',
        step: function() {
            $('#amsGPA').text(Math.floor(this.countNum));
        },
        complete: function() {
            $('#amsGPA').text(this.countNum);
        }
    });
}

function startSchol(){
    $({countNum: $('#scholLen').text()}).animate({countNum: 4}, {
        duration: 4000,
        easing:'swing',
        step: function() {
            $('#scholLen').text(Math.floor(this.countNum));
        },
        complete: function() {
            $('#scholLen').text(this.countNum);
        }
    });
}

function startSize(){
    $({countNum: $('#honSize').text()}).animate({countNum: 30}, {
        duration: 4000,
        easing:'swing',
        step: function() {
            $('#honSize').text(Math.floor(this.countNum));
        },
        complete: function() {
            $('#honSize').text(this.countNum);
        }
    });
}

function startUSCH(){
    $({countNum: $('#uschSize').text()}).animate({countNum: 8}, {
        duration: 4000,
        easing:'swing',
        step: function() {
            $('#uschSize').text(Math.floor(this.countNum));
        },
        complete: function() {
            $('#uschSize').text(this.countNum);
        }
    });
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