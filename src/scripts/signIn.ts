import '../styles/popUpSignIn.css';
import axios from 'axios';
import { constants } from './constants/configConstants';
import { elementsOfDom } from './constants/constantsElements';
// eslint-disable-next-line import/no-cycle
import { getMovies } from './logic';
import selectorsCss from './constants/constants.selectorsCss';

export default async function checkAuthorize(): Promise<void> {
    try {
        const { data: { message, token } } = await axios.post(constants.WOW_ME_UP_SING_IN, {
            login: elementsOfDom.inputIdUsernameSignIn.value,
            password: elementsOfDom.inputIdPasswordSignIn.value,
        });
        if (token) {
            localStorage.setItem('token', token);
            elementsOfDom.sectionClassPopUp.classList.add(selectorsCss.classHidden);
            elementsOfDom.buttonShowMoreBtn.classList.remove(selectorsCss.classHidden);
            getMovies(20);
            return;
        }
        elementsOfDom.smallIdErrorLogin.classList.add('error');
        elementsOfDom.smallIdErrorLogin.textContent = message;
        return;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
