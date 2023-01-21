import zoomSdk from "@zoom/appssdk";

export function App() {
	// try {
	// 	const configResponse = zoomSdk.config({
	// 		size: { width: 480, height: 360 },
	// 		capabilities: ["shareApp"],
	// 	});

	// 	configResponse
	// 		.catch((rej) => {
	// 			console.log(rej);
	// 		})
	// 		.then((res) => {
	// 			console.log("Zoom JS SDK Configuration", res);
	// 		});
	// } catch (e) {
	// 	console.error(e);
	// }

	return (
		<div className="App">
			<h3>🌱⚛️ Create React App Codely template example</h3>
		</div>
	);
}
