const urlCrud = 'http://localhost:3001';

const getListAsistente_mto = async () => {
    const response = await fetch(`${urlCrud}/asistente_mto`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createAsistente_mto = async (asistente_mto) => {
    console.log(asistente_mto);
    const resp = await fetch(`${urlCrud}/asistente_mto`, {
        method: 'POST',
        body: JSON.stringify(asistente_mto),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();

}
export {
    getListAsistente_mto,
    createAsistente_mto
}