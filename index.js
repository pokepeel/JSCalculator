var num1 = [];
var num2 = [];
var operator = "0";
var operationButtonHandler = document.querySelectorAll('.operator').length;
var Back = document.querySelectorAll('.operator').length;

getResult();

for(let i = 0; i < operationButtonHandler; i++)
{
    document.querySelectorAll('.operator')[i].addEventListener("click", function()
    {
        operator = document.querySelectorAll('.operator')[i].innerHTML;
        console.log("Operator = " + operator);
        updateOutput();
    });
}

document.querySelector('.backspace').addEventListener("click", backspace);

function backspace()
{
    if(operator == "0" && num1.length > 0)
    {
        num1.pop();
    }
    else if(operator != "0" && num2.length > 0)
    {
        num2.pop();
    }
    else if (operator != "0" && num2.length == 0)
    {
        operator = "0";
    }
    else
    {
        console.log("Error on backspace or first input")
    }
    updateOutput();
}

var numberButtonHandler = document.querySelectorAll('.num').length;

for(let i = 0; i < numberButtonHandler; i++)
{
    document.querySelectorAll('.num')[i].addEventListener("click", function()
    {   
        if(operator != 0)
        {
            if (i != 9)
            {
                num2.push(i+1);
            }
            else
            {
                num2.push(0);
            }
        }
        else
        {
            if (i != 9)
            {
                num1.push(i+1);
            }
            else
            {
                num1.push(0);
            }
        }
        //document.querySelectorAll('.num')[i].innerHTML
        updateOutput();
        console.log("num = " + operator);
    });
}

function updateOutput()
{
    var num1Final = parseInt(num1.join(''), 10);
    var num2Final = parseInt(num2.join(''), 10);

    if(num1.length < 1)
    {
        num1Final = 0;
    }
    else if(num2.length < 1)
    {
        num2Final = 0;
    }

    if (operator != "0" && num2.length == 0)
    {
        document.getElementById('output').innerHTML = num1Final + operator;
    }
    else if (operator != "0" && num2.length > 0)
    {
        document.getElementById('output').innerHTML = num1Final + operator + num2Final;
    }
    else
    {
        document.getElementById('output').innerHTML = num1Final;
    }
}

document.querySelector('.result button').addEventListener("click", getResult);

function getResult()
{
    var result = 0;
    var num1Final = parseInt(num1.join(''), 10);
    var num2Final = parseInt(num2.join(''), 10);
    console.log("num1Final = " + num1Final);
    console.log("num2Final = " + num2Final);

    if(num1.length < 1)
    {
        num1Final = 0;
    }
    else if(num2.length < 1)
    {
        num2Final = 0;
    }

    if(operator === "+")
    {
        result = num1Final + num2Final;
    }
    else if(operator === "-")
    {
        result = num1Final - num2Final;
    }
    else if(operator === "*")
    {
        result = num1Final * num2Final;
    }
    else if(operator === "/")
    {
        result = num1Final / num2Final;
    }
    else if (num1Final >! 0)
    {
        result = "0";
    }

    document.getElementById('output').innerHTML = result;
    console.log("result = " + result);
}