

let birthYear = prompt("Введіть рік свого народження:");
let city = prompt("Введіть місто, де ви живете:");
let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

if (birthYear && city && favoriteSport) {
    let age = new Date().getFullYear() - birthYear;
    let message = `Ваш вік: ${age}.`;
    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        let country;
        switch (city) {
            case "Київ":
                country = "Україна";
                break;
            case "Вашингтон":
                country = "США";
                break;
            case "Лондон":
                country = "Великобританія";
                break;
        }
        message += `Ти живеш у Столиці ${country} .`;
    } else {
        message += `Ти живеш у місті ${city} .`;
    }
    switch (favoriteSport) {
        case "футбол":
            message += "Круто! Хочеш стати Кріштіану Роналду?";
            break;
        case "теніс":
            message += "Круто! Хочеш стати Роджером Федерером?";
            break;
        case "баскетбол":
            message += "Круто! Хочеш стати Майклом Джорданом?";
            break;
    }
    alert(message);
} else {
    let missingInfo = "";
    if (!birthYear) {
        missingInfo += "дату народження";
    }
    if (!city) {
        if (missingInfo) {
            missingInfo += " та місто";
        } else {
            missingInfo += "місто";
        }
    }
    if (!favoriteSport) {
        if (missingInfo) {
            missingInfo += " та улюблений вид спорту";
        } else {
            missingInfo += "улюблений вид спорту";
        }
    }
    alert(`Шкода, що Ви не захотіли ввести свій(ю) ${missingInfo}`);
}