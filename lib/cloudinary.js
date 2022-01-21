export const cloudName = 'di6du2qqp';
export const partialPath = 'toilet-umd/'

export const placeHolder = 'toilet-umd/placeholder_dgplgj';

export function getThumbnailId(pics) {
    const arr = pics || []
    return arr.length ? partialPath + arr[0].publicId : placeHolder
}

export function getId(photo) {
    return partialPath + photo
}