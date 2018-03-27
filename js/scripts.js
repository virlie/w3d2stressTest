$(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    $('input:checkbox[name=stress]:checked').each(function(){
      var stressTestAnswer = parseInt($(this).val());
      var responseStr;
      console.log(stressTestAnswer);
      if (stressTestAnswer > 5 && stressTestAnswer < 9) {
        responseStr = 'make an appointment with your doctor';
        $('#stress-responses').append(responseStr + '<br>');
      } else if (stressTestAnswer > 9) {
        responseStr = 'good job, you have managed your stress well';
        $('#stress-responses').append(responseStr + '<br>');
      } else {
        responseStr = 'You should seek medical attention immediately';
        $('#stress-responses').append(responseStr + '<br>');
      }
    });
  });
});
