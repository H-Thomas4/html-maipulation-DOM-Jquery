$(document).ready(function(){
    const $button = $('<button>Submit</button>');
    $button.appendTo('body');

    /*$button.click(function () {
        alert("Hello World!")
    });
    */
    
    /* 
    let $button = $("#button");
    $button.click( function () {
        let message = $("#message").val();
        alert(message);
    });
    */
    
     let $div = $("#div");
    $div.hover(function() {
        div.style.backgroundColor = "blue";
    }, function() {
        div.style.backgroundColor = "white";
    });

    let colors = ['pink', 'brown', 'orange', 'gray', 'marroon', 'blue', 'black', 'green'];

    function changeColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    };
 
    $p.onClick(function() {
        let $p = $('#p');
       // p.style.color = "red";//
        let randomColor = Changecolor();
        p.style.color = "#" + randomColor;
    });



    let $friends = ["Bear", "Royce", "Marcus", "Fat", "Bonnie", "Ryan", "David", "Sharim", "Joe", "brenda"];
    let $button = $("#button");
    let $ul = $("#ul");
        $($button).click( function () {
        for (let i = 0; i < $friends.length; i++) {
            let $li = $("<li>" + ($friends[i]) + "</li>");
            $($li).appendTo($ul);
        });









});