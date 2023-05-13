const URL='https://api.quran.com/api/v3/';

async function GetData(path){
    let response;
    try {
        response=await fetch(`${URL}${path}`).then(res=>res.json());
    } catch (error) {
        return {
            data:[],
            error:true,
            message:error.message
        }
    }finally{
        return {
            data:response,
            error:false,
            message:'success'
        } 
    }
}

export { GetData,URL };
