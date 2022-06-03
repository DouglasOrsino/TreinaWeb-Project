import { MainTitle, Subtitle } from "./title.style";

interface TitleProps {
	title: string;
	Subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps) {

	return (
		<>
			<MainTitle>{ props.title }</MainTitle>
			<Subtitle>{ props.subtitle }</Subtitle>
		</>
	)
}