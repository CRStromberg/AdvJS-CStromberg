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
}