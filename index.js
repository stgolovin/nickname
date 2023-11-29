export default class Validator {
  validateUsername(username) {
    // Проверка соответствия регулярному выражению
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(username)) {
      return 'Имя пользователя может содержать только латинские буквы, цифры, символы тире и подчёркивания.';
    }

    // Проверка наличия более трех цифр подряд
    const digitsRegex = /\d{4,}/;
    if (digitsRegex.test(username)) {
      return 'Имя пользователя не должно содержать более трех цифр подряд.';
    }

    // Проверка начала и конца имени на цифры, подчёркивания или тире
    const startsOrEndsRegex = /^[0-9_-].*|[0-9_-]$/;
    if (startsOrEndsRegex.test(username)) {
      return 'Имя пользователя не должно начинаться или заканчиваться цифрами, символами подчёркивания или тире.';
    }
    return true;
  }
}
