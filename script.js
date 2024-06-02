const countValue = document.querySelector('#counter');

function incerment(){
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

const decrement = () =>{
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};