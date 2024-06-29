import Manga from '../model/manga.model.js'

export const getManga = async(req,res)=>{
    try{
        const manga= await Manga.find()
        res.status(200).json(manga)
    }catch(error){
        console.log('Error:',error)
        res.status(500).json(error);

    }
}