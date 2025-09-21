import React, { useState } from 'react';

function Formulario() {
  // Estados para almacenar los valores de los inputs
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  
  // Estados para los errores
  const [errores, setErrores] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });

  // Función para validar nombre
  const validarNombre = (valor) => {
    if (valor.length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    return '';
  };

  // Función para validar correo
  const validarCorreo = (valor) => {
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronCorreo.test(valor)) {
      return 'Ingresa un correo válido (ejemplo@dominio.com)';
    }
    return '';
  };

  // Función para validar contraseña
  const validarContraseña = (valor) => {
    if (valor.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    return '';
  };

  // Manejar cambios en los inputs
  const manejarCambioNombre = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    setErrores(prev => ({
      ...prev,
      nombre: validarNombre(valor)
    }));
  };

  const manejarCambioCorreo = (e) => {
    const valor = e.target.value;
    setCorreo(valor);
    setErrores(prev => ({
      ...prev,
      correo: validarCorreo(valor)
    }));
  };

  const manejarCambioContraseña = (e) => {
    const valor = e.target.value;
    setContraseña(valor);
    setErrores(prev => ({
      ...prev,
      contraseña: validarContraseña(valor)
    }));
  };

  // Manejar envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // Validar todos los campos antes de enviar
    const errorNombre = validarNombre(nombre);
    const errorCorreo = validarCorreo(correo);
    const errorContraseña = validarContraseña(contraseña);
    
    if (!errorNombre && !errorCorreo && !errorContraseña) {
      alert('¡Formulario enviado correctamente!');
      console.log('Datos:', { nombre, correo, contraseña });
    } else {
      setErrores({
        nombre: errorNombre,
        correo: errorCorreo,
        contraseña: errorContraseña
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Registro de Usuario</h3>
              
              <form onSubmit={manejarEnvio}>
                {/* Campo Nombre */}
                <div className="mb-3">
                  <label className="form-label">Nombre:</label>
                  <input 
                    type="text" 
                    className={`form-control ${errores.nombre ? 'is-invalid' : nombre ? 'is-valid' : ''}`}
                    placeholder="Ingresa tu nombre"
                    value={nombre}
                    onChange={manejarCambioNombre}
                  />
                  {errores.nombre && (
                    <div className="invalid-feedback">{errores.nombre}</div>
                  )}
                </div>
                
                {/* Campo Correo */}
                <div className="mb-3">
                  <label className="form-label">Correo:</label>
                  <input 
                    type="email" 
                    className={`form-control ${errores.correo ? 'is-invalid' : correo ? 'is-valid' : ''}`}
                    placeholder="correo@ejemplo.com"
                    value={correo}
                    onChange={manejarCambioCorreo}
                  />
                  {errores.correo && (
                    <div className="invalid-feedback">{errores.correo}</div>
                  )}
                </div>
                
                {/* Campo Contraseña */}
                <div className="mb-3">
                  <label className="form-label">Contraseña:</label>
                  <input 
                    type="password" 
                    className={`form-control ${errores.contraseña ? 'is-invalid' : contraseña ? 'is-valid' : ''}`}
                    placeholder="Mínimo 8 caracteres"
                    value={contraseña}
                    onChange={manejarCambioContraseña}
                  />
                  {errores.contraseña && (
                    <div className="invalid-feedback">{errores.contraseña}</div>
                  )}
                  <div className="form-text">
                    Fortaleza: {contraseña.length < 4 ? 'Muy débil' : 
                               contraseña.length < 8 ? 'Débil' : 'Fuerte'}
                  </div>
                </div>
                
                {/* Botón */}
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={errores.nombre || errores.correo || errores.contraseña || !nombre || !correo || !contraseña}
                  >
                    Registrarse
                  </button>
                </div>
              </form>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Formulario;