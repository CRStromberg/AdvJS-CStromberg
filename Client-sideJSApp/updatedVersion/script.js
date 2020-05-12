var turn = 0;
var count = 0;

function place_x(clicked_id) 
{
    document.getElementById(clicked_id).innerHTML = "X";
}

function place_o(clicked_id) 
{
    document.getElementById(clicked_id).innerHTML = "O";
}

function main(clicked_id)
{
    check_content(clicked_id);
}

function restart()
{
    location.reload();
}

function check_content(clicked_id)
{
    if(document.getElementById(clicked_id).innerHTML === "")
    {
        if(turn == 0)
        {
            place_x(clicked_id);
            turn++;
        }
        else
        {
            place_o(clicked_id);
            turn--;    
        }
        count++;
        if(count > 3)
        {
            check_winner(count);
        }
    }
}

function check_winner(count)
{
    var winner = "";
    //1,2,3  4,5,6  7,8,9      1,4,7    2,5,8   3,6,9       1,5,9   3,5,7
    if(document.getElementById("1").innerHTML === document.getElementById("2").innerHTML && document.getElementById("2").innerHTML === document.getElementById("3").innerHTML)
    {
        winner = document.getElementById("1").innerHTML;
        
    }
    else if(document.getElementById("4").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("6").innerHTML)
    {
        winner = document.getElementById("4").innerHTML;
    }
    else if(document.getElementById("7").innerHTML === document.getElementById("8").innerHTML && document.getElementById("8").innerHTML === document.getElementById("9").innerHTML)
    {
        winner = document.getElementById("7").innerHTML;
    }
    else if(document.getElementById("1").innerHTML === document.getElementById("4").innerHTML && document.getElementById("4").innerHTML === document.getElementById("7").innerHTML)
    {
        winner = document.getElementById("1").innerHTML;
    }
    else if(document.getElementById("2").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("8").innerHTML)
    {
        winner = document.getElementById("2").innerHTML;
    }
    else if(document.getElementById("3").innerHTML === document.getElementById("6").innerHTML && document.getElementById("6").innerHTML === document.getElementById("9").innerHTML)
    {
        winner = document.getElementById("3").innerHTML;
    }
    else if(document.getElementById("1").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("9").innerHTML)
    {
        winner = document.getElementById("1").innerHTML;
    }
    else if(document.getElementById("3").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("7").innerHTML)
    {
        winner = document.getElementById("3").innerHTML;
    }

    if(winner != "")
    {
        document.getElementById("win").innerHTML = "The winner is " + winner;
    }
    else if(count == 9)
    {
        document.getElementById("win").innerHTML = "Draw";
    }
}