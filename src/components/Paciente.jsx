const Paciente = ({ paciente }) => {
	const { nombre, propietario, email, alta, sintomas } = paciente;
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
		</div>
	);
};

export default Paciente;
