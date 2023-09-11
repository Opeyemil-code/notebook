import React from "react";

export default function Sidebar(props) {
  const noteElement = props.notes.map((note,index)=> (
    <div key={note.id}>
        <div className={`title ${note.id === props.currentNote.id ? "selected-note" : ""}`} onClick={()=> props.setCurrentNoteId(note.id)}>
         <h4>Note {index + 1}</h4>
        </div>
    </div>
  ))

    
    return(
        <section>
           <div className="flex flex-row space-x-5">
            <h3>Notes</h3>
            <button onClick={props.newNote}>+</button>

           </div>
           {noteElement}
        </section>
    )
}