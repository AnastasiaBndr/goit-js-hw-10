import Notiflix from 'notiflix';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const API_KEY ='api_key=live_8dKphs0W18lTFRIxlVkHb5ILtwEMbmXoQKgXYGOIwMxvPTJidJBFw8JRSAFCCT2p'

const URL = `https://api.thecatapi.com/v1/breeds/?`;

export async function fetchBreed() {

      return axios.get(URL+API_KEY)
      .then(resp=>{return resp.data})
      .then(cats=>{return cats.filter(cat => cat.image?.url != null || cat.id === 'mala')})
      .catch(Notiflix.Report.info("Error!", "Cats ran away somewhere..", "Ok"))
    
  }