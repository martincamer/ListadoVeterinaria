import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';
import './index.css';

function App() {
	const [pacientes, setPacientes] = useState([]);
	return (
		<div className="container mx-auto my-20">
			<Header />
			<div className="my-12 md:flex">
				<Formulario pacientes={pacientes} setPacientes={setPacientes} />

				<ListadoPacientes pacientes={pacientes} />
			</div>
		</div>
	);
}

export default App;
