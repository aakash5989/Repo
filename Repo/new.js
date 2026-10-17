function getData(DataId,getNextData){
    setTimeout(() => {
        console.log("Data =",DataId);
        if(getNextData){
            getNextData();
        }
    })
};
getData(1,() =>{
    return getData(2,() => {
        return getData(3);
    })
});

