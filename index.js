$("#sign_in").click(function () {
    $("#sign_in_form").removeClass("hide");
    $("#sign_in_heading").removeClass("hide");
    $("#dont_have_acct").removeClass("hide");
    $("#sign_up_form").addClass("hide");
    $("#sign_up_heading").addClass("hide");
    $("#have_an_acct").addClass("hide");
});

$("#sign_up").click(function () {
    $("#sign_up_form").removeClass("hide");
    $("#sign_up_heading").removeClass("hide");
    $("#have_an_acct").removeClass("hide");
    $("#sign_in_form").addClass("hide");
    $("#sign_in_heading").addClass("hide");
    $("#dont_have_acct").addClass("hide");
});
