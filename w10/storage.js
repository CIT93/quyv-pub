
const saveLS=function(cfpData){
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp",serializedArr);
}

const getLS=function(){
    const retrievedArry = localStorage.getItem("cfp");
    if(retrievedArry !== null){
        return JSON.parse(retrievedArry);
    } else {
        return [];
    }
}

const cfpData = getLS();

export{cfpData,saveLS, getLS};