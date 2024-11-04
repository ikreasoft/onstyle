import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+34 123 456 789"
                            target="_blank"
                        >
                            <h3>+34 123 456 789</h3>
                            <p>
                                Horario de atención comercial
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:youremail@gmail.com"
                            target="_blank"
                        >
                            <h3>hi@onstyle.com</h3>
                            <p>
                                Escríbenos, en qué podemos ayudarte!
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Dirección</h3>
                        <p>Some street 123, 12345 Talavera, España</p>
                        <p>Office: Mystr street 321, 54321 Talavera, España</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
