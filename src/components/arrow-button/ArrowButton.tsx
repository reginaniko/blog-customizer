import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = (state: boolean) => void;

interface ArrowButtonProps {
	onClick: OnClick;
	isOpen: boolean;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
	onClick,
	isOpen,
}) => {
	const handleArrowClick = () => {
		onClick(!isOpen);
	};

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onClick={(e: React.MouseEvent) => {
				e.stopPropagation();
				handleArrowClick();
			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
