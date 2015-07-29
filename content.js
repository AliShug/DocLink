$(document).ready(function () {

  var urlbase = "microsoft.kinect.kinect.";
  $("dd").each(function () {
    $(this).html($(this).html().replace(/ ((I|NuiFusion|Create|Get|Set|Override|Camera|Color|Depth|Joint|Kinect|Point|Rect|Vector|Matrix|NUI|Activity|Appearance|Audio|Detection|Expression|Frame|Hand|Pointer|Tracking|Face|High)[a-zA-Z0-9_]+)/g, ' <a href="'+urlbase+'$1">$1<\/a>'));
  });
});
