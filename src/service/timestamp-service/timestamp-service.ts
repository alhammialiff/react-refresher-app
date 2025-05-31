
export const getCurrentTimestamp = (locale= 'en-US', timeZone = 'UTC') => {

    const now = new Date();

    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone,
        hour12: false
    }).format(now)

}
