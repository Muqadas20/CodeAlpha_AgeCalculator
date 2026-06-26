document.getElementById("btn").addEventListener("click", function () {

    let dob = document.getElementById("dob").value;

    let result = document.getElementById("result");
    let zodiac = document.getElementById("zodiac");
    let nextBirthday = document.getElementById("nextBirthday");

    if (!dob) {
        result.innerHTML = "Please select DOB";
        zodiac.innerHTML = "";
        nextBirthday.innerHTML = "";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Invalid Date";
        return;
    }

    // AGE CALCULATION
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `${years} Years, ${months} Months, ${days} Days`;

    // ZODIAC
    let m = birthDate.getMonth() + 1;
    let d = birthDate.getDate();
    let sign = "";

    if ((m == 1 && d >= 20) || (m == 2 && d <= 18)) sign = "Aquarius";
    else if ((m == 2 && d >= 19) || (m == 3 && d <= 20)) sign = "Pisces";
    else if ((m == 3 && d >= 21) || (m == 4 && d <= 19)) sign = "Aries";
    else if ((m == 4 && d >= 20) || (m == 5 && d <= 20)) sign = "Taurus";
    else if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) sign = "Gemini";
    else if ((m == 6 && d >= 21) || (m == 7 && d <= 22)) sign = "Cancer";
    else if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) sign = "Leo";
    else if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) sign = "Virgo";
    else if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) sign = "Libra";
    else if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) sign = "Scorpio";
    else sign = "Sagittarius";

    zodiac.innerHTML = `Zodiac: ${sign}`;

    // UPCOMING BIRTHDAY
    let nextBirthdayDate = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (nextBirthdayDate < today) {
        nextBirthdayDate.setFullYear(today.getFullYear() + 1);
    }

    let diffTime = nextBirthdayDate - today;
    let daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    nextBirthday.innerHTML = `Next Birthday in ${daysLeft} days 🎂`;

});