
const mongojs = require('mongojs');
const db = mongojs('testCaseDB', ['employees', 'example1_results']);


/* const mapper = function () {
    emit(this.location, this.salary);
};

const reducer = function (location, salary) {
    return Array.sum(salary);
};
db.employees.mapReduce(
    mapper,
    reducer,
    {
        out: "example1_results"
    }
);

db.example1_results.find(function (err, docs) {
    if (err) console.log(err);
    console.log(docs);
});
 */


// fetching location

const mapped = function(){
    emit(this.location,1);
}
const reduced = function(location , count){
    return Array.sum(count);
}
db.employees.mapReduce(
    mapped,
    reduced,
    {
        out: "example1_results"
    }
);


db.example1_results.find((err,docs)=>{
    if(err) throw err;
    console.log(docs)
})


