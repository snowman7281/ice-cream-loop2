$(document).ready(function(){
  var flavors = ["vanilla", "chocolate", "oreo", "cookie dough"];

  flavors.forEach(function(flavor){
    $("input#" + flavor);
    //this way to populate list
    $("#1").text(flavors[0]);
    $("#2").text(flavors[1]);
    $("#3").text(flavors[2]);
    $("#4").text(flavors[3]);

  });
  //this way to just show array in output div
  $("#output").append(flavors);
});
