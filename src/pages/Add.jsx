import React from 'react'

export default function Add() {
  return (
    <div className='form'>
      <h1>Add books</h1>
      <input type="text" placeholder='title'/>
      <input type="text" placeholder='desc'/>
      <input type="number" placeholder='price'/>
      <input type="text" placeholder='cover'/>
    </div>
  )
}
