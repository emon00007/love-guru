function clickMe(){
    const getInput=document.getElementById('first-inp');
    const getInput2=document.getElementById('secound-inp');
    const name=getInput.value+' '+"Love"+" " +getInput2.value;

    const randomNumber=Math.round(Math.random()*100);
    const ouput=document.getElementById('outpu');
    ouput.innerText=name+" " +randomNumber+" "+'%'
    getInput.value='';
    getInput2.value='';
   }