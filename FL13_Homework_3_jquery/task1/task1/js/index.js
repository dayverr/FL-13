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
  

  // for all li with index > 5 set color to #ccc

// for li wich has em add red color

// for li which contains text 'Buratino' set font weight to bold


// for b in p which is the only child set font size 36px

// for em in p which is the last child of type set color to green


// set width 80px for input with attribute name ended by 'age'
// set width 120px for input with attribute name started by 'my'
// console.log checked checkbox
// show all images with a cat

// wrap every image into the div
// for .mbox with index 3 set padding-top 50px
// for first div wraper for img set float left and border red
