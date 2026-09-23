window.addEventListener('DOMContentLoaded', () => {
    const listHoursArray = document.querySelectorAll('.list-hours li');

    if (listHoursArray.length === 0) {
        return;
    }

    const today = new Date().getDay();

    if (listHoursArray[today]) {
        listHoursArray[today].classList.add('today');
    }
});

