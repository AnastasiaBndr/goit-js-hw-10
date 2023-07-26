import Notiflix from 'notiflix';

const URL = `https://api.thecatapi.com/v1/breeds`;
const API_KEY="live_8dKphs0W18lTFRIxlVkHb5ILtwEMbmXoQKgXYGOIwMxvPTJidJBFw8JRSAFCCT2p";

export function fetchBreed(){
    
    return fetch(URL,{headers: {
        'x-api-key': API_KEY
      }})
    .then(response=>{ return response.json()}
        ).then(
            cats=>{
                cats=cats.filter(img=>img.image?.url!=null);
                return cats;
            }
        )
        .catch(error => {Notiflix.Report.info("Error!", "Cats ran away somewhere..", "Ok"); })

    
}