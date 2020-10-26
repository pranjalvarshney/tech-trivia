import React, { useEffect, useState } from 'react'
import firebase from '../../config/firebase'
import './Leaderboard.css'

export const Leaderboard = () => {
  const [fetchData, setFetchData] = useState()

  useEffect(() => {
    firebase
      .fetchDataScore()
      .child('score')
      .on('value', (snapshot) => {
        if (snapshot.val() !== null) {
          setFetchData(snapshot.val())
        }
      })
  }, [])

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
              {Object.keys(fetchData).map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope='row'>{index}</th>
                    <td>{fetchData[item].name}</td>
                    <td>{fetchData[item].email}</td>
                    <td>{fetchData[item].score}</td>
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
