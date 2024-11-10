document.addEventListener('goalLoad', function(obj) {
  if (obj && obj.detail) {
    console.log(obj.detail);
    $('#title').html(obj.detail.title || 'Goal Title Not Available');
    $('#goal-current').text('₹' + obj.detail.amount.current || '0');
    $('#goal-total').text('₹' + obj.detail.amount.target || '0');
    $('#goal-end-date').text('Goal End Date: ' + obj.detail.to_go.ends_at || 'No End Date Available');   
    var currentAmount = obj.detail.amount.current;
    var totalAmount = obj.detail.amount.target;
    var percent = (currentAmount / totalAmount) * 100;     
    $('.inside').css('width', percent + '%');
  } else {
    console.error('Goal data not available in the event detail.');
  }
});
document.addEventListener('goalEvent', function(obj) {
  if (obj && obj.detail) {
    console.log(obj.detail);
    $('#goal-current').text('₹' + obj.detail.amount.current || '0');
    var currentAmount = obj.detail.amount.current;
    var totalAmount = obj.detail.amount.target;
    var percent = (currentAmount / totalAmount) * 100;
    $('.inside').css('width', percent + '%');
  } else {
    console.error('Goal event data not available in the event detail.');
  }
});
