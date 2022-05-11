import { useState } from 'react';

const Error = (props) => {
	const [close, setClose] = useState(false);
	return (
		<div className="bg-red-900  mx-auto  text-center p-3  uppercase  rounded-md mb-5 w-[full] ">
			<p className="font-bold text-white">{props.mensaje}</p>
		</div>
	);
};

export default Error;
