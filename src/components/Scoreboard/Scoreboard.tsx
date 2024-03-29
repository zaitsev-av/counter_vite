import React from 'react';
import s from '../Counter/Counter.module.css'

type ScoreboardProps = {
	value: number
	maxCount: number
	minCount: number
};
export const Scoreboard: React.FC<ScoreboardProps> = (props) => {

	const {value,minCount,maxCount} = props;
	return (
		<div className={value < maxCount && value >= minCount
			?
			s.scoreboard
			:
			maxCount === minCount
				?
				s.danger
				:
				s.error}>
			{minCount === maxCount ? <span className={s.dangerSpan}>Not correct values</span>: value}
		</div>
	);
};