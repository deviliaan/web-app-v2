import type { PageServerLoad } from "./$types";
import axios from 'axios'
export const load: PageServerLoad = async () => {
    
    const {data} = await axios.get('https://anime-api.xyz/page-1');
    
    return {
        page: 'homepage',
        animes: data
    }
};