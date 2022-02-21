import React, { useState } from "react";
const Caja = () => {
	const [inputText, setInputText] = useState("");
	const [table, setTable] = useState([]);
	const addText = (text) => {
		let newText = [...table, text];
		setTable(newText);
	};
	const handleKey = (e) => {
		if (e.key === "Enter" && inputText !== " " && inputText !== "") {
			addText(inputText);
			setInputText("");
		}
	};
	const DeleteItems = (indexItem) => {
		setTable((prevState) =>
			prevState.filter((f, index) => index !== indexItem)
		);
	};
	return (
		<div className="container-fluid">
			<div className="input">
				<input
					type="text"
					onKeyPress={(e) => {
						handleKey(e);
						console.log(e);
					}}
					onChange={(event) => {
						setInputText(event.target.value);
						console.log(event.target.value);
					}}
					name=""
					id=""
					value={inputText}
				/>
			</div>
			<div>
				<table className="table">
					<ul>
						{table.map((t, index) => (
							<li key={index} className="list-group-item index">
								{t}
								<button
									className="btn DelItem"
									onClick={() => DeleteItems(index)}>
									<i className="fas fa-times" />
								</button>
							</li>
						))}
						<tr>
							<th scope="col">ToDo-s List</th>
						</tr>
					</ul>
				</table>
			</div>
		</div>
	);
};
export default Caja;
