const networkHelper = {
    async fetchHelper(uri, requestBody={}){
        const requestParameters = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            ...requestBody
        } 
        const result = await (await fetch(uri, requestParameters)).json();
        
        // todo: change to result.error
        if(result.message){
            Promise.reject(result.message)
        }
        return Promise.resolve(result);
    }
}

export default networkHelper;