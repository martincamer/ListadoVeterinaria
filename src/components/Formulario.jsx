import { useState, useEffect } from 'react';
import Error from './Error';
const Formulario = ({ pacientes, setPacientes }) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [alta, setAlta] = useState('');
	const [sintomas, setSintomas] = useState('');
	const [error, setError] = useState(false);

	const generarId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};
	// validacion de formulario

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, propietario, email, alta, sintomas].includes('')) {
			setError(true);
			return;
		}

		setError(false);

		const objetoPaciente = {
			nombre,
			propietario,
			email,
			alta,
			sintomas,
			id: generarId(),
		};

		// console.log(objetoPaciente);

		setPacientes([...pacientes, objetoPaciente]);

		setNombre('');
		setPropietario('');
		setEmail('');
		setAlta('');
		setSintomas('');
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-2">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
			<p className=" text-lg text-center mt-5 mb-10">
				Añade Pacientes y {''}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>
			<form
				className="bg-white shadow-md rounded-lg py-10 px-5"
				onSubmit={handleSubmit}
			>
				{error && <Error mensaje="Todos los campos son obligatorios" />}
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="mascota"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="texto"
						placeholder="Nombre de la Mascota"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="propietario"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="texto"
						placeholder="Nombre del Propietario"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="email"
					>
						Email
					</label>
					<input
						id="email"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="email"
						placeholder="tugmail@gmail.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="alta"
					>
						Alta
					</label>
					<input
						id="alta"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="date"
						value={alta}
						onChange={(e) => setAlta(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="sintomas"
					>
						Sintomas
					</label>
					<textarea
						id="sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los Sintomas..."
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 duration-500 hover:transition-all cursor-pointer"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
};

export default Formulario;
