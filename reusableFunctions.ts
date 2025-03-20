const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const formatDate = (date: Date): string | undefined => {
    if (date instanceof Date) {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${months[month]} ${day}, ${year}`
    }

    return undefined
}