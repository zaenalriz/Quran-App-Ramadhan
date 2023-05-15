const URL='https://api.quran.com/api/v3/';
const URL_AUDIO='https://api.quran.com/api/v4/recitations/';

async function GetData(path,audio=null){
    let response;
    try {
        response=await fetch(`${audio?URL_AUDIO:URL}${path}`).then(res=>res.json());
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

async function getAudio(reciters,chapter){
    return await GetData(`${reciters}/by_chapter/${chapter}?&segments=true`,true)
}

export { GetData,URL,getAudio };
