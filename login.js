function login(){
    player1name=document.getElementById("input1").value;
    player2name=document.getElementById("input2").value;
    localStorage.setItem("p1",player1name);
    localStorage.setItem("p2", player2name)
    window.location="gamepage.html"
}