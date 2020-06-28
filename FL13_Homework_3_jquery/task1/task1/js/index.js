// Example: $('#someId').css({'prop' : 'value', 'prop1' : 'value1', ...});

//body: add padding 30px
$('body').css({'padding' : '30px'})

// id title: make align center, remove top margin
$('#title').css({'textAlign':'center','marginTop':'0px'})

// div after header: add double border and padding 20px
$('header').next().css({'border':'3px double black', 'padding':'20px'})

// change color for all h2 and set top margin to 0
$('h2').css({'color':'blue', 'marginTop':'0px'})


// set font size 18px for all .list direct children
$('.list').children().css({'fontSize':'18px'})

// in #list-1
  // show all hidden and not cloned li
$('#list-1 li:hidden').not('.cloned').show()
// hide empty li
$('#list-1 li:empty').hide()

// in #list-3
  // for all even li set margin-left -20px
  $('#list-3 li:odd').css({'marginLeft':'20px'})

  // for the first li set any different color
  $('.list').find('li:first-child').css({'color':'yellow'})

  // for all li with index > 5 set color to #ccc
$('ul li').each(function()
{
  if( $(this).index()>5) {
    $(this).css({'color':'#ccc'})
  }
})
// for li wich has em add red color
$('ul li').each(function()
{
  if($(this).children().is('em')) {
    $(this).css({'color':'red'})
  }
})

// for li which contains text 'Buratino' set font weight to bold
$('ul li:contains("Buratino")').css({'fontWeight':'bold'})

// for b in p which is the only child set font size 36px
 $('p b:only-child').css({'fontSize':'36px'});

// for em in p which is the last child of type set color to green
$('p em').css({'color':'green'});

// set width 80px for input with attribute name ended by 'age'
$('input[name$="age"]').css({'width':'80px'})
// set width 120px for input with attribute name started by 'my'
$('input[name^="my"]').css({'width':'120px'})
// console.log checked checkbox
if ($("input[type='checkbox']").is(":checked"))
{
console.log($("input[type='checkbox']").val())
}
// show all images with a cat
$('img[src*="cat"]').toggle()

// wrap every image into the div
$('img').wrap('<div></div>');
// for .mbox with index 3 set padding-top 50px
$('.mbox').eq(3).css({'paddingTop':'50px'})

// for first div wraper for img set float left and border red
$('.mbox:eq(3) :first').css({'float':'left', 'border':'1px solid red'})
