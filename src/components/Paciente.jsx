const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, alta, sintomas, id } = paciente;
	const handleElimar = () => {
		const respuesta = confirm('Deseas eliminar a este paciente');
		if (respuesta) {
			eliminarPaciente(id);
		}
	};
	return (
		<div className="mx-5 bg-white  rounded-md shadow-md px-5 my-10 py-10">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre: {''}
				<span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Propietario: {''}
				<span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: {''}
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Fecha Alta: {''}
				<span className="font-normal normal-case">{alta}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Sintomas: {''}
				<span className="font-normal normal-case">{sintomas}</span>
			</p>

			<div className="flex justify-between md:flex-row flex-col">
				<button
					className="py-2 px-10 mt-10   bg-indigo-600 hover:bg-indigo-700  transition-all duration-300 rounded-md text-white font-bold uppercase"
					type="button"
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					className="py-2   px-10 mt-10 bg-red-700 hover:bg-red-800 transition-all duration-300 rounded-md text-white font-bold uppercase"
					type="button"
					onClick={() => handleElimar()}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Paciente;
