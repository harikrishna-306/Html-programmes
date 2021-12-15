let employee=[
    {id:101,name:"hari",sal:25000},
    {id:102,name:"ANIL",sal:26000},
    {id:103,name:"Ramanareddy",sal:27000},
    {id:104,name:"srinu",sal:28000},
];
//function dispaly()= (emp)=>{
    //for (emp of employee){
       // let rows ='';
       // rows =+
        //`<tr>
            //<td> ${emp.id}</td>
            //<td> ${emp.name}</td>
            //<td> ${emp.sal}</td>
        //</tr>`;

   // }
    //let tbody =document.getElementById("table_body"); tbody.innerHTML = rows;
//}
function display() {
    let tbody = document.getElementById("table_body");
    let rows ="";
    for (emp of employee) {
        rows=
        rows +
        `<tr>
            <td> ${emp.id}</td>
            <td> ${emp.name}</td>
            <td> ${emp.sal}</td>
        </tr>`
    }
    tbody.innerHTML = rows;
}