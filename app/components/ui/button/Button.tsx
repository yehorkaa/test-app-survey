import cn from 'classnames'
import styles from './Button.module.scss'
import { ButtonSizes, ButtonVariants, getButtonStylesProps } from './Button.interface'

export const getButtonStyles = ({
	variant,
	size,
	className,
}: getButtonStylesProps): string => {
	const variants: Record<ButtonVariants, string> = {
		primary: styles.primary,
		purple: styles.purple,
	}

	const sizes: Record<ButtonSizes, string> = {
		lg: styles.lg,
	}

	return cn(variants[variant], sizes[size], className)
}
