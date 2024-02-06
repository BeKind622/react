const Department = (props) =>{

    return (

       <>

          <h1> Department Details </h1>

           <p> Dept Name: { props.dept} </p>

           <p> Room: { props.room} </p>

           <p> Nurse: { props.nurse} </p>

         </>

 );

}

export default Department;