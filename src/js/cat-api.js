import Notiflix from 'notiflix';
import 'regenerator-runtime/runtime';
import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_8dKphs0W18lTFRIxlVkHb5ILtwEMbmXoQKgXYGOIwMxvPTJidJBFw8JRSAFCCT2p";

const URL = `https://api.thecatapi.com/v1/breeds`;

export function fetchBreed() {

    return axios.get(URL).then((cats) => { return cats.data = cats.data.filter(img => img.image?.url != null || img.id === 'mala'); }).catch(error => {
        Notiflix.Report.info("Error!", "Cats ran away somewhere..", "Ok");
    });

}