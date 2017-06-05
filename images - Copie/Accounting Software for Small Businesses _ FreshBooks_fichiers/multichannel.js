var multichannelUrl = '/_track/visit.php';
var marketingUrl = '/_track/marketing.php';
var landingUrl = window.location.href;
var referringUrl = document.referrer;
var body = 'landing_url='+ encodeURIComponent(landingUrl) + '&referring_url=' + encodeURIComponent(referringUrl);

if (typeof deferTracking == 'undefined' || !deferTracking)
{
    // Marketing cookies
    marketingXHR = jQuery.ajax({
        type: "POST",
        url: marketingUrl,
        data: body,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json'
    });

    // Multichannel Tracking
    multichannelXHR = jQuery.ajax({
        type: "POST",
        url: multichannelUrl,
        data: body,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json'
    });
}
