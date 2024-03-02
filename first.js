let a=[3][3]=[["0","0","0"],["0","0","0"],["0","0","0"]];
let b00=document.querySelector("#b00");
let b01=document.querySelector("#b01");
let b02=document.querySelector("#b02");
let b10=document.querySelector("#b10");
let b11=document.querySelector("#b11");
let b12=document.querySelector("#b12");
let b20=document.querySelector("#b20");
let b21=document.querySelector("#b21");
let b22=document.querySelector("#b22");
let d=document.querySelector("body");
let i=0;
let z=0;
let b=0;
let j=0;
let c="a"
console.log(a)

function check(){
    for (let row = 0; row < 3; row++) {
        if (a[row][0] !== "0" && a[row][0] === a[row][1] && a[row][1] === a[row][2]) {
            return a[row][0]; // Return the winning symbol (X or O)
        }
    } 
    for (let col = 0; col < 3; col++) {
        if (a[0][col] !== "0" && a[0][col] === a[1][col] && a[1][col] === a[2][col]) {
            return a[0][col]; // Return the winning symbol (X or O)
        }
    }
    if (a[0][0] !== "0" && a[0][0] === a[1][1] && a[1][1] === a[2][2]) {
        return a[0][0]; // Return the winning symbol (X or O)
    }
    if (a[0][2] !== "0" && a[0][2] === a[1][1] && a[1][1] === a[2][0]) {
        return a[0][2]; // Return the winning symbol (X or O)
    }

    // If no winner, return null
    return null;

}

b00.onclick=()=>{
    // if(i==z)
    if(i%2==0&&a[0][0]=="0"){
        b00.innerText="X";
        a[0][0]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[0][0]=="0"){
        b00.innerText="O";
        a[0][0]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
b01.onclick=()=>{
    if(i%2==0&a[0][1]=="0"){
        b01.innerText="X";
        a[0][1]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[0][1]=="0"){
        b01.innerText="O";
        a[0][1]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
b02.onclick=()=>{
    if(i%2==0&a[0][2]=="0"){
        b02.innerText="X";
        a[0][2]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[0][2]=="0"){
        b02.innerText="O";
        a[0][2]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
b10.onclick=()=>{
    if(i%2==0&a[1][0]=="0"){
        b10.innerText="X";
        a[1][0]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[1][0]=="0"){
        b10.innerText="O";
        a[1][0]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}

b11.onclick = () =>{
    if(i%2==0&a[1][1]=="0"){
        b11.innerText="X";
        a[1][1]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[1][1]=="0"){
        b11.innerText="O";
        a[1][1]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
    // console.log("hhhh")
}
b12.onclick=()=>{
    if(i%2==0&a[1][2]=="0"){
        b12.innerText="X";
        a[1][2]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[1][2]=="0"){
        b12.innerText="O";
        a[1][2]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
b20.onclick=()=>{
    if(i%2==0&a[2][0]=="0"){
        b20.innerText="X";
        a[2][0]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[2][0]=="0"){
        b20.innerText="O";
        a[2][0]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
b21.onclick=()=>{
    if(i%2==0&a[2][1]=="0"){
        b21.innerText="X";
        a[2][1]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[2][1]=="0"){
        b21.innerText="O";
        a[2][1]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
b22.onclick=()=>{
    if(i%2==0&a[2][2]=="0"){
        b22.innerText="X";
        a[2][2]="x";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    else if(i%2!=0&a[2][2]=="0"){
        b22.innerText="O";
        a[2][2]="o";
        c=check();
        if(c=="x"||c=="o"){
            winner();
        }
    }
    i++;
}
function winner(){
    if(c=="x"){
        d.innerHTML="<p>THE Winner is X</p><br><button onclick='location.replace(location.href)'>New Game</button>";
    }
    else{
        d.innerHTML="<p>THE Winner is O</p><br><button onclick='location.replace(location.href)'>New Game</button>";
    }
}