$("#facebook").hover(function()
    {
      $("#socialcontainer").css({'background-color':'#3B5998'});
      $("#facebook").css({'color':'white','text-decoration':'none','border-color':'white'});
      $("#fbicon").css({'color':'white'});
    },function()
    {
      $("#socialcontainer").css({'background-color':'white'});
      $("#facebook").css({'color':'black','border-color':'black'});
      $("#fbicon").css({'color':'black'});
    });
  $("#github").hover(function()
    {
      $("#socialcontainer").css({'background-color':'#4078c0'});
      $("#github").css({'color':'white','text-decoration':'none','border-color':'white'});
      $("#ghicon").css({'color':'white'});
    },function()
    {
      $("#socialcontainer").css({'background-color':'white'});
      $("#github").css({'color':'black','border-color':'black'});
      $("#ghicon").css({'color':'black'});
    });
  $("#linkedin").hover(function()
    {
      $("#socialcontainer").css({'background-color':'#0077b5'});
      $("#linkedin").css({'color':'white','text-decoration':'none','border-color':'white'});
      $("#liicon").css({'color':'white'});
    },function()
    {
      $("#socialcontainer").css({'background-color':'white'});
      $("#linkedin").css({'color':'black','border-color':'black'});
      $("#liicon").css({'color':'black'});
    });
  $(document).ready( function(){setTimeout(function(){ $("html, body").animate({ scrollTop: 0 }, "slow"); }, 1000)});
