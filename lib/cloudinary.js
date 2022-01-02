export const cloudName = 'di6du2qqp';

export const placeHolder = 'toilet-umd/placeholder_dgplgj';

export function getThumbnailId(pics) {
    const arr = pics || []
    return arr.length ? 'toilet-umd/' + arr[0].publicId : placeHolder
}