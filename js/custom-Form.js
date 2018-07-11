function validateCustomForm(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { //Add better email verification ;-)
    console.log("Would pass");

    mixpanel.identify();
    mixpanel.people.set({ "$email": email });

    fbq('track', 'Lead');  

    popupForm = window.typeformEmbed.makePopup("https://cesar231.typeform.com/to/H5joQp?email=" + email, {
      mode: 'drawer_left',
      autoClose: 1,
      hideHeaders: true,
      hideFooter: true
    });

    popupForm.open();

  } else {

    // I'm using CSS animations because JQuery needs a plugin to animate color, yet I use JQuery to detect the end of the animation and then remove the animation class
    document.getElementById('form-underline').classList.add("error-animation-solid");
    document.getElementById('formValueId1').classList.add("error-animation-text");
    document.getElementById('formValueId2').classList.add("error-animation-text");
    $("#formValueId1").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
      function() {
        document.getElementById('form-underline').classList.remove("error-animation-solid");
        document.getElementById('formValueId1').classList.remove("error-animation-text");
        document.getElementById('formValueId2').classList.remove("error-animation-text");
      });
  }
}
