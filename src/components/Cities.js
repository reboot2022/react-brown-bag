import { collection, getDocs } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import {db} from '../Util/firebase'

export default function Cities() {

    const [city, setCities] = useState([])
    const [loading, setLoading] = useState(true)

   const getCollections = async () => {
    const cities = collection(db, 'cities')
    const citySnapshot = await getDocs(cities);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    setCities(cityList);
    setLoading(false)
  }

  useEffect(() => {
    getCollections()
  }, [])

  return (
    <div>
        {
      loading ? 
      <h1>Loading</h1> :
      <>
     {city.map((doc, idx) => {
      return<h1 key={idx}>{doc.Name}</h1>
      })}
      </>
      }
    </div>
  )
}
