import {
	HeaderContainer, 
	Logo
} from './header.style';

export default function Header(){
	return(
		<HeaderContainer>
			<Logo src="/imagens/logo.svg" alt="Adote um Pet" />
		</HeaderContainer>
	)
}