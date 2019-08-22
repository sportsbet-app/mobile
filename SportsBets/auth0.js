import Auth0 from 'react-native-auth0';

const AUTH0_DOMAIN = 'brellin.auth0.com';
const CLIENT_ID = 'ESHCP7e8Vxb5slqmXWuq2e2WSLsPcahZ';

const auth0 = new Auth0({
    domain: `${AUTH0_DOMAIN}`,
    clientId: `${CLIENT_ID}`
});

export {
    auth0,
    AUTH0_DOMAIN,
    CLIENT_ID
};