import Notiflix from 'notiflix';
import 'regenerator-runtime/runtime';
import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_8dKphs0W18lTFRIxlVkHb5ILtwEMbmXoQKgXYGOIwMxvPTJidJBFw8JRSAFCCT2p";

const URL = `https://api.thecatapi.com/v1/breeds`;

export async function fetchBreed() {
    try {
      const res = await axios.get(URL);
      console.log(res.data);
      return res;
      // const сatsBreeds = res.data.filter(cat => cat.image?.url != null || cat.id === 'mala');
      // return сatsBreeds
    } catch (error) {
      Notiflix.Report.info("Error!", "Cats ran away somewhere..", "Ok");
      throw error;
    }
  }