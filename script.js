const tbody = document.querySelector('tbody');
const allRows = tbody.querySelectorAll('tr');
const itemShow = document.querySelector('#itemsPerPage');

const rowContainer = [];

let itemPerPage = 8 ;


for(let idx = 0 ; idx < allRows.length ; idx++ ){
    rowContainer.push(allRows[idx]);
}

itemShow.addEventListener('change', (e)=>{   
     itemPerPage = Number(e.target.value) ;
     rowsToDisplay(itemPerPage);
})

function rowsToDisplay(limit){
   tbody.innerHTML = '';
   for(let i = 0; i < limit ; i++){
     tbody.appendChild(rowContainer[i]);
   }
}

rowsToDisplay(itemPerPage);
