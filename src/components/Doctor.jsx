const Doctor = (props) =>{
    return(
        <>
        <h1> Doctor details </h1>

        <p>First name:{props.doc_fname}</p>
        <p>Last name:{props.doc_lname}</p>
        <p>Department:{props.doc_dept}</p>

        
</>
    )
}

export default Doctor