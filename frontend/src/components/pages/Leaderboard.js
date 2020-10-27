import React, { useEffect, useState } from 'react'
import firebase from '../../config/firebase'
import './Leaderboard.css'

export const Leaderboard = () => {
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    const arr = []
    firebase
      .fetchDataScore()
      .child('score')
      .orderByChild('score')
      .on('child_added', (snapshot) => {
        if (snapshot.val() !== null) {
          arr.push(snapshot.val())
        }
      })
    setFetchData(arr)
  }, [])

  const sortArray = () => {
    return fetchData.sort((a, b) => b.score - a.score)
  }
  console.log(sortArray())

  return (
    <div className='leaderboard container'>
      <h1>Leaderboard</h1>
      {fetchData === undefined ? (
        <div> Loading </div>
      ) : (
        <div className='table-responsive'>
          <table className='table table-striped w-100 m-auto'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Points</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope='row'>{index}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
