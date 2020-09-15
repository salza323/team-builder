import React, { useState } from 'react'



const initialFormValues = {
    name: '',
    email: '', 
    role: '',
}

function TeamForm() {
    const [members, setMember] = useState([])
    const [formValue, setFormValue] = useState(initialFormValues)

    const change = evt => {

    }

    const submit = evt => {
        const newMember = {
            memberName: formValue.memberName.trim(),
            memberEmail: formValue.memberEmail.trim(),
            memberRole: formValue.memberRole.trim(),
        }
        setMember([...members, newMember])
        setFormValue(initialFormValues)
    }

    
    
    return  (
        <div className = 'container'>
            <h1>The Team Form</h1>

            {
                members.map((member, idx) => {
                    return (
                        <div key={idx}>
                            {member.memberName}
                            {member.memberEmail}
                            {member.memberRole}
                        </div>    
                    )
                })
            }

            <form onSubmit = {submit}>
                <input name='memberName' placeholder='Name' type="text" value={formValue.memberName} onChange={change} />
                <input name='memberEmail' placeholder='Email' type="text" value={formValue.memberEmail} onChange={change} />
                <select name='memberRole' placeholder='Role' value={formValue.memberRole} onChange={change}>
                    <option value=''>--Select Role--</option>
                    <option value='frontend'>Front End</option>
                    <option value='backend'>Back End</option>
                    <option value='ds'>Data Science</option>
                    <option value='product'>Product Manager</option>
                </select>    
                <button>Submit</button>
            </form>    

        </div>
    )


}

export default TeamForm

