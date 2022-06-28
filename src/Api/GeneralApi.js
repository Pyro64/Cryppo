import axios from "axios";

export const InfoGet = async () => {
    const response = await axios.get("General/Info");
    return response;
};
