
    onload =()=>{ 

        let userInputElement = document.getElementById('userInput');
        let userInputData;
        let resultButton = document.getElementById('getResult');    
        let deleteButton = document.getElementById('delete');
        
        for(let btn of document.getElementsByTagName('Button'))
            {
            btn.onclick=()=>{
                userInputElement.value+=btn.innerHTML;
            }
        }
        
        resultButton.onclick = ()=>{
            userInputData = userInputElement.value;
            userInputElement.value = getResult(userInputData);    
        }   
        

        deleteButton.onclick = ()=>{
            userInputElement.value ='';    
        }   
        }

        
            function getResult(userInputData){
                let operandsStack=[],operatorsStack=[];
                let operand='';
                for(let i=0;i<userInputData.length;i++){
                    switch(userInputData[i]){
                    
                        case 'X':{
                            let secondOperand = parseFloat(userInputData.slice(i+1)).toString();
                            i+=secondOperand.length;
                            operand=(operand*secondOperand).toString();
                        }
                            break;
                        case '+':
                            operatorsStack.push(userInputData[i]);
                            operandsStack.push(+operand);
                            operand = '';
                            break;
                            
                        case '-': 
                            operatorsStack.push(userInputData[i]);
                            operandsStack.push(+operand);
                            operand = ''
                            break;

                        case '/':{
                        let secondOperand = parseFloat(userInputData.slice(i+1)).toString();
                        i+=secondOperand.length;
                        operand=(operand/secondOperand).toString();
                        break;
                    }

                        default:
                        operand=operand+userInputData[i];
                            break;
                        }
                    }
                    
                    operandsStack.push(+operand);
                                    
        
                        operandsStack.reverse();
                        operatorsStack.reverse();
                        let leftOperand = rightOperand = 0;
                        let operator;
                        while(operatorsStack.length>0){
                        operator = operatorsStack.pop();
                        leftOperand = +operandsStack.pop();
                        rightOperand = +operandsStack.pop();
                            switch(operator){
                                case '+':
                                operandsStack.push(leftOperand+rightOperand);
                                break;
                
                                case '-':
                                    operandsStack.push(leftOperand-rightOperand);
                                    break;
                                default:
                                    break;         
                                }
                            
                
                        }
                    return operandsStack.pop();
                
            }