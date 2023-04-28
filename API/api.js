const getApi = async() =>{
    try {
        const data = await fetch(`https://spapi.dev/api/episodes/`)
        const results = data.json();
        return results
    } catch (error) {
        console.log(error)
    }   
};

const getById = async(id)=>{
    try {
        const data = await fetch(`https://spapi.dev/api/episodes/${id}`);
        const results = data.json();
        return results
    } catch (error) {
        console.log(error)
    }
};

const getByName = async(name)=>{
    try {
        const data = await fetch(`https://spapi.dev/api/episodes?name=${name}`);
        const results = data.json();
        return results
    } catch (error) {
        console.log(error)
    }
};
