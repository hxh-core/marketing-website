'use client';

import darkMan from '@/data/user/images/dark-man.png';
import primaryBg from '@/data/user/images/primary-gradient.jpg';
import { TelegramService } from '@/services/user/messages';
import {
	getAnimationStyle,
	setupParallax,
	validatePhone,
} from '@/shared/helpers/lib';
import type { ICollectDataFormBlockProps } from '@/shared/types/ui/blocks';
import { CustomButton, CustomInput } from '@/shared/ui';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { Container } from '@/shared/ui/layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CollectForm.module.scss';

interface Props {
	data: ICollectDataFormBlockProps;
	index: number;
}

const MAX_ERRORS = 3;

const getFormPositionStyles = (position: 'left' | 'right'): string => {
	return position === 'right' ? styles.right : '';
};

export const CollectForm = ({ data, index }: Props) => {
	const content = data.data.data.attributes;

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		clearErrors,
		formState: { errors, isSubmitSuccessful, isValid },
	} = useForm<any>();

	const [serverErrorCount, setServerErrorCount] = useState(0);

	const submitForm = async (formData: { [key: string]: string }) => {
		clearErrors();

		// Validation
		for (const input of content.inputs) {
			const isValidPhone = validatePhone({
				input,
				value: formData[input.inputProps?.name!],
			});

			if (!isValidPhone.isValid) {
				setError(input.inputProps!.name!, isValidPhone.error);
				return;
			}
		}

		try {
			await TelegramService.sendNewClient(data, formData, {
				blockName: data.blockName,
			});
		} catch (error) {
			content.inputs.forEach((input) => {
				setError(input.inputProps!.name!, {
					message: 'Ошибка сервера, попробуйте позже',
					type: 'serverError',
				});
			});
			setServerErrorCount((prev) => prev + 1);
		}
	};

	return (
		<div
			className={`${styles.collectBlock} ${getAnimationStyle(data.animation)} ${getFormPositionStyles(
				content.contentPosition,
			)}`}
			id={data.blockId}
			onMouseMove={(e) =>
				setupParallax(styles.man, e, {
					intensity: 30,
				})
			}
		>
			{/* Bg image */}
			<Image
				src={primaryBg}
				width={1920}
				height={1080}
				alt='Background'
				draggable={false}
				className={styles.bgImage}
				quality={100}
				priority
			/>
			{/* Man */}
			<Image
				src={darkMan}
				width={709}
				height={795}
				alt={'Man'}
				draggable={false}
				className={styles.man}
				quality={100}
				priority
			/>
			{/* Content */}
			<Container
				size='medium'
				className={`${styles.container} ${getFormPositionStyles(content.contentPosition)}`}
			>
				<div className={styles.content}>
					<HeadingByIndex
						index={index}
						props={{
							className: styles.title,
						}}
					>
						{content.title}
					</HeadingByIndex>
					{content.description && (
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: content.description }}
						></div>
					)}
					<form onSubmit={handleSubmit(submitForm)} className={styles.inputs}>
						{content.inputs.map((input, index) => (
							<CustomInput
								mask={input.mask}
								error={errors[input.inputProps!.name!]}
								inputProps={{
									...input.inputProps,
									...register(input.inputProps?.name!, {
										required: {
											value: input.inputProps?.required!,
											message: 'Поле обязательно для заполнения',
										},
									}),
								}}
								label={input.label}
								key={index}
							/>
						))}
						<CustomButton.Button
							{...content.button}
							disabled={serverErrorCount >= MAX_ERRORS}
							type={'submit'}
						>
							{isSubmitSuccessful
								? 'Спасибо за заявку!'
								: content.button.children}
						</CustomButton.Button>

						{/* Если много ошибок */}
						{serverErrorCount >= MAX_ERRORS && (
							<p className={styles.serverError}>
								Слишком много ошибок, попробуйте позже или{' '}
								<Link href='#footer'>напишите нам</Link>
							</p>
						)}
					</form>
				</div>
			</Container>
		</div>
	);
};
