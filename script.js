const puzzles = [
    [1,'https://connections.swellgarfo.com/game/-OK9ywjW8ePJf3_gJCHt','Feb 13',false,true,false,true],
    [2,'https://connections.swellgarfo.com/game/-OJ-mgINEd2usGtUeBEf','Feb 13',false,true,false,false],
    [3,'https://connections.swellgarfo.com/game/-OK9zndwVI8ZXoofHQj3','Feb 13',true,false,false,false],
    [4,'https://connections.swellgarfo.com/game/-OKA-NhX_JcIhvRnxJS_','Feb 20',false,false,false,false],
    [5,'https://connections.swellgarfo.com/game/-OJdqzemu8Z9f9DEd2Nz','Feb 21',false,false,false,false],
    [7,'https://connections.swellgarfo.com/game/-OK7RDZxz_-UCxTPoftU','Feb 27',false,false,false,false],
    [8,'https://connections.swellgarfo.com/game/-OKCWyo_ZSDnTJ_j24xx','Feb 28',false,false,false,false],
    [9,'https://connections.swellgarfo.com/game/-OKCaE_Qu3yejQikuorN','Feb 28',true,false,false,false],
    [10,'https://connections.swellgarfo.com/game/-OKP-5GYdheIwSNupRPL','Mar 2',false,true,false,false],
    [11,'https://connections.swellgarfo.com/game/-OKTCNLF5Nls0Bhahq7I','Mar 3',false,true,false,false],
    [12,'https://connections.swellgarfo.com/game/-OKTFoN4Pd3ueUdlHD_M','Mar 3',true,false,false,false],
    [13,'https://connections.swellgarfo.com/game/-OKXDAOjb3ZTcIPq93Sl','Mar 4',true,false,true,false],
    [14,'https://connections.swellgarfo.com/game/-OKcMtlbviDTXG6JU_uP','Mar 5',false,false,false,false],
    [15,'https://connections.swellgarfo.com/game/-OKh-RolKvv89943QEmW','Mar 6',false,false,false,false],
    [16,'https://connections.swellgarfo.com/game/-OKmDZRwdIacpjw_jXfv','Mar 7',true,false,false,false],
    [17,'https://connections.swellgarfo.com/game/-OL0-XLQp1RHlU9sIIha','Mar 10',false,false,false,false],
    [18,'https://connections.swellgarfo.com/game/-OL0t-zMVM6VJpwFyn8l','Mar 10',false,false,false,false],
    [19,'https://connections.swellgarfo.com/game/-OL51OGof3xUsK_0j8p1','Mar 11',true,false,false,false],
    [20,'https://connections.swellgarfo.com/game/-OLBBIKOqq9Etnk9jH2U','Mar 12',false,false,false,false],
    [21,'https://connections.swellgarfo.com/game/-OLG02eMfEOySnvbW2qG','Mar 13',false,false,false,false],
    [22,'https://connections.swellgarfo.com/game/-ONMJlfFDP56Pr5QgQtx','Apr 8',false,false,false,false],
    [23,'https://connections.swellgarfo.com/game/-ON_g4vIZHYqcx5huUDI','Apr 11',false,false,true,false],
    [24,'https://connections.swellgarfo.com/game/-OO-HkhH7nXd8PlN3Hdy','Apr 16',false,false,false,false],
    [25,'https://connections.swellgarfo.com/game/-OOPG0PtxODRPPU7iOGN','Apr 21',false,false,false,false],
    [26,'https://connections.swellgarfo.com/game/-OOZe0fjm8l0Sr4Sb2mn','Apr 23',false,false,false,false],
    [27,'https://connections.swellgarfo.com/game/-OP1ZdqeMlGgiJUpaBpa','Apr 29',false,false,false,false],
    [28,'https://connections.swellgarfo.com/game/-OPCOE-iFsRVHbQRS0lG','May 1',false,false,false,false],
    [29,'https://connections.swellgarfo.com/game/-OPX-W4SbP6dieCREesy','May 5',false,false,true,false],
    [30,'https://connections.swellgarfo.com/game/-OPgjx9t7xfy5kKara56','May 7',false,false,false,false],
    [31,'https://connections.swellgarfo.com/game/-OPlwUmQ9IijnUuCjNpo','May 8',false,false,false,false],
    [32,'https://connections.swellgarfo.com/game/-OPqNWdi6RE0KCI6D_Xb','May 9',true,false,false,false],
    [33,'https://connections.swellgarfo.com/game/-OQ52m4o555yZG8xpz0s','May 12',false,false,false,false],
    [34,'https://connections.swellgarfo.com/game/-OQ9rPLmY5AHyi9SB9Po','May 13',true,false,false,false],
    [35,'https://connections.swellgarfo.com/game/-OQAH9ogSls5D7973Lqx','May 13',false,false,false,false],
    [36,'https://connections.swellgarfo.com/game/-OQFfznSmYsTn4UU2sd8','May 14',false,false,false,false],
    [37,'https://connections.swellgarfo.com/game/-OQQ2qmSbC9b4B-4RC1n','May 16',true,false,false,false]
];

const listContainer = document.getElementById("puzzle_list");

const filters = {
    hard: document.getElementById("filter-hard"),
    extreme: document.getElementById("filter-extreme"),
    gpts: document.getElementById("filter-gpts"),
    ce: document.getElementById("filter-ce"),
};

function renderList() {
    listContainer.innerHTML = "";

    const activeFilters = Object.entries(filters)
      .filter(([_, checkbox]) => checkbox.checked)
      .map(([key]) => key);
  
    const filterMap = { hard: 3, extreme: 4, gpts: 5, ce: 6 };
  
    const reversedPuzzles = [...puzzles].reverse();
  
    reversedPuzzles
      .filter(row => {
        if (activeFilters.length === 0) return true;
        return activeFilters.every(filter => row[filterMap[filter]]);
      })
      .forEach(row => {
        const [number, link, date, hard, extreme, gpts, ce] = row;
        const li = document.createElement("li");
        li.classList.add("pl-li");
  
        li.innerHTML =
          `<a href="${link}" target="_blank" rel="noopener noreferrer">Puzzle ${number}</a>` +
          ` ~ ${date}` +
          (hard ? ", Hard" : "") +
          (extreme ? ", Extreme" : "") +
          (gpts ? ", GPTS" : "") +
          (ce ? ", CE" : "");
  
        listContainer.appendChild(li);
      });
}

Object.values(filters).forEach(checkbox => {
    checkbox.addEventListener("change", renderList);
});

renderList();