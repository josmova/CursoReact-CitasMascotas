export const Pacients = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Seguro que deseas eliminar?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  return (
    <div className="mb-4 ml-2 md:ml-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case text-gray-700">
          {propietario}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="mt-5">
        <button
          type="button"
          className="py-2 px-10 mr-1 bg-blue-500 text-white font-bold border-solid border-2 rounded-md
            border-white hover:bg-white hover:text-blue-600 hover:border-blue-300 cursor-pointer"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-8 bg-red-500 ml-1 text-white font-bold border-solid border-2 rounded-md
            border-white hover:bg-white hover:text-blue-600 hover:border-blue-300 cursor-pointer"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
