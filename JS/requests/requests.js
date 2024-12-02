export async function GetAllDatas(url) {
    let datas = null
    let error = null
    await axios.get(url)
    .then(res => datas = res.data)
    .catch(err => error = err)
    return{
        datas,
        error
    }
}

export async function PostData(url,newData) {
    let data = null
    let error = null
    await axios.post(url,newData)
    .then(res => data = res.data)
    .catch(err => error = err)
    return{
        data,
        error
    }
}