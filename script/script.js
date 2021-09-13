//functions to add,sub,mul,divide
const add = (a,b) =>{
    return a+b;
}
const subtract = (a,b) =>{
    return a-b;
}
const multiply = (a,b) =>{
    return a*b;
}
const divide = (a,b) =>{
    return a/b;
}
//functions to call add,sub,mul,divide based on operator
const operate = (operator,operand1,operand2)=>{
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch(operator)
    {
        case '+' : return add(operand1,operand2); break;
        case '-' : return subtract(operand1,operand2); break;
        case '*' : return multiply(operand1,operand2); break;
        case '/' : return divide(operand1,operand2); break;
    }
}

//doms
const btns = document.querySelectorAll('.btn');
const hist = document.querySelector('.hist');
const now = document.querySelector('.now');

//vars
let operand1 ='';
let operand2 ='';
let operator ='';
const getData = ()=>{
    btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            if(e.target.classList.contains('btn-operand'))
            {
                if(operand1=='' && operand2=='' && hist.textContent == 0)
                {
                        now.textContent+=e.target.textContent;
                }
                else if(operand1 !='' && now.textContent!='')
                {
                    now.textContent += e.target.textContent;
                }
            }

            else if(e.target.classList.contains('btn-operator'))
            {
                if(operand1=='' && operand2=='' && now.textContent[now.textContent.length]!='.')
                {
                    operand1 = now.textContent;
                    now.textContent += e.target.textContent;
                    operator = e.target.textContent;
                }
                else if(operand1 != '' && now.textContent !='' && now.textContent[now.textContent.length] !='.' &&
                    (
                        (now.textContent[now.textContent.length-1]!='+') &&
                        (now.textContent[now.textContent.length-1]!='-') &&
                        (now.textContent[now.textContent.length-1]!='*') &&
                        (now.textContent[now.textContent.length-1]!='/') 
                    )
                )
                {
                    operand2 = now.textContent.slice(now.textContent.indexOf(operator)+1,now.textContent.length);
                    hist.textContent = operate(operator,operand1,operand2);
                    operator=e.target.textContent;
                    now.textContent=operator;
                    operand1=hist.textContent;
                    console.log(operand1);
                    console.log(operand2);
                }
                else if(operand1!='' && now.textContent == '')
                {
                    operator = e.target.textContent;
                    now.textContent = operator;
                    hist.setAttribute('style','font-size:1em');
                }
            }
            else if(e.target.classList.contains('btn-equal'))
            {
                if(operand1!='' && operator!='' && now.textContent.slice(now.textContent.indexOf(operator)+1,now.textContent.length) !='')
                {
                    operand2 = now.textContent.slice(now.textContent.indexOf(operator)+1,now.textContent.length);
                    now.textContent=operate(operator,operand1,operand2);
                    operand1 = now.textContent;
                    hist.textContent = operand1;
                    hist.setAttribute('style','font-size:2em');
                    now.textContent = '';
                }
            }
            else if(e.target.classList.contains('btn-clear'))
            {
                operand1='';
                operand2='';
                operator='';
                now.textContent='';
                hist.textContent=0;
                hist.setAttribute('style','font-size:1em');
            }
            else if(e.target.classList.contains('btn-del'))
            {
                now.textContent = now.textContent
                                    .toString()
                                    .slice(0,-1);


            }
            else if(e.target.classList.contains('btn-decimal'))
            {
                if(now.textContent!='' && now.textContent[now.textContent.length-1]!='.' && 
                    (
                        now.textContent[now.textContent.length]!='+' ||
                        now.textContent[now.textContent.length]!='-' ||
                        now.textContent[now.textContent.length]!='*' ||
                        now.textContent[now.textContent.length]!='/' 
                    )
                )
                {
                    now.textContent+=e.target.textContent;
                }
            }
        })
        
    })
}
//key-board support

window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            choice = document.querySelector('#one');
            choice.click();
            break;
        case '2':
            choice = document.querySelector('#two');
            choice.click();
            break;
        case '3':
            choice = document.querySelector('#three');
            choice.click();
            break;
        case'4':
            choice = document.querySelector('#four');
            choice.click();
            break;
        case '5':
            choice = document.querySelector('#five');
            choice.click();
            break;
        case '6':
            choice = document.querySelector('#six');
            choice.click();
            break;
        case '7':
            choice = document.querySelector('#seven');
            choice.click();
            break;
        case '8':
            choice = document.querySelector('#eight');
            choice.click();
            break;
        case '9':
            choice = document.querySelector('#nine');
            choice.click();
            break;
        case '0':
            choice = document.querySelector('#zero');
            choice.click();
            break;
        case 'Escape':
            choice = document.querySelector('#clear');
            choice.click();
            break;
        case 'Backspace':
            choice = document.querySelector('#backspace');
            choice.click();
            break;
        case '/':
            choice = document.querySelector('#divide');
            choice.click();
            break;
        case '*':
            choice = document.querySelector('#multiply');
            choice.click();
            break;
        case '-':
            choice = document.querySelector('#minus');
            choice.click();
            break;
        case '+':
            choice = document.querySelector('#plus');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#decimal');
            choice.click();
            break;
        case 'Enter':
        case '=':
            choice = document.querySelector('#equal');
            choice.click();
            break;
    }
}

getData();