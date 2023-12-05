import axios from "axios";

const translateFunction = async (text: string): Promise<any> => {
    const options = {
        method: 'POST',
        url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '7556bf82e8msh22e441ad57d3218p13fe13jsn7e5668ead2de',
            'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
        },
        data: {
            from: 'tr',
            to: 'en',
            q: text
        }
    };

    const response = await axios.request(options);
    return response.data;
}

export default translateFunction;