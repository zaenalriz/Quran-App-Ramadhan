const URL='https://api.quran.com/api/v3/';
const URL_AUDIO='https://api.quran.com/api/v4/recitations/';
const URL_PLAY_AUDIO='https://verses.quran.com/';
async function GetData(path,audio=null,recitations=false){
    let CURRENT_URL;
    CURRENT_URL=audio?URL_AUDIO:((recitations)?recitations:URL);
    let response;
    try {
        response=await fetch(`${CURRENT_URL}${path}`).then(res=>res.json());
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

export { GetData,getAudio,URL_PLAY_AUDIO ,URL};
