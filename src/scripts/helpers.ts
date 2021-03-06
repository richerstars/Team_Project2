import axios from 'axios';
import { elementsOfDom } from './constants/constantsElements';
import { constants } from './constants/configConstants';
import { IGenres, ILanguages } from './interface/interfaces';
import selectorsCss from './constants/constants.selectorsCss';

export function renderLangsOptionsTemplate({
    iso_639_1,
    english_name,
}): HTMLElement {
    elementsOfDom.templateIdLangOptions.value = iso_639_1;
    elementsOfDom.templateIdLangOptions.textContent = `${english_name}`;
    return elementsOfDom.templateIdLangOptions.cloneNode(true);
}

export function renderGenresOptionsTemplate({
    id,
    name,
}): HTMLElement {
    elementsOfDom.templateIdLangOptions.value = id;
    elementsOfDom.templateIdLangOptions.textContent = name;
    return elementsOfDom.templateIdLangOptions.cloneNode(true);
}

export function loader(): void {
    elementsOfDom.classMask.classList.toggle(selectorsCss.classHidden);
}

export function clearImputs(): void {
    elementsOfDom.inputIdUsername.value = '';
    elementsOfDom.inputIdPassword.value = '';
    elementsOfDom.inputIdFirstName.value = '';
    elementsOfDom.inputIdLastName.value = '';
    elementsOfDom.classErrorHolder.classList.remove('error');
    elementsOfDom.inputIdUsername.parentElement.classList.remove('error');
    elementsOfDom.inputIdPassword.parentElement.classList.remove('error');
    elementsOfDom.inputIdFirstName.parentElement.classList.remove('error');
    elementsOfDom.inputIdLastName.parentElement.classList.remove('error');
    elementsOfDom.inputIdUsername.classList.remove('placeError');
    elementsOfDom.inputIdPassword.classList.remove('placeError');
    elementsOfDom.inputIdFirstName.classList.remove('placeError');
    elementsOfDom.inputIdLastName.classList.remove('placeError');
    elementsOfDom.divClassContainerSignUP.classList.toggle('hidden');
    elementsOfDom.divClassContainerSignIn.classList.toggle('hidden');
}

function setLanguages(languages: ILanguages[]): void {
    languages.forEach((elem: ILanguages) => {
        elementsOfDom.selectIdSelectLanguages.appendChild(renderLangsOptionsTemplate(elem));
    });
    elementsOfDom.selectIdSelectLanguages.value = '';
}

function setGenres(genres: IGenres[]): void {
    genres.forEach((elem: IGenres) => {
        (elementsOfDom.selectIdSelectGenres.appendChild(renderGenresOptionsTemplate(elem)));
    });
    elementsOfDom.selectIdSelectGenres.value = '';
}

export async function renderGenresLanguges(token: string): Promise<void> {
    try {
        const { data: { message: { languages, genres } } } = await axios
            .get(`${constants.SERVER_FILTERS}?${token}`);
        setLanguages(languages);
        setGenres(genres);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('getFilters: ', err);
    }
}
