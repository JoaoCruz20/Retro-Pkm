import {useEffect, useState} from "react";
import useFetch from "./useFetch";

export const useLogin = () => {

    const {data, loading, error} = useFetch("https://data.mongodb-api.com/app/data-xzaau/endpoint/data/v1")
  //  console.log(data);
   
}

export default useLogin;
