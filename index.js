//get data using async await
const getItem =async(url)=>{

    let data= await fetch(url);
    if(!data.ok){
        throw "data is not ok";
    }
    else {
        return await data.json();
    }

}

const callGetItem=(url)=>{
    getItem(url)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}

callGetItem("https://jsonplaceholder.typicode.com/posts");


//set/post data using async await
const setItem =async(url,config)=>{

    let data= await fetch(url,config);
    if(!data.ok){
        throw "data is not ok";
    }
    else {
        return await data.json();
    }

}

const callSetItem=(url,config)=>{
    setItem(url,config)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}

callSetItem("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    body: JSON.stringify({
      title: 'fooma',
      body: 'barma',
      userId: 100,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });