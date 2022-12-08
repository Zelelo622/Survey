export function parseUrl() {
    let pathUrl = window.location.pathname.split('/');
    let name_questionnaire = pathUrl[1];
    return name_questionnaire
}