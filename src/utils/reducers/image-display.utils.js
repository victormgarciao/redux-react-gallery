export function getNextImagePosition(lastPosition, position) {
    const firstPosition = 0;
    const nextImagePosition = position + 1;
    const isNextImageOutOfBounds = nextImagePosition > lastPosition;

    return isNextImageOutOfBounds
        ? firstPosition
        : nextImagePosition;
}


export function getPreviousImageId(lastPosition, position) {
    const firstPosition = 0;
    const previousImagePosition = position - 1;
    const isPreviousImageOutOfBounds = previousImagePosition < firstPosition;

    return isPreviousImageOutOfBounds
        ? lastPosition
        : previousImagePosition;
}
