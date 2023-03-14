

export const postForm = async (url, callmethod, sentData) => {     
       await fetch(url, { method: callmethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                    },
            mode: 'no-cors',
            body: JSON.stringify(sentData)
        } )
        .then((res) => {res.json() 
        console.log(res)
        .then((data)=> console.log(data))
        })
   
}

export default postForm;

