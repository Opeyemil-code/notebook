import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from './editor'
import { nanoid } from 'nanoid'
import Split from 'react-split'
import Sidebar from './sidebar'


function App(props) {
  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

function CreateNewNote() {
   const newNote = {
       id : nanoid(),
       body: `#Type your markdown notes title here`
   }
   setNotes(prevNotes => [newNote, ...prevNotes])
   setCurrentNoteId(newNote.id)
}

  return (
    <main className=''>
    {
      notes.length > 0 ?
      <Split
    sizes={[25,60]}
    direction='horizontal'
    className='split flex '
    >

      <Sidebar 
      notes={notes}
      setCurrentNoteId={setCurrentNoteId}
      newNote={CreateNewNote}
      />

      <Editor 
      value={props.value}
      onChange={props.setValue}
      selectedTab={props.selectedTab}
      onTabChange={props.setSelectedTab}/>
      
    </Split> : 

    <div className='text-center mt-80 flex flex-col space-y-4'>
      <h3 className='text-3xl text-blue-900 font-bold'>you have no notes</h3>
      <button onClick={CreateNewNote} className='border-2 mx-auto w-48 py-3 rounded-lg text-white bg-gray-700'>create note</button>
    </div>
    }
      
    </main>
  )
}

export default App



/**
 * <Editor />
 * value={props.value}
      onChange={props.setValue}
      selectedTab={props.selectedTab}
      onTabChange={props.setSelectedTab}
 */