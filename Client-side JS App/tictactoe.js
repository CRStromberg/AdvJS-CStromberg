var turn = 0;
var count = 0;

function place_x() 
{
    document.getElementById("one").innerHTML = "X";
    document.getElementById("two").innerHTML = "X";
    document.getElementById("three").innerHTML = "X";
    document.getElementById("four").innerHTML = "X";
    document.getElementById("five").innerHTML = "X";
    document.getElementById("six").innerHTML = "X";
    document.getElementById("seven").innerHTML = "X";
    document.getElementById("eight").innerHTML = "X";
    document.getElementById("nine").innerHTML = "X";
}

function place_o() 
{
    document.getElementById("one").innerHTML = "O";
    document.getElementById("two").innerHTML = "O";
    document.getElementById("three").innerHTML = "O";
    document.getElementById("four").innerHTML = "O";
    document.getElementById("five").innerHTML = "O";
    document.getElementById("six").innerHTML = "O";
    document.getElementById("seven").innerHTML = "O";
    document.getElementById("eight").innerHTML = "O";
    document.getElementById("nine").innerHTML = "O";
}

function main()
{
    while(count < 9)
    {
        if(turn == 0)
        {
            place_x();
            turn++;
        }
        else
        {
            place_o;
            turn--;
        }
        count++;
    }


}