import { useState } from 'react'

function App() {
  const[kota,setKota]= useState<string>("");

  return (
  <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
    <div className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Cek Cuaca</h1>
      <input
      type='text'
      placeholder='Masukan nama kota ...'
      className='w-full p-2 border text-black border-gray-300 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500'
      value={kota}
      onChange={(e) => setKota(e.target.value)}
      />
        <p className='text-center text-gray-600'>
            kamu sedang mencari cuaca di: <span className='font-bold text-blue-600'></span>
        </p>
      
    </div>
  </div>
  
  
  )

}
export default App





