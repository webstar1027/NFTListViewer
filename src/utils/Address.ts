
export const addressFilter = (address: string) => {
    let prefix = address.substr(0, 4);
    let suffix = address.slice(-4);

    return `${prefix}....${suffix}`;
};