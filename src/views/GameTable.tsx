import { gameOptions } from '../constants';
import { GameOption } from '../components';

export const GameTable = () => {
	const { paper, rock, scissors } = gameOptions;
	return (
		<div className='gameTable'>
			<GameOption customClassname={paper.customClassname} img={paper.img} name={paper.name} />
			<GameOption customClassname={scissors.customClassname} img={scissors.img} name={scissors.name} />
			<GameOption customClassname={rock.customClassname} img={rock.img} name={rock.name} />
		</div>
	);
};
