import { $, component$, useOnWindow, useSignal } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
	const dummySig = useSignal(0);

	useOnWindow(
		"DOMContentLoaded",
		$(() => {
			console.log("DOMContentLoaded");
			dummySig.value++;
		}),
	);

	return (
		<>
			<h1>Hi 👋</h1>
			<div>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
