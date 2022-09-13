import { useEffect } from "react";
import { Pacients } from "./Pacients";

const ListPatient = ({ pacientes, setPaciente, eliminarPaciente }) => {
  /*   useEffect(() => {
    if (pacientes.length > 0) {
      console.log("Se agrego un nuevo paciente");
    }
  }, [pacientes]); */

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-blue-500 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen overflow-scroll overflow-x-hidden mr-4">
            {pacientes.map((paciente) => {
              return (
                <Pacients
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-blue-500 font-bold">
              y apareceran en esté lugar.
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default ListPatient;
