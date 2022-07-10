var previousSubtraction = false;
var previousAddition = false;
var previousMultiplication = false;

function add(){
    let num1 = parseInt(document.getElementsByName('addNum1')[0].value,10);
    let num2 = parseInt(document.getElementsByName('addNum2')[0].value, 10);
    let ans = num1+num2;
    display(ans, 'add');
}


function subtract(){
    let num1 = parseInt(document.getElementsByName('subNum1')[0].value,10);
    let num2 = parseInt(document.getElementsByName('subNum2')[0].value, 10);
    let ans = num1-num2;
    display(ans, 'subtract');

}

function multiply(){
    let num1 = parseInt(document.getElementsByName('multiplyNum1')[0].value,10);
    let num2 = parseInt(document.getElementsByName('multiplyNum2')[0].value, 10);
    let ans =num1*num2;
    display(ans, 'multiply');
}


function display(num, operation){
    if(!isNaN(num)){
        const messageContainer = document.createElement('div');
        let messageText = document.createTextNode(num);
    
        messageContainer.appendChild(messageText)
        if(operation=='add'){
            if(previousAddition){
                remove('add');
            }else{
                previousAddition = true;
            }
            let container= document.getElementsByClassName('add')[0]; 
            messageContainer.className = operation+1;
            container.appendChild(messageContainer);
    
        }else if(operation=='subtract'){
            if(previousSubtraction){
                remove('subtract');
            }else{
                previousSubtraction = true;
            }
            let container= document.getElementsByClassName('subtract')[0];
            messageContainer.className = operation+1; 
            container.appendChild(messageContainer);
        }else if(operation =='multiply'){
            if(previousMultiplication){
                remove('multiply');
            }else{
                previousMultiplication = true;
            }
            let container= document.getElementsByClassName('multiply')[0]; 
            messageContainer.className = operation+1;
            container.appendChild(messageContainer);
        }
    }
}

function remove(operation){
    if(operation=='add'){
        let container = document.getElementsByClassName('add')[0]; 
        let remove = document.getElementsByClassName('add1')[0]; 
        container.removeChild(remove)
    }else if(operation=='subtract'){
        let container = document.getElementsByClassName('subtract')[0]; 
        let remove = document.getElementsByClassName('subtract1')[0]; 
        container.removeChild(remove)
    }else if(operation=='multiply'){
        let container = document.getElementsByClassName('multiply')[0]; 
        let remove = document.getElementsByClassName('multiply1')[0]; 
        container.removeChild(remove)
    }
}
