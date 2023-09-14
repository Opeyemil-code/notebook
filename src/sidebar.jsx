import React from "react";

export default function Sidebar(props) {
  const noteElement = props.notes.map((note,index)=> (
    <div key={note.id} >
        <div className={`title ${note === props.currentNote.id ? "selected-note" : ""}`} onClick={()=> props.setCurrentNoteId(note.id)}>
         <h4 className="hover:bg-purple-800 cursor-pointer">Note {index + 1}</h4>
        </div>
    </div>
  ))

    
    return(
        <section className="bg-green-90 shadow-gray-400 shadow-md rounded-md w-40">
           <div className="flex flex-row space-x-8">
            <h3 className="text-2xl text-black">Notes</h3>
            <button onClick={props.newNote} className="bg-purple-800 border-2 px-2  mt-1 rounded-lg text-xl pb-1">+</button>

           </div>

           <div className="flex flex-col space-y-2 text-lg font-mono ">
           {noteElement}
           </div>

        </section>
    )
}