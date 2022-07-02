//handles all logic associated with store
//brings in data from storage
const storage = require("../data/storage") ;

class store{
    
static listAllProd(){
return storage.storage.get("products").value()
}


static prodbyId(prodId){
    return storage.storage.get("products").value()[prodId - 1]
}

}
module.exports = store