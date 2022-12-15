export const determineResult = (userChoose: string, computerChoose: string) => {
	if (userChoose === computerChoose) {
		return 'it"s a tie';
	} else if (userChoose === 'Rock' && computerChoose === 'Scissor') {
		return 'you win';
	} else if (userChoose === 'Rock' && computerChoose === 'Paper') {
		return 'you lose';
	} else if (userChoose === 'Paper' && computerChoose === 'Scissor') {
		return 'you lose';
	} else if (userChoose === 'Paper' && computerChoose === 'Rock') {
		return 'you win';
	} else if (userChoose === 'Scissor' && computerChoose === 'Rock') {
		return 'you lose';
	} else if (userChoose === 'Scissor' && computerChoose === 'Paper') {
		return 'you win';
	}
};
