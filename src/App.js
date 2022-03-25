import Tabs, { TabItem } from "./components/tabs/Tabs";
import usePagination from "./components/pagination/pagination";

function App() {
	const {
		getPropsForPageSizeInput,
		dataForPage,
		noOfPages,
		getPropsForPageButton,
	} = usePagination();

	const getButtons = () => {
		const buttons = [];
		for (let i = 0; i < noOfPages; i++) {
			buttons.push(
				<input
					type="button"
					{...getPropsForPageButton({
						pageNumber: i + 1,
            id: `Page${i + 1}`,
            onClick: () => {
              console.log('Button Clicked');
            }
					})}
				/>
			);
		}
		return buttons;
	};

	return (
		<>
			<div style={{ width: "600px", margin: "auto", padding: "2rem" }}>
				<Tabs>
					<TabItem title="Papaya Whip">
						<TabContent color="papayawhip"> This is Papaya whip tab</TabContent>
					</TabItem>

					<TabItem title="Tab2"> This is Item 2</TabItem>

					<TabItem title="Tab3">
						<Tabs>
							<TabItem title="nestedTab 1">
								<TabContent color="azure"> This is nested Tab 1</TabContent>{" "}
							</TabItem>
							<TabItem title="nestedTab 2" disabled>
								<TabContent color="lightblue">
									{" "}
									This is nested Tab Item 2{" "}
								</TabContent>{" "}
							</TabItem>
						</Tabs>
					</TabItem>
				</Tabs>
			</div>

			<hr />
			<div style={{ width: "90%", margin: "auto", padding: "2rem" }}>
				<label for="pageSize"> Page Size:</label>
				<input {...getPropsForPageSizeInput({ id: "pageSize" })} />

				<table style={{ border: "1px solid black", padding: "1rem" }}>
					<thead>
						<tr>
							<th style={{ border: "1px solid black", padding: "1rem" }}>Id</th>
							<th style={{ border: "1px solid black", padding: "1rem" }}>
								Description
							</th>
							<th style={{ border: "1px solid black", padding: "1rem" }}>
								Category
							</th>
							<th style={{ border: "1px solid black", padding: "1rem" }}>
								Price
							</th>
							<th style={{ border: "1px solid black", padding: "1rem" }}>
								Image
							</th>
						</tr>
					</thead>
					<tbody>
						{dataForPage.map((data) => {
							return (
								<tr key={data.id}>
									<td style={{ border: "1px solid black", padding: "1rem" }}>
										{data.id}
									</td>
									<td style={{ border: "1px solid black", padding: "1rem" }}>
										{data.description}
									</td>
									<td style={{ border: "1px solid black", padding: "1rem" }}>
										{data.category}
									</td>
									<td style={{ border: "1px solid black", padding: "1rem" }}>
										{data.price}
									</td>
									<td style={{ border: "1px solid black", padding: "1rem" }}>
										<img
											src={data.image}
											width="150px"
											alt={data.description}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<div>{getButtons()}</div>
			</div>
		</>
	);
}

function TabContent({ color, children }) {
	return (
		<div
			style={{
				width: "100%",
				height: "500px",
				backgroundColor: ` ${color}`,
				overflow: "hidden",
			}}
		>
			{" "}
			{children}
		</div>
	);
}

export default App;
