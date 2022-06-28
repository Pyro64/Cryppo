export default function getCookie(name) {
    var matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
        )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setCookie = (cName, cValue, expDays, path) => {
    const date = new Date(expDays);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
        cName + "=" + cValue + "; " + expires + "; path=" + path + ";";
};

export function deleteCookie(name, isBusiness) {
    if (isBusiness) {
        document.cookie = name + "=;expires=-1;path=/business";
    } else {
        document.cookie = name + "=;expires=-1;path=/";
    }
}
