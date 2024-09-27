import { useState } from 'react'
import { userForm } from '../../hooks/userForm'
import { Global } from '../../global/Global';
import useAuth from '../../hooks/useAuth';


export const Login = () => {

  // Estado para obtener los datos desde el formulario
  const {form, changed, resetForm} = userForm({email: "", password: ""});
  
  // Estado para validar si el usuario se identificó correctamente
  const [logged, setLogged] = useState("not logged");

  // Estado para setear los valores del token y usuario en el contexto de la aplicación
  const { setAuth } = useAuth();


  const loginUser = async (e) =>{
    // Prevenir que se actualice el navegador
    e.preventDefault();


    // Obtener datos del formulario
    let userToLogin = form;
    
    // Petición al backend
    const request = await fetch(Global.url + "user/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers:{
        "Content-Type": "application/json"
      }
    });
   
    // Obtener la información retornada por la request
    const data = await request.json();

    if(data.status === "success"){

      // Guardar los datos del token y usuario en el localstorage del navegador
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      // Seteamos la variable de estado logged si se ha autenticado
      setLogged("logged");

      // Seteamos los datos del usuario en el Auth
      setAuth(data.user);

      // Limpiar el formulario
      resetForm();

      // Redirección
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      // Seteamos la variable de estado logged si el usuario no se ha autenticado correctamente
      setLogged("error");
    }
  };

  return (
    /* Creación del componente de Login */
    <>
    <div>
       {/* Mensajes para el usuario */}
       {logged === "logged" ? (
            <strong className='alert alert-success'>¡Usuario autenticado correctamente!</strong>
          ) : ''}

          {logged === "error" ? (
            <strong className='alert alert-danger'>¡El usuario no se ha autenticado correctamente!</strong>
          ) : ''}
          
         <div className='formulario'>
          
      <h1 className='title-login'>Iniciar sesión</h1>
      
    <form className='Login' onSubmit={loginUser}>
      
      <label>Ingresa email</label>
        <input type="email" placeholder='Email' name='email' required onChange={changed}/>
        
        <label>Ingresa contraseña</label>
        <input type="password" placeholder='Contraseña' name='password' required onChange={changed}/>
        
        <button className='ingreso'>Iniciar sesión</button>
        
        <p>¿No tienes cuenta? <a className='navegation-r' href="/register">Regístrate aquí</a></p>
    </form>
   </div>
    </div>
    </>
  )
}

