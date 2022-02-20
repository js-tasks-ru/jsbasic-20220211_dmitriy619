function highlight(table) {
  // ваш код...
  
  for(let i=0; i<table.rows.length; i++) {
    let flag = 0;
    let row = table.rows[i];
    for (let i=0; i<row.cells.length; i++) {
      let cell = row.cells[i];
      if(cell.dataset.available) {
        if(cell.dataset.available == 'true') {
          row.classList.add('available');
        } else {
          row.classList.add('unavailable');
        }
        flag = 1;
      } 
    }
    if (flag == 0) {
        row.setAttribute('hidden','true');
    }
    if (row.cells[2].textContent == 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }
    
    if(parseInt(row.cells[1].textContent) < 18) {
      row.style="text-decoration: line-through";
    }
  }
  
}
