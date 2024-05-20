export type LoginResponseType = {
    jwt: string;
    user: {
        id: number;
        email: string;
        provider: string;
        username: string;
    };
};