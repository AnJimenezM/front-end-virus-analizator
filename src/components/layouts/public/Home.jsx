export const Home = () => {
    
    // Función para que cuando se haga clic en analizar aparezca una alerta
    const HandleClick = () => {
       alert("Debes iniciar sesión");
    }
 
    return (
       <div className='content'>
          <h1 className='title'>Virus-Analizator</h1>
          <span className='icon-file'><i className='bx bx-file'></i></span>
          <div>
             <div className='file'>
                <form>
                   <input type="file" name="file" />
                   <button id='analizar' className='btn btn-primary' type="submit" onClick={HandleClick}>Analizar</button>
                </form>
             </div>
          </div>
       </div>
    );
 };
 