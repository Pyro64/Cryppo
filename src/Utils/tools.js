import getCookie, { setCookie } from "./cookies";

export const randomColor = () => {
    return "#" + Math.floor(Math.random(0.9) * 16777215).toString(16);
};

export const refreshAccesssToken = async () => {
    const refreshToken = getCookie("business_refreshToken");
    const responseRefreshToken = await AccountApi.RefreshTokenPost(
        refreshToken
    );
    setCookie(
        "business_token",
        responseRefreshToken.data.accessToken,
        responseRefreshToken.data.accessTokenExpire,
        "/business"
    );
    setCookie(
        "business_refreshToken",
        loginResponse.data.refreshToken,
        loginResponse.data.refreshTokenExpire,
        "/business"
    );
};
