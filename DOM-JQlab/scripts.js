document.addEventListener('DOMContentLoaded', function () {
    const button = document.createElement('button');
    document.body.append(button);

    const btnText = document.createTextNode('submit');
    button.appendChild(btnText);

    /*button.addEventListener("click", function() {
         alert("Hello World!"); 
    });*/

     /*button.addEventListener('click', function () {
       let message = document.getElementById('message').value;
        alert(message);
    }); */   

    
    div.addEventListener("mouseover", function () {
        let div = document.getElementById('div');
        div.style.backgroundColor = "blue";
    });

    div.addEventListener("mouseleave", function() {
        div.style.backgroundColor = "white";
    });

    let colors = ['pink', 'brown', 'orange', 'gray', 'marroon', 'blue', 'black', 'green'];

    function changeColor() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    };
 
    

    p.addEventListener("click", function () {
        let p = document.getElementById('p');
       // p.style.color = "red";//
        let randomColor = Changecolor();
        p.style.color = "#" + randomColor;
    });

    let friends = ["Bear", "Royce", "Marcus", "Fat", "Bonnie", "Ryan", "David", "Sharim", "Joe", "brenda"]
        
    button.addEventListener("click", function () {
        let ul = document.getElementById("ul");

        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement("li");
            let name = document.createTextNode(friends[i]);
            li.appendChild(name);
            ul.appendChild(li);
        };
    });
});