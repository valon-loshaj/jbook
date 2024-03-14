import "./add-cell.css";
import { useActions } from "../hooks/use-actions";

interface AddCellProps {
	nextCellId: string | null;
	forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
	const { insertCellBefore } = useActions();
	return (
		<div className={`add-cell ${forceVisible && "force-visible"}`}>
			<div className='add-buttons'>
				<button
					className='button is-rounded is-primary is-small'
					onClick={() => {
						insertCellBefore(nextCellId, "code");
					}}
				>
					<span>Code</span>
					<span className='icon is-small'></span>
					<i className='fas fa-plus'></i>
				</button>
				<button
					className='button is-rounded is-primary is-small'
					onClick={() => {
						insertCellBefore(nextCellId, "text");
					}}
				>
					<span>Text</span>
					<span className='icon is-small'></span>
					<i className='fas fa-plus'></i>
				</button>
			</div>
			<div className='divider'></div>
		</div>
	);
};

export default AddCell;
