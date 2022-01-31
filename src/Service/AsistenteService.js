const urlCrud = 'http://localhost:3001';

const getListUniversidad = async () => {
    const response = await fetch(`${urlCrud}/universidad`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createmxxxxxx = async (universidad) => {
    console.log(universidad);
    const resp = await fetch(`${urlCrud}/universidad`, {
        method: 'POST',
        body: JSON.stringify(universidad),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();

}
export {
    getListUniversidad,
    createUniversidad
}