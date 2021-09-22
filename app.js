
var r = [{id:"1", comida: "Pizza"}, 
		 {id:"2", comida:"Arroz"}, 
		 {id:"3", comida:"Arepa"},
		 {id:"3", comida:"Pasta"}
        ];
var u = [{id:"1",nombre:"Reni"},
        {id:"2",nombre:"Michel"},
        {id:"3",nombre:"Jorge"}];

const indexByKey = (arr, key) => arr.reduce((acc, el) => {
    if(!acc[el[key]]){
        acc[el[key]] = []
        acc[el[key]].push(el)
    }else{
        acc[el[key]].push(el);
    }
  return acc
}, {});

var oi = indexByKey(r, 'id');
// console.log(oi);
const res = [] ;
for (const iterator of u) {
    res.push({
        info: iterator,
        accion: oi[iterator.id]
    });
}

console.log(JSON.stringify(res,null,'\t'));


console.log('rene test');

