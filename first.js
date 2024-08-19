

const datas=[
    {name:"Ajay",Profression:"Software Engineer"},
    {name:"Atual",Profression:"Software Engineer"}
];

// 1.data get karane ke liye
 function getDatas(){
    setTimeout(() => {
        let output = " ";
        datas.forEach((data,index)=>{
         output += `<li>${data.name}</li>`;
        // output += `<li>${data.index}</li>`;
        })
        document.body.innerHTML = output
    }, 3000);
}
getDatas();


//2.data create karane ke liye
 function createdata(newdata){
    setTimeout(() => {
        datas.push(newdata);    
    }, 2000);
}
getDatas();
createdata({name:"Nitin",Profression:"Software Engineer"});


//3.data callback karane ke liye
 function createdata(newdata,callback){
    setTimeout(() => {
        datas.push(newdata);
        callback();
    }, 2000);
}
createdata({name:"Nitin",Profression:"Software Engineer"},getDatas);



//4.Promises

function createdata(newdata){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newdata);
            let error=true;
            if(!error){
                resolve();  
            }else{
                reject("kuch sahi nahi hai...");
            }
       getDatas }, 2000);   
    });

}
createdata({name:"Nitin",Profression:"Software Engineer"})
.then(getDatas)
.catch(err =>console.log(err));

//5 async & await

function createdata(newdata){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newdata);
            let error=true;
            if(!error){
                resolve();  
            }else{
                reject("kuch sahi nahi hai...");
            }
       getDatas }, 2000);   
    })

}

async function start() {
 await   createdata({name:"Nitin",Profression:"Software Engineer"})  
 getDatas();
}
start();
